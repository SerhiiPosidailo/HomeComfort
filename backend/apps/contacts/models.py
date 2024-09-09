from django.db import models


class ContactModel(models.Model):
    class Meta:
        db_table = 'contacts'

    name = models.CharField(max_length=100)
    link = models.CharField(max_length=255)
