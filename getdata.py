import json
import urllib2
import re
import couchdb

couch = couchdb.Server() # Assuming localhost:5984
db = couch['ufc']

url = "http://ufc-data-api.ufc.com/api/v1/us/fighters.json"
data = json.load(urllib2.urlopen(url))
data= json.dumps(data)
m = re.findall(r'"id".+?}', data)
for match in m:
    match=re.findall(r'\d+', match)
    tempurl= "http://ufc-data-api.ufc.com/api/v3/us/fighters/" +match[0]+".json"
    data = json.load(urllib2.urlopen(tempurl))
    db.save(data)
