import requests
from bs4 import BeautifulSoup, Comment
import json
from firebase import Firebase

keywords = [
    "covid-19", "coronavirus", "virus", "mask", "cold", "sneeze", "curve", "pandemic",
    "quarantine", "infect", "hydroxychloroquine"
]

common_words = [
    "I", "you", "he", "she", "to", "from", "for", "the", "at",
    "or", "yes", "no", "not", "at", "to", "in", "we", "can", "and",
    "is", "are", "an", "of", "your", "there", "will", "as", "with", "that", 
    "a", "has", "if"
]

config = {
    "apiKey": "AIzaSyDsJCG-vK-oPL9aXXZaekGTIrJTlTpSbyI",
    "authDomain": "ramhacks-covid-filter.firebaseapp.com",
    "databaseURL": "https://ramhacks-covid-filter.firebaseio.com",
    "storageBucket": "ramhacks-covid-filter.appspot.com",
}

firebase = Firebase(config)
db = firebase.database()
in_string = "cont"
while (in_string == "cont"):
    in_string = input("Continue? : \n")
    if in_string == 'end':
        print("Finished Scraping \n")
        break
    print("Starting to Scrape \n")
    URL = input("Enter URL: \n")
    print("Scraping URL %s \n" %URL)
    info_src = "WHO"
    if "cdc" in URL:
        info_src = "CDC"
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, "lxml")
    i = 0
    data = {}
    data["cleaned_data"] = []

    for text in soup.body.find_all(string=True):
        if text.parent.name not in ['script', 'meta', 'link', 'style'] and not isinstance(text, Comment) and text != '\n':
            is_sentence = False
            i += 1
            numRank = 0
            numKey = 0
            keywords_in_text = {}
            text_piece = text.strip()
            text_piece = text_piece.lower()
            for word in keywords:
                if word in text_piece:
                    numRank += 1

            words_in_text = {}
            words_in_text = text_piece.split()

            for word in words_in_text:
                if word in common_words:
                    is_sentence = True
                else:
                    keywords_in_text[numKey] = word
                    numKey += 1

            if numRank > 0 and is_sentence:
                data["cleaned_data"].append({
                    i : text.strip(),
                    'number of keywords' : numKey,
                    'keywords' : keywords_in_text,
                    'source': info_src
                })
    # for end

    json.dumps(data)
    db.child("correct").push(data)

# while end
