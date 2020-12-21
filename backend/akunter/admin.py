from django.contrib import admin
from .models import Akunter

class AkunterAdmin(admin.ModelAdmin):
    list_display = ('item', 'quantity', 'time')

# Register models
admin.site.register(Akunter, AkunterAdmin)
