from django.urls import path

from apps.product_care.views import ProductListView

urlpatterns = [
    path('', ProductListView.as_view(), name='product_care_list'),
]
