
from django.contrib import admin
from django.urls import path
from .views import home, test

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', home, name='home'),

    path('test/', test, name='test'),

    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
