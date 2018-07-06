import requests
cookies = dict(JSESSIONID='BD2A16DD24B4A5364C7BFCBD95260575-n1',)
headers = {"Accept": "application/json, text/javascript, */*; q=0.01",
"Accept-Encoding":"gzip, deflate, br",
"Accept-Language":"zh-CN,zh;q=0.9",
"Connection":"keep-alive",
"Content-Type":"application/json",
"Host":"i.gw.com.cn",
"Origin":"https://i.gw.com.cn",
"Referer":"https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=",
"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
"X-Requested-With": "XMLHttpRequest",
"Upgrade-Insecure-Requests": "1"
}
url = "https://i.gw.com.cn/UserCenter/account/registerAuth"
r = requests.post(url, \
data = {'afs_token':'0#XED615297208357079854621186415308420882025550712F33290AB8A6DAD8C2818CDF478C518ABEE00F1CCF72FBD7D2E011EC732F7BEC596B59E7B72A1CD43AD3E795C914C3531D1D04BAD68ADA8AFDA11E6D0B3D9',\
'mobile':'13777707654','upass':'qqsd23323','verifyPattern':'mobile','code':'123444','afs_scene':"common_h5"},cookies=cookies, headers=headers,verify=False)
# r1 =  requests.post('https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=#')
print(r.text)