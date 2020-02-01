from rest_framework import serializers
from majority.models import Majority

#Majority Serializer
class MajoritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Majority
        fields = '__all__'