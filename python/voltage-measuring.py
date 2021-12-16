import requests
import time
import random
  
URL = "http://127.0.0.1:8000/loop"
  
number_list = []

#The higher the number the smoother the indicator will
#  move but more delayed it will be
#  In general, 0-5 real world use, 5-20 for debug
smoothness_coeficient = 5

while True:
    number_list.append(random.randint(0, 10))

    if len(number_list) > 5: number_list.pop(0)

    avg = sum(number_list)/len(number_list)

    PARAMS = {'voltage': round(avg, 3) } 

    r = requests.get(url = URL, params = PARAMS)
    
    time.sleep(1)

# extracting data in json format
#data = r.json()
  
