import requests
import json
from lxml import etree
class Crawl:
    first_url = "https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri="
    
    # r1 =  requests.post('https://i.gw.com.cn/UserCenter/page/account/register?source=1&redirect_uri=#')
    # print(r.text)
    r_data = ['JSESSIONID','_psd','_gpd','_cis','_sad']
    arr = {}
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
           "X-Requested-Type": ''
           }
    data = {
        'afs_token': "0#XED6",
        'mobile': '18157795211', 'upass': 'qqsd23323', 'verifyPattern': 'mobile', 'code': '623444', 'afs_scene': "common_h5"
    }
    url = "https://i.gw.com.cn/UserCenter/account/registerAuth"
    def first_crawl(self):
        r = requests.get(self.first_url, verify=False)
        self.arr = r.headers['Set-Cookie'].split(';')
    def getCookieItem(self,arr,r_data):
        cookie_arr = {}
        for item in arr :
            item_temp = item.split(",")
            for cook_temp in item_temp:
                final_xzy = cook_temp.split("=")
                
                if final_xzy[0].strip() in r_data:
                    cookie_arr[final_xzy[0].strip()] = final_xzy[1].strip()
        return cookie_arr
    def auth(self,cookie_temp):
        tokenG = cookie_temp['_gpd']
        tokenC = cookie_temp['_cis']
        tokenS = cookie_temp['_sad']
        oathG = tokenG[len(tokenG) - 2] + tokenG[3] + tokenG[6]
        oathC = tokenC[len(tokenC) - 10] + tokenC[2] + tokenC[11]
        oathS = tokenS[2] + tokenS[len(tokenS) - 10] + tokenS[len(tokenS) -1]
        oath = oathG + oathC + oathS
        return oath
    def crawl(self,phone_number):
        self.first_crawl()
        cookie_temp = self.getCookieItem(self.arr,self.r_data)
        oath_temp = self.auth(cookie_temp)
        self.data['mobile'] = str(phone_number)
        # print(phone_number)
        self.headers['X-Requested-Type'] = oath_temp
        r = requests.post(self.url, data=json.dumps(self.data), cookies=cookie_temp,
        headers=self.headers, verify=False)
        #  var str = "";
        # 	        var regex1 = new RegExp("\\;?\\s*" + key + "\\=[a-zA-z0-9]*\\;?", "gi");
        # 	        var regex2 = new RegExp('([\\;\\s\\=]|' + key + ')*', "gi");
        # 	        var arr = document.cookie.match(regex1);
        # 	        if(!!arr && arr[0]) {
        # 	            str = arr[0].replace(regex2, "");
        # 	        }
        # 	        return $.trim(str);
        # 写入爬虫日志
        
        if json.loads(r.text)['code'] == 'A139':
            return True
        else:
            return False



def main():
    print(Crawl().crawl('18157795211'))


if __name__ == '__main__':
    main()
