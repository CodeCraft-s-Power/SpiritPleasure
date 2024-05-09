from geopy.geocoders import Nominatim
from django.db import models
from django.contrib.auth.models import User
from multiselectfield import MultiSelectField
from rest_framework.authtoken.models import Token

class RelaxationType(models.TextChoices):
    FAMILY = 'Сімейний'
    YOUTH = 'Молодіжний'
    MOUNTAIN = 'Гірський'
    EXTREME = 'Екстримальний'
    SPA = 'SPA'
    CALMING = 'Заспокійливий'
    PASSIVE = 'Пасивний'
    ACTIVE = 'Активний'
    WITH_WATER = 'З водоймою'
    NATURE = 'На природі'
    COGNITIVE = 'Пізнавальний'
    WITH_COMPANY = 'З компанією'
    MEDICAL = 'Лікувально-оздоровчий'

class TripGoal(models.TextChoices):
    RELAXATION = 'Розслабитися'
    ENJOY_NATURE = 'Насолодидись природою'
    MAKE_NICE_PHOTOS = 'Зробити гарні фото'
    SWIM = 'Поплавати'
    VISIT_MUSEUMS_CASTLES = 'Відвідати музеї/замки'
    EAT_TASTY = 'Смачно поїсти'
    HAVE_FUN_IN_CLUB = 'Розважитися в клубі'
    LEARN_SOMETHING_NEW = 'Дізнатись щось нове'
    SKIING = 'Покататись на лижах'
    WALK_CITY = 'Погуляти містом'

class Image(models.Model):
    image = models.ImageField(upload_to='place_images/')
    place = models.ForeignKey('Place', related_name='images', blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.image.url if self.image else ''

class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    postalcode = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.street}, {self.city}, {self.region}, {self.postalcode}"



class Place(models.Model):
    RELAXATIONTYPE = (
        ('FAMILY', 'Сімейний'),
        ('YOUTH', 'Молодіжний'),
        ('MOUNTAIN', 'Гірський'),
        ('EXTREME', 'Екстримальний'),
        ('SPA', 'SPA'),
        ('CALMING', 'Заспокійливий'),
        ('PASSIVE', 'Пасивний'),
        ('ACTIVE', 'Активний'),
        ('WITH_WATER', 'З водоймою'),
        ('NATURE', 'На природі'),
        ('COGNITIVE', 'Пізнавальний'),
        ('WITH_COMPANY', 'З компанією'),
        ('MEDICAL', 'Лікувально-оздоровчий')
    )
    TRIPGOAL = (
        ('RELAXATION', 'Розслабитися'),
        ('ENJOY_NATURE', 'Насолодидись природою'),
        ('MAKE_NICE_PHOTOS', 'Зробити гарні фото'),
        ('SWIM', 'Поплавати'),
        ('VISIT_MUSEUMS_CASTLES', 'Відвідати музеї/замки'),
        ('EAT_TASTY', 'Смачно поїсти'),
        ('HAVE_FUN_IN_CLUB', 'Розважитися в клубі'),
        ('LEARN_SOMETHING_NEW', 'Дізнатись щось нове'),
        ('SKIING', 'Покататись на лижах'),
        ('WALK_CITY', 'Погуляти містом')
    )
    name = models.CharField(max_length=100)
    description = models.TextField()
    slug = models.SlugField(default="", blank=True)
    latitude = models.FloatField(blank=True, null=True, default=None)
    longitude = models.FloatField(blank=True, null=True, default=None)
    relaxation_type = MultiSelectField(max_length=255, max_choices=5, choices=RELAXATIONTYPE, null=True, blank=True)
    trip_goal = MultiSelectField(max_length=255, max_choices=5, choices=TRIPGOAL, null=True, blank=True)
    with_food = models.BooleanField(default=False)
    with_sleep = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_address(self):
        geolocator = Nominatim(user_agent="place_address")
        location = geolocator.reverse((self.latitude, self.longitude), language='uk')
        if location:
            return Address.objects.create(
                street=location.raw.get('address', {}).get('road', ''),
                city=location.raw.get('address', {}).get('city', ''),
                region=location.raw.get('address', {}).get('state', ''),
                postalcode=location.raw.get('address', {}).get('postcode', '')
            )
        else:
            return Address.objects.create(street='', city='', region='', postalcode='')


class History(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return f"History for User {self.user.username}: {self.place.name}, Favorite: {self.is_favorite}"

    @classmethod
    def create_with_user(cls, user, place, is_favorite=False):
        history = cls.objects.create(user=user, place=place, is_favorite=is_favorite)
        return history