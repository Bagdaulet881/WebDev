from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('products/', views.get_all_products, name='all products'),
    path('products/<int:id>', views.get_one_product, name='one products'),
    path('categories/', views.get_all_categories, name='all categories'),
    path('categories/<int:id>', views.get_one_category, name='one category' ),
    path('categories/<int:id>/products', views.get_products_by_category, name='products by category')
]
