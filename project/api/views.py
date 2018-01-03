from django.contrib.auth.models import User
from rest_framework import viewsets
from project.api.serializers import UserSerializer
from django.http import JsonResponse
import json
import os

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


def FoodsView(request):
    """
    API endpoint that retunrs filtered foods
    """
    from urllib.parse import urlparse, parse_qs
    
    with open(os.path.join(os.path.dirname(__file__),"food_data.json"), 'r') as json_file:
        data = json.load(json_file)
        foods = data['report']['foods']
        params = parse_qs(request.META['QUERY_STRING'])
        print('params: {}' .format(params))

        def filter_foods(nutrients, ranges):
            return is_in_range(nutrients[1], ranges["protein[0]"], ranges["protein[1]"]) and is_in_range(nutrients[2], ranges["fat[0]"], ranges["fat[1]"]) and is_in_range(nutrients[3], ranges["carb[0]"], ranges["carb[1]"]) and is_in_range(nutrients[4], ranges["sugar[0]"], ranges["sugar[1]"]) 
        
        def is_in_range(nutrient, min, max):
            gm = nutrient["gm"] if nutrient["gm"] != "--" else 0
            return int(min[0]) <= gm <= int(max[0])

        response_data = [food for food in foods if filter_foods(food["nutrients"], params)] if params != None else foods
        return JsonResponse(response_data, safe=False)