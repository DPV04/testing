from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name=models.CharField(max_length=200,null=True)
    email=models.EmailField(unique=True,null=True)
    bio=models.TextField(null=True)
    year=models.CharField(max_length=200,default="none",choices=[
      ('First','First'),
      ('Second','Second'),
      ('Third','Third'),
      ('Fourth','Fourth'),
     
   ])
    branch=models.CharField(max_length=200,default="none",choices=[
      ('CSE','CSE'),
      ('ISE','ISE'),
      ('AI-ML','AI-ML'),
      ('ECE','ECE'),
      ('EEE','EEE'),
      ('MECHE','MECH'),
    
   ])
    interests=models.CharField(max_length=50,null=True,default="none")
 
    avatar = models.FileField(null=True,default="none")




class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE , related_name="Employee")
    department = models.CharField(max_length=100)


