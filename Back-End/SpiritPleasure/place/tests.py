from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Address, Place, History
from django.conf import settings
import os
from django.db import connection


class PlaceIntegrationTest(APITestCase):

    def setUp(self):
        self.image_paths = [
            os.path.join(settings.MEDIA_ROOT, 'place_images', 'example_image1.jpg'),
            os.path.join(settings.MEDIA_ROOT, 'place_images', 'example_image2.jpg')
        ]
        self.images_data = [open(image_path, 'rb') for image_path in self.image_paths]
        self.client.parser_classes = (MultiPartParser, FormParser)

    def tearDown(self):
        for image_data in self.images_data:
            image_data.close()

    def test_create_and_retrieve_place(self):
        create_response = self.client.post('/places/', {
            'name': 'Test Place',
            'description': 'Test Description',
            'uploaded_images': self.images_data
        })
        print(create_response.data)
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        place_id = create_response.data['id']

        retrieve_response = self.client.get(f'/places/{place_id}/')
        self.assertEqual(retrieve_response.status_code, status.HTTP_200_OK)
        self.assertEqual(retrieve_response.data['name'], 'Test Place')


class AddressTestCase(TestCase):
    def test_address_deletion(self):
        address = Address.objects.create(
            street="Test Street",
            city="Test City",
            region="Test Region",
            postalcode="12345"
        )

        self.assertIsNotNone(address)

        address.delete()

        self.assertFalse(Address.objects.filter(pk=address.pk).exists())


class PlaceHistoryTestCase(TestCase):
    def test_place_history_creation(self):
        user = User.objects.create_user(username='testuser', password='12345')

        place = Place.objects.create(
            name="Test Place",
            description="Test Description",
        )

        history = History.objects.create(user_id=user.id, place=place)

        self.assertEqual(history.user_id, user.id)
        self.assertEqual(history.place, place)
