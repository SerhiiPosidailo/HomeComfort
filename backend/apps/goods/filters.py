from django_filters import rest_framework as filters
from .models import GoodsModel

class GoodsFilter(filters.FilterSet):
    query = filters.CharFilter(method='filter_by_query')
    price_gte = filters.NumberFilter(field_name='price', lookup_expr='gte')
    order = filters.OrderingFilter(
        fields=(
            'price',
        )
    )

    class Meta:
        model = GoodsModel
        fields = []

    def filter_by_query(self, queryset, name, value):
        try:
            price = float(value)
            return queryset.filter(price__gte=price)
        except ValueError:
            return queryset.filter(name__icontains=value)