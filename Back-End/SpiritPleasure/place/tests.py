from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Address, Place, History
from django.conf import settings
import os

class IntegrationTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create(username='test_user', password='test_password')
        self.client.force_authenticate(user=self.user)

    def test_create_and_retrieve_place(self):
        image_paths = [
            os.path.join(settings.MEDIA_ROOT, 'place_images', 'example_image1.jpg'),
            os.path.join(settings.MEDIA_ROOT, 'place_images', 'example_image2.jpg')
        ]

        image_data = [open(image_path, 'rb') for image_path in image_paths]

        self.client.parser_classes = (MultiPartParser, FormParser)

        create_response = self.client.post('/places/', {
            'name': 'Test Place',
            'description': 'Test Description',
            'relaxation_type': 'Сімейний',
            'trip_goal': 'Розслабитися',
            'uploaded_images': image_data
        })
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        place_id = create_response.data['id']

        retrieve_response = self.client.get(f'/places/{place_id}/')
        self.assertEqual(retrieve_response.status_code, status.HTTP_200_OK)
        self.assertEqual(retrieve_response.data['name'], 'Test Place')



class PlaceTestCase(TestCase):
    def test_place_after_address_deletion(self):
        address = Address.objects.create(
            street="Test Street",
            city="Test City",
            region="Test Region",
            postalcode="12345"
        )
        place = Place.objects.create(
            name="Test Place",
            description="Test Description",
            location=address
        )

        self.assertIsNotNone(place)

        address.delete()

        place.refresh_from_db()

        self.assertIsNone(place.location)


class PlaceHistoryTestCase(TestCase):
    def test_place_history_creation(self):
        user = User.objects.create_user(username='testuser', password='12345')

        address = Address.objects.create(
            street="Test Street",
            city="Test City",
            region="Test Region",
            postalcode="12345"
        )

        place = Place.objects.create(
            name="Test Place",
            description="Test Description",
            location=address
        )

        history = History.create_with_user(user, place)

        self.assertEqual(history.user, user)
        self.assertEqual(history.place, place)