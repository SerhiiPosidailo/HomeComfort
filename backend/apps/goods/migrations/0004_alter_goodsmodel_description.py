# Generated by Django 5.0.4 on 2024-08-07 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0003_alter_goodsmodel_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goodsmodel',
            name='description',
            field=models.CharField(max_length=3000),
        ),
    ]
