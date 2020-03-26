from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0.0)
    description = models.TextField()
    count = models.IntegerField(default=0)
    category_id = models.IntegerField(default=0)

class Category(models.Model):
    name = models.CharField(max_length=200)
