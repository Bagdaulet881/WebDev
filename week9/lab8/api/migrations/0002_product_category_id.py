# Generated by Django 3.0.4 on 2020-03-24 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category_id',
            field=models.IntegerField(default=0),
        ),
    ]
