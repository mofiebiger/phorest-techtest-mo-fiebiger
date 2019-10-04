from django.shortcuts import render
from rest_framework import viewsets
from django.views.generic import TemplateView
import requests
import json
from django.conf import settings

# class ClientInfoView(TemplateView):

    # def GetClient():
    #     headers = {
    #         'accept': '*/*',
    #         'authorization': 'Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=',
    #     }
    #
    #     params = (
    #         ('firstName', 'Clare'),
    #         ('page', '0'),
    #         ('size', '20'),
    #     )
    #
    #     response = requests.get('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client', headers=headers, params=params)
    #
    #     return response
            #NB. Original query string below. It seems impossible to parse and
            #reproduce query strings 100% accurately so the one below is given
            #in case the reproduced version is not "correct".
            # response = requests.get('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?firstName=Clare&page=0&size=20', headers=headers)
            # /user/index or ''

class IndexView(TemplateView):
    '''index page'''
    def get(self, request):
        '''index page'''
        api = {
            "basic_authorization": settings.BASIC_AUTOTHIZATION
        }
        return render(request, 'index.html', api)
