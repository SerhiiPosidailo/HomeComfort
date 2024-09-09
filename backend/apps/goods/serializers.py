from rest_framework import serializers

from apps.goods.models import GoodsModel


class GoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodsModel
        fields = ('id', 'photo', 'name', 'price', 'description', 'created_at', 'updated_at')


class GoodsPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodsModel
        fields = ('photo',)
        extra_kwargs = {
            'photo': {
                'required': True
            }
        }
