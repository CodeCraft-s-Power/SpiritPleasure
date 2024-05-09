from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Address, Place, History
from django.conf import settings
import os
from django.db import connection

def drop_table(table_name):
    with connection.schema_editor() as schema_editor:
        schema_editor.execute(f"DROP TABLE IF EXISTS {table_name};")

class PlaceIntegrationTest(APITestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        drop_table('place_image_place')

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        # Optionally, you can recreate the table after all tests have finished
        # Recreate the table here if needed

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
            'relaxation_type': ['FAMILY'],
            'trip_goal': ['RELAXATION'],
            'uploaded_images': self.images_data
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
