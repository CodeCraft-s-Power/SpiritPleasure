from rest_framework import serializers
from .models import Place, Address, History, Image
from .models import RelaxationType, TripGoal
from django.contrib.auth.models import User


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'street', 'city', 'region', 'postalcode']


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']


class PlaceSerializer(serializers.ModelSerializer):
    relaxation_type = serializers.ChoiceField(choices=RelaxationType.choices)
    trip_goal = serializers.ChoiceField(choices=TripGoal.choices)
    images = ImageSerializer(many=True, required=False)

    class Meta:
        model = Place
        fields = ['id', 'name', 'description', 'images', 'location', 'relaxation_type', 'trip_goal']
        read_only_fields = ['id']

    def create(self, validated_data):
        images_data = self.context.get('request').FILES.getlist('images')
        place = Place.objects.create(**validated_data)

        if images_data:
            for image_data in images_data:
                Image.objects.create(place=place, image=image_data)
        return place

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.location = validated_data.get('location', instance.location)
        instance.relaxation_type = validated_data.get('relaxation_type', instance.relaxation_type)
        instance.trip_goal = validated_data.get('trip_goal', instance.trip_goal)
        instance.save()

        images_data = self.context.get('request').FILES.getlist('images')
        if images_data:
            instance.images.all().delete()
            for image_data in images_data:
                Image.objects.create(place=instance, image=image_data)

        return instance


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ['id', 'token', 'place', 'is_favorite']
