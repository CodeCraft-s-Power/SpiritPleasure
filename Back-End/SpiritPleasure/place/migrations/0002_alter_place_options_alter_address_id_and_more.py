# Generated by Django 5.0.3 on 2024-05-15 12:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='with_food',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='place',
            name='with_sleep',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterModelOptions(
            name='place',
            options={},
        ),
        migrations.AlterField(
            model_name='address',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='history',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='image',
            name='place',
            field=models.ForeignKey(blank=True, db_column='place_id', default=1, on_delete=django.db.models.deletion.CASCADE,
                                    related_name='images', to='place.place'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='place',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
