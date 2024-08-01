from django.shortcuts import render
from .models import *
# Create your views here.

def index (request):


    name =  User.objects.get(name='swswsw')
    you = Employee.objects.filter(user=name)
    
    return render (request,'inx.html',{'you':you})
