from django.db import models


class ProductCareModel(models.Model):
    class Meta:
        db_table = 'product_care'

    photo = models.ImageField()
    description = models.CharField(max_length=255)

