from django.contrib.auth.models import User
from django.test import TestCase
from .models import Address, Place, History


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

        history = History.objects.create(
            user=user,
            place=place
        )

        self.assertEqual(history.user, user)
        self.assertEqual(history.place, place)
