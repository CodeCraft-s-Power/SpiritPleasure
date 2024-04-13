from rest_framework import serializers
from .models import Place
from .models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'street', 'city', 'region', 'postalcode']


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ['id', 'name', 'description', 'image', 'location']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Place.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.location = validated_data.get('location', instance.location)
        instance.save()
        return instance