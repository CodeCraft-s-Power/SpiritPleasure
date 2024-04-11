from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status


class AuthenticationTests(APITestCase):
    def test_login(self):
        user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        User.objects.create_user(**user_data)

        response = self.client.post('/login/', data=user_data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('token' in response.data)

    def test_register(self):
        new_user_data = {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpassword'
        }
        response = self.client.post('/register/', data=new_user_data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue('success' in response.data)

    def test_logout(self):
        user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        user = User.objects.create_user(**user_data)

        self.client.force_authenticate(user=user)

        response = self.client.get('/logout/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('success' in response.data)
