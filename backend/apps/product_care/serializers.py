from rest_framework import serializers

from apps.product_care.models import ProductCareModel


class ProductCareSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCareModel
        fields = ('id', 'photo', 'description')
