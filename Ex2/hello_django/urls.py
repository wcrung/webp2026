from django.contrib import admin
from django.urls import path
from myhello.views import helloApiView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('myhello/', HelloApiView.as_views()),
]
