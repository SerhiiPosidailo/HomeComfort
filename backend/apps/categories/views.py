from rest_framework import status
from rest_framework import generics
from rest_framework.generics import GenericAPIView, ListAPIView, ListCreateAPIView, UpdateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response

from apps.categories.models import CategoryModel
from apps.categories.serializers import CategorySerializer, CategoryWithOutGoodsSerializer
from apps.goods.models import GoodsModel
from apps.goods.serializers import GoodsPhotoSerializer, GoodsSerializer


class GoodsListView(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)


class CategoryListView(ListCreateAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategoryWithOutGoodsSerializer
    permission_classes = (AllowAny,)


class CatrgoryRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategoryWithOutGoodsSerializer
    permission_classes = (IsAdminUser,)


class CategoryAddGoodsView(GenericAPIView):
    queryset = CategoryModel.objects.all()

    def post(self, *args, **kwargs):
        category = self.get_object()
        data = self.request.data
        serializer = GoodsSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save(categories=category)
        ap_serializer = CategorySerializer(category)
        return Response(ap_serializer.data, status=status.HTTP_201_CREATED)
    
    


class GoodsPhotoListView(ListAPIView):
    queryset = GoodsModel.objects.all()
    serializer_class = GoodsPhotoSerializer
    permission_classes = (AllowAny,)


class GoodsAddPhotoView(UpdateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = GoodsPhotoSerializer
    queryset = GoodsModel.objects.all()
    http_method_names = ('put',)

    def perform_update(self, serializer):
        goods = self.get_object()
        goods.photo.delete()
        super().perform_update(serializer)

class GoodsByCategoryListView(generics.ListAPIView):
    serializer_class = GoodsSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        category_id = self.kwargs['pk']
        return GoodsModel.objects.filter(categories=category_id)
