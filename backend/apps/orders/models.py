from django.conf import settings
from django.db import models

from apps.goods.models import GoodsModel

class CartItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(GoodsModel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        db_table = 'cart_items'
        ordering = ['id']

    def __str__(self):
        return f"{self.product.name} (x{self.quantity})"
