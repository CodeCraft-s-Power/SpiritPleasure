from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.authtoken.models import Token


User = get_user_model()


class UserPublicSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True)
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'id')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField()