import re
from rest_framework import generics, filters
from place.models import Place
from place.serializers import PlaceSerializer

class NameSearchFilter(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        name = request.query_params.get('name')
        if name:
            regex = re.compile(rf'{re.escape(name)}', re.IGNORECASE)
            return queryset.filter(name__iregex=regex)
        return queryset

class PlaceListView(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [NameSearchFilter]