from rest_framework import serializers
from .models import Akunter

class AkunterSerializer(serializers.ModelSerializer):
  class Meta:
    model = Akunter
    fields = ('id', 'title', 'description', 'completed')
