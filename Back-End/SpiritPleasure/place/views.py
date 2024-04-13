from rest_framework import viewsets
from .models import Place
from .serializers import PlaceSerializer
from .models import Address
from .serializers import AddressSerializer


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer