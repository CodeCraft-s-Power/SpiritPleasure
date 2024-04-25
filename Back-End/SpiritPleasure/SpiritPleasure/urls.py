from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from place.views import PlaceViewSet, HistoryListView


router = DefaultRouter()
#router.register(r'history', HistoryListView)
router.register(r'places', PlaceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('', include('django.contrib.auth.urls')),
    path('', include(router.urls)),
    path('history/', HistoryListView.as_view(), name='history-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
