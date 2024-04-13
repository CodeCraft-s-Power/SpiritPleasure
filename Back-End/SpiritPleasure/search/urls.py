from django.urls import path, include
from .views import PlaceListView

urlpatterns = [
    path('search/', PlaceListView.as_view(), name='filter', ),
]