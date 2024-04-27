from django.db import models
from django.contrib.auth.models import User
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
    image = models.ImageField(upload_to='place_images/', blank=True, null=True)
    place = models.ManyToManyField('Place', related_name='images')

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
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ManyToManyField('Image', related_name='places')
    location = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True, default=None)
    relaxation_type = models.CharField(max_length=30, choices=RelaxationType.choices, null=True, blank=True)
    trip_goal = models.CharField(max_length=50, choices=TripGoal.choices, null=True, blank=True)

    def __str__(self):
        return self.name


class History(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return f"History for {self.user.username}: {self.place.name}, Favorite: {self.is_favorite}"