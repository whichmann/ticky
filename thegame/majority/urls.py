from rest_framework import routers
from .api import MajorityViewSet

router = routers.DefaultRouter()
router.register('api/majority', MajorityViewSet, 'majority')

urlpatterns = router.urls