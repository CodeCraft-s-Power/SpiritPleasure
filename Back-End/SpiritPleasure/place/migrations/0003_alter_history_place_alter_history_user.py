# Generated by Django 5.0.3 on 2024-05-15 12:36

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0002_alter_place_options_alter_address_id_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='place',
            field=models.ForeignKey(db_column='place_id', on_delete=django.db.models.deletion.CASCADE, to='place.place'),
        ),
        # migrations.AlterField(
        #     model_name='history',
        #     name='user',
        #     field=models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        # ),
    ]