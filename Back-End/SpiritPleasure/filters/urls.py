from django.urls import path, include
from .views import PlaceList

urlpatterns = [
    path('filters/', PlaceList.as_view(), name='filter', ),
]