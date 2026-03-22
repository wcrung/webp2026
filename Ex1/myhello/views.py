from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_api(request):
    user_str = request.query_params.get('name', 'World')
    data = {
        "message": f"hello, {user_str}"
    }
    return Response(data)
