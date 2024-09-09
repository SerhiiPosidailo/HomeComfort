from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny

from apps.goods.filters import GoodsFilter
from apps.goods.models import GoodsModel
from apps.goods.serializers import GoodsSerializer



class GoodsView(ListAPIView):
    serializer_class = GoodsSerializer
    queryset = GoodsModel.objects.all()
    permission_classes = (AllowAny,)
    filterset_class = GoodsFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        filterset = self.filterset_class(self.request.query_params, queryset=queryset)
        return filterset.qs
    

class GoodsRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = GoodsModel.objects.all()
    serializer_class = GoodsSerializer
    permission_classes = (AllowAny, ) 