from django.core import validators as V
from django.db import models

from core.models import BaseModel
from core.services.file_service import FileService

from apps.categories.models import CategoryModel


class GoodsModel(BaseModel):
    class Meta:
        db_table = 'goods'
        ordering = ['id']

    name = models.CharField(max_length=50)
    price = models.IntegerField(validators=[V.MinValueValidator(0), V.MaxValueValidator(50_000)])
    photo = models.ImageField(blank=True, upload_to=FileService.upload_goods_photo)
    description = models.CharField(max_length=3000)
    categories = models.ForeignKey(CategoryModel, on_delete=models.CASCADE, related_name='goods_categories')
