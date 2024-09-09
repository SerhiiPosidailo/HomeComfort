from django.urls import path

from apps.contacts.views import ContactView, ContactRetriveUpdateDestroyView

urlpatterns = [
    path('', ContactView.as_view(), name='contact'),
    path('/<int:pk>', ContactRetriveUpdateDestroyView.as_view(), name='Contact_Retrive_Update_Destroy')
]