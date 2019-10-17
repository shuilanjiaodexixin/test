import requests
import tesserocr
my_center = 'http://lhxs.juxinwuyun.com/ecp/portal/myCenterManagerController/myPamentForGoodsManager'
verify_img_url = 'http://lhxs.juxinwuyun.com/ecp/authImage'
headers = {'User-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'

}

verify_code = int()
data = {
    'loginAccount' = 'bnx-hmryk',
    'pwd' = 'ryk369369',
    'verifyCode' = verify_code,
    'loginSign' = 'homeLogin',
    'sid' = None
}

cookie = requests.cookies.RequestsCookieJar()

session = requests.Session()
session.headers = headers
session.cookies = cookie

capt_raw = session.get(my_center)
