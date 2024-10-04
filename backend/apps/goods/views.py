from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAdminUser

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
<<<<<<< HEAD
    permission_classes = (AllowAny, ) 
=======
    permission_classes = (AllowAny, ) 
>>>>>>> b01134afaff2b2e99e644b52985fca630c91bb95
