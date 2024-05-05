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
    images = ImageSerializer(many=True, required=False, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.FileField(max_length=200000, allow_empty_file=False, use_url=False, ),
        write_only=True
    )
    location = AddressSerializer(required=False)

    class Meta:
        model = Place
        fields = ['id', 'name', 'description', 'images', 'location', 'relaxation_type', 'trip_goal',
                  'with_food', 'with_sleep', 'uploaded_images']
        read_only_fields = ['id']

    def create(self, validated_data):
        uploaded_data = validated_data.pop('uploaded_images')
        images_data = self.context.get('request').FILES.getlist('images')
        new_place = Place.objects.create(**validated_data)
        place = Place.objects.create(**validated_data)

        for uploaded_item in uploaded_data:
            new_place_image = Image.objects.create(place = new_place, image=uploaded_item)
        return new_place

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.location = validated_data.get('location', instance.location)
        instance.relaxation_type = validated_data.get('relaxation_type', instance.relaxation_type)
        instance.trip_goal = validated_data.get('trip_goal', instance.trip_goal)
        instance.with_food = validated_data.get('with_food', instance.with_food)
        instance.with_sleep = validated_data.get('with_sleep', instance.with_sleep)
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
        fields = ['id', 'user', 'place', 'is_favorite']
