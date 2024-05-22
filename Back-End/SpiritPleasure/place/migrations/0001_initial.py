# Generated by Django 5.0.2 on 2024-05-20 20:31

import django.db.models.deletion
import multiselectfield.db.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=100)),
                ('postalcode', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('slug', models.SlugField(blank=True, default='')),
                ('latitude', models.FloatField(blank=True, default=None, null=True)),
                ('longitude', models.FloatField(blank=True, default=None, null=True)),
                ('relaxation_type', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('FAMILY', 'Сімейний'), ('YOUTH', 'Молодіжний'), ('MOUNTAIN', 'Гірський'), ('EXTREME', 'Екстримальний'), ('SPA', 'SPA'), ('CALMING', 'Заспокійливий'), ('PASSIVE', 'Пасивний'), ('ACTIVE', 'Активний'), ('WITH_WATER', 'З водоймою'), ('NATURE', 'На природі'), ('COGNITIVE', 'Пізнавальний'), ('WITH_COMPANY', 'З компанією'), ('MEDICAL', 'Лікувально-оздоровчий'), ('CREATIVE', 'Творчий'), ('SHOPPING', 'Шопінг')], max_length=255, null=True)),
                ('trip_goal', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('RELAXATION', 'Розслабитися'), ('ENJOY_NATURE', 'Насолодидись природою'), ('MAKE_NICE_PHOTOS', 'Зробити гарні фото'), ('SWIM', 'Поплавати'), ('VISIT_MUSEUMS_CASTLES', 'Відвідати музеї/замки'), ('EAT_TASTY', 'Смачно поїсти'), ('HAVE_FUN', 'Розважитися'), ('LEARN_SOMETHING_NEW', 'Дізнатись щось нове'), ('SKIING', 'Покататись на лижах'), ('WALK_CITY', 'Погуляти містом')], max_length=255, null=True)),
                ('with_food', models.BooleanField(default=False)),
                ('with_sleep', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='place_images/default photo.jpg', upload_to='place_images/')),
                ('place', models.ForeignKey(blank=True, db_column='place_id', on_delete=django.db.models.deletion.CASCADE, related_name='images', to='place.place')),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_favorite', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='place.place')),
            ],
        ),
    ]
