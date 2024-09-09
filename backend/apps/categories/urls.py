from django.urls import path

from apps.categories.views import CategoryAddGoodsView, CategoryListView, GoodsAddPhotoView, GoodsListView, GoodsByCategoryListView, CatrgoryRetrieveUpdateDestroyView

urlpatterns = [
    path('', CategoryListView.as_view(), name='all_list_and_add_category'),
    path('/<int:pk>/delete', CatrgoryRetrieveUpdateDestroyView.as_view(), name='Catrgory_Retrieve_Update_Destroy'),
    path('/<int:pk>', CategoryAddGoodsView.as_view(), name='add_goods_to_category'),
    path('/goods', GoodsListView.as_view(), name='category_list_with_goods'),
    path('/<int:pk>/photo', GoodsAddPhotoView.as_view(), name='goods_photo'),
    path('/<int:pk>/goods', GoodsByCategoryListView.as_view(), name='goods_by_category')
]
