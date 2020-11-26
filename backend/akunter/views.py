from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AkunterSerializer
from .models import Akunter

class AkunterView(viewsets.ModelViewSet):
  serializer_class = AkunterSerializer
  queryset = Akunter.objects.all()
