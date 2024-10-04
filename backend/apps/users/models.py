from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core import validators as V
from django.db import models

from core.enums.regex_enum import Regex
from core.models import BaseModel

from apps.users.managers import UserManager


class UserModel(AbstractBaseUser, PermissionsMixin, BaseModel):
    class Meta:
        db_table = 'auth_user'

    email = models.EmailField(unique=True, validators=[V.RegexValidator(*Regex.EMAIL.value)])
    password = models.CharField(max_length=300, validators=[V.RegexValidator(*Regex.PASS.value)])
    username = models.CharField(unique=True, max_length=50)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = UserManager()
