from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlaceViewSet, HistoryListView

# router = DefaultRouter()
# router.register(r'places', PlaceViewSet)
# router.register(r'history', HistoryListView)
#
# urlpatterns = [
#     path('', include(router.urls)),
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)