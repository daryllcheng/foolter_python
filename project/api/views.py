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
    with open(os.path.join(os.path.dirname(__file__),"food_data.json"), 'r') as json_file:
        data = json.load(json_file)
        foods = data['report']['foods']
        params = request.GET.get('query')

        def filter_foods(nutrients, ranges):
            return is_in_range(nutrients[1], ranges["protein"]) and is_in_range(nutrients[2], ranges["fat"]) and is_in_range(nutrients[3], ranges["carbs"]) and is_in_range(nutrients[4], ranges["sugar"]) 
        
        def is_in_range(nutrient, range):
            gm = nutrient["gm"] if nutrient["gm"] != "--" else 0
            return range[0] <= gm <= range[1]

        response_data = [food for food in foods if filter_foods(food["nutrients"], params)] if params != None else foods
        return JsonResponse(data)