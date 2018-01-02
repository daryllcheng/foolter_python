from .base import *

SECRET_KEY = env('DJANGO_SECRET_KEY', default = '6ur&))zo@@c2*wu2y)htwgj$^c5oasin!)z0lyith22-*mffta')

DEBUG = env.bool('DJANGO_DEBUG', default=True)