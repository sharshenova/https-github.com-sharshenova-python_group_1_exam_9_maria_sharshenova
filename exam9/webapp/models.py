from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
# для автоматической генерации токена
import uuid
from django.utils.timezone import now


# Токен регистрации - генерируется при первичной регистрации пользователя
# и хранится в отдельной модели с привязкой к пользователю.
class RegistrationToken(models.Model):
    token = models.UUIDField(default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # проверка, что токен истёк: находим разницу между двумя датами,
    # переводим её в часы и сравниваем с допустимым возрастом токена в часах,
    # указанным в настройках.
    def is_expired(self):
        delta = now() - self.created_at
        delta_hours = delta.total_seconds() / 3600
        return delta_hours > settings.TOKEN_EXPIRATION_HOURS

    def __str__(self):
        return "%s" % self.token