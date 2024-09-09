from rest_framework import serializers

from apps.categories.models import CategoryModel
from apps.goods.serializers import GoodsSerializer


class CategorySerializer(serializers.ModelSerializer):
    goods_categories = GoodsSerializer(many=True, read_only=True)

    class Meta:
        model = CategoryModel
        fields = ('id', 'name', 'goods_categories')


class CategoryWithOutGoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ('id', 'name')
