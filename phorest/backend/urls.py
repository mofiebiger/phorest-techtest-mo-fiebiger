from django.contrib import admin
from django.urls import path, include,re_path
from django.conf import settings
from django.conf.urls.static import static
from client.views import IndexView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('client/', include('client.urls')),
    path('',IndexView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
