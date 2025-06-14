from  django.urls import path
from .views import *

urlpatterns = [
    path('ipo/', IPOListCreateView.as_view(), name='ipo-list'),
    path('ipo/<int:pk>/', IPODetailView.as_view(), name='ipo-detail'),
]