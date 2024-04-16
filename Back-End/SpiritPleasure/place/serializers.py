from rest_framework import serializers
from .models import Place, Address, History
from .models import RelaxationType, TripGoal
from django.contrib.auth.models import User


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'street', 'city', 'region', 'postalcode']


class PlaceSerializer(serializers.ModelSerializer):
    relaxation_type = serializers.ChoiceField(choices=RelaxationType.choices)
    trip_goal = serializers.ChoiceField(choices=TripGoal.choices)

    class Meta:
        model = Place
        fields = ['id', 'name', 'description', 'image', 'location', 'relaxation_type', 'trip_goal']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Place.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.location = validated_data.get('location', instance.location)
        instance.relaxation_type = validated_data.get('relaxation_type', instance.relaxation_type)
        instance.trip_goal = validated_data.get('trip_goal', instance.trip_goal)
        instance.save()
        return instance

class HistorySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    place = serializers.PrimaryKeyRelatedField(queryset=Place.objects.all())

    class Meta:
        model = History
        fields = ['id', 'user', 'place', 'is_favorite']
