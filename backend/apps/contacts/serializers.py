from rest_framework import serializers

from apps.contacts.models import ContactModel


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactModel
        fields = ('id', 'link', 'name')