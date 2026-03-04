from rest_framework.decorators import api_view
from rest_framework.response import Response
import logging

logger = logging.getLogger(_name_)

@api_view(['GET'])
def hello_api(request):
  user_str = request.query_params.get('name', 'World')

data = {
  "message": f"hello, {user_str}"
}

logger.info(f"Hello API accessed with name: {user_str}")

return Response(data)
