from .serializers import UserRegisterSerializer
from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserRegisterSerializerTestCase(TestCase):
    def test_user_creation(self):
        user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'password',
            'password2': 'password',
        }

        serializer = UserRegisterSerializer(data=user_data)
        self.assertTrue(serializer.is_valid())

        user = serializer.save()
        self.assertIsInstance(user, User)
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')

class CreateAuthTokenTestCase(TestCase):
    def test_auth_token_creation(self):
        user = User.objects.create_user(username='testuser', email='test@example.com', password='password')
        self.assertTrue(Token.objects.filter(user=user).exists())
