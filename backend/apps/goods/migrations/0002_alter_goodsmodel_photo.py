# Generated by Django 5.0.4 on 2024-05-27 09:14

from django.db import migrations, models

import core.services.file_service


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goodsmodel',
            name='photo',
            field=models.ImageField(blank=True, upload_to=core.services.file_service.FileService.upload_goods_photo),
        ),
    ]
