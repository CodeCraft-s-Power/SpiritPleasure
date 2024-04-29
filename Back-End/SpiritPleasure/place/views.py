from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Place, Address, History, Image
from .serializers import PlaceSerializer, AddressSerializer, HistorySerializer, ImageSerializer


class PlaceCreateAPIView(generics.CreateAPIView):
    serializer_class = PlaceSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.request.method == 'GET':
            context['images_as_base64'] = False
        else:
            context['images_as_base64'] = True
        return context


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
