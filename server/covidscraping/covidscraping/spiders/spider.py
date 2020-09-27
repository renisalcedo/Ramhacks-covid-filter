import scrapy
import json

class whoSpider(scrapy.Spider):
    name = "whoSpider1"
    start_urls = ['https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public']

    def parse(self, response):
        data = {}
        data['information'] = []
        for sel in response.xpath('//ul/li'):
            desc = sel.xpath('text()').extract()
            #print(type(desc))
            #if desc != "\r\n" : 
            data['information'].append({
                'info' : desc
            })
        with open('data.json', 'w') as outfile:
            json.dump(data, outfile)
