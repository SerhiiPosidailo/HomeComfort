from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAdminUser

from apps.contacts.models import ContactModel
from apps.contacts.serializers import ContactSerializer


class ContactView(ListCreateAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (AllowAny,)



class ContactRetriveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (IsAdminUser, )

