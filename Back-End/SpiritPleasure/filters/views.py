from rest_framework import generics
from rest_framework import filters
from place.serializers import PlaceSerializer
from place.models import Place
from django.http import JsonResponse

class PlaceList(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

    def get_queryset(self):
        place_name = self.request.query_params.get('name')
        if place_name:
            return self.queryset.filter(name=place_name)
        else:
            return Place.objects.none()