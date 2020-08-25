from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.home,name = "home"),
    path('send',views.api,name = "send"),
    path('about',views.about_page,name = "about"),
    path('upcoming',views.upcoming_page,name = "upcoming")
]