from django.shortcuts import render
from rest_framework import generics, filters
from .models import *
from .serializer import *

class IPOListCreateView(generics.ListCreateAPIView):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['company_name', 'issue_type']
    ordering_fields = ['open_date', 'listing_date']

class IPODetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
