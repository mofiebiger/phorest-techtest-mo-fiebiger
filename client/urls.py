from django.urls import path,re_path
from client import views

app_name = 'client'
urlpatterns = [
    #path('weather', views.WeatherInfoView.as_view(),name = 'weather'),# get_whether info from the darksky
    path('info', views.ClientInfoView.as_view(), name = 'info'),
]
