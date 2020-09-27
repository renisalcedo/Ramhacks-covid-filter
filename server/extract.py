import requests
from bs4 import BeautifulSoup, Comment
import json

keywords = [
    "covid-19", "coronavirus", "virus", "mask", "cold", "sneeze", "curve", "pandemic",
    "quarantine", "infect"
    ]

URL = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
r = requests.get(URL)
soup = BeautifulSoup(r.content, "lxml")
i = 0
data = {}
data[URL] = []

for text in soup.body.find_all(string=True):
    if text.parent.name not in ['script', 'meta', 'link', 'style'] and not isinstance(text, Comment) and text != '\n':
        i += 1
        numRank = 0
        text_piece = text.strip()
        text_piece = text_piece.lower()
        for word in keywords:
            if word in text_piece:
                numRank += 1
        if numRank > 0:
            data[URL].append({
                i : text.strip(),
                'keywords' : numRank
            })
        
with open('data.json', 'w') as outfile:
    json.dump(data, outfile)
