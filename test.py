import requests
url = "https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri="
r = requests.get(url, verify=False)
# r1 =  requests.post('https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=#')
# print(r.headers)
r_data = ['JSESSIONID','_psd','_gpd','_cis','_sad']
arr = r.headers['Set-Cookie'].split(';')
cookie_arr = {}
for item in arr :
    item_temp = item.split(",")
    for cook_temp in item_temp:
        final_xzy = cook_temp.split("=")
        
        if final_xzy[0].strip() in r_data:
            cookie_arr[final_xzy[0].strip()] = final_xzy[1].strip()

cookies = cookie_arr
headers = {"Accept": "application/json, text/javascript, */*; q=0.01",
           "Accept-Encoding": "gzip, deflate, br",
           "Accept-Language": "zh-CN,zh;q=0.9",
           "Connection": "keep-alive",
           "Content-Type": "application/json",
           "Host": "i.gw.com.cn",
           "Origin": "https://i.gw.com.cn",
           "Referer": "https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=",
           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.79 Safari/537.36",
           "X-Requested-With": "XMLHttpRequest",
          
           }
data = {
    'afs_token': "0#XED615308557028329998774807615308559713797810712F33290AB8A6DAD8C2818CDF478C518ABEE00F1CCF72FBD7D2E011EC732F7BEC596B59E7B72A1CD43AD3E795C914C3531D1D04BAD68ADA8AFDA11E6D0B3D9",
    'mobile': '13777707654', 'upass': 'qqsd23323', 'verifyPattern': 'mobile', 'code': '123444', 'afs_scene': "common_h5"
}
url = "https://i.gw.com.cn/UserCenter/account/registerAuth"
r = requests.post(url, data=data, cookies=cookies, headers=headers, verify=False)
# r1 =  requests.post('https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=#')
print(r.request.headers)
print(r.text)
print(r.request.body)