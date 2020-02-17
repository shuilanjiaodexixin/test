import requests
import sys

my_center = 'http://lhxs.juxinwuyun.com/ecp/portal/myCenterManagerController/myPamentForGoodsManager'
login_url = 'http://lhxs.juxinwuyun.com/ecp/portal/customerUserController/login'
index_url = 'http://lhxs.juxinwuyun.com/ecp/home/index'
login_out = 'http://lhxs.juxinwuyun.com/ecp/portal/customerUserController/logout'
cookie_str = ''
cookies = {}

data = {
    'loginAccount' ='bnx-hmryk'
    'pwd' = 'ryk369369'
    'verifyCode' = 4167
    'loginSign' = 'homeLogin'
    'sid' = None
}

headers = {'User-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'}

response = requests.get(index_url, headers = headers, cookies= cookies)
print
