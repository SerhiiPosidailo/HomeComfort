from django.urls import path
from .views import CartItemListView, CartItemDetailView

urlpatterns = [
    # Інші маршрути
    path('', CartItemListView.as_view(), name='cart_item_list_create'),
    path('/<int:pk>', CartItemDetailView.as_view(), name='cart_item_detail'),
]