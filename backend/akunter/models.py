from django.db import models

class Akunter(models.Model):
  item = models.IntegerField(default=0)
  quantity = models.IntegerField(default=0)
  time = models.CharField(max_length=120)

  def _str_(self):
    return self.item
