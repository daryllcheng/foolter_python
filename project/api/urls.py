from django.conf.urls import url, include
from rest_framework import routers
from project.api import views

urlpatterns = [
    url(r'^foods/$', views.FoodsView),
]

#router = routers.DefaultRouter()

# router.register(r'users', views.UserViewSet)
# router.register(r'foods', views.FoodsView, 'foods')

# urlpatterns = [
#     url(r'^foods/$', views.FoodsView),
#     url(r'^users/$', views.UserViewSet),
# ]

#/(?P<username>\w{0,50})/$