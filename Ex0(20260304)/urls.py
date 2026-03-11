from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
]


from django.contrib import admin
from django.urls import path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    path('myhello/', include('myhello.urls')),
]
