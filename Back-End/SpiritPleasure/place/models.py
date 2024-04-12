from django.db import models


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
    image = models.ImageField(upload_to='place_images/', blank=True, null=True)
    location = models.ForeignKey(Address) #, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

