from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from apps.product_care.models import ProductCareModel
from apps.product_care.serializers import ProductCareSerializer


class ProductListView(ListAPIView):
    queryset = ProductCareModel.objects.all()
    serializer_class = ProductCareSerializer
    permission_classes = (AllowAny,)
