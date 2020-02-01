from majority.models import Majority
from rest_framework import viewsets, permissions
from .serializers import MajoritySerializer

#Majority Viewset
class MajorityViewSet(viewsets.ModelViewSet):
    queryset = Majority.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MajoritySerializer
