from django.contrib import admin
from .models import Akunter

class AkunterAdmin(admin.ModelAdmin):
  list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(Akunter, AkunterAdmin)
