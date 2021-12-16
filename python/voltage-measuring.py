# importing the requests library
import requests
  
# api-endpoint
URL = "http://127.0.0.1:8000/loop"
  
PARAMS = {'voltage': "5 V"} 

# sending get request and saving the response as response object
r = requests.get(url = URL, params = PARAMS)

print(r)
# extracting data in json format
#data = r.json()
  
