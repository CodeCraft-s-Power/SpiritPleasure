from rest_framework import viewsets, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Place, Address, History
from .serializers import PlaceSerializer, AddressSerializer, HistorySerializer


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class HistoryListView(APIView):
    def get(self, request, *args, **kwargs):
        queryset = History.objects.all()
        serializer = HistorySerializer(queryset, many=True)
        return Response(serializer.data)