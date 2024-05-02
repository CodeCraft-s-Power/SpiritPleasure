from rest_framework.views import APIView
from .serializers import TokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth import logout
from django.contrib.auth.models import User

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            # Check if token already exists
            token, _ = Token.objects.get_or_create(user=user)

            # Serialize token
            serializer = TokenSerializer(data={'token': token.key})
            serializer.is_valid()

            # Return token data along with user id
            return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class RegisterView(viewsets.ViewSet):
    def create(self, request, *args, **kwargs):
        username = request.data['username']
        email = request.data.get('email', '')  # Email is optional
        password = request.data['password']

        try:
            user = User.objects.create_user(username, email, password)
            user.save()
            return Response({'success': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'Registration failed'}, status=status.HTTP_400_BAD_REQUEST)
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        email = request.data.get('email', '')  # Email is optional
        password = request.data['password']

        try:
            user = User.objects.create_user(username, email, password)
            user.save()
            return Response({'success': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'Registration failed'}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def get(self, request, *args, **kwargs):
        logout(request)
        return Response({'success': 'Logged out successfully'}, status=status.HTTP_200_OK)