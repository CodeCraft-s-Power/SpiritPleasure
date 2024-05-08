# Generated by Django 5.0.3 on 2024-05-08 14:27

import multiselectfield.db.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0013_alter_place_relaxation_type_alter_place_trip_goal'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='location',
        ),
        migrations.AddField(
            model_name='place',
            name='latitude',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='place',
            name='longitude',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='trip_goal',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('RELAXATION', 'Розслабитися'), ('ENJOY_NATURE', 'Насолодидись природою'), ('MAKE_NICE_PHOTOS', 'Зробити гарні фото'), ('SWIM', 'Поплавати'), ('VISIT_MUSEUMS_CASTLES', 'Відвідати музеї/замки'), ('EAT_TASTY', 'Смачно поїсти'), ('HAVE_FUN_IN_CLUB', 'Розважитися в клубі'), ('LEARN_SOMETHING_NEW', 'Дізнатись щось нове'), ('SKIING', 'Покататись на лижах'), ('WALK_CITY', 'Погуляти містом')], max_length=255, null=True),
        ),
    ]
