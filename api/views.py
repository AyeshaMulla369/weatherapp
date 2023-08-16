import urllib.request
import json
from django.shortcuts import render

def index(request):

    if request.method == 'POST':
        city = request.POST['city']

        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' +
                                        city + '&units=metric&appid=<YOUR API KEY>').read()
        list_of_data = json.loads(source)

        data = {
            "city":str(city),
            "temp": str(list_of_data['main']['temp']) + ' °C',
            "humidity": str(list_of_data['main']['humidity']),
            'description': str(list_of_data['weather'][0]['description']),
        }
        print(data)
    else:
        data = {}

    return render(request, "build/index.html", data)