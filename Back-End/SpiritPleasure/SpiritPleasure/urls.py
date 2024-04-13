from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from place.views import PlaceViewSet

router = DefaultRouter()
router.register(r'places', PlaceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('', include(router.urls)),
    path('', include('filters.urls')),
    path('', include('search.urls')),
]
