from django.shortcuts import render
from django.core import serializers
# Create your views here.
from django.http import HttpResponse
from .models import Product,Category

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_all_products(request):
    products = Product.objects.all()
    json_list = serializers.serialize('json', products)
    return HttpResponse(json_list, content_type='application/json')

def get_one_product(request, id):
    product = Product.objects.filter(pk=id)
    json_product = serializers.serialize('json',product)
    return HttpResponse(json_product, content_type='application/json')

def get_all_categories(request):
    categories = Category.objects.all()
    json_categ = serializers.serialize('json',categories)
    return HttpResponse(json_categs, content_type='application/json')

def get_one_category(request, id):
    category = Category.objects.filter(pk=id)
    json_category = serializers.serialize('json', category)
    return HttpResponse(json_category, content_type='application/json')

def get_products_by_category(request,id):
    if Category.objects.filter(pk=id).exists():
        products_by_category = Product.objects.filter(category_id=id)
        json_pbc = serializers.serialize('json', products_by_category)
        return HttpResponse(json_pbc, content_type='application/json')
    else:
        return HttpResponse('None')
