from django.shortcuts import render
import requests
from django.http.response import JsonResponse,HttpResponse
import json

def home(request):
    #logger.error("Home rendered")
    return render(request, 'index.html',{'status':0})

def api(request):
    base_url = "https://api.jdoodle.com/v1/execute"
    body = json.loads(request.body)
    try:
        input_data = {
            "language": body["mode"],
            "clientId": "ea1b2d514619e5c19174121ce5eab130",
            "clientSecret":"9ed8b307592699727d0c8218be97a1711d4993c0f6b77a239bc647b4198059be",
            "script":body['code'],
            "stdin":body['input']
        }
        r = requests.post(base_url,json=input_data)

        output_data = r.json()
        return JsonResponse(output_data)
    except Exception as e:
        print(e)
        return JsonResponse({"status":"error","output":"Something went wrong! Please try Again"})

def about_page(request):
    return render(request, 'about.html')

def upcoming_page(request):
    return render(request, 'upcoming.html')