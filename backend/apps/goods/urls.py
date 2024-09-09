from django.urls import path

from apps.goods.views import GoodsRetrieveUpdateDestroyView, GoodsView

urlpatterns = [
    path('', GoodsView.as_view(), name='only_list_goods'),
    path('/<int:pk>', GoodsRetrieveUpdateDestroyView.as_view(), name='Goods_Retrive_Update_Destroy') 
]