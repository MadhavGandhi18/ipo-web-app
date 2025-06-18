from rest_framework import serializers
from .models import *

class IPOSerializer(serializers.ModelSerializer):
    listing_gain = serializers.ReadOnlyField()
    current_return = serializers.ReadOnlyField()

    class Meta:
        model = IPO
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        if instance.logo and request:
            data['logo'] = request.build_absolute_uri(instance.logo.url)
        return data