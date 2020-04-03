from django.urls import path,include

from . import views

urlpatterns = [
    path('', views.company_list),

    path('api/companies/', views.company_list),
    path('api/companies/<int:company_id>/', views.company_detail),
    path('api/companies/<int:company_id>/vacancies/', views.vacancies_by_companyId),

    path('api/vacancies', views.vacancy_list),
    path('api/vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('api/vacancies/top_ten/', views.top_ten_vacancies)
]