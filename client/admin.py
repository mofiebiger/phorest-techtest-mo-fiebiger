from django.contrib import admin
from .models import Client

class ClientAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

    # Registering the models here.
    admin.site.register(Client)
