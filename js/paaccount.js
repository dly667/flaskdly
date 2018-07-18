var account = account || {};
account.url = {
	url : {
			ajaxOldAccountBind : "account/old/bind",
			ajaxAccountInfo : "account/uname/",
			ajaxVipShowerInfo : "account/vipShower/",
			ajaxShowerRank : "account/showerRank/",
			ajaxKhData : "account/khData/",
			ajaxDayIncomeDetail : "account/dayIncomeDetail",
			ajaxQualified : "account/qualified",
			ajaxTotalIncomeDetail : "account/totalIncomeDetail/",
			ajaxExchange : "account/exchange/",
			ajaxSendSMS : "sms/",
			ajaxBindMobile : "account/bind/",
			ajaxChckeMobile : 'account/mobile/',
			ajaxModifyMobileAuth :'account/auth',
			ajaxModifyMobile :'account/',
			ajaxChangePass :'account/mpass',
			ajaxUnbindMobile :'account/unbind',
			ajaxModifyMobileById :'account/identity',
			ajaxGetbankcard : 'getbankcard',
			ajaxSendVerifyEmail : 'account/email/sendVerifyEmail',
			ajaxDoBindEmail : 'account/email/doBindEmail',
			ajaxAccountLevel : 'account/level/',
			ajaxBindBank : 'account/bank',
			ajaxBindNickname : 'account/nickname',
			ajaxQQ : 'account/qq',
			ajaxUnbindQQ : 'account/qq/unbind',
			ajaxBankCode : 'bank',
			ajaxBankAuth : 'bank/auth',
			ajaxBankCheck : 'bank/check',
			ajaxBindIdCard : 'bank/idcard',
			ajaxBankCardInfo : 'bank/info',
			ajaxBankCardAdd : 'bank/add',
			ajaxDelBankCard : 'bank/del',
			ajaxSubBank : 'bank/sub',
			ajaxCities : 'province/',
			ajaxForgetPass : 'account/forgetPass',
			ajaxCheckHasBindMobile : 'account/checkM',
			ajaxRegisterAuth : 'account/registerAuth',
			ajaxRegister : 'account/register',
			ajaxLogin : 'account/login',
			ajaxQQLogin : 'account/qqLogin',
			ajaxUnBindMobileByEmail :'account/email/mobile/unbind',
			ajaxModifyMobileByEmail: 'account/email/mobile/modify',
			ajaxBindEmailByEmail : 'account/email/bind',
			ajaxUnBindEmailByEmail : 'account/email/unbind',
			ajaxModifyEmailByEmail : 'account/email/modify',
			ajaxFindPassByEmail : 'account/email/findPass',
			ajaxRegisterByEmail : 'account/email/register',
			ajaxBankStatus:'bank/bankStatus',
			ajaxUserInfo:'account/gainUserInfo',
			ajaxCheckUname:'account/validation/uname',
			ajaxBankAuthWay:'bank/bankAuthWay',
			ajaxToUnbindQQ:'account/toUnbind',
			ajaxHeader:'account/h/',
			ajaxSmsCode:'sms/validCode/',
			ajaxWeChatLogin : 'account/wechatOauth',
			ajaxExSetpass : 'account/setpass',
			ajaxExBindAcc : 'account/ex/bind',
			ajaxExQQAuth : 'account/ex/qq/oauth',
			ajaxExQQBindAcc : 'account/ex/qq',
			ajaxVuserBase :'vuser/base',
			
			ajaxBindxcid : 'account/bind/xc',
			ajaxUnBindxcid : 'account/unbind/xc',
			ajaxLoginByxcid : 'account/xc/login',
			
			
			
			/** Page path **/
			
			oldBindSuccess : "oldAccountSucc",
			changePassSucc : 'changePassSucc',
			changePass : 'changePass',
			accountManage : 'accoutManage',
			changeNickname : 'changeNickname',
			changeNicknameSucc : 'changeNicknameSucc',
			forgetPass : 'forgetPass',
			resetPass : 'resetPass',
			forgetPassByEmailSucc : 'forgetPassByEmailSucc',
			bindMobile : "mobile/bindMobile",
			bindMobileSuccess : 'mobile/bindMobileSucc',
			modifyMobileAuth : 'mobile/modifyMobileAuth',
			modifyMobile : 'mobile/modifyMobile',
			modifyMobileSucc : 'mobile/modifyMobileSucc',
			unbindMobileSucc : 'mobile/unbindMobileSucc',
			modifyMobileByEmailSucc:'mobile/modifyMobileByEmailSucc',
			unbindMobileByEmailSucc : 'mobile/unbindMobileByEmailSucc',
			modifyMobileById : 'mobile/modifyMobileById',
			unbindMobile : 'mobile/unbindMobile',
			unbindMobileById : 'mobile/unbindMobileById',
			verifyIdCardFail : 'mobile/verifyIdCardFail',
			emailsend : 'email/emailsend',
			emailbind : 'email/emailbind',
			emailchg : 'email/emailchg',
			emailbindnew : 'email/emailbindnew',
			emaichgSucc : 'email/emaichgSucc',
			emailChgById :'email/emailChgById',
			emaildel : 'email/emaildel',
			emaidelSucc : 'email/emaidelSucc',
			emaildelById : 'email/emaildelById',
			emaildelByMobile : 'email/emaildelByMobile',
			emailChgByMobile : 'email/emailChgByMobile',
			bankcard : 'bank/bankcard',
			bankBind : 'bank/bankBind',
			bankBindSucc : 'bank/bankBindSucc',
			bankAuth : 'bank/bankAuth',
			addBankVerify : 'bank/addBankVerify',
			deleteBank : 'bank/deleteBank',
			delBankSucc : 'bank/delBankSucc',
			setPass : 'setPass',
			unBindQQ : 'qqUnbind',
			qqInfo : 'qqInfo',
			exSetPass : 'exchange/setPass',
			exBindAccount : 'exchange/bindAccount',
			vuserInfo :'vuserInfo',
			
			bindXCidSucc : 'xc/bindXCidSucc',
			unbindXCidSucc : 'xc/unbindXCidSucc',
			
			vipShower : 'vipShower',
			awardRuleFinance : 'vip/awardRuleFinance',
			awardRuleFinance0707 : 'vip/awardRuleFinance0707',
			richRanking : 'vip/richRanking',
			qualified : 'vip/qualified',
			khData : 'vip/khData',
			dayIncomeFinance : 'vip/dayIncomeFinance',
			dayDetail : "vip/dayDetail",
			dayDetail161126 : "vip/dayDetail161126",
			dayDetail161228 : "vip/dayDetail161228",
			totalIncomeDetail : 'vip/totalIncomeDetail'
	},
	getTemplateUrl: function(name) {
        if(!!this.url[name]) {
            return settings.baseUrl + "page/account/" + this.url[name];
        }
        return false;
    },
    getAjaxUrl: function(name) {
        return settings.baseUrl + this.url[name];
    },
    
    getParams : function(parames) {
    	var search = location.search;
    	var _getParamsBykey = function(key) {
    		var params = search.replace('?', '');
    		var array = params.split('&');
    		var length = array.length;
    		for (var i = 0; i <length; i++) {
    			var values = array[i].split('=');
    			if (values[0] == key) {
    				return values[1];
    			}
    		}
    	};
    	if (!!search) {
    		var source = _getParamsBykey('source');
        	var keytp = _getParamsBykey('keytp');
        	var key = _getParamsBykey('key');
        	var token = _getParamsBykey('accessToken');
        	var redirect = _getParamsBykey('redirect_uri');
        	var paramStr = '?p=1';
        	if (source) {
        		paramStr += '&source=' + source;
        	}
        	if (token) {
        		paramStr += '&accessToken=' + token;
        	}
        	if (keytp) {
        		paramStr += '&keytp=' + keytp;
        	}
        	if (key) {
        		paramStr += '&key=' + key;
        	}
        	if (redirect) {
        		paramStr += '&redirect_uri=' + redirect;
        	}
        	if (parames) {
        		return paramStr + '&'+ parames;
        	} else {
        		return paramStr;
        	}
        	
    	} else {
    		if (parames) {
    			return '?' + parames;
        	} else {
        		return '';
        	}
    	};
    }
};


account.message = {
		specialErrorHandle:function(){
			$(":input[type=text]").off('blur').on('blur',function(){
				var _self = this;
				setTimeout(function(){
					var inputStr=$(_self).val();
					var error = $(".login-status").attr('error');
					if(inputStr&&!error){
						$(".login-status").hide();
						$(".login-status").attr('error', false);
					}
				}, 50);
			});				
		},
		
		showErrorMessage : function(message) {
			$('#accountBindTip').hide();
			$('#errorMessage').text(message);
			//$('#errorMessage').addClass('uc-form-tips-alert');
			$(".login-status").attr('error', true).show();
			$("#hasBind").hide();
			$("#no-mail-tips").hide();
			$('#errorMessage').show();
		},
		
		showNotificationMessage : function(message) {
			var timer = null;
			var $tip = $('#notiMessage');
			$tip.text('');
			$tip.removeClass('uc-form-tips-alert');
			$tip.addClass('uc-form-tips-yzm');
			$tip.text(message);
			$tip.fadeIn();
			timer = setTimeout(function() {
                $tip.text('');
                $tip.removeClass('uc-form-tips-yzm');
                $tip.fadeOut();
                clearTimeout(timer);
            }, 3000);
		},
		
		clearErrorMessage : function() {
			$(".login-status").attr('error', false).hide();		
			$('#errorMessage').text('');
			$('#accountBindTip').hide();
			$('#errorMessage').show();
		},
		showPopup : function(message) {
			$('#tipsPopup').show();
			$('#tipsPopup').find('.popup-tips').text(message);
			var isSupportTouch = "ontouchend" in document ? true : false;
			if (isSupportTouch) {
				$('#tipsPopup').find('.popup-oper').on('touchend',function(){
					$('#tipsPopup').hide();
				});
			} else {
				$('#tipsPopup').find('.popup-oper').on('click',function(){
					$('#tipsPopup').hide();
				});
			}
		}
};

account.util = {
		sendSMS : function(type, value, callback, data) {
			var send = function() {
				var param = data ? data : {};
				var $codeContainer = $("#mobileVcode");
				if ($codeContainer.css('display') == 'block') {
					var code = $("#mCode").val();
					if ($.trim(code) == '') {
						account.message.showErrorMessage("图形验证码不能为空");
						$('#sendCode').removeAttr('disabled');
						$('#sendCode').removeClass('btn-yzm-disable');
						return;
					}
					param.code = code;
				}
				if (param.pageId) {
					account.util.analysis.analysis({pageId : param.pageId, funId : param.funId});
				}
				account.ajax.execute({
					method : "POST",
					url: account.url.getAjaxUrl('ajaxSendSMS') + type + '/' + value + '/',
					data : param,
					customHandleError : function(data) {
						var $mobileCodeEle = $('#mImageVcode');
						if ($mobileCodeEle && $mobileCodeEle.length) {
							$('#mCode').val('');
							account.util.refreshImageVcode('mImageVcode');
						}
						if (data.code != 'A306' && data.code != 'A1101') {
							account.util.hourglass2($('#sendCode'));
						} else if (data.code == 'A306') {
							$('#sendCode').removeAttr('disabled');
							$('#sendCode').removeClass('btn-yzm-disable');
						}
						if (data.message) {
							account.message.showErrorMessage(data.message);
						}
						return false;
					},
					success : function(data) {
						$('#mobileVcode').hide();
						account.message.showNotificationMessage('验证码已发送您手机，请注意查收');
						account.util.hourglass2($('#sendCode'));
						if (callback) {
							callback();
						}
						return data;
					}
				});
			};
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return;
			}
			$('#sendCode').attr('disabled', 'disabled');
			$('#sendCode').addClass('btn-yzm-disable');
			
			var $codeContainer = $("#mobileVcode");
			if ($codeContainer.css('display') == 'block'){
				send();
			} else {
				account.ajax.execute({
					method : "GET",
					url: account.url.getAjaxUrl('ajaxSmsCode'),
					data : {value : value},
					customHandleError : function(data) {
						$('#sendCode').removeAttr('disabled');
						$('#sendCode').removeClass('btn-yzm-disable');
						return true;
					},
					success : function(data) {
						if (data) {
							$('#mCode').val('');
							account.util.refreshImageVcode('mImageVcode');
							$('#mobileVcode').show();
						}
						send();
					}
				});
			}
		},
		
		sendSMS2 : function(type, value, callback, data) {
			var send = function() {
				var param = data ? data : {};
				var $codeContainer = $("#mobileVcode2");
				if ($codeContainer.css('display') == 'block') {
					var code = $("#mCode2").val();
					if ($.trim(code) == '') {
						account.message.showErrorMessage("图形验证码不能为空");
						$('#sendCode2').removeAttr('disabled');
						$('#sendCode2').removeClass('btn-yzm-disable');
						return;
					}
					param.code = code;
				}
				if (param.pageId) {
					account.util.analysis.analysis({pageId : param.pageId, funId : param.funId});
				}
				account.ajax.execute({
					method : "POST",
					url: account.url.getAjaxUrl('ajaxSendSMS') + type + '/' + value + '/',
					data : param,
					customHandleError : function(data) {
						var $mobileCodeEle = $('#mImageVcode2');
						if ($mobileCodeEle && $mobileCodeEle.length) {
							$('#mCode2').val('');
							account.util.refreshImageVcode('mImageVcode2');
						}
						if (data.code != 'A306' && data.code != 'A1101') {
							account.util.hourglass2($('#sendCode2'));
						} else if (data.code == 'A306') {
							$('#sendCode2').removeAttr('disabled');
							$('#sendCode2').removeClass('btn-yzm-disable');
						}
						if (data.message) {
							account.message.showErrorMessage(data.message);
						}
						return false;
					},
					success : function(data) {
						$('#mobileVcode2').hide();
						account.message.showNotificationMessage('验证码已发送您手机，请注意查收');
						account.util.hourglass2($('#sendCode2'));
						if (callback) {
							callback();
						}
						return data;
					}
				});
			};
			if ($('#sendCode2').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return;
			}
			$('#sendCode2').attr('disabled', 'disabled');
			$('#sendCode2').addClass('btn-yzm-disable');
			
			var $codeContainer = $("#mobileVcode2");
			if ($codeContainer.css('display') == 'block'){
				send();
			} else {
				account.ajax.execute({
					method : "GET",
					url: account.url.getAjaxUrl('ajaxSmsCode'),
					data : {value : value},
					customHandleError : function(data) {
						$('#sendCode2').removeAttr('disabled');
						$('#sendCode2').removeClass('btn-yzm-disable');
						return true;
					},
					success : function(data) {
						if (data) {
							$('#mCode2').val('');
							account.util.refreshImageVcode('mImageVcode2');
							$('#mobileVcode2').show();
						}
						send();
					}
				});
			}
		},
		
		getPageParamsBykey : function(key) {
			var search = location.search;
			var params = search.replace('?', '');
			var array = params.split('&');
			var length = array.length;
			for (var i = 0; i <length; i++) {
				var values = array[i].split('=');
				if (values[0] == key) {
					return values[1];
				}
			}
			return '';
		},
		
		buildOtherSiteUrl : function(url) {
			var token = account.util.getPageParamsBykey('accessToken') || account.util.getPageParamsBykey('token');
			if (url.indexOf("?", url.length - 1) !== -1 
					|| url.indexOf("&", url.length - 1) !== -1) {
				return url + "token=" + token;
			} else if (url.indexOf("?") != -1) {
				return url + "&token=" + token;
			} else {
				return url + "?token=" + token;
			}
		},
		
		getPasswordLevel : function(pass) {
			if (!pass || $.trim(pass) == '') {
				return 0;
			}
			if (pass.length <= 6) {
				return 0;
			}
			
			var modes = 0;
			var length = pass.length;
			for (var i = 0; i < length; i++) {
				modes |= charMode(pass.charCodeAt(i));
			}
			return bitTotal(modes);
			
			//CharMode
		    function charMode(iN) {
		        if (iN >= 48 && iN <= 57) // Number
		            return 1;
		        if (iN >= 65 && iN <= 90) // Upper letter
		            return 2;
		        if (iN >= 97 && iN <= 122) // Lower letter
		            return 4;
		        else
		            return 8; // Special letter
		    }
		    
		    //bitTotal
		    function bitTotal(num) {
		        var modes = 0;
		        for (var i = 0; i < 4; i++) {
		            if (num & 1) modes++;
		            num >>>= 1;
		        }
		        return modes;
		    }
		},
		closeWindow : function() {
			window.focus();
			//window.open("about:blank","_self", '').close();
			window.close();
			//top.window.opener = null;  
		    //top.window.open('', '_self', '');
		    //top.window.close();
		},
		valideMobile : function($mobile, callback) {
			var $codeContainer = $("#mobileVcode");
			if ($codeContainer.css('display') == 'block') {
				var $codeEle = $("#mCode");
				if ($codeEle && $codeEle.length) {
					var code = $codeEle.val();
					if ($.trim(code) == '') {
						account.message.showErrorMessage("图形验证码不能为空");
						return;
					}
				}
			}
			var mobile = $mobile.val();
			if (/^1\d{10}$/g.test(mobile)) {
				account.ajax.execute({
					url: account.url.getAjaxUrl('ajaxChckeMobile') + mobile,
					beforeSend : function() {
						$('#sendCode').attr('disabled','disabled');
						$('#sendCode').addClass('btn-yzm-disable');
					},
					customHandleError : function(data) {
						if (data.code != 'A1101') {
							$('#sendCode').removeAttr('disabled');
							$('#sendCode').removeClass('btn-yzm-disable');
						}
						return true;
					},
					success : function(data) {
						$('#sendCode').removeAttr('disabled');
						$('#sendCode').removeClass('btn-yzm-disable');
						if (data) {
							//account.message.showErrorMessage("手机号码已被他人使用，请更换其他手机号。");
							$('.ownerUname').text(data);
							$('#infoTips').hide();
							$('#hasBind').show();
							return false;
						} else {
							account.message.clearErrorMessage();
							$('#hasBind').hide();
							if (callback) {
								callback();
							}
							return  true;
						}
					}
				});
			} else {
				// 手机格式必须是1开头的11位数字
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return false;
			}
			
		},
		
		valideMobile2 : function($mobile, callback) {
			var $codeContainer = $("#mobileVcode2");
			if ($codeContainer.css('display') == 'block') {
				var $codeEle = $("#mCode2");
				if ($codeEle && $codeEle.length) {
					var code = $codeEle.val();
					if ($.trim(code) == '') {
						account.message.showErrorMessage("图形验证码不能为空");
						return;
					}
				}
			}
			var mobile = $mobile.val();
			if (/^1\d{10}$/g.test(mobile)) {
				account.ajax.execute({
					url: account.url.getAjaxUrl('ajaxChckeMobile') + mobile,
					beforeSend : function() {
						$('#sendCode2').attr('disabled','disabled');
						$('#sendCode2').addClass('btn-yzm-disable');
					},
					customHandleError : function(data) {
						if (data.code != 'A1101') {
							$('#sendCode2').removeAttr('disabled');
							$('#sendCode2').removeClass('btn-yzm-disable');
						}
						return true;
					},
					success : function(data) {
						$('#sendCode2').removeAttr('disabled');
						$('#sendCode2').removeClass('btn-yzm-disable');
						if (data) {
							//account.message.showErrorMessage("手机号码已被他人使用，请更换其他手机号。");
							$('.ownerUname').text(data);
							$('#infoTips').hide();
							$('#hasBind').show();
							return false;
						} else {
							account.message.clearErrorMessage();
							$('#hasBind').hide();
							if (callback) {
								callback();
							}
							return  true;
						}
					}
				});
			} else {
				// 手机格式必须是1开头的11位数字
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return false;
			}
			
		},
		
		refreshImageVcode : function(id) {
			var url = settings.baseUrl + 'page/account/ImageVcode?t=' + new Date().getTime();
			id = id ? id : 'ImageVcode';
			var imgObj = document.getElementById(id);
			imgObj.src = url;
		},
		isnotemail : function(email) {
			var reMail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
			if (!reMail.test(email)) {
				account.message.showErrorMessage("邮箱的格式不正确");
				return false;
			}
			account.message.clearErrorMessage();
			return true;
		},
        dateFormat : function(d) {
            var year = d.getFullYear();
            var month =(d.getMonth() + 1).toString();
            var day = (d.getDate()).toString();
            if (month.length == 1) {
                month = "0" + month;
            }
            if (day.length == 1) {
                day = "0" + day;
            }
            return year + '-' + month + '-' +  day;
        },
        dateAdd: function (d, days) {
            d.setDate(d.getDate() + days);
            return d;
        },
        strFormat : function (s) {
        	return s.split('-').join('/');
        },
    	hourglass2 : function ($element) {
    		var time = settings.smsWaitTime;
			var timer;
			var _timeFun = function() {
				$element.text(time + '秒...');
				$element.attr('disabled', 'disabled');
				$element.addClass('btn-yzm-disable');
				if (time == 0) {
					clearTimeout(timer);
					$element.text('获取验证码');
					$element.removeAttr('disabled');
					$element.removeClass('btn-yzm-disable');
					return ;
				}
				timer = setTimeout(_timeFun, 1000);
				time--;
			};
			_timeFun();
    	}
};

account.util.cookie = {
	    setItem: function(key, value) {
	        document.cookie = key + "=" + value + ";expires=" + new Date(new Date().getFullYear() + 10 + "-1-1").toGMTString();
	    },
	    deleteItem: function(key) {
	    	var date=new Date(); 
	    	date.setTime(date.getTime()-10000); 
	    	document.cookie = key + ";expires=" + date.toGMTString();
	    },
	    getItem: function(key) {
	        var str = "";
	        var regex1 = new RegExp("\\;?\\s*" + key + "\\=[a-zA-z0-9]*\\;?", "gi");
	        var regex2 = new RegExp('([\\;\\s\\=]|' + key + ')*', "gi");
	        var arr = document.cookie.match(regex1);
	        if(!!arr && arr[0]) {
	            str = arr[0].replace(regex2, "");
	        }
	        return $.trim(str);
	    }
	};

account.util.alg = {
	    auth: function() {
	    	var tokenG = account.util.cookie.getItem('_gpd');
			var tokenC = account.util.cookie.getItem('_cis');
			var tokenS = account.util.cookie.getItem('_sad');
			if (!tokenG || !tokenC || !tokenS) {
				return ;
			}
			account.util.cookie.deleteItem('_gpd='+tokenG);
			account.util.cookie.deleteItem('_cis='+tokenC);
			account.util.cookie.deleteItem('_sad='+tokenS);
			var oathG = tokenG.charAt(tokenG.length - 2) + tokenG.charAt(3) + tokenG.charAt(6);
			var oathC = tokenC.charAt(tokenC.length - 10) + tokenC.charAt(2) + tokenC.charAt(11);
			var oathS = tokenS.charAt(2) + tokenS.charAt(tokenS.length - 10) + tokenS.charAt(tokenS.length -1);
			var oath = oathG + oathC + oathS;
			return oath;
	    }
	};
account.util.analysis = {
		analysis : function(params) {
			if (!params) {
				return;
			}
			if (!settings.trackerUrl) {
				return ;
			}
			var tracker = new GwTracker(settings.trackerUrl);
			tracker.send(1, '', '', '3742', params.pageId, params.funId, '', '', '');
		}
};

account.ajax = {
		setBtnStatus : function(click_times, $element, waitClickTime) {
			if (click_times >= settings.errorClickLimit) {
				var time = waitClickTime ? waitClickTime : settings.waitClickTime;
				var timer = null;
				var _timeFun = function() {
					if (time == 0) {
						clearTimeout(timer);
						$element.removeClass('disabled');
						$element.removeClass('uc-btn-disable');
						return ;
					}
					timer = setTimeout(_timeFun, 1000);
					time--;
				};
				_timeFun();
			} else {
				$element.removeClass('disabled');
				$element.removeClass('uc-btn-disable');
			}
		},
		execute : function(options) {
			var oath = account.util.alg.auth();
			if (!oath) {
				return ;
			}
			 // 统计信息
			if (options.analysis) {
				account.util.analysis.analysis(options.analysis);
			}
			$.ajax({
				  beforeSend : function(){
					  $('#weixin_layer').show();
					  account.message.clearErrorMessage();
					  if (options.$ele) {
						  options.$ele.addClass('disabled');
						  options.$ele.addClass('uc-btn-disable');
					  }
					  if (options.beforeSend) {
						  options.beforeSend();
					  }
				  },
				  headers : {
					  'X-Requested-Type' : oath
				  },
				  cache : false,
				  async : options.async || true,
				  type: options.method || 'GET',
				  url: options.url,
				  // data to be added to query string:
				  data: options.data,
				  // type of data we are expecting in return:
				  contentType : options.contentType,
				  dataType: options.dataType || 'json',
				  success: function(data){
					  var status = data.code;
					  $('#weixin_layer').hide();
					  if (status != '200') {
						  if (status == '201') {
							  var url = settings.baseUrl + data.data;
							  if (data.data.indexOf("http") != -1) {
									url = data.data;
								}
								location.href = url;
								return ;
						  }
						  if (status == 'A1300') {
							  window.location.reload();
							  return ;
						  }
						  // 验证码不正确
						  if (status == 'A306') {
							  $('#code').val('');
							  $('#vCode').val('');
							  $('#mCode').val('');
							  
							  $('#code2').val('');
							  $('#mCode2').val('');
						  }
						  if (status == 'A148') {
							 location.href = settings.baseUrl + 'page/account/login'; 
							 return ;
						  }
						  
						  //手机号已经被使用了
						  if (status == 'A1401') {
							  account.message.showErrorMessage('手机号已经被使用了');
							  return ;
						  }
						  
						  if (options.$ele) {
							  account.ajax.setBtnStatus(options.click_times, options.$ele, options.waitTime);
						  }
						  var isContinue = true;
						  if (options.customHandleError) {
							  isContinue = options.customHandleError(data);
						  }
						  if (isContinue) {
							  account.message.showErrorMessage(data.message);
						  }
						  return ;
					  }
					  if (options.success) {
						  return options.success(data.data);
					  }
				  },
				  error: function(xhr, type){
					  $('#weixin_layer').hide();
					  if (options.$ele) {
						  options.$ele.removeClass('disabled');
						  options.$ele.removeClass('uc-btn-disable');
					  }
					  if (options.error) {
						  options.error(xhr, type);
					  }
				  }
				});
		}
};

account.event = {
		click : function($target, callback, event){
			var isSupportTouch = "ontouchend" in document ? true : false;
			if (isSupportTouch) {
				event = event ? event : 'tap';
				$target.each(function(){
					$(this).off(event).on(event, function(){
						callback();
					});
				});
				
			} else {
				$target.each(function(){
					$(this).off('click').on('click', function(){
						callback();
					});
				});
			}
		}
};

account.sms = {
		prefix : '【web】',
		register : '手机注册',
		findPass : '手机找回密码',
		bindMobile : '绑定手机',
		unbindMobile : '解绑手机',
		modifyMobile : '修改手机',
		unbindEmail : '解绑邮箱',
		modifyEmail : '修改邮箱',
		addBank : '添加银行卡',
		modifyPass : '修改密码',
		loginByxcid : '湘财资金账号登录',
		unbindxcid : '解绑湘财资金账号'
};

account.view = account.view || {};

account.view.bindOldAccount = (function() {
	var click_times = 0;
	var _readySubmitData = function() {
		var _uname = $('#uname').val();
		var _upass = $('#upass').val();
		if (!_uname ||$.trim(_uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return false;
		}
		if (!_upass || $.trim(_upass) == '') {
			account.message.showErrorMessage("密码不能为空");
			return false;
		}
		return true;
	};
	
	var _bind = function(element,event) {
		click_times ++;
		if (!_readySubmitData()) {
			return ;
		};
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxOldAccountBind'),
			data : $('#form').serialize(),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('oldBindSuccess');
				}
			}
		});
		
	};
	var _init = function() {
		$('#submitBtn').on('click', function(event){
			_bind(this, event);
		});
	};
	
	return {
		init : function() {
			_init();
		}
	};
	
})();

account.view.accountManagement = (function(){
	var _getAccountInfo = function() {
		var uname = $('#username').text();
		if (!uname ||  $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return ;
		}
		account.ajax.execute({
			url: account.url.getAjaxUrl('ajaxAccountInfo') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				if (data) {
					_setBindData(data);
				}
			}
		});
		
	};
	
	var _getHeaderInfo = function() {
		var uname = $('#username').text();
		if (!uname ||  $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return ;
		}
		account.ajax.execute({
			url: account.url.getAjaxUrl('ajaxHeader') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				if (data) {
					$('#headerIcon').attr('src', data);
				}
			}
		});
		
	};
	
	var _getAccountLevel = function() {
		var uname = $('#username').text();
		if (!uname || $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return ;
		}
		account.ajax.execute({
			url: account.url.getAjaxUrl('ajaxAccountLevel') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function() {
				/*$('#userGrade').on('click', function(){
					location.href = settings.baseUrl + 'page/account/levelDescription' + account.url.getParams();
				});*/
				return true;
			},
			success : function(data) {
				_setLevelData(data);
			}
		});
		
	};
	
	var _setLevelData = function(data) {
		var level = data || 0;
		for (var i = 0; i < level; i++) {
			$('#userGrade').find('span').eq(i).addClass('cur');
		}
		/*$('#userGrade').on('click', function(){
			location.href = settings.baseUrl + 'page/account/levelDescription' + account.url.getParams();
		});*/
	};
	
	var _setBindData = function(data) {
		bindEvent();
		
		if (data.vbar) {
			$('#vbarno').text(data.vbar);
			$('#vbarno').parent().show();
		}
		
		$('#nickname').text(data.nickname || '未设置');
		if (data.nickname) {
			$('#nickname').attr('nick', true);
		}
		$('#phone').text(data.mobile || '未绑定');
		$('#email').text(data.email || '未绑定');
		var qqid = data.qqid ? '已绑定' : '未绑定';
		$('#qq').text(qqid);
		var bank = data.bankShow == 2 ? '已绑定' : '未绑定';
		$('#myBankCard').text(bank);
		$('#myBankCard').data('status', data.bankShow);
		$('#xcid').text(data.xcid || '未绑定');
		//var wxid = data.wxid ? '已绑定' : '未绑定';
		//$('#wx').text(wxid);
		
		//bindEvent();
	};
	var bindEvent = function() {
		/*$('#phone').parent().on('click', function(){
			wherePageToGo($('#phone'), "mobile", 'bindMobile', 'modifyMobileAuth');
		});*/
		// Bind phone
		account.event.click($('#phone').parent(), function(){
			wherePageToGo($('#phone'), "mobile", 'bindMobile', 'modifyMobileAuth');
		});
		
		// Bind modify pass
		account.event.click($('#upass').parent(), function(){
			location.href = account.url.getTemplateUrl('changePass') + account.url.getParams('type=1');
		});
		
		$('#email').parent().on('click', function(){
			wherePageToGo($('#email'), undefined, 'emailbind', 'emailchg');
		});
		$('#myBankCard').parent().on('click', function(){
			wherePageToGo($('#myBankCard'), undefined, function(){
				var uname = $('#username').text();
				_bankAuth(uname);
			}, 'bankcard');			
		});
		account.event.click($('#nickname').parent(), function(){
			var nick = '';
			if ($('#nickname').attr('nick') == 'true') {
				nick = $('#nickname').text();
			}
			location.href = account.url.getTemplateUrl('changeNickname') + account.url.getParams('nick='+encodeURIComponent(nick));
		});
		
		account.event.click($('#qq').parent(), function(){
			_qqEvent();
		});
		
		account.event.click($("#closePopup"), function(){
			//_getAccountInfo();
			$(".wx-popup").hide();
			if ($("#qqBind").val() == 'bind') {
				location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams();
			}
			
		},'touchend');
		
		account.event.click($("#closeUserPopup"), function(){
			//_getAccountInfo();
			$(".wx-popup").hide();
		},'touchend');
		
		/*$("#closePopup").on("click",function(){
			_getAccountInfo();
			$(".wx-popup").hide();
		});*/
		
		account.event.click($('#xcid').parent(), function(){
			location.href = settings.baseUrl + 'account/xcPage';
		});
	};
	
	var wherePageToGo = function($obj, param, unbindUrl, bindUrl) {
		//var uname = $('#username').text();
		if ($obj.text() == '未绑定') {
			if($.isFunction(unbindUrl)) {
				unbindUrl();
			} else {
				location.href = account.url.getTemplateUrl(unbindUrl)  + account.url.getParams();
			}
		} else {
			var params = param ? param + '='+ $obj.text() : '';
			var url_parmas = account.url.getParams(params);
			location.href = account.url.getTemplateUrl(bindUrl) + url_parmas;
		}
	};
	
	var _qqEvent = function() {
		var val = $('#qq').text();
		if (val == '未绑定') {
			var data = JSON.stringify({accessToken : $('#token').val(), source: $('#source').val()});
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxQQ'),
				data : {params : data},
				success : function(data) {
					if (data) {
						//$('#qqIframe').attr('src', data);
						//$('#tipsPopup').show();
						location.href = data;
					}
				}
			});
		} else if (val == '已绑定') {
			var data = JSON.stringify({accessToken : $('#token').val(), source: $('#source').val()});
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxToUnbindQQ'),
				data : {params : data},
				success : function(data) {
					if (data) {
						location.href=data;
					}
				}
			});			
			/*
			if (confirm("您确定解绑QQ吗？")) {
				account.ajax.execute({
					method : "POST",
					url: account.url.getAjaxUrl('ajaxUnbindQQ'),
					success : function(data) {
						if (data) {
							$('#qq').text('未绑定');
						}
					}
				});
			}
			*/
		}
	};
	
	var _bankAuth = function(uname) {
		var status = $('#myBankCard').data('status');
		if (status == 0) {
			//location.href = account.url.getTemplateUrl('bankAuth')  + account.url.getParams();
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxBankAuth'),
				data : {uname : uname},
				success : function(data) {
					if (data) {
						location.href = account.url.getTemplateUrl('bankBind')  + account.url.getParams();
					} else {
						location.href = account.url.getTemplateUrl('bankAuth')  + account.url.getParams();
					}
				}
			});
		} else {
			location.href = account.url.getTemplateUrl('bankcard')  + account.url.getParams();
		};
	};
	
	var _showUserPopup = function(){
		var pass = $('#qqLoginNewPass').val();
		if (pass) {
			$('#showUserPopup').show();
		}
		
	};
	
	var _init = function() {
		_getAccountInfo();
//		_getAccountLevel();
		_getHeaderInfo();
		account.util.analysis.analysis({pageId:1370, funId:11140});
		//_showUserPopup();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.vipShower = (function() {

	var showerTypeToUrlMap = {
		rank_CJ : {
			dayIncome : 'dayIncomeFinance',
			awardRule : 'awardRuleFinance'
		}
	};
	
	var _getInfo = function() {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		account.ajax.execute({
			url : account.url.getAjaxUrl('ajaxVipShowerInfo')
					+ encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				_bindEventBoth();
				if (data && !$.isEmptyObject(data)) {
					if (data.accState && data.accState == 1) {
						$("html,body").css({"overflow":"hidden"});
						$("#answer_xx").addClass("guang_mask_show").show();
						return;
					}
					_setBindData(data);
					_bindEvent(data);
					return;
				} else {
					account.message.showPopup("数据维护中，请稍后再来");
					return;
				}
			},
			customHandleError : function() {
				_bindEventBoth();
				account.message.showPopup("数据正在更新");
				return false;
			},
			error : function () {
				_bindEventBoth();
				account.message.showPopup("数据正在更新");
				return false;
			}
		});
	};

	var _setBindData = function(data) {
		if (data.showerType && $.trim(data.showerType) != '') {
			if (data.showerType == 'other') {
				data.showerType = 'rank_CJ';
			}
		}
		
		if(data.yesterdayIncome || data.yesterdayIncome === 0) {
			$('#yesterdayIncome').text(data.yesterdayIncome);
		} else {
			$("#yesterdayIncome").hide();
			$(".maintingTip").show();
		}
		if(data.totalIncome) {
			$('#totalIncome').text(data.totalIncome);
		}
		if(data.khIn) {
			$('#khIn').text(data.khIn);
		}
		if(data.khSuc) {
			$('#khSuc').text(data.khSuc);
		}
	};
	 
	var _bindEvent = function(data) {
		if (!data.showerType && !showerTypeToUrlMap[data.showerType]) {
			account.message.showPopup("主播无对应分类，请联系客服");
			return;
		}
		var yestDate = data.yestDate;
		var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
		if (data.yesterdayIncome || data.yesterdayIncome === 0) {
			$('#yesterdayIncomeDetailRef').on(_event, function () {
	            var param = "myDate=" + yestDate;
	            if (yestDate >= '2016-12-28') {
	            	location.href = account.url.getTemplateUrl('dayDetail161228') + account.url.getParams(param);
	            } else if (yestDate >= '2016-11-26') {
	            	location.href = account.url.getTemplateUrl('dayDetail161126') + account.url.getParams(param);
	            } else if (yestDate >= '2016-11-12') {
	            	location.href = account.url.getTemplateUrl('dayDetail') + account.url.getParams(param);
	            } else {
	            	location.href = account.url.getTemplateUrl(showerTypeToUrlMap[data.showerType].dayIncome) + account.url.getParams(param);
	            }
			});
		}
		$('#totalIncomeDetailRef').on(_event, function () {
			var param = "showerType=" + data.showerType;
			location.href = account.url.getTemplateUrl('totalIncomeDetail') + account.url.getParams(param);
		});
		$('#khDataRef').on(_event, function () {
			location.href = account.url.getTemplateUrl('khData') + account.url.getParams();
		});
//		var hasPoped = $('#hasPoped').val();
//		if (!hasPoped) {
//			$('#ruleChangeTip').addClass("guang_mask_show").show();
//		}
	};
	
	var _bindEventBoth = function() {
		var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
		$('#rulePageRef').on(_event, function () {
//			$('.kszbUpBox').removeClass("guang_mask_show").hide();
			var pageAppend = settings.getTimeFlag();
			if (!pageAppend && pageAppend !== "") {
				pageAppend = "";
			}
			location.href = account.url.getTemplateUrl("awardRuleFinance" + pageAppend) + account.url.getParams();
			return false;
		});
		$('.close').on(_event, function(){
		  $(this).closest('.kszbUpBox').removeClass("guang_mask_show").hide();
		  return false;
		});
	    $(".guang_close").on(_event, function(){
	    	$("html,body").css({"overflow":"auto"});
	        $(".guang_mask").removeClass("guang_mask_show").hide();
	        return false;
	    });
	}
	
	var _init = function() {
//		account.message.showPopup("微店数据调整中，恢复会另行通知");
		_getInfo();
	};

	return {
		init : function() {
			_init();
		}
	};
})();

account.view.richRanking = (function() {
	
	var uname = null;
	var pageIndex = null;
	var pageEnd = null;
	var showerType = null;
	var myDate = null;
	var loadEnd = null;
	
	var _prepare = function () {
		_prepareData();
		_prepareEvent();
	}
	
	var _prepareData = function () {
		uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		
		showerType = $('#showerType').val();
		if (!showerType || $.trim(showerType) == '') {
			account.message.showPopup("主播类型错误, 请联系客服");
			return;
		}
		
		myDate = $('#myDate').val();
		if (!myDate || $.trim(myDate) == '') {
			account.message.showPopup("查询日期错误, 请联系客服");
			return;
		}
		
		pageIndex = -1;
		pageEnd = -1;
		loadEnd = false;
	}
	
	var _prepareEvent = function () {
		var inLoading = false;
		
	    $('.ranking_list').dropload({
	        scrollArea : window,
	        domUp : {
	            domClass   : 'dropload-up',
	            domRefresh : '<div class="dropload-refresh">下拉刷新</div>',
	            domUpdate  : '<div class="dropload-update">释放立即刷新</div>',
	            domLoad    : '<div class="dropload-load"><span class="loading"></span>刷新中...</div>'
	        },
	        domDown : {
	            domClass   : 'dropload-down',
	            domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
	            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
	            domNoData  : '<div class="dropload-noData">已无数据</div>'
	        },
	        loadUpFn : function(me) {
                if (inLoading) {
                    return;
                }
                inLoading = true;
                _prepareData();
                _load(me, function () {
                    inLoading = false;
                });
	        },
	        loadDownFn : function(me) {
                if (inLoading) {
                    return;
                }
                inLoading = true;
                _load(me, function () {
                    inLoading = false;
                });
	        },
	        threshold : 50
	    });
	}
	
    var _load = function (me, callback) {
        pageIndex++;
        if ((pageEnd == -1) || (pageIndex <= pageEnd)) {
            if (pageEnd == -1) {
                pageIndex = 0;
            }
            var data = {pageIndex: pageIndex, pageEnd : pageEnd, showerType : showerType, myDate : myDate};
            account.ajax.execute({
                method : "POST",
                url: account.url.getAjaxUrl('ajaxShowerRank') + encodeURIComponent(encodeURIComponent(uname)) + '/',
                data : data,
                success : function(data) {
                    if (data && !$.isEmptyObject(data)) {
                        _loadData(data);
                        _loadEvent(data);
                    } else {
                    	loadEnd = true;
                        account.message.showPopup("查询数据异常，请联系客服");
                    }
                    me.resetload();
                    if (loadEnd) {
                        me.lock();
                        me.noData();
                        me.resetload();
                    } else {
                        me.unlock();
                        me.noData(false);
                    }
                    if (callback) {
                        callback();
                    }
                    return;
                },
                customHandleError : function() {
                    account.message.showPopup("服务异常，请联系客服");
                    me.resetload();
                    if (callback) {
                        callback();
                    }
                    return false;
                },
                error : function () {
                    account.message.showPopup("服务异常，请联系客服");
                    me.resetload();
                    if (callback) {
                        callback();
                    }
                    return false;
                }
            });
        } else {
        	loadEnd = true;
            me.lock();
            me.noData();
            me.resetload();
            if (callback) {
                callback();
            }
            return;
        }
    }

	var _loadData = function(data) {
        if (data.pageEnd || data.pageEnd === 0 || data.pageEnd === '0') {
            pageEnd = data.pageEnd;
        }
        var lists = '';
        if (data.myRank) {
           lists += _proc(data.myRank, 'my_ranking');
        }
        if (data.rankList) {
            for (var index = 0; index < data.rankList.length; index++) {
                var element = data.rankList[index];
                if (index < 3) {
                    lists += _proc(element, 'rich_first');
                } else {
                    lists += _proc(element);
                }
            }
        }
        if (pageIndex == 0) {
            $(window).scrollTop(0);
            $('#lists').empty();
        }
        $('#lists').append(lists);
		if (pageIndex >= pageEnd) {
			loadEnd = true;
		}
	};
    
    var _proc = function (rankEntry, rankCssType) {
        var rankStr = '<li';
        if (rankCssType) {
            rankStr += ' class="'+ rankCssType +'"';
        }
        rankStr += '>'
        if (rankCssType != 'my_ranking') {
            rankStr += '<span class="rank">';
            if (rankEntry.rankVal) {
                rankStr += rankEntry.rankVal;
            }
            rankStr += '</span>';
        }
        rankStr += '<p class="ranking_img"><img src="';
        if (rankEntry.headerIcon) {
            rankStr += rankEntry.headerIcon;
        }
        rankStr += '" /></p>';
        if (rankCssType == 'my_ranking') {
            rankStr += '<div class="ranking_myname"><p>';
            if (rankEntry.realName) {
                rankStr += rankEntry.realName;
            } else if (rankEntry.uname) {
            	rankStr += rankEntry.uname;
            }
            rankStr += '</p>';
            if (rankEntry.rankVal) {
                rankStr += '<span>第' + rankEntry.rankVal + '名</span>';
            }
            rankStr += '</div>';
        } else {
            rankStr += '<p class="ranking_name">';
            if (rankEntry.realName) {
                rankStr += rankEntry.realName;
            } else {
            	rankStr += '***';
            }
            rankStr += '</p>';
        }
        rankStr += '</li>';
        return rankStr;
    }
    
	var _loadEvent = function(data) {
	};
	
	var _init = function() {
		_prepare();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.khData = (function() {
	
	var uname = null;
	var tabArry = null;
	var tabIndex = 0;
	var dropload = null;
	var isInit = 1;
	
    var _prepare = function () {
    	_prepareData();
    	_prepareEvent();
    }
    
    var _prepareData = function () {
		uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		isInit = 1;
    	tabArry = [{pageIndex:-1,pageEnd:-1,step:3,scrollTop:0,loadEnd:false},
    	           {pageIndex:-1,pageEnd:-1,step:2,scrollTop:0,loadEnd:false},
    	           {pageIndex:-1,pageEnd:-1,step:1,scrollTop:0,loadEnd:false}]
    }
    
    var _prepareEvent = function () {
    	
        var inLoading = false;
        dropload = $('.khfxWarp').dropload({
			scrollArea : window,
			domDown : {
				domClass : 'dropload-down',
				domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
				domLoad : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
				domNoData : '<div class="dropload-noData">已无数据</div>'
			},
			loadDownFn : function(me) {
				if (inLoading) {
					return;
				}
				inLoading = true;
				_load(me, function() {
					inLoading = false;
				});
			}
		});
    	
        $('.tabHead span').on('click', function () {
        	tabArry[tabIndex].scrollTop = $(window).scrollTop();
            
            var $this = $(this);
            tabIndex = $this.index();
            $(this).addClass('active').siblings('.tabHead span').removeClass('active');
            $('.tabHead .border').css('left', $(this).offset().left + 'px');
            $('.khfxPane').eq(tabIndex).show().siblings('.khfxPane').hide();
            
            if (!tabArry[tabIndex].loadEnd) {
                dropload.unlock();
                dropload.noData(false);
            } else {
                dropload.lock('down');
                dropload.noData();
            }
            dropload.resetload();
            
            $(window).scrollTop(tabArry[tabIndex].scrollTop);
        });
    }
	
    var _load = function (me, callback) {

        tabArry[tabIndex].pageIndex ++;
        
        if ((tabArry[tabIndex].pageEnd == -1) || (tabArry[tabIndex].pageIndex <= tabArry[tabIndex].pageEnd)) {
            if (tabArry[tabIndex].pageEnd == -1) {
            	tabArry[tabIndex].pageIndex == 0;
            }
            var data = {isInit: isInit, pageIndex: tabArry[tabIndex].pageIndex, pageEnd : tabArry[tabIndex].pageEnd, step : tabArry[tabIndex].step};
            account.ajax.execute({
                method : "POST",
                url: account.url.getAjaxUrl('ajaxKhData') + encodeURIComponent(encodeURIComponent(uname)) + '/',
                data : data,
                success : function(data) {
                    if (data) {
                        _loadData(data);
                        _loadEvent(data);
                    } else {
                    	tabArry[tabIndex].loadEnd = true;
                        account.message.showPopup("查询数据异常，请联系客服");
                    }
                    me.resetload();
                    if (tabArry[tabIndex].loadEnd) {
                        me.lock();
                        me.noData();
                        me.resetload();
                    } else {
                        me.unlock();
                        me.noData(false);
                    }
                    if (callback) {
                        callback();
                    }
                    return;
                },
                customHandleError : function() {
                    account.message.showPopup("服务异常，请联系客服");
                    me.resetload();
                    if (callback) {
                        callback();
                    }
                    return false;
                },
                error : function () {
                    account.message.showPopup("服务异常，请联系客服");
                    me.resetload();
                    if (callback) {
                        callback();
                    }
                    return false;
                }
            });
        } else {
        	tabArry[tabIndex].loadEnd = true;
            me.lock();
            me.noData();
            me.resetload();
            if (callback) {
                callback();
            }
            return;
        }
    }
    
	var _loadData = function(data) {
		if (isInit == 1) {
			if (data.headerInfo) {
				if (data.headerInfo.step3) {
					$('#step3').text("（" + data.headerInfo.step3 +"）");
				}
				if (data.headerInfo.step2) {
					$('#step2').text("（" + data.headerInfo.step2 +"）");
				}
				if (data.headerInfo.step1) {
					$('#step1').text("（" + data.headerInfo.step1 +"）");
				}
			}
			isInit = 0;
		}
		if (data.pageEnd || data.pageEnd === 0 || data.pageEnd === '0') {
			tabArry[tabIndex].pageEnd = data.pageEnd;
		}
		if (data.bizDataList) {
	        var bizData = null;
	        var bizDataList = '';
	        for (var index = 0; index < data.bizDataList.length; index++) {
	        	bizData = data.bizDataList[index];
	        	bizData.operTime = bizData.operTime ? bizData.operTime : "";
	        	bizData.headerIcon = bizData.headerIcon ? bizData.headerIcon : "";
	        	bizData.nickname = bizData.nickname ? bizData.nickname : "";
	        	bizData.accNo = bizData.accNo ? bizData.accNo : "";
	        	bizData.mobile = bizData.mobile ? bizData.mobile : "";
	        	bizData.broker = bizData.broker ? bizData.broker : "";
	        	
	            if (tabIndex == 0) {
	            	bizDataList
	                += ''
	                + '<hgroup class="khfxRow">'
	                + '<header>' + bizData.operTime +'</header>'
	                + '<div class="mid">'
	                + '<img class="photo" src="'+ bizData.headerIcon +'" >'
	                + '<span><label>昵称：</label>'+ bizData.nickname +'</span>'
	                + '<span><label>账号：</label>' + bizData.accNo + '</span>'
	                + '<span><label>手机：</label>'+ bizData.mobile +'</span>'
	                + '<span><label>券商：</label>' + bizData.broker + '</span>'
	                + '</div>'
	                + '</hgroup>';
	            } else if (tabIndex == 1) {
	            	bizDataList
	                += ''
	                + '<hgroup class="khfxRow">'
	                + '<header><span>已提交资料</span>' + bizData.operTime +'</header>'
	                + '<div class="mid">'
	                + '<img class="photo" src="'+ bizData.headerIcon +'" >'
	                + '<span><label>昵称：</label>'+ bizData.nickname +'</span>'
	                + '<span><label>账号：</label>' + bizData.accNo + '</span>'
	                + '<span><label>手机：</label>'+ bizData.mobile +'</span>'
	                + '<span><label>券商：</label>' + bizData.broker + '</span>'
	                + '</div>'
	                + '</hgroup>';
	            } else if (tabIndex == 2) {
	            	bizDataList
	                += ''
	                + '<hgroup class="khfxRow">'
	                + '<header><span>已开户成功</span>' + bizData.operTime +'</header>'
	                + '<div class="mid">'
	                + '<img class="photo" src="'+ bizData.headerIcon +'" >'
	                + '<span><label>昵称：</label>'+ bizData.nickname +'</span> '
	                + '<span><label>账号：</label>' + bizData.accNo + '</span>'
	                + '<span><label>手机：</label>'+ bizData.mobile +'</span>'
	                + '<span><label>券商：</label>' + bizData.broker + '</span>'
	                + '</div>'
	                + '</hgroup>';
	            }
	        }
	        $('.khfxPane').eq(tabIndex).append(bizDataList);
		}
		if (tabArry[tabIndex].pageIndex >= tabArry[tabIndex].pageEnd) {
			tabArry[tabIndex].loadEnd = true;
		}
	};
	
	var _loadEvent = function(data) {
	};
	
	var _init = function() {
		_prepare();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.dayIncomeDetail = (function() {

	var _getInfo = function() {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		var myDate = $('#myDate').val();
		if (!myDate || $.trim(myDate) == '' || $.trim(myDate) == 'undefined') {
			account.message.showPopup("查询日期异常，请联系客服");
			return;
		}
		var showerType = $('#showerType').val();
		if (!showerType || $.trim(showerType) == '' || $.trim(showerType) == 'undefined') {
			account.message.showPopup("主播无对应类型，请联系客服");
			return;
		}
		var _data = {myDate : myDate, uname : encodeURIComponent(uname)};
		account.ajax.execute({
			method : "GET",
			url : account.url.getAjaxUrl('ajaxDayIncomeDetail'),
			data : _data,
			success : function(data) {
				_bindEventBoth();
				if (data) {
					_setBindData(data);
					_bindEvent(data);
				}
			},
			customHandleError : function(data) {
				_bindEventBoth();
				if (data.message) {
					account.message.showPopup(data.message);
				} else {
					account.message.showPopup("服务异常，请联系客服");
				}
				return false;
			},
			error : function () {
				_bindEventBoth();
				account.message.showPopup("服务异常，请联系客服");
				return false;
			}
		});
	};

	var _processLongValue = function () {
	    $(".decorate").each(function(){
	      var i=parseInt($(this).text());
	      if(i>9999){
	        var txt=i/10000;
	        var nTxt =(Math.floor(txt * 100) / 100);
	        $(this).text(nTxt+"万");
	      }
	    });
	};
	
	var _setBindData = function(data) {
		if (data.dateIncome) {
			if (data.dateIncome.itemval == 2) {
				$('#dateIncome').hide();
				$('#ask_01').addClass('exchange_link exchange_linkN');
				$('#exchangeHB').show();
			} else if (data.dateIncome.itemval == 3) {
				$('#dateIncome').text((data.dateIncome.itemIncome || "0") + "元");
				if (data.exFail && data.exFail.itemval == 1) {
					$('.tipItem').show();
				}
			}
		}
		if (data.huipiao) {
			$('#huipiaoValue').text((+data.huipiao.itemval) || "0");
			$('#huipiaoIncome').text(data.huipiao.itemIncome || "0");
			
			$('#coin').text((+data.huipiao.itemval) || "0");
		}
		if (data.KH_U) {
			$('#zqkhNumValue').text((+data.KH_U.itemval) || "0");
			$('#zqkhNumIncome').text(data.KH_U.itemIncome || "0");
		}
		if (data.HLC_U) {
			$('#lckhNumValue').text((+data.HLC_U.itemval) || "0");
			$('#lckhNumIncome').text(data.HLC_U.itemIncome || "0");
		}
		if (data.SW_money) {
			$('#rjxsValue').text((+data.SW_money.itemval) || "0");
			$('#rjxsIncome').text(data.SW_money.itemIncome || "0");
		}
		if (data.rank_CJ) {
			data.rank_CJ.itemval = data.rank_CJ.itemval || 0;
			if (data.rank_CJ.itemval) {
				$('#rankValue').text("第" + (+data.rank_CJ.itemval) + "名");
			}
			data.rank_CJ.itemIncome = data.rank_CJ.itemIncome || 0;
			$('#rankIncome').text(data.rank_CJ.itemIncome);
		}
		if (data.hgxs) {
			$('#hgxs').text((+data.hgxs.itemval) || "--");
		}
		if (data.yxyhxs) {
			data.yxyhxs.itemval = +data.yxyhxs.itemval;
//			if(!isNaN(data.yxyhxs.itemval) && data.yxyhxs.itemval < 0.6){
//				$(".reason_tip").show();
//			}
			$('#yxyhxs').text(data.yxyhxs.itemval || "--");
		}
		if (data.zyxs) {
			$('#zyxs').text((+data.zyxs.itemval) || "--");
		}
		if (data.bcxs) {
			$('#bcxs').text((+data.bcxs.itemval) || "--");
		}
		if (data.yqxs) {
			$('#yqxs').text((+data.yqxs.itemval) || "--");
		}
		if (data.hour) {
			data.hour.itemval = data.hour.itemval || 0;
			$('#showTime').text(data.hour.itemval);
			if(data.hour.itemIncome && data.hour.itemIncome < 0) {
				$(".reason_tip").show();
			}
		}
		_processLongValue();
	};
	
	var _bindEvent = function(data) {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
		$('#dayRankRef').on(_event, function() {
			var param = "showerType=" + $('#showerType').val();
			param += '&myDate=' + $('#myDate').val();
			location.href = account.url.getTemplateUrl('richRanking') + account.url.getParams(param);
		});
		$('#hgxsRef').on(_event, function() {
			var param = 'myDate=' + $('#myDate').val();
			param += "&sname=" + $('#uname').val();
			location.href = account.url.getTemplateUrl('qualified') + account.url.getParams(param);
		});
		$('#exchangeHB').on(_event, function() {
			if (data.walletUrl) {
				location.href = account.util.buildOtherSiteUrl(data.walletUrl);
			} else {
				account.message.showPopup("跳转钱包页面出错，请联系客服");
			}
			return false;
		});
	};

	var _bindEventBoth = function() {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
	    $(".ranking_tip").on(_event,function(){
	    	$("html,body").css({"overflow":"hidden"});
	        $(".guang_mask").addClass("guang_mask_show");
	        var id_name=$(this).attr("id").match(/\d+(\.\d+)?/g);
	        id_name = id_name[0];
//	        if (id_name === '05') {
//				var d0 = new Date();
//				var d1 = new Date(2016,7,24,0,0,0);
//				if (d0 < d1) {
//					id_name = '05a';
//				}
//	        }
	        $("#answer_"+id_name).show();
	        return false;
	    });
	    $(".guang_close").on(_event, function(){
	    	$("html,body").css({"overflow":"auto"});
	        $(".guang_mask").removeClass("guang_mask_show").hide();
	        return false;
	    });
	}
	
	var _init = function() {
		_getInfo();
	};

	return {
		init : function() {
			_init();
		}
	};
})();

account.view.dayDetail = (function() {

	var _getInfo = function() {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		var myDate = $('#myDate').val();
		if (!myDate || $.trim(myDate) == '' || $.trim(myDate) == 'undefined') {
			account.message.showPopup("查询日期异常，请联系客服");
			return;
		}
		var showerType = $('#showerType').val();
		if (!showerType || $.trim(showerType) == '' || $.trim(showerType) == 'undefined') {
			account.message.showPopup("主播无对应类型，请联系客服");
			return;
		}
		var _data = {myDate : myDate, uname : encodeURIComponent(uname)};
		account.ajax.execute({
			method : "GET",
			url : account.url.getAjaxUrl('ajaxDayIncomeDetail'),
			data : _data,
			success : function(data) {
				_bindEventBoth();
				if (data) {
					_setBindData(data);
					_bindEvent(data);
				}
			},
			customHandleError : function(data) {
				_bindEventBoth();
				if (data.message) {
					account.message.showPopup(data.message);
				} else {
					account.message.showPopup("服务异常，请联系客服");
				}
				return false;
			},
			error : function () {
				_bindEventBoth();
				account.message.showPopup("服务异常，请联系客服");
				return false;
			}
		});
	};

	var _processLongValue = function () {
	    $(".decorate").each(function(){
	      var i=parseInt($(this).text());
	      if(i>9999){
	        var txt=i/10000;
	        var nTxt =(Math.floor(txt * 100) / 100);
	        $(this).text(nTxt+"万");
	      }
	    });
	};
	
	var _setBindData = function(data) {
		if (data.dataState === 0 || data.dataState == 4) {
			return;
		} else if (data.dataState == 2 || data.dataState == 3) {
			$('#dateIncome').hide();
			var dataStateTip = '';
			var deadline = '';
			if (data.dataState == 2) {
				if (data.deadline) {
					deadline = data.deadline.split(' ')[1].split(':').slice(0, 2).join(':') + '前';
				}
				dataStateTip = '请' + deadline + '最终确定获币or获钱';
			} else {
				dataStateTip = '排名已出，后台统计中';
			}
			$('#dataStateTip').text(dataStateTip).show();
		} else {
			if (data.dateIncome) {
				var dateIncomeVal = +(data.dateIncome.itemIncome || "0");
				var dateIncomeType = data.dateIncome.itemval;
				if (dateIncomeType == 2 || dateIncomeType == 8 || dateIncomeType == 9) {
					$('#dateIncome').text(dateIncomeVal + "币");
				} else if (dateIncomeType == 3 || dateIncomeType == 4 || dateIncomeType == 5) {
					$('#dateIncome').text(dateIncomeVal + "元");
				}
			}
			if (data.fan_bi && data.fan_bi.itemval) {
				$('#drawback').text(data.fan_bi.itemval).parent().show();
			}
			if (data.exFail && data.exFail.itemval == 1) {
				$('#exFailTip').show();
			}
		}
		if (data.huipiao) {
			$('#huipiaoValue').text(data.huipiao.itemval || "0");
			$('#coin').text((+data.huipiao.itemval) || "0");
		}
		if (data.HLC_money) {
			$('#lckhNumValue').text(data.HLC_money.itemval || "0");
		}
		if (data.SW_money) {
			$('#rjxsValue').text(data.SW_money.itemval || "0");
		}
		if (data.rank_CJ) {
			data.rank_CJ.itemval = data.rank_CJ.itemval || 0;
			if (data.rank_CJ.itemval) {
				$('#rankValue').text("第" + (+data.rank_CJ.itemval) + "名");
			}
			data.rank_CJ.itemIncome = data.rank_CJ.itemIncome || 0;
			$('#rankIncome').text(data.rank_CJ.itemIncome);
		}
		if (data.rank) {
			if(data.rank.itemIncome && data.rank.itemIncome < 0) {
				$("#tip2").show();
			}
		}
		if (data.hgxs) {
			$('#hgxs').text((+data.hgxs.itemval) || "--");
		}
		if (data.yxyhxs) {
			data.yxyhxs.itemval = +data.yxyhxs.itemval;
//			if(!isNaN(data.yxyhxs.itemval) && data.yxyhxs.itemval < 0.6){
//				$(".reason_tip").show();
//			}
			$('#yxyhxs').text(data.yxyhxs.itemval || "--");
		}
		if (data.zyxs) {
			$('#zyxs').text((+data.zyxs.itemval) || "--");
		}
		if (data.bcxs) {
			$('#bcxs').text((+data.bcxs.itemval) || "--");
		}
		if (data.yqxs) {
			$('#yqxs').text((+data.yqxs.itemval) || "--");
		}
		if (data.hour) {
			data.hour.itemval = data.hour.itemval || 0;
			$('#showTime').text(data.hour.itemval);
			if(data.hour.itemIncome && data.hour.itemIncome < 0) {
				$("#tip1").show();
			}
		}
		_processLongValue();
	};
	
	var _bindEvent = function(data) {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
		$('#dayRankRef').on(_event, function() {
			var param = "showerType=" + $('#showerType').val();
			param += '&myDate=' + $('#myDate').val();
			location.href = account.url.getTemplateUrl('richRanking') + account.url.getParams(param);
		});
		$('#hgxsRef').on(_event, function() {
			var param = 'myDate=' + $('#myDate').val();
			param += "&sname=" + $('#uname').val();
			location.href = account.url.getTemplateUrl('qualified') + account.url.getParams(param);
		});
		$('#exchangeHB').on(_event, function() {
			if (data.walletUrl) {
				location.href = account.util.buildOtherSiteUrl(data.walletUrl);
			} else {
				account.message.showPopup("跳转钱包页面出错，请联系客服");
			}
			return false;
		});
	};

	var _bindEventBoth = function() {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = isSupportTouch ? 'tap' : 'click';
	    $(".ranking_tip").on(_event,function(){
	    	$("html,body").css({"overflow":"hidden"});
	        $(".guang_mask").addClass("guang_mask_show");
	        var id_name=$(this).attr("id").match(/\d+(\.\d+)?/g);
	        id_name = id_name[0];
//	        if (id_name === '05') {
//				var d0 = new Date();
//				var d1 = new Date(2016,7,24,0,0,0);
//				if (d0 < d1) {
//					id_name = '05a';
//				}
//	        }
	        $("#answer_"+id_name).show();
	        return false;
	    });
	    $(".guang_close").on(_event, function(){
	    	$("html,body").css({"overflow":"auto"});
	        $(".guang_mask").removeClass("guang_mask_show").hide();
	        return false;
	    });
	}
	
	var _init = function() {
		_getInfo();
	};

	return {
		init : function() {
			_init();
		}
	};
})();

account.view.qualified = (function() {
	var _getInfo = function() {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		var sname = $('#sname').val();
		if (!sname || $.trim(sname) == '') {
			account.message.showPopup("所查用户名异常，请联系客服");
			return;
		}
		var myDate = $('#myDate').val();
		var _data = {uname : encodeURIComponent(uname), sname : encodeURIComponent(sname), myDate : myDate};
		account.ajax.execute({
			method : "GET",
			url : account.url.getAjaxUrl('ajaxQualified'),
			data : _data,
			success : function(data) {
				_bindEventBoth();
				if (data && !$.isEmptyObject(data)) {
					_setBindData(data);
					_bindEvent(data);
				}
			},
			customHandleError : function() {
				_bindEventBoth();
				account.message.showPopup("服务异常，请联系客服");
				return false;
			},
			error : function () {
				_bindEventBoth();
				account.message.showPopup("服务异常，请联系客服");
				return false;
			}
		});
	};
	
	var _setBindData = function(data) {
		if (data.total && data.total.hgxs) {
			$('#hgxs').text(data.total.hgxs || "");
		}
		if (data.detailList) {
            var detailList = $('#detailList');
            var tmp = '';
            for (var index = 0; index < data.detailList.length; index++) {
                var element = data.detailList[index];
                tmp = "<dd><span>";
            	tmp += element.score ? element.score : "";
            	tmp += "<em>";
            	tmp += element.ctime ? element.ctime : "";
            	tmp += "</em></span><strong>";
            	tmp += element.descr ? element.descr : "";
            	tmp += "</strong></dd>";
                detailList.append(tmp);
            }
		}
	};
	
	var _bindEventBoth = function() {
		$(".ranking_tip").on("click", function() {
			$(".guang_mask").addClass("guang_mask_show");
		});
		$("#ask_04").on("click", function() {
			$("#answer_04").show();
		});
		$(".guang_close").on("click", function() {
			$(".guang_mask").removeClass("guang_mask_show").hide();
		});
	}
	
	var _bindEvent = function(data) {
	};
	
	var _init = function() {
		_getInfo();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


account.view.totalIncomeDetail = (function() {
	
	var showerType = null;
	var showerTypeToUrlMap = {
		rank_CJ : {
			dayIncome : 'dayIncomeFinance'
		}
	};
	
	var _getInfo = function () {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showPopup("用户名不能为空");
			return;
		}
		
		showerType = $('#showerType').val();
		if (!showerType || $.trim(showerType) == '' || !showerTypeToUrlMap[showerType]) {
			account.message.showPopup("主播类型错误, 请联系客服");
			return;
		}
		
		account.ajax.execute({
			url : account.url.getAjaxUrl('ajaxTotalIncomeDetail')
					+ encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				if (data && !$.isEmptyObject(data)) {
					if (data.accState && data.accState > 0) {
						$("html,body").css({"overflow":"hidden"});
						$("#answer_xx").addClass("guang_mask_show").show();
						return;
					}
					_setBindData(data);
					_bindEvent(data);
				} else {
					account.message.showPopup("数据统计中，请稍后再来");
					return;
				}
			},
			customHandleError : function() {
				account.message.showPopup("数据正在更新");
				return false;
			},
			error : function () {
				account.message.showPopup("数据正在更新");
				return false;
			}
		});
	};
	
	var _buildItem = function (index, item) {
		// 日期
		var xdate = item.xdate;
		// 数据状态，0：无数据；1：完全出数；2：部分出数；3；出数中（可访问）；4：出数中（不可访问）
		var dataState = item.dataState;
		// 结算状态，0：预约兑现；1：预约兑币；2：已兑币；3：已兑现；4：在途；5：待兑现；8：已过期；9：待兑币；
		var countState = item.countState;
		// 截止时间
		var deadline = item.deadline;
		// 收入
		var income = item.income;
		
		// 展示的日期
		var dateOfView = '';
		if (index != 0) {
			dateOfView = new Date(account.util.strFormat(xdate));
			dateOfView = (dateOfView.getMonth()+1) + '月' + dateOfView.getDate() + '日';
		} else {
			dateOfView = "今天";
		}
		
		// 截止时间
		if (deadline) {
			deadline = deadline.split(' ')[1].split(':').slice(0, 2).join(':');
		}
		if (!deadline) {
			deadline = '';
		}
		
		// 是否可编辑（有按钮）
		var isEdit = 0;
		if (dataState === 0 || dataState == 2) {
			isEdit = 1;
		}
		
		if (dataState != 1) {
			return '';
		}
		
		var itemContext = '';
		itemContext += '<dd data-date="' + xdate + '" data-state="'  + dataState + '">';
		itemContext += '<strong>' + dateOfView + '</strong>';
		if (isEdit) {
			if (countState === 0) { // 预约兑现
				itemContext += '<p class="db_btn active">获钱</p>';
			} else if (countState == 1) { // 预约兑币
				itemContext += '<p class="db_btn">获币</p>';
			}
			if (dataState === 0) {
				itemContext += '<p class="db_text">数据统计中</p>';
			} else if (dataState == 2) {
				if (deadline) {
					deadline = deadline + '前';
				}
				itemContext += '<p class="db_text">排名已出，请' + deadline +'最终确认</p>';
			}
		} else {
			itemContext += '<span';
			if (dataState == 1) {
				itemContext += '>';
			} else if (dataState == 3 || dataState == 4) {
				itemContext += ' class="span_mt">';
			}
			if (countState === 0 || countState == 1) {
				if (dataState == 3) {
					itemContext += '<i class="my_money">排名已出，后台统计中</i></span>';
				} else {
					itemContext += '<i>数据统计中</i></span>';
				}
			} else if (countState == 2) {
				itemContext += '<i class="my_money">' + income + '币</i><em class="myRed">已兑币</em></span>';
			} else if (countState == 3) {
				itemContext += '<i class="my_money">' + income + '元</i><em class="myRed">已转入钱包</em></span>';
			} else if (countState == 4) {
				itemContext += '<i class="my_money">' + income + '元</i><em class="myRed">在途</em></span>';
			} else if (countState == 5) {
				itemContext += '<i class="my_money">' + income + '元</i><em class="myRed">待转入钱包</em></span>';
			} else if (countState == 8) {
				itemContext += '<i class="my_money">' + income + '币</i><em class="myRed">已过期</em></span>';
			} else if (countState == 9) {
				itemContext += '<i class="my_money">' + income + '币</i><em class="myRed">待兑币</em></span>';
			}
		}
		return itemContext;
	}
	
	var _buildList = function (incomeList) {
		var $elemet = $('#dateIncomeList');
		if ($elemet) {
			for (var index = 0; index < incomeList.length; index++) {
				$elemet.append(_buildItem(index, incomeList[index]));
			}
			$elemet.append('<dd style="text-align: center;">仅支持查询最近20天的记录</dd>');
		}
	}
	
	var _setBindData = function(data) {
		if (!data.totalIncome && data.totalIncome !== 0) {
			data.totalIncome = "数据统计中";
		}
		$('#totalIncome').text(data.totalIncome);
        if (data.incomeList) {
        	_buildList(data.incomeList);
        }
	};

	var _bindEventPre = function() {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = 'click';
		
		$(".giverule_tip").on(_event, function() {
			var pageAppend = settings.getTimeFlag();
			if (!pageAppend && pageAppend !== "") {
				pageAppend = "";
			}
			location.href = account.url.getTemplateUrl("awardRuleFinance" + pageAppend) + account.url.getParams();
			return false;
		});
	    $(".guang_mask,.guang_close,.exchange_btn a").on(_event,function(){
	        $(".guang_mask").removeClass("guang_mask_show").hide();
	        $("body").height("auto").removeClass("overhide");
	      });
	      $(".guang_pop").on(_event,function(){
	        return false;
	      });
	};
	
	var _active = function(proType, date) {
		var $element = $(".db_btn");
		if ($element.hasClass('disabled')) {
			event.preventDefault();
			return;
		}
		$element.addClass('disabled');
		var uname = $('#uname').val();
		var data = {date : date, proType : proType};
		account.ajax.execute({
			method : "POST",
			url : account.url.getAjaxUrl('ajaxExchange') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			data : data,
			success : function(data) {
				if (data && !$.isEmptyObject(data)) {
					if (data.activeState == 1) {
						if (proType === 0) {
					      $('dd[data-date="'+date+'"]').find(".db_btn").addClass("active");
					      $('dd[data-date="'+date+'"]').find(".db_btn").text("获钱");
						} else if (proType == -1) {
							$('dd[data-date="'+date+'"]').find(".db_btn").removeClass("active");
						    $('dd[data-date="'+date+'"]').find(".db_btn").text("获币");
						}
					} else {
						switch (data.activeState) {
						case 2 : account.message.showPopup("已兑过钱，不能重复兑换");break;
						case 3 : account.message.showPopup("页面过时，请重新刷新");break;
						case 4 : account.message.showPopup("未绑定理财账户");break;
						case 5 : account.message.showPopup("亲爱的用户，因为系统数据异常的原因，我们向您的银行卡多打了一部分钱（详见钱包提示）。为了避免打扰到您，需要从您的直播收入中抵扣这部分款项。在抵扣结束后，我们再向您开放慧币兑换功能。");break;
						case 6 : account.message.showPopup("您的账户出现疑似影响安全的行为，暂时冻结提款，不影响您的正常直播，经最终确认无违规会给予解禁，请时刻留意页面动态，给您带来不便，敬请谅解。");break;
						default : break;
						}
					}
				} else {
					account.message.showPopup("服务繁忙，请稍后再试.");
				}
				$(".db_btn").removeClass('disabled');
				return;
			},
			customHandleError : function() {
				account.message.showPopup("服务繁忙，请稍后再试");
				$(".db_btn").removeClass('disabled');
				return false;
			},
			error : function () {
				account.message.showPopup("服务繁忙，请稍后再试");
				$(".db_btn").removeClass('disabled');
				return false;
			}
		});
	};
	
	var _bindEvent = function(data) {
        var isSupportTouch = "ontouchend" in document ? true : false;
		var _event = 'click';
		$(".db_btn").on(_event, function() {
			event.stopPropagation();
			var _t = $(this);
			if (_t.hasClass('disabled')) {
				event.preventDefault();
				return false;
			}
			if (data.isBindFinAcc === '1') {
				var id=$(this).parent().attr("data-date");
				if (!_t.hasClass("active")) {
					$("#answer_02").attr("data-date",id).find(".exchange_tip p em").text("现金");
				} else {
					$("#answer_02").attr("data-date",id).find(".exchange_tip p em").text("慧币");
				}
				$("#answer_02").attr("data-date",id).addClass("guang_mask_show").show();
			} else {
				$('article.kszbUpBox').addClass("guang_mask_show").show();
			}
			$("body").height($(window).height()).addClass("overhide");
			return false;
		});
		  
		if (!data.isBindFinAcc) {
			$('.btnBank, .close').on(_event, function () {
				$('article.kszbUpBox').removeClass("guang_mask_show").hide();
				$("body").height("auto").removeClass("overhide");
				if ($(this).hasClass('btnBank')) {
					if (data.hlcUrl) {
						location.href = account.util.buildOtherSiteUrl(data.hlcUrl);
					} else {
						account.message.showPopup("跳转绑定理财账户页面出错，请联系客服");
					}
				}
				return false;
			});
		} else {
			$("#answer_02 a.qr").on(_event,function(){
			    var id=$("#answer_02").attr("data-date");
			    if(!$('dd[data-date="'+id+'"]').find(".db_btn").hasClass("active")){
			      _active(0, id);
			    }else{
			      _active(-1, id);
			    }
			 });
		};
        $('#dateIncomeList').children('dd').on(_event, function () {
            var date = $(this).data('date');
            var state = $(this).data('state');
            if (state == '2' || state == '3' || state == '1') {
                var param='myDate=' + date + '&state=' + state;
                if (date >= '2016-12-28') {
	            	location.href = account.url.getTemplateUrl('dayDetail161228') + account.url.getParams(param);
	            } else if (date >= '2016-11-26') {
                	location.href = account.url.getTemplateUrl('dayDetail161126') + account.url.getParams(param);
                } else if (date >= '2016-11-12') {
	            	location.href = account.url.getTemplateUrl('dayDetail') + account.url.getParams(param);
	            } else {
	            	location.href = account.url.getTemplateUrl(showerTypeToUrlMap[showerType].dayIncome) + account.url.getParams(param);
	            }
            }
            return false;
        });
	};
	
	var _init = function() {
		_getInfo();
		_bindEventPre();
	};

	return {
		init : function() {
			_init();
		}
	};
})();


/**
 * 绑定手机
*/
account.view.bindMobile = (function(){
	var click_times = 0 ;
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
	};
	var _changePass = function(){
		location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams()+'&findPass=findPass';
	};
	var _sendSms = function() {
		var $mobile = $('#mobile');
		account.util.valideMobile($mobile, function(){
			account.util.sendSMS('mobile', $mobile.val(), null, {action : account.sms.prefix + account.sms.bindMobile, uname : $('#uname').val(), pageId :1400, funId:11170});
		});
	};
	
	var _submitBindMobile = function(element) {
		var mobile = $('#mobile').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return ;
		}
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		var afs_scene = $('#afs_scene').val();
		var afs_token = $('#afs_token').val();
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		var data = {mobile : mobile, code : code, afs_scene : afs_scene, afs_token : afs_token};
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBindMobile') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			data : data,
			analysis : {pageId : 1400, funId : 11180},
			success : function(data) {
				if (data) {
					var param = '';
					if ($('#source').val() == 5) {
					 param = "91?type=300&mobile="+mobile;
					}
					location.href = account.url.getTemplateUrl('bindMobileSuccess') + account.url.getParams(param);
				}
			}
		});
	};
	
	var _bindEvent = function() {
//		$('#mobile').off('blur').on('blur', function(){
//			var $mobile = $(this);
//			setTimeout(function(){
//				_mobileValidate($mobile);
//			},150);
//		});
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			_sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
		 $('#changePass').on('click', function(){
			 _changePass();
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 解绑手机
*/
account.view.unbindMobile = (function() {
	var click_time = 0;
	var _sendSms = function() {
		account.util.sendSMS('uname', $('#uname').val(), null, {action : account.sms.prefix + account.sms.unbindMobile, uname:$('#uname').val(), pageId :1440, funId:11240});
	};
	
	var _submitBindMobile = function(element) {
		click_time ++;
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnbindMobile'),
			contentType:'application/json',
			data : JSON.stringify({uname : uname, code : code, verifyPattern : 'mobile'}),
			analysis : {pageId : 1440, funId : 11250},
			success : function(data) {
				if (data) {
					var param = '';
					if ($('#source').val() == 5) {
					 param = "91?type=300&mobile=''";
					}
					location.href = account.url.getTemplateUrl('unbindMobileSucc') + account.url.getParams(param);
				}
			}
		});
	};
	var click_time_email = 2;
	var _unbindMobileByEmail = function(ele) {
		var $ele = $(ele);
		click_time_email ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var data = JSON.stringify(mailData);
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_email,
			waitTime : 3,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			analysis : {pageId : 1440, funId : 11260},
			data : JSON.stringify({uname: uname, method : 'unbind', verifyPattern : 'email', data : data}),
			customHandleError : function(data){
				// 未绑定邮箱
				if (data.code = 'A508') {
					account.message.showPopup('您未绑定邮箱，请先绑定邮箱');
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('unbindMobileByEmailSucc') + account.url.getParams();
				};
			}
		});
	};
	var click_time_id = 2;
	var _unbindMobileById = function(ele) {
		var $ele = $(ele);
		click_time_id ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_id,
			waitTime : 3,
			method : "GET",
			url: account.url.getAjaxUrl('ajaxModifyMobileById') + '/' +encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function(data){
				// 身份认证失败
				if (data.code = 'A704') {
					account.message.showPopup('您还没校验身份证号');
					//account.message.showErrorMessage('您还没校验身份证号');
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('unbindMobileById') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			 _sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
		 $('#unbindMobileByEmail').on('click', function(){
			 _unbindMobileByEmail(this);
		 });
		 
		 $('#unbindMobileById').on('click', function(){
			 _unbindMobileById(this);
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 修改手机--身份验证
*/
account.view.modifyMobileAuth = (function(){
	//var uname = $('#uname').val();
	var click_time = 0;
	var submitData = function(element) {
		var uname = $('#uname').val();
		click_time ++;
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			analysis : {pageId : 1410, funId : 11200},
			data : JSON.stringify({uname : uname, code : code, verifyPattern : 'mobile'}),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('modifyMobile') + account.url.getParams('token=' + data);
				}
			}
		});
	};
//	var click_time_email = 2;
//	var modifyMobileByEmail = function(ele) {
//		var uname = $('#uname').val();
//		var $ele = $(ele);
//		click_time_email ++;
//		if ($ele.hasClass('disabled')) {
//			if (event.preventDefault) {
//				event.preventDefault();
//			} else {
//				event.returnValue = false;
//			}
//			return ;
//		}
//		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
//		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
//		if (redirectUri) {
//			mailData.redirect_uri = redirectUri;
//		}
//		var data = JSON.stringify(mailData);
//		account.ajax.execute({
//			$ele : $ele,
//			click_times : click_time_email,
//			waitTime : 3,
//			method : "POST",
//			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
//			contentType:'application/json',
//			analysis : {pageId : 1410, funId : 11210},
//			data : JSON.stringify({uname : uname, verifyPattern : 'email', data : data, method:'bind'}),
//			customHandleError : function(data){
//				// 未绑定邮箱
//				if (data.code = 'A508') {
//					account.message.showPopup('您未绑定邮箱，请先绑定邮箱');
//					return false;
//				}
//				return true;
//			},
//			success : function(data) {
//				if (data) {
//					location.href = account.url.getTemplateUrl('modifyMobileByEmailSucc') + account.url.getParams();
//				}
//			}
//		});
//	};
//	var click_time_id = 2;
//	var modifyMobileById = function(ele) {
//		var uname = $('#uname').val();
//		var $ele = $(ele);
//		click_time_id ++;
//		if ($ele.hasClass('disabled')) {
//			if (event.preventDefault) {
//				event.preventDefault();
//			} else {
//				event.returnValue = false;
//			}
//			return ;
//		}
//		account.ajax.execute({
//			$ele : $ele,
//			click_times : click_time_id,
//			waitTime : 3,
//			method : "GET",
//			url: account.url.getAjaxUrl('ajaxModifyMobileById') + '/' +encodeURIComponent(encodeURIComponent(uname)) + '/',
//			customHandleError : function(data){
//				// 身份认证失败
//				if (data.code = 'A704') {
//					account.message.showPopup('您还没校验身份证号');
//					//account.message.showErrorMessage('您还没校验身份证号');
//					return false;
//				}
//				return true;
//			},
//			success : function(data) {
//				if (data) {
//					location.href = account.url.getTemplateUrl('modifyMobileById') + account.url.getParams();
//				}
//			}
//		});
//	};
	
	var _bindEvent = function() {
		$('#sendCode').on('click', function(){
			var uname = $('#uname').val();
			account.util.sendSMS('uname', uname, null, {action : account.sms.prefix + account.sms.modifyMobile, uname : uname, pageId :1410, funId:11190});
		});
		
		$('#next').on('click', function(){
			submitData(this);
		});
		
//		$('#modifyMobileByEmail').on('click', function(){
//			modifyMobileByEmail(this);
//		});
		
//		$('#modifyMobileById').on('click', function(){
//			modifyMobileById(this);
//		});
		
		$("#unbindMobile").on('click', function(){
			var mobile = $("#mobile").text();
			location.href = account.url.getTemplateUrl('unbindMobile') + account.url.getParams('mobile='+mobile);
		});
		
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.sendMailAgain = (function(){
	
	var _setSendEmailBtn = function() {
		var time = settings.emailWaitTime;
		var timer;
		var _timeFun = function() {
			$('#sendEmailAgain').text('重新发送邮件(' + time + '秒...)');
			$('#sendEmailAgain').addClass('disable-link');
			if (time == 0) {
				clearTimeout(timer);
				$('#sendEmailAgain').removeClass('disable-link');
				$('#sendEmailAgain').text('重新发送邮件');
				$('#errorMessage').text('');
				return ;
			}
			timer = setTimeout(_timeFun, 1000);
			time--;
		};
		_timeFun();
	};
	
	var sendMailAgain = function(ele) {
		var uname = $('#uname').val();
		if (!uname) {
			uname = '';
		}
		var email = $('#mail').val();
		if (!email) {
			email = '';
		}
		var $ele = $(ele);
		if ($ele.hasClass('disable-link')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var data = JSON.stringify(mailData);
		account.ajax.execute({
			beforeSend : function(){
				$ele.addClass('disable-link');
			},
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			data : JSON.stringify({uname : uname, email: email, verifyPattern : 'email', data : data, method : $('#method').val()}),
			success : function(data) {
				if (data) {
					$('#errorMessage').text("重新发送成功");
					_setSendEmailBtn();
				}
			},
			customHandleError : function() {
				_setSendEmailBtn();
				return true;
			}
		});
	};
	
	
	var _bindEvent = function() {
		$('#sendEmailAgain').on('click', function(){
			sendMailAgain(this);
		});
		
		
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 修改手机--修改
*/
account.view.modifyMobile = (function(){
	var click_time = 0;
	var submitData = function(element) {
		var uname = $('#uname').val();
		click_time ++ ;
		var mobile = $('#mobile').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return ;
		}
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		
		var accessToken = $('#token').val();
		var fromMail = $('#emailCode').val();
		var  p = '';
		if (fromMail) {
			p = '1';
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobile') + encodeURIComponent(encodeURIComponent(uname)) + '/',
			data : {uname : uname, code : code, mobile : mobile, accessToken : accessToken, pattern:'mobile', p : p},
			success : function(data) {
				if (data) {
					var param = '';
					if ($('#source').val() == 5) {
					 param = "91?type=300&mobile="+mobile;
					}
					location.href = account.url.getTemplateUrl('modifyMobileSucc') + account.url.getParams(param);
				}
			}
		});
	};
	
	var _changePass = function(){
		location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams();
	};
	
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
	};
	
	var _sendSms = function() {
		var $mobile = $('#mobile');
		account.util.valideMobile($mobile, function(){
			var data = {action : account.sms.prefix + account.sms.modifyMobile, uname:$('#uname').val()};
			var code = $('#emailCode').val();
			if (code) {
				data.p ='1';
			}
			account.util.sendSMS('mobile', $mobile.val(), undefined, data);
		});
	};
	
	var _bindEvent = function() {
		
		$('#mobile').off('blur').on('blur', function(){
			setTimeout(function(){
				_mobileValidate($('#mobile'));
			},150);
		});
		
		$('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			_sendSms();
		});
		
		$('#next').on('click', function(){
			submitData(this);
		});
		
		 $('#changePass').on('click', function(){
			 _changePass();
		 });
	};
	
	var _checkEmail = function() {
		var code = $('#emailCode').val();
		if (!code) {
			$('#main1').show();
			$("#weixin_layer").hide();
			return ;
		}
		setTimeout(function(){
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxModifyMobileByEmail'),
				data : {code : code},
				analysis : {pageId : 1420, funId : 11220},
				customHandleError : function(data){
					$('#message').text(data.message);
					$('#emailMain').show();
					return false;
				},
				success : function(data) {
					if (data) {
						$('#token').val(data.token);
						$('#uname').val(data.uname);
						$('#main1').show();
					}else {
						$('#emailMain').show();
					}
				}
			});
		}, 1000);
		
	};
	
	var _init = function() {
		_checkEmail();
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 修改密码
*/
account.view.changePass = (function(){
	
	var _passwordValide = function() {
		var newpass = $('#newPass').val();
		var comfirmPass = $('#comfirmPass').val();
		if (!newpass || $.trim(newpass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		if ($.trim(newpass).length < 6) {
			account.message.showErrorMessage('密码长度不能小于6');
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(newpass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return false;
		}
		
		if (account.util.getPasswordLevel(newpass) < 2) {
			account.message.showErrorMessage("密码强度太低，请重新设置");
			return false;
		}
		
		if (!comfirmPass || $.trim(comfirmPass) == '') {
			account.message.showErrorMessage('确认密码不能为空');
			return false;
		}
		
		if ($.trim(comfirmPass) != $.trim(newpass)) {
			account.message.showErrorMessage('两次密码不一致');
			return false;
		}
		
		return newpass;
	};
	
	var _showPass = function() {
		if ($('#switchPass').attr('show') == 'true') {
			$('#newPass').attr('type', 'text');
			$('#switchPass').attr('show', 'false');
			$('#switchPass').attr('class', 'upass-switch-show');
		} else {
			$('#newPass').attr('type', 'password');
			$('#switchPass').attr('show', 'true');
			$('#switchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var _oldShowPass = function() {
		if ($('#oldSwitchPass').attr('show') == 'true') {
			$('#oldPass').attr('type', 'text');
			$('#oldSwitchPass').attr('show', 'false');
			$('#oldSwitchPass').attr('class', 'upass-switch-show');
		} else {
			$('#oldPass').attr('type', 'password');
			$('#oldSwitchPass').attr('show', 'true');
			$('#oldSwitchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var click_time = 0;
	var _submitData = function(element) {
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		click_time ++;
		
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		var passValide = _passwordValide();
		if (!passValide) {
			return ;
		}
		
		var source = $('#source').val();
		var reset = $('#rest').val();
		var uname = $('#uname').val();
		var data = {source : source, newPass : passValide, code : code, username : uname};
		if (reset) {
			data.reset = 1;
			data.token = account.util.getPageParamsBykey('accessToken') || account.util.getPageParamsBykey('token');
		} else {
			if (source != 25) {
				data.oldPass = $('#oldPass').val();
				if (!data.oldPass || $.trim(data.oldPass) == '') {
					account.message.showErrorMessage('旧密码不能为空');
					return false;
				}
			}
		}
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirecUri = redirectUri;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxChangePass'),
			analysis : {pageId : 1390, funId : 11160},
			data : data,
			success : function(data) {
				if (data.result) {
					if (data.url) {
						if (data.url.indexOf("http") != -1) {
							location.href = data.url;
							return ;
						}
						location.href = settings.baseUrl + data.url;
						return ;
					}
					var title = $('#title').val();
					var type = $('#type').val();
					var param = 'title='+title;
					if (type) {
						param += '&type='+type;
					}
					if (data.u) {
						param += '&91?type=100&pwd='+data.u;
					}
					location.href = account.url.getTemplateUrl('changePassSucc') + account.url.getParams(param);
				}
			}
		});
		
	};
	
	var _setPasswordLevel = function() {
		var pass = $('#newPass').val();
		if (!/^[0-9a-zA-Z]{1,}$/.test(pass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return ;
		}
		var level = account.util.getPasswordLevel(pass);
		var $spans = $('span', '#passStrength');
		$spans.removeClass('cur');
		var length = $spans.length;
		if (level == 0) {
			$spans.eq(length - 1).addClass('cur');
		}
		var index = length - 1;
		for (var i = 0; i < level; i++) {
			$spans.eq(index - i).addClass('cur');
		}
		account.message.clearErrorMessage();
		
	};
	
	var _bindEvent = function() {
		/*$('#newPass').on('keyup', function(){
			_setPasswordLevel();
		});*/
		var uname = $('#uname').val();
		var mobile = $("#mobile").val();
		if (!mobile) {
			account.message.showPopup("请先到首页 > 安全手机 > 绑定手机页面完成手机绑定");
			return;
		}
		$('#newPass').on('focus', function(){
			$('#newPass').off('keyup').on('keyup', function(e){
				if (e.keyCode == 9) {
					return;
				}
				_setPasswordLevel();
			});
		});

		$("#newPass").off('blur').on('blur',function(){
			var upass = $(this).val();
			if (upass) {
				if (account.util.getPasswordLevel(upass) < 2) {
					account.message.showErrorMessage("密码强度太低，请重新设置");
					return false;
				} else {
					account.message.clearErrorMessage();
				}
			}
		});
		
		$('#submitBtn').on('click', function(){
			_submitData(this);
		});
		
		$('#switchPass').on('click', function(){
			_showPass();
		});
		
		$('#oldSwitchPass').on('click', function(){
			_oldShowPass();
		});
		
		$('#sendCode').on('click', function(){
			account.util.sendSMS('uname', uname, null, {action : account.sms.prefix + account.sms.modifyPass, uname : uname, pageId :1410, funId:11190});
		});
	};
	
//	var _checkEmail = function() {
//		var code = $('#emailCode').val();
//		if (!code) {
//			$('#main1').show();
//			$("#weixin_layer").hide();
//			return ;
//		}
//		setTimeout(function(){
//			account.ajax.execute({
//				method : "GET",
//				url: account.url.getAjaxUrl('ajaxFindPassByEmail'),
//				data : {code : code},
//				customHandleError : function(data){
//					$('#message').text(data.message);
//					$('#emailMain').show();
//					return false;
//				},
//				success : function(data) {
//					if (data) {
//						$('#uname').val(data);
//						$('#showUname').text(data);
//						$('#main1').show();
//					}else {
//						$('#emailMain').show();
//					}
//				}
//			});
//		}, 1000);
//		
//	};
	
	var _init = function() {
//		_checkEmail();
		_bindEvent();
		var source = $('#source').val();
		if (source != 25) {
			$('#oldPassDiv').show();
		}
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


account.view.resetPass = (function(){
	
	var _passwordValide = function() {
		var newpass = $('#newPass').val();
		var comfirmPass = $('#comfirmPass').val();
		if (!newpass || $.trim(newpass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		if ($.trim(newpass).length < 6) {
			account.message.showErrorMessage('密码长度不能小于6');
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(newpass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return false;
		}
		
		if (account.util.getPasswordLevel(newpass) < 2) {
			account.message.showErrorMessage("密码强度太低，请重新设置");
			return false;
		}
		
		if (!comfirmPass || $.trim(comfirmPass) == '') {
			account.message.showErrorMessage('确认密码不能为空');
			return false;
		}
		
		if ($.trim(comfirmPass) != $.trim(newpass)) {
			account.message.showErrorMessage('两次密码不一致');
			return false;
		}
		
		return newpass;
	};
	
	var _showPass = function() {
		if ($('#switchPass').attr('show') == 'true') {
			$('#newPass').attr('type', 'text');
			$('#switchPass').attr('show', 'false');
			$('#switchPass').attr('class', 'upass-switch-show');
		} else {
			$('#newPass').attr('type', 'password');
			$('#switchPass').attr('show', 'true');
			$('#switchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var _oldShowPass = function() {
		if ($('#oldSwitchPass').attr('show') == 'true') {
			$('#oldPass').attr('type', 'text');
			$('#oldSwitchPass').attr('show', 'false');
			$('#oldSwitchPass').attr('class', 'upass-switch-show');
		} else {
			$('#oldPass').attr('type', 'password');
			$('#oldSwitchPass').attr('show', 'true');
			$('#oldSwitchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var click_time = 0;
	var _submitData = function(element) {
		
		var passValide = _passwordValide();
		if (!passValide) {
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		
		click_time ++;
		
		var source = $('#source').val();
		var reset = $('#rest').val();
		var data = {source : source, newPass : passValide};
		if (reset) {
			data.reset = 1;
			data.token = account.util.getPageParamsBykey('accessToken') || account.util.getPageParamsBykey('token');
		} else {
			if (source != 25) {
				data.oldPass = $('#oldPass').val();
				if (!data.oldPass || $.trim(data.oldPass) == '') {
					account.message.showErrorMessage('旧密码不能为空');
					return false;
				}
			}
		}
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirecUri = redirectUri;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxChangePass'),
			analysis : {pageId : 1390, funId : 11160},
			data : data,
			success : function(data) {
				if (data.result) {
					if (data.url) {
						if (data.url.indexOf("http") != -1) {
							location.href = data.url;
							return ;
						}
						location.href = settings.baseUrl + data.url;
						return ;
					}
					var title = $('#title').val();
					var type = $('#type').val();
					var param = 'title='+title;
					if (type) {
						param += '&type='+type;
					}
					if (data.u) {
						param += '&91?type=100&pwd='+data.u;
					}
					location.href = account.url.getTemplateUrl('changePassSucc') + account.url.getParams(param);
				}
			}
		});
		
	};
	
	var _setPasswordLevel = function() {
		var pass = $('#newPass').val();
		if (!/^[0-9a-zA-Z]{1,}$/.test(pass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return ;
		}
		var level = account.util.getPasswordLevel(pass);
		var $spans = $('span', '#passStrength');
		$spans.removeClass('cur');
		var length = $spans.length;
		if (level == 0) {
			$spans.eq(length - 1).addClass('cur');
		}
		var index = length - 1;
		for (var i = 0; i < level; i++) {
			$spans.eq(index - i).addClass('cur');
		}
		account.message.clearErrorMessage();
		
	};
	
	var _bindEvent = function() {
		/*$('#newPass').on('keyup', function(){
			_setPasswordLevel();
		});*/
		
		$('#newPass').on('focus', function(){
			$('#newPass').off('keyup').on('keyup', function(e){
				if (e.keyCode == 9) {
					return;
				}
				_setPasswordLevel();
			});
		});

		$("#newPass").off('blur').on('blur',function(){
			var upass = $(this).val();
			if (upass) {
				if (account.util.getPasswordLevel(upass) < 2) {
					account.message.showErrorMessage("密码强度太低，请重新设置");
					return false;
				} else {
					account.message.clearErrorMessage();
				}
			}
		});
		
		$('#submitBtn').on('click', function(){
			_submitData(this);
		});
		
		$('#switchPass').on('click', function(){
			_showPass();
		});
		
		$('#oldSwitchPass').on('click', function(){
			_oldShowPass();
		});
		
	};
	
	var _checkEmail = function() {
		var code = $('#emailCode').val();
		if (!code) {
			$('#main1').show();
			$("#weixin_layer").hide();
			return ;
		}
		setTimeout(function(){
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxFindPassByEmail'),
				data : {code : code},
				customHandleError : function(data){
					$('#message').text(data.message);
					$('#emailMain').show();
					return false;
				},
				success : function(data) {
					if (data) {
						$('#uname').val(data);
						$('#showUname').text(data);
						$('#main1').show();
					}else {
						$('#emailMain').show();
					}
				}
			});
		}, 1000);
		
	};
	
	var _init = function() {
		_checkEmail();
		_bindEvent();
		var source = $('#source').val();
		if (source != 25) {
			$('#oldPassDiv').show();
		}
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


/**
 * 通过身份证号修改手机
 */
account.view.bindMobileById = (function(){
	
	var _getBankInfo = function() {
		var uname = $('#uname').val();
		account.ajax.execute({
			method : "GET",
			url: account.url.getAjaxUrl('ajaxModifyMobileById') + '/' +encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				if (data) {
					$('#bankCard').text(data.bankcardno);
				}
			}
		});
	};
	
	var validIdCard = function() {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var idCard = $('#ident').val();
		if (!reg.test(idCard)) {
			account.message.showErrorMessage("身份证的格式不正确");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	
	var click_time = 0;
	
	var submtiData = function(element) {
		var idCard = $('#ident').val();
		var uname = $('#uname').val();
		
		if (!validIdCard()) {
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var analysisData = {pageId : 1430, funId : 11230};
		if ($('#type').val() && $('#type').val() == 'modifyEmail') {
			analysisData = {pageId : 1500, funId : 11350};
		}
		click_time ++ ;
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			data : JSON.stringify({idCard: idCard, uname : uname, verifyPattern : 'idCard'}),
			analysis : analysisData,
			success : function(data) {
				if (data) {
					if ($('#type').val() && $('#type').val() == 'modifyEmail') {
						location.href = account.url.getTemplateUrl('emailbindnew') + account.url.getParams('token='+data);
						return ;
					}
					location.href = account.url.getTemplateUrl('modifyMobile') + account.url.getParams('token='+data);
				}
			}
		});
	};
	var _bindEvent = function() {
		$('#submitBtn').click(function(){
			submtiData(this);
		});
		
		$('#ident').on('blur', function(){
			validIdCard();
		});
	};
	var _init = function() {
		_bindEvent();
		//_getBankInfo();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


/**
 * 通过身份证号解绑手机
 */
account.view.unbindMobileById = (function(){
	
	var validIdCard = function() {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var idCard = $('#ident').val();
		if (!reg.test(idCard)) {
			account.message.showErrorMessage("身份证的格式不正确");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	var click_time = 0;
	var submtiData = function(element) {
		var idCard = $('#ident').val();
		var uname = $('#uname').val();
		
		if (!validIdCard()) {
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnbindMobile'),
			contentType:'application/json',
			data : JSON.stringify({uname : uname, idCard : idCard, verifyPattern : 'idCard'}),
			analysis : {pageId : 1460, funId : 11280},
			customHandleError : function(data) {
				$parent.removeClass('disabled');
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('unbindMobileSucc') + account.url.getParams();
				}
			}
		});

	};
	var _bindEvent = function() {
		$('#submitBtn').click(function(){
			submtiData(this);
		});
		
		$('#ident').on('blur', function(){
			validIdCard();
		});
	};
	var _init = function() {
		_bindEvent();
		//_getBankInfo();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * Email Part
 */
account.view.emailbind = (function(){
	var _bindEvent = function(){
		var isSupportTouch = "ontouchend" in document ? true : false;
		if (isSupportTouch) {
			$("#ImageVcode").on('touchend',function(){
				account.util.refreshImageVcode();
			});
		} else {
			$("#ImageVcode").on('click',function(){
				account.util.refreshImageVcode();
			});
		}
		/*$(".fl").on('click',function(){
			account.util.refreshImageVcode();
		});*/
		$("#button-sub").off('click').on('click',function(){
			_submitData(this);
		});
		
		$("#changePass").on('click',function(){
			_changePass();
		});
		
	};
	var click_time = 1;
	var _submitData = function(element){
		
		var email = $('#email').val();
		if (!email || $.trim(email) == '' || !account.util.isnotemail(email)) {
			account.message.showErrorMessage("邮箱格式不正确");
			return ;
		}
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var emailCode=$("#emailCode").val();
		var p='0';
		if(emailCode){
			p='1';
		}
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val(), type:$('#type').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var emailData = JSON.stringify(mailData);
		var data = {uname:$("#uname").val(),email:email,code:code,checkcode:true, method : 'bindEmail', data : emailData,p:p};
		
		var analysisData = {pageId : 1470, funId : 11290};
		if ($('#type').val() == 'modifyEamil') {
			analysisData = null;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxSendVerifyEmail'),
			data : data,
			analysis : analysisData,
			customHandleError : function(data) {
				account.util.refreshImageVcode();
				return true;
			},
			success : function(data) {
				var result = data.ret;
				//发验证邮件成功
				if (result == 1) {
					var type = $('#type').val();
					var param = 'type=bindEmail';
					if (type == 'modifyEamil') {
						param += '&t=m';
					}
					location.href = account.url.getTemplateUrl('emailsend') + account.url.getParams(param);
				}
				
				//如果该邮箱已经被其他用户绑定
				if (result == 2) {
					$('#infoTips').hide();
					var oldUname = data.olduname;
					//account.message.showErrorMessage('该邮箱已被绑定！');
					_showExistMessage(oldUname);
				}
				
				//报错
				if (result == 3) {
					$('#infoTips').show();
					account.message.showErrorMessage('发送验证邮件失败，请稍后再试！');
				}
				account.ajax.setBtnStatus(click_time, $parent);
			},
			error : function() {
				$('#infoTips').show();
				account.message.showErrorMessage('发送验证邮件失败，请稍后再试！');
			}
		});
	}
	
	var _showExistMessage = function(oldUname){
		$(".ownerUname").text(oldUname);
		$("#no-mail-tips").show();
	}
	
	var _changePass = function(){
		location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams();
	}
	
	var _checkEmail = function() {
		var code = $('#emailCode').val();
		if (!code) {
			$('#main1').show();
			$("#weixin_layer").hide();
			return ;
		}
		setTimeout(function(){
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxModifyEmailByEmail'),
				data : {code : code},
				analysis : {pageId : 1480, funId : 11320},
				customHandleError : function(data){
					$('#message').text(data.message);
					$('#emailMain').show();
					return false;
				},
				success : function(data) {
					if (data) {
						$('#token').val(data.token);
						$('#uname').val(data.uname);
						$('#main1').show();
					}else {
						$('#emailMain').show();
					}
				}
			});
		}, 1000);
		
	};
	
	var _init = function() {
		_checkEmail();
		_bindEvent();
		account.util.refreshImageVcode();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.emailchg = (function(){
	var _bindEvent = function(){
		var isSupportTouch = "ontouchend" in document ? true : false;
		if (isSupportTouch) {
			$("#ImageVcode").on('touchend',function(){
				account.util.refreshImageVcode();
			});
		} else {
			$("#ImageVcode").on('click',function(){
				account.util.refreshImageVcode();
			});
		}
		
		$("#submitBtn").on('click',function(){
			_submitData(this);
		});
		
		$("#modifyEmailById").on('click',function(){
			_unbindMobileById(this);
		});
		
		$("#modifyEmailByMobile").on('click',function(){
			_unbindMobileByMobile(this);
		});
		
		$("#unbindEmail").on('click', function(){
			location.href = account.url.getTemplateUrl('emaildel') + account.url.getParams();
		});
		
		
	};
	var click_time = 0;
	var _submitData = function(element){
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		
		var uname = $('#uname').val();
		
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var data = JSON.stringify(mailData);
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			analysis : {pageId : 1480, funId : 11310},
			data : JSON.stringify({uname: uname, code : code, method : 'modifyEamil', verifyPattern : 'email', data : data}),
			customHandleError : function(data) {
				account.util.refreshImageVcode();
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emailsend') + account.url.getParams('type=modifyEamil');
				};
			}
		});
	};
	var click_time_mobile = 2;
	var _unbindMobileByMobile = function(ele) {
		var $ele = $(ele);
		click_time_mobile ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_mobile,
			waitTime : 3,
			method : "GET",
			url: account.url.getAjaxUrl('ajaxCheckHasBindMobile') + '/' + encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function(data){
				// 手机
				if (data.code = 'A130') {
					account.message.showPopup('您没有绑定手机，请先绑定手机');
					//account.message.showErrorMessage('您没有绑定手机，请先绑定手机');
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emailChgByMobile') + account.url.getParams();
				}
			}
		});
	};
	var click_time_id = 2;
	var _unbindMobileById = function(ele) {
		var $ele = $(ele);
		click_time_id ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_id,
			waitTime : 3,
			method : "GET",
			url: account.url.getAjaxUrl('ajaxModifyMobileById') + '/' + encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function(data){
				// 身份认证失败
				if (data.code = 'A704') {
					account.message.showPopup('您还没校验身份证号');
					//account.message.showErrorMessage('您还没校验身份证号');
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emailChgById') + account.url.getParams();
				}
			}
		});
	};
	
	var _init = function() {
		_bindEvent();
		account.util.refreshImageVcode();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.changeEmailByMobile = (function(){
	var _sendSms = function() {
		account.util.sendSMS('uname', $('#uname').val(), null,{action : account.sms.prefix + account.sms.modifyEmail, uname:$('#uname').val(), pageId :1490, funId:11330} );
	};
	var click_time = 0;
	var _submitBindMobile = function(element) {
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			analysis : {pageId : 1490, funId : 11340},
			data : JSON.stringify({uname : uname, code : code, verifyPattern : 'mobile'}),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emailbindnew') + account.url.getParams('token=' + data);
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			 _sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.emailsend = (function(){
	
	var _bindEvent = function() {
		$("#reSendVerifyEmail").on('click',function(){
			_reSendVcodeEmail(this);
		});
	};
	
	var _setSendEmailBtn = function() {
		var time = settings.emailWaitTime;
		var timer;
		var _timeFun = function() {
			$('#reSendVerifyEmail').text('重新发送邮件(' + time + '秒...)');
			$('#reSendVerifyEmail').addClass('disable-link');
			if (time == 0) {
				clearTimeout(timer);
				$('#reSendVerifyEmail').removeClass('disable-link');
				$('#reSendVerifyEmail').text('重新发送邮件');
				$('#errorMessage').text('');
				return ;
			}
			timer = setTimeout(_timeFun, 1000);
			time--;
		};
		_timeFun();
	};
	
	var _reSendVcodeEmail = function(element){
		var email = $('#email').val();
		if (!email || $.trim(email) == ''|| !account.util.isnotemail(email)) {
			account.message.showErrorMessage("邮箱格式不正确");
			return ;
		}
		var $ele = $(element);
		
		if ($ele.hasClass('disable-link')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var p = '0';
		if ($('#type').val() == 'register') {
			p = '1';
		}
		var isModifyMail = account.util.getPageParamsBykey('t');
		var defaultType = $('#type').val();
		if (defaultType == 'bindEmail' && isModifyMail) {
			defaultType = 'modifyEamil';
		}
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val(), type : defaultType};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var emailData = JSON.stringify(mailData);
		var data = {uname:$("#uname").val(),email:email,code:"",checkcode:false, method : $('#type').val(), data : emailData, p : p};
		account.ajax.execute({
			beforeSend : function(){
				$ele.addClass('disable-link');
			},
			method : "POST",
			url: account.url.getAjaxUrl('ajaxSendVerifyEmail'),
			data : data,
			customHandleError : function(data) {
				if (data.code == 'A509') {
					$("#errorMessage").text("重新发送成功!");
				}
				_setSendEmailBtn();
				return true;
			},
			success : function(data) {
				//$ele.removeClass('disabled');
				var result = data.ret;
				//发验证邮件成功
				if (result == 1) {
					$("#errorMessage").text("重新发送成功!");
				}
				
				//如果该邮箱已经被其他用户绑定
				if (result == 2) {
					var oldUname = data.olduname;
					$("#errorMessage").text('该邮箱已被'+oldUname+'绑定！');
				}
				
				//报错
				if (result == 3) {
					account.message.showErrorMessage('发送验证邮件失败，请稍后再试！');
					return;
				}
				_setSendEmailBtn();
			},
			error : function() {
				_setSendEmailBtn();
				account.message.showErrorMessage('发送验证邮件失败，请稍后再试！');
			}
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.emailresult = (function(){
	
	var _executeAction = function(element){
		var code = $('#code').val();
		var data = {code:code};
		account.ajax.execute({
			method : "POST",
			url: account.url.getAjaxUrl('ajaxDoBindEmail'),
			data : data,
			success : function(data) {
				var result = data.ret;
				//操作成功
				if (result == 1) {
					//$("#message").text("重新发送成功!");
				}
				
				//操作失败
				if (result == 2) {
					//$("#message").text('该邮箱已被'+oldUname+'绑定！');
				}
				
			},
			error : function() {
				
			}
		});
	}
	
	var _init = function() {
		_executeAction();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.doBindEmail = (function(){
	
	var _doBindEmail = function(){
		var code = $('#code').val();
		
		var data = {code:code};
		account.ajax.execute({
			method : "POST",
			url: account.url.getAjaxUrl('ajaxDoBindEmail'),
			data : data,
			success : function(data) {
				$("#message").text("重新发送成功!");
			},
			error : function() {
			}
		});
	}
	
	var _init = function() {
		_doBindEmail();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.emaildel = (function(){
	var _bindEvent = function(){
		var isSupportTouch = "ontouchend" in document ? true : false;
		if (isSupportTouch) {
			$("#ImageVcode").on('touchend',function(){
				account.util.refreshImageVcode();
			});
		} else {
			$("#ImageVcode").on('click',function(){
				account.util.refreshImageVcode();
			});
		}
		$("#submitBtn").on('click',function(){
			_submitData(this);
		});
		
		$("#unbindEmailById").on('click',function(){
			_unbindEmailById(this);
		});
		
		$("#unbindEmailByMobile").on('click',function(){
			_unbindEmailByMobile(this);
		});
	};
	var click_time = 0;
	var _submitData = function(element){
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		var mailData = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			mailData.redirect_uri = redirectUri;
		}
		var data = JSON.stringify(mailData);
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxModifyMobileAuth'),
			contentType:'application/json',
			analysis : {pageId : 1510, funId : 11360},
			customHandleError : function(data) {
				account.util.refreshImageVcode();
				return true;
			},
			data : JSON.stringify({uname: uname, code : code, method : 'unbindEmail', verifyPattern : 'email', data : data}),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emailsend') + account.url.getParams('type=unbindEmail');
				};
			}
		});
	};
	
	var click_time_mobile = 2;
	var _unbindEmailByMobile = function(ele) {
		var $ele = $(ele);
		click_time_mobile ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_mobile,
			waitTime : 3,
			method : "GET",
			url: account.url.getAjaxUrl('ajaxCheckHasBindMobile') + '/' + encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function(data){
				//手机
				if (data.code = 'A130') {
					account.message.showPopup('您没有绑定手机，请先绑定手机');
					return false;
				}
				return true;
			},			
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emaildelByMobile') + account.url.getParams();
				}
			}
		});
	};
	var click_time_id = 2;
	var _unbindEmailById = function(ele) {
		var $ele = $(ele);
		click_time_id ++;
		if ($ele.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $ele,
			click_times : click_time_id,
			waitTime : 3,
			method : "GET",
			url: account.url.getAjaxUrl('ajaxModifyMobileById') + '/' + encodeURIComponent(encodeURIComponent(uname)) + '/',
			customHandleError : function(data){
				// 身份认证失败
				if (data.code = 'A704') {
					account.message.showPopup('您还没校验身份证号');
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emaildelById') + account.url.getParams();
				}
			}
		});
	};
	
	var _init = function() {
		_bindEvent();
		account.util.refreshImageVcode();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.unbindEmailByMobile = (function() {
	
	var _sendSms = function() {
		account.util.sendSMS('uname', $('#uname').val(), null, {action : account.sms.prefix + account.sms.unbindEmail, uname:$('#uname').val(), pageId :1520, funId:11380});
	};
	
	var click_time = 0;
	
	var _submitBindMobile = function(element) {
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var uname = $('#uname').val();
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnbindMobile'),
			contentType:'application/json',
			analysis : {pageId : 1520, funId : 11390},
			data : JSON.stringify({uname : uname, code : code, bind:'email', verifyPattern : 'mobile'}),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emaidelSucc') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			 _sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.unbindEmailById = (function(){
	
	var validIdCard = function() {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var idCard = $('#ident').val();
		if (!reg.test(idCard)) {
			account.message.showErrorMessage("身份证的格式不正确");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	var click_time = 0;
	var submtiData = function(element) {
		var idCard = $('#ident').val();
		var uname = $('#uname').val();
		
		if (!validIdCard()) {
			return ;
		}
		click_time ++ ;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnbindMobile'),
			contentType:'application/json',
			analysis : {pageId : 1530, funId : 11400},
			data : JSON.stringify({idCard: idCard, uname : uname, bind:'email', verifyPattern : 'idCard'}),
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('emaidelSucc') + account.url.getParams();
				}
			}
		});
	};
	var _bindEvent = function() {
		$('#submitBtn').click(function(){
			submtiData(this);
		});
		
		$('#ident').on('blur', function(){
			validIdCard();
		});
	};
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 我的银行卡
 */
account.view.bankCard = (function(){
	var _getAccountInfo = function() {
		var uname = $('#uname').val();
		if (!uname || $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return ;
		}
		account.ajax.execute({
			url: account.url.getAjaxUrl('ajaxGetbankcard') + '/' + encodeURIComponent(encodeURIComponent(uname)) + '/',
			success : function(data) {
				if (data) {
					_setBindData(data);
				} else {
					location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams();
				}
			}
		});
		
	};
	
	var _bankAuth = function(uname, url) {
		url = url ? url : 'ajaxBankCheck';
		account.ajax.execute({
			method : "GET",
			url: account.url.getAjaxUrl(url),
			data : {uname : uname},
			customHandleError : function(data){
				// 不能添加银行卡
				if (data.code = 'A1012') {
					account.message.showPopup(data.message);
					$('#disableAddBank').show();
					$('#addBank').hide();
					return false;
				}
				return true;
			},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('bankBind')  + account.url.getParams();
				} else {
					location.href = account.url.getTemplateUrl('bankAuth')  + account.url.getParams();
				}
			}
		});
	};
	
	var _deleteBank = function(id, status) {
		location.href = account.url.getTemplateUrl('deleteBank')  + account.url.getParams('i='+id+'&s='+status);
	};
	
	var _bindEvent = function() {
		
		$('#addBank').on('click', function(){
			var uname = $('#uname').val();
			_bankAuth(uname);
		});
	};
	
	var _setBindData = function(data) {
		var btnStatus = data.btnStatus;
		if (btnStatus == 'true') {
			$('#addBank').show();
			$('#disableAddBank').hide();
		} else {
			$('#disableAddBank').show();
			$('#addBank').hide();
		}		
		if (!data.bankinfos) {
			//_bankAuth($('#uname').val(), 'ajaxBankAuth');
			//location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams();
			return ;
		}
		var array = $.parseJSON(data.bankinfos);
		var length = array.length;
		/*
		if (length == 0) {
			location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams();
			return ;
		}
		*/
		$('#cards').empty();
		for (var i = 0; i < length; i++) {
			var bank = array[i];
			var url = settings.baseUrl + 'images/bank_' + bank.bank + '.png';
			var status = '未验证';
			if (bank.checkstatus == 1) {
				status = '验证中';
			} else if (bank.checkstatus == 2) {
				status = '验证成功';
			} else if (bank.checkstatus == -1) {
				status = '验证失败';
			};
			var html = "<li class='bdr8 bank-card-img-box' id="+bank.bankcardid+" status="+bank.checkstatus+">" + 
			"<a><img class='bank-img' src="+url+" alt='正在加载中...' width='100%'/></a>"+
			"<p class='uc-bankcard-numb'>"+bank.bankcardno+"</p>"+
			"<span class='uc-bankcard-usage'>"+status+"</span>"+
		"</li>";
			/*var topHtml = "<div class='h15'></div>";
			var html = "<div class='bank-card-img-box' id="+bank.bankcardid+" status="+bank.checkstatus+">" 
			+"<img class='bank-img' alt='正在加载中...'  src="+url+" width='607' height='214'/>"
			+"<span class='text-usage'>"+status+"</span>"
			+"<span class='text-card-number'>"+bank.bankcardno+"</span></div>";*/
			/*if (i == 0) {
				$('#cards').append(topHtml);
			}*/
			$('#cards').append(html);
		}
		$('.bank-card-img-box').on('click',function(){
			var id = $(this).attr('id');
			var status = $(this).attr('status');
			if (status == 1) {
				var message = '正在验证中，不能进行操作！';
				account.message.showPopup(message);
				return ;
			}
			_deleteBank(id, status);
		});
		
		$('.bank-img').on('error', function(){
			$(this).attr('src', settings.baseUrl + 'images/bank_default.png');
		});
	};
	
	
	var _init = function() {
		_bindEvent();
		_getAccountInfo();
		account.util.analysis.analysis({pageId:1540, funId:11410});
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.bankAuth = (function(){
	var _validIdCard = function() {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var idCard = $('#idCard').val();
		if (!reg.test(idCard)) {
			account.message.showErrorMessage("身份证的格式不正确");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	
	var _validData = function() {
		var truename = $('#trueName').val();
		if(!truename || $.trim(truename) == '') {
			account.message.showErrorMessage("姓名不能为空");
			return false;
		}
		var reg = /^([^\*]).*/;
		if (!reg.test(truename)) {
			account.message.showErrorMessage("姓名不能以*号开头");
			return false;
		}
		
		if (!_validIdCard()) {
			return false;
		}
		return true;
	};
	
	var click_time = 0;
	var _submtiData = function(element) {
		if (!_validData()) {
			return ;
		}
		click_time ++ ;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var data = {truename : $('#trueName').val(), idCard : $('#idCard').val(), uname : $('#uname').val()};
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBindIdCard'),
			data : data,
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('bankBind') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function(){
		$('#submitBtn').on('click', function(){
			_submtiData(this);
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
	
})();

/**
 * Bind bank card
 */
account.view.bindBank = (function(){
	var _validMobile = function() {
		var mobile=$('#mobile').val();
		if(!mobile){
			mobile=$('#cMobile').val();
		}
	  if (!/^1\d{10}$/g.test(mobile)) {
		// 手机格式必须是1开头的11位数字
		account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
		return false;
	  } else {
		account.message.clearErrorMessage();
		return true;
	  }
	};
	
	var _validBankNo = function() {
		var reg = /^\d{16,20}$/;
		var bankNo = $('#bankNo').val().replace(/\s/g,'');
		if (!reg.test(bankNo)) {
			account.message.showErrorMessage("银行卡号的格式不正确");
			return false;
		}
		bankNo = bankNo.replace(/(\d{4})(?=\d)/g,'$1 ');
		$('#bankNo').val(bankNo);
		var inputStr=$('#bankNo').val();
		if(inputStr){
			$(".login-status").hide();
		}		
		account.message.clearErrorMessage();
		return true;
	};
	
	var _setBankData = function(data) {
		var length = data.length;
		var $bank = $('#bank');
		for (var i = 0 ; i < length; i++) {
			var d = data[i];
			var ds = d.split('~');
			$bank.append('<p class="setBankValue" value='+ds[0]+' id='+ds[1]+'>'+ds[0]+'</p>');
		}
		$(".setBankValue").each(function(){
			$(this).off('click').on('click', function(){
				$(this).parents(".uc-form-item").next(".uc-divider").hide();
				//$(".uc-divider:eq(2)").hide();//隐藏多余的div
				$("#bankValue").removeClass("uc-select-placeholder");
				$("#bankValue").text($(this).attr("value"));
				$("#bankValue").data('data', $(this).attr("id"));
				$("#provinceValue").text("请选择");
				$("#cityValue").text("请选择");
				$("#bankNameValue").text("请选择");
				$("#cMobile").val("");
				$("#mobile").val("");
				
				$("#provinceValue").addClass("uc-select-placeholder");
				$("#cityValue").addClass("uc-select-placeholder");
				$("#bankNameValue").addClass("uc-select-placeholder").show();
				$("#bankNameInputValue").hide().val("");
				
				var bankCardId=$(this).attr("id");
				//判断是否走易联
				account.ajax.execute({
					method : "GET",
					url: account.url.getAjaxUrl('ajaxBankAuthWay'),
					data : {bankCardId : bankCardId},
					success : function(data) {
						$("#bankValue").data('channel', data);
						if(data==2){
							//ebank
							$("#preMobile").hide();
							$("#mobile").val("");
							$("#callMobile").show();
						}else{
							//tencent
							$("#callMobile").hide();
							$("#cMobile").val("");
							$("#preMobile").show();							
						}
					}
				});					
				
				_showBankDetailInfo($(this).attr("id"));
			});
		});
	};
	
	var _setProvinceData = function(data) {
		var length = data.length;
		var $province = $('#province');
		for (var i = 0 ; i < length; i++) {
			var d = data[i];
			var ds = d.split('~');
			$province.append('<p class="setProvinceValue" value='+ds[0]+' id='+ds[1]+'>'+ds[0]+'</p>');
		}
		
		$(".setProvinceValue").each(function(){
			$(this).off('click').on('click', function(){
				$("#provinceValue").removeClass("uc-select-placeholder");
				$("#provinceValue").text($(this).attr("value"));
				var oldValue = $("#provinceValue").data('data');
				if (oldValue != $(this).attr("id")) {
					$("#provinceValue").data('data', $(this).attr("id"));
					_getCities($(this).attr("id"));
				}
				
			});
		});
	};
	
	var _setCityData = function(data) {
		var length = data.length;
		$("#cityValue").text('请选择');
		$("#bankNameValue").text('请选择').show();
		$('#bankNameInputValue').val('').hide();
		var $city = $('#city').empty();
		for (var i = 0 ; i < length; i++) {
			var d = data[i];
			var ds = d.split('~');
			$city.append('<p class="setCityValue" value='+ds[0]+' id='+ds[1]+'>'+ds[0]+'</p>');
		}
		
		$(".setCityValue").each(function(){
			$(this).off('click').on('click', function(){
				$("#cityValue").removeClass("uc-select-placeholder");
				$("#cityValue").text($(this).attr("value"));
				var oldValue = $("#cityValue").data('data');
				if (oldValue != $(this).attr("id")) {
					$("#cityValue").data('data', $(this).attr("id"));
					_getSubBankName();
				}
			});
		});
	};
	
	var _getCities = function(province) {
		if (province == '请选择') {
			return ;
		}
		account.ajax.execute({
			method : "GET",
			dataType:"json",
			url: account.url.getAjaxUrl('ajaxCities') + province,
			success : function(data) {
				if (data) {
					_setCityData(data);
				}
			}
		});
	};
	
	var _getSubBankName = function() {
		
		var bank = $('#bankValue').text();
		if (bank == '请选择') {
			return ;
		}
		
		var province = $('#provinceValue').text();
		if (province == '请选择') {
			return ;
		}
		var city = $('#cityValue').text();
		if (city == '请选择') {
			return ;
		}
		
		var data = {bank : bank, city : city, province : province};
		
		account.ajax.execute({
			method : "GET",
			dataType:"json",
			url: account.url.getAjaxUrl('ajaxSubBank'),
			data : data,
			success : function(data) {
				if (data) {
					_setSubBankData(data);
				}
			}
		});
	};
	
	var _setSubBankData = function(data) {
		var length = data.length;
		var $bankNameSelect = $('#bankNameSelect');
		$("#bankNameValue").text('请选择').show();
		$('#bankNameInputValue').val('').hide();
		$bankNameSelect.empty();
		for (var i = 0; i< length ; i++) {
			var name = data[i].branchName;
			$bankNameSelect.append('<p class="setBankNameValue" value='+name+'>'+name+'</p>');
		};
		$bankNameSelect.append('<p class="setBankNameValue" value="-1">其他</p>');
		$(".setBankNameValue").each(function(){
			$(this).off('click').on('click', function(){
				$("#bankNameValue").removeClass("uc-select-placeholder");
				$("#bankNameValue").text($(this).attr("value"));
				_setSpecialValue($(this).attr("value"));
			});
		});
		
	};
	
	var _getBankCode = function() {
		account.ajax.execute({
			method : "GET",
			dataType:"json",
			url: account.url.getAjaxUrl('ajaxBankCode'),
			success : function(data) {
				if (data) {
					_setBankData(data.bank);
					_setProvinceData(data.province);
				}
			}
		});
	};
	
	var _showBankDetailInfo = function(bank){
		/*
		var isShowDetail = bank.split('|')[1];
		if (isShowDetail) {
			$('#bankDetailInfo').hide();
		} else {
		}
		 */
		//显示开户行下方的分隔线
		$(".uc-divider:eq(1)").show();
		//$("#bankValue").parents(".uc-form-item").next(".uc-divider").show();
		$(this).next(".uc-divider").show();
		$('#bankDetailInfo').show();		
	};
	
	var _setSpecialValue = function(bankName) {
		if (bankName == -1) {
			$('#bankNameInputValue').show();
			$('#bankNameValue').hide();
		}
	};
	
	var _validData = function() {
		if (!_validBankNo()) {
			return false;
		}
		
		var bank = $('#bankValue').text();
		if(bank == '请选择' || $.trim(bank) == '') {
			account.message.showErrorMessage("开户行不能为空");
			return false;
		}
		var validBankDetail = $("#bankValue").data('data').split('|')[1];
		if (!validBankDetail) {
			var province = $('#provinceValue').text();
			if(province == '请选择' || $.trim(province) == '') {
				account.message.showErrorMessage("开户省不能为空");
				return false;
			}
			var city = $('#cityValue').text();
			if(city == '请选择' || $.trim(city) == '') {
				account.message.showErrorMessage("开户城市不能为空");
				return false;
			}
			var bankName = $('#bankNameValue').text();
			if (bankName == -1) {
				bankName = $('#bankNameInputValue').val();
			}
			//var name = $('#bankName').val();
			if(!bankName || $.trim(bankName) == '' || bankName == '请选择') {
				account.message.showErrorMessage("支行名称不能为空");
				return false;
			}
		}
		if (!_validMobile()) {
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	var click_time = 0;
	var submtiData = function(element) {
		if (!_validData()) {
			return ;
		}
		click_time ++ ;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var notNeedDetails = $("#bankValue").data('data').split('|')[1];
		var bankName = 'n';
		var province = 'n';
		var city = 'n';
		if (!notNeedDetails) {
			bankName = $('#bankNameValue').text();
			if (bankName == -1) {
				bankName = $.trim($('#bankNameInputValue').val());
			}
			province = $('#provinceValue').text();
			city = $('#cityValue').text();
		}
		var bank = $("#bankValue").data('data').split('|')[0];
		province = $("#provinceValue").data('data')?$("#provinceValue").data('data'):'n';
		city = $("#cityValue").data('data')?$("#cityValue").data('data'):'n';
		
		var mobile=$('#mobile').val();
		if(!mobile){
			mobile=$('#cMobile').val();
		}
		var data = {bankcardno : $.trim($('#bankNo').val().replace(/\s/g,'')), bank : bank,
				    province : province, city : city, bankName : bankName, mobile : mobile
				    };
		data.channel = $("#bankValue").data('channel') + '';
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBankCardInfo'),
			analysis : {pageId : 1550, funId : 11420},
			data : {uname:$('#uname').val(), data : JSON.stringify(data)},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('addBankVerify') + account.url.getParams();
				}
			}
		});
	};
	var _bindEvent = function() {
		$('#submitBtn').click(function(){
			submtiData(this);
		});
		
		$('#bankNo').off('blur').on('blur', function(){
			_validBankNo();
		});
		
		$('#mobile').on('blur', function(){
			_validMobile();
		});
		
		/*$('#bankNo').on('keyup', function(){
			//_validBankNo();
		});*/
		
	};
	var _init = function() {
		_getBankCode();
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


/**
 * Add bank card
 */
account.view.addBank = (function(){
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
    };
    var _changePass = function(){
    	location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams();
    };
    var _sendSms = function() {
    	var $mobile = $('#mobile');
    	if ($mobile.length) {
    		account.util.valideMobile($mobile, function(){
    			account.util.sendSMS('mobile', $mobile.val(), null, {action : account.sms.prefix + account.sms.addBank, uname:$('#uname').val()});
    		});
    	} else {
    		account.util.sendSMS('uname', $('#uname').val(), null, {action : account.sms.prefix + account.sms.addBank, uname:$('#uname').val()});
    	}
    };

	var click_time = 0;
	var submtiData = function(element) {
		var $mobile = $('#mobile');
		var mobile = $mobile.val();
		if ($mobile.length) {
			if (!/^1\d{10}$/g.test(mobile)) {
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return ;
			}
		}
		
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		click_time ++ ;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var data = {code:code, uname:$('#uname').val()};
		data.verifyMobile = $('#uname').val();
		if ($mobile.length) {
			data.verifyMobile = mobile;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBankCardAdd'),
			contentType:'application/json',
			data : JSON.stringify(data),
			analysis : {pageId : 1550, funId : 11430},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('bankBindSucc') + account.url.getParams();
				}
			}
		});
	};
	var _bindEvent = function() {
		$('#submitBtn').click(function(){
			submtiData(this);
		});
		
		$('#mobile').off('blur').on('blur', function(){
			var $mobile = $(this);
			setTimeout(function(){
				_mobileValidate($mobile);
			},150);
		});
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			 _sendSms();
		 });
		 $('#changePass').on('click', function(){
			 _changePass();
		 });
		
		
	};
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.delBank = (function(){
	var _validIdCard = function() {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var idCard = $('#idCard').val();
		if (!reg.test(idCard)) {
			account.message.showErrorMessage("身份证的格式不正确");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	
	var _validData = function() {
		var bankCardId = $('#id').val();
		if(!bankCardId || $.trim(bankCardId) == '') {
			account.message.showErrorMessage("银行卡ID不能为空");
			return false;
		}
		if (!_validIdCard()) {
			return false;
		}
		return true;
	};
	
	var click_time = 0;
	var _submtiData = function(element) {
		if (!_validData()) {
			return ;
		}
		click_time ++ ;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		var data = {bankCardId : $('#id').val(), idCard : $('#idCard').val(), uname : $('#uname').val()};
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxDelBankCard'),
			data : data,
			analysis : {pageId : 1560, funId : 11450},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('delBankSucc') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function(){
		$('#submitBtn').on('click', function(){
			_submtiData(this);
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
	
})();


/**
 * Bind nickname
 */
account.view.changeNickname = (function(){
	var _validNickname = function() {
		var nickname = $('#nickname').val();
		if (!nickname || $.trim(nickname) == '') {
			account.message.showErrorMessage("请输入正确 格式的昵称");
			return false;
		}
		var reg = /^([\u4e00-\u9fa5]|[a-zA-Z0-9_-])+$/;
		if (!reg.test(nickname)) {
			account.message.showErrorMessage("昵称中包含非法字符");
			return false;
		}
		var length = _getLength(nickname);
		if (length < 4) {
			account.message.showErrorMessage("昵称的长度不能小于4个字符");
			return false;
		}
		if (length > 20) {
			account.message.showErrorMessage("昵称的长度不能大于20个字符");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	
	var _getLength = function(str) {
		var length = 0;
		var str_length = str.length;
		var chine = /^[\u4e00-\u9fa5]+$/;
		for (var i = 0; i < str_length; i++) {
			if (chine.test(str.charAt(i))) {
				length += 2;
			} else {
				length ++;
			}
		}
		return length;
	};
	
	var click_time = 0;
	var submtiData = function() {
		if (!_validNickname()) {
			return ;
		}
		var nickname = $('#nickname').val();
		click_time ++ ;
		$parent = $('#submitBtn').parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBindNickname'),
			data : {account: $('#uname').val(), nickname : nickname},
			analysis : {pageId : 1380, funId : 11150},
			success : function(data) {
				if (data.result) {
					var nick = data.nickname;
					var source = $('#source').val();
					var param = '';
					if (source == 5 || source == 128) {
						param += '91?type=200&nick='+nick;
					}
					location.href = account.url.getTemplateUrl('changeNicknameSucc') + account.url.getParams(param);
				}
			}
		});
	};
	var _bindEvent = function() {
		$('#submitBtn').off('click').on('click', function(){
			submtiData(this);
		});
		
		/*account.event.click($('#submitBtn'), function(){
			submtiData();
		}, 'touchend');*/
		
		/*$('#submitBtn').on('touchend', function(){
			submtiData(this);
		});*/
		
	};
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


/**
 * 找回密码
*/
account.view.findPass = (function(){
	var click_times = 0 ;
	var _mobileValidate = function($mobile) {
		var display = $('#emailDiv').css('display');
		if (display == 'block') {
			return ;
		}
		return account.util.valideMobile($mobile);
	};
	var _sendSms = function() {
		var mobile = $('#mobile').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		account.ajax.execute({
			url: account.url.getAjaxUrl('ajaxChckeMobile') + mobile,
			beforeSend : function() {
				$('#sendCode').attr('disabled', 'disabled');
				$('#sendCode').addClass('btn-yzm-disable');
			},
			customHandleError : function(data) {
				if (data.code != 'A1101') {
					$('#sendCode').removeAttr('disabled');
					$('#sendCode').removeClass('btn-yzm-disable');
				}
				return true;
			},
			success : function(data) {
				$('#sendCode').removeAttr('disabled');
				$('#sendCode').removeClass('btn-yzm-disable');
				if (data) {
					account.util.sendSMS('mobile', mobile, undefined, {p:'1', action : account.sms.prefix + account.sms.findPass});
				} else {
					account.message.showErrorMessage("该手机号未注册");
				}
			}
		});
		//account.util.sendSMS('mobile', mobile);
	};
	
	var _validMobileForm = function() {
		var mobile = $('#mobile').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}
		
		return {mobile : mobile, code : code, verifyPattern : 'mobile'};
	};
	
	var _validEmailForm = function() {
		var email = $('#email').val();
		if (!email || $.trim(email) == '' || !account.util.isnotemail(email)) {
			account.message.showErrorMessage("邮箱格式不正确");
			return ;
		}
		var code = $('#vcode').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		
		var emailJsonObj = {key : $('#key').val(), keytp : $('#keytp').val(), source: $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			emailJsonObj.redirect_uri = redirectUri;
		}
		var emailData = JSON.stringify(emailJsonObj);
		return {email : email, code : code, data : emailData, method : 'findPass', verifyPattern : 'email'};
	};
	var _submitBindMobile = function(element) {
		var data = null;
		var analysisData = null;
		var selected = 'mobile';
		if ($('#findByEmail').hasClass('cur')) {
			selected = 'email';
		}
		if (selected == 'mobile') {
			var result = _validMobileForm();
			if (!result) {
				return ;
			}
			analysisData = {pageId : 1360, funId : 11110};
			data = result;
		} else {
			var result = _validEmailForm();
			if (!result) {
				return ;
			}
			analysisData = {pageId : 1360, funId : 11120};
			data = result;
		}
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxForgetPass'),
			analysis : analysisData,
			contentType:'application/json',
			data : JSON.stringify(data),
			customHandleError : function(data) {
				if (selected == 'email') {
					account.util.refreshImageVcode();
				}
				return true;
			},
			success : function(data) {
				if (data) {
					if (selected == 'mobile') {
						location.href = account.url.getTemplateUrl('resetPass') + account.url.getParams('type=1&token='+data);
					} else {
						location.href = account.url.getTemplateUrl('forgetPassByEmailSucc') + account.url.getParams();
					}
				}
			}
		});
	};
	
	var _showView = function($view, $self, $hideBtn, $hideView) {
		$hideBtn.removeClass('cur');
		$hideView.hide();
		$self.addClass('cur');
		$view.show();
		account.message.clearErrorMessage();
	};
	
	var _bindEvent = function() {
		/*$('#mobile').on('blur', function(){
			var $mobile = $(this);
			_mobileValidate($mobile);
		});*/
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			_sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
		 
		 $('#findByMoible').on('click', function(){
			 _showView($('#mobileForm'), $(this), $('#findByEmail'), $('#emailDiv'));
			 account.util.refreshImageVcode('mImageVcode');
		 });
		 $('#findByEmail').on('click', function(){
			 _showView($('#emailDiv'), $(this), $('#findByMoible'), $('#mobileForm'));
			 account.util.refreshImageVcode();
		 });
		 
		 var isSupportTouch = "ontouchend" in document ? true : false;
			if (isSupportTouch) {
				$("#ImageVcode").on('touchend',function(){
					account.util.refreshImageVcode();
				});
			} else {
				$("#ImageVcode").on('click',function(){
					account.util.refreshImageVcode();
				});
			}
			
			$('.uc-ipt:last', '#mobileForm').off('keyup').on('keyup', function(e){
				if(e.keyCode == 13){
			    	$('#submitBtn').click();
			    }
			});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.register = (function(){
	
	var _validateSame = function(){
		var u=$("#userNameR").val();
		if(u){
			if(u!=$("#userNameR").attr('nameStr')){
				account.ajax.execute({
					method : "GET",
					url: account.url.getAjaxUrl('ajaxCheckUname'),
					data : {uname : u},
					success : function(data) {
						$("#userNameR").attr('nameStr',u);
					},
					customHandleError:function(data){
						$("#userNameR").attr('nameStr',u);
						return true;
					}
				});
			}
		}		
	}
	
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
	};
	
	var _sendSms = function() {
		var $mobile = $('#mobile');
		if ($('#sendCode').hasClass('btn-yzm-disable')) {
			return false;
		}
		account.util.valideMobile($mobile, function(){
			account.util.sendSMS('mobile', $mobile.val(), undefined, {p:'1', action : account.sms.prefix + account.sms.register});
		});
	};
	
	var _sendSms2 = function() {
		var $mobile = $('#mobile2');
		if ($('#sendCode2').hasClass('btn-yzm-disable')) {
			return false;
		}
		account.util.valideMobile2($mobile, function(){
			account.util.sendSMS2('mobile', $mobile.val(), undefined, {p:'1', action : account.sms.prefix + account.sms.register});
		});
	};
	
	var _validMobile = function() {
		var mobile = $('#mobile').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}
		
		var newpass = $('#mobileUpass').val();
		if (!newpass || newpass.trim() == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		if (newpass.trim().length < 6) {
			account.message.showErrorMessage('密码长度不能小于6');
			return false;
		}
		
		if (newpass.trim().length > 20) {
			account.message.showErrorMessage('密码长度不能大于20');
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(newpass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合");
			return false;
		}
		
		account.message.clearErrorMessage();
		return true;
	};
	
	var _validEmail = function() {
		var email = $('#email').val();
		if(!account.util.isnotemail(email)) {
			return false;
		}
		
		var code = $('#vCode').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}
		
		var pass = $('#emailUpass').val();
		if (!pass || pass.trim() == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		
		var length = pass.length;
		if (length < 6) {
			account.message.showErrorMessage("密码长度不能小于6个字符");
			return false;
		}
		if (length > 20) {
			account.message.showErrorMessage("密码长度不能大于20个字符");
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(pass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合");
			return false;
		}			
		
		account.message.clearErrorMessage();
		return true;
	};
	
	
	var _validName = function(){
		var uname = $('#userNameR').val();
		//var reg = /^([\u4e00-\u9fa5]|[a-zA-Z-_\.]{1})([\u4e00-\u9fa5]|[a-zA-Z0-9-_\.])+$/;
		 var reg=/^([a-zA-Z-_\.]{1})([a-zA-Z0-9-_\.])+$/;
		if (!uname|| $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return false;
		}
		if (!reg.test(uname)) {
			account.message.showErrorMessage("用户名格式不正确");
			return false;
		}
		
//		var length = _getLength(uname);
		var length = uname.length;
		if (length < 4) {
			account.message.showErrorMessage("用户名长度不能小于4个字符");
			return false;
		}
		if (length > 20) {
			account.message.showErrorMessage("用户名长度不能大于20个字符");
			return false;
		}
		
		return true;
	};
	
	var _getLength = function(str) {
		var length = 0;
		var str_length = str.length;
		var chine = /^[\u4e00-\u9fa5]+$/;
		for (var i = 0; i < str_length; i++) {
			if (chine.test(str.charAt(i))) {
				length += 2;
			} else {
			length ++;
			}
		}
		return length;
	};
	
	var _validUname = function() {
		if (!_validName()) {
			return false;
		}
		var pass = $('#upass').val();
		if (!pass || $.trim(pass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		
		var length = pass.length;
		if (length < 6) {
			account.message.showErrorMessage("密码长度不能小于6个字符");
			return false;
		}
		if (length > 20) {
			account.message.showErrorMessage("密码长度不能大于20个字符");
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(pass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合");
			return false;
		}			
		
//		var code = $('#uCode').val();
//		if (!code || $.trim(code) == '') {
//			account.message.showErrorMessage('验证码不能为空');
//			return false;
//		}
		
		var mobile = $('#mobile2').val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		
		var code = $('#code2').val();
		if (!code || code.trim() == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}
		
		account.message.clearErrorMessage();
		return true;
	};
	
	var _showView = function($view) {
		account.message.clearErrorMessage();
		$('#hasBind').hide();
		$('#no-mail-tips').hide();
		var viewName = $('#tab').find('.cur').attr('view');
		$('#'+viewName).hide();
		$('#tab').find('li').each(function(){
			$(this).removeClass('cur');
		});
		$view.addClass('cur');
		var showViewName = $view.attr('view');
//		if (showViewName == 'unameRegister') {
//			$('#submitBtn').text('提交');
//		} else {
//			$('#submitBtn').text('下一步');
//		}
		$('#submitBtn').text('提交');
		var cur = (viewName == showViewName);
		if (showViewName == 'emailRegister' && !cur) {
			account.util.refreshImageVcode();
		}
		
		if (showViewName == 'unameRegister' && !cur) {
//			account.util.refreshImageVcode('uImageVcode');
			account.util.refreshImageVcode('mImageVcode2');
		}
		
		if (showViewName == 'mobileRegister' && !cur) {
			account.util.refreshImageVcode('mImageVcode');
		}
		$('#'+showViewName).show();
	};
	
	
	var click_times = 0;
	var _submitData = function() {
		var model = $('#tab').find('.cur').attr('model');
		var data = {};
		var analysisData = null;
		data.source = $('#source').val();
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirect_uri = redirectUri;
		}
		var keytp = account.util.getPageParamsBykey('keytp');
		if (keytp) {
			data.keytp = keytp;
		}
		var key = account.util.getPageParamsBykey('key');
		if (key) {
			data.key = key;
		}
		if (!model) {
			model = 'mobile';
		}
		if (model == 'mobile') {
			if (!_validMobile()) {
				return ;
			}
			analysisData = {pageId : 1350, funId : 11070};
			data.verifyPattern = 'mobile';
			data.mobile = $('#mobile').val();
			data.code = $('#code').val();
			data.upass = $('#mobileUpass').val();
		} else if (model == 'email') {
			if (!_validEmail()) {
				return ;
			}
			//analysisData = {pageId : 1350, funId : 11080};
			data.verifyPattern = 'email';
			data.email = $('#email').val();
			data.code = $('#vCode').val();
			data.method = 'register';
			var emailData = {source : $('#source').val(), upass : $('#emailUpass').val(), redirect_uri : redirectUri};
			if (keytp) {
				emailData.keytp = keytp;
			}
			var key = account.util.getPageParamsBykey('key');
			if (key) {
				emailData.key = key;
			}
			data.data = JSON.stringify(emailData);
		} else {
			// uname
			if (!_validUname()) {
				return ;
			}
			analysisData = {pageId : 1350, funId : 11090};
			data.verifyPattern = 'uname';
			data.uname =  $('#userNameR').val();
			data.upass =  $('#upass').val();
			data.source =  $('#source').val();
//			data.code =  $('#uCode').val();
			
			data.mobile = $('#mobile2').val();
			data.code = $('#code2').val();
		}
		if (account.util.getPasswordLevel(data.upass) < 2) {
			account.message.showErrorMessage("密码强度太低，请重新设置");
			return false;
		}
		data.afs_scene = $('#afs_scene').val();
		data.afs_token = $('#afs_token').val();
		click_times ++;
		$parent = $("#submitBtn").parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxRegisterAuth'),
			analysis : analysisData,
			contentType:'application/json',
			customHandleError : function(data) {
				$('#hasBind').hide();
				$('#no-mail-tips').hide();
				if (model == 'uname') {
//					account.util.refreshImageVcode('uImageVcode');
				}
				if (model == 'email') {
					account.util.refreshImageVcode();
				}
				
				// 邮箱被使用了
				if (data.code == 'A136') {
					$('#no-mail-tips').show();
					$('.ownerUname','#no-mail-tips').text(data.message);
					return false;
				}
				// 手机号被使用了
				if (data.code == 'A139') {
					$('.ownerUname').text(data.message);
					$('#infoTips').hide();
					$('#hasBind').show();
					return false;
				}
				return true;
			},
			data : JSON.stringify(data),
			success : function(data) {
				if (data) {
					var url = settings.baseUrl + data;
					if (data.indexOf("http") != -1) {
						url = data;
					}
					if (model == 'uname') {
						location.href = url;
						return ;
					}
					var param = '';
					if (model == 'email') {
						param="type=register";
						location.href = account.url.getTemplateUrl(data) + account.url.getParams(param);
						return ;
					}
					
					location.href = url;
					/*if (model == 'uname') {
						location.href = settings.baseUrl + data;
						return ;
					}*/
					
				}
			}
		});
	};
	
	var _switchPass = function(inputId, switchPassId) {
		var $input = $('#'+inputId);
		function args(elem) {
			// Return an object of element attributes
			var newAttrs = {};
			var rinlinejQuery = /^jQuery\d+$/;
			$.each(elem.attributes, function(i, attr) {
				if (attr.specified && !rinlinejQuery.test(attr.name)) {
					newAttrs[attr.name] = attr.value;
				}
			});
			return newAttrs;
		};
		
		var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
		var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
		var $switchPass = $('#'+switchPassId);
		var placeholder = $('#'+inputId).attr('placeholder');
		if ($switchPass.attr('show') == 'false'){
			$switchPass.attr("class","ico-eye-show fr");
			 if (!isInputSupported) {
				$replacement = $('<input>').attr($.extend(args($('#'+inputId)[0]), { 'type': 'text', 'id':'', 'name':''})).val($('#'+inputId).val());
				$replacement.on('blur', function(){
					var val = $replacement.val();
					if (val != placeholder && $.trim(val) != '') {
						$('#'+inputId).val($replacement.val());
					}
				});
				$('#'+inputId).hide().after($replacement);
				var value = $('#'+inputId).val();
				if ($.trim(value) == '') {
					$replacement.val(placeholder);
				}
				if ($replacement.val() == placeholder) {
					$replacement.addClass('placeholder');
				} else {
					$replacement.removeClass('placeholder');
				}
				$replacement.on('focus', function(){
					if ($replacement.val() == placeholder) {
						$replacement.val('');
						$replacement.removeClass('placeholder');
					}
					
				});
			} else {
				$('#'+inputId).attr('type', 'text');
			}
			 $switchPass.attr('show', 'true');
			return ;
		}else{
			$switchPass.attr('class',"ico-eye fr");
			 if (!isInputSupported) {
				 var $nextInput = $('#'+inputId).next();
				 $('#'+inputId).show();
				 $nextInput.remove();
				 var val = $nextInput.val();
				 if (val != placeholder && $.trim(val) != '') {
				     $input.focus();
				     $input.blur();
				 }
			} else {
				$('#'+inputId).attr('type', 'password');
			}
			 $switchPass.attr('show', 'false');
		}
	};
	
	var _showPass = function() {
		_switchPass('upass', 'switchPass');
	};
	
	var _showPassByMobile = function() {
		_switchPass('mobileUpass', 'mobileSwitchPass');
	};
	
	var _showPassByEmail = function() {
		_switchPass('emailUpass', 'emailSwitchPass');
	};
	
	var _changePass = function(){
		location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams();
	};
	
	var _bindEvent = function() {
		
		$("#userNameR").off('blur').on('blur',function(){
			_validateSame();
		});
		
		$("#mobileUpass, #upass").off('blur').on('blur',function(){
			var upass = $(this).val();
			if (upass) {
				if (account.util.getPasswordLevel(upass) < 2) {
					account.message.showErrorMessage("密码强度太低，请重新设置");
					return false;
				} else {
					account.message.clearErrorMessage();
				}
			}
		});
		
		 var isSupportTouch = "ontouchend" in document ? true : false;
		 var event = 'click';
		 if (isSupportTouch) {
			 event = 'tap';
		 }
		$('#tab').find('li').each(function(){
			$(this).on(event, function(){
				_showView($(this));
			});
		});
		
		account.event.click($("#sendCode"), function(){
			$('#hasBind').hide();
			 _sendSms();
		 });
		
		account.event.click($("#sendCode2"), function(){
			$('#hasBind').hide();
			_sendSms2();
		});
		
		account.event.click($("#submitBtn"), function(){
			 _submitData();
		 });
		
		account.event.click($("#ImageVcode"), function(){
			account.util.refreshImageVcode();
		}, 'touchend');
		
		account.event.click($("#ImageVcode2"), function(){
			account.util.refreshImageVcode('ImageVcode2');
		}, 'touchend');
		
//		account.event.click($("#uImageVcode"), function(){
//			account.util.refreshImageVcode('uImageVcode');
//		}, 'touchend');
		
		account.event.click($('#switchPass'), function(){
			_showPass();
		});
		
		account.event.click($('#mobileSwitchPass'), function(){
			_showPassByMobile();
		});		
		
		account.event.click($('#emailSwitchPass'), function(){
			_showPassByEmail();
		});				
		
		account.event.click($('.changePass'), function(){
			_changePass();
		});
		
		// 添加Enter事件的支持
		$('.uc-ipt:last', '#mobileRegister').on('keyup', function(e){
			if(e.keyCode == 13){
		    	$('#submitBtn').click();
		    }
		});
		
		$('.uc-ipt:last', '#emailRegister').on('keyup', function(e){
			if(e.keyCode == 13){
		    	$('#submitBtn').click();
		    }
		});
		
		$('.uc-ipt:last', '#unameRegister').on('keyup', function(e){
			if(e.keyCode == 13){
				$('#submitBtn').click();
			}
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.registerSubmit = (function(){
	
	var _passwordValide = function() {
		var newpass = $('#newPass').val();
		if (!newpass || $.trim(newpass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		if ($.trim(newpass).length < 6) {
			account.message.showErrorMessage('密码长度不能小于6');
			return false;
		}
		
		account.event.click($('#mobileSwitchPass'), function(){
			_showPassByMobile();
		});
		
		account.event.click($('.changePass'), function(){
			_changePass();
		});
		
		
	};
	
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.login = (function(){
	
	var _validData = function() {
		var uname = $('#uname').val();
		if (!uname|| $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return false;
		}
		var pass = $('#newPass').val();
		if (!pass || $.trim(pass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		
		var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}
		
		account.message.clearErrorMessage();
		return true;
	};
	
	var _showPass = function() {
		if ($('#switchPass').attr('show') == 'true') {
			$('#newPass').attr('type', 'text');
			$('#switchPass').attr('show', 'false');
			$('#switchPass').attr('class', 'upass-switch-show');
		} else {
			$('#newPass').attr('type', 'password');
			$('#switchPass').attr('show', 'true');
			$('#switchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var click_times = 0;
	var _submitData = function() {
		$parent = $('#submitBtn').parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		click_times ++;
		if (!_validData()) {
			return ;
		}
		var data = $('#from').serialize();
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data +=  '&redirect_uri='+redirectUri;
		}
		//account.util.analysis.analysis({pageId : 1340, funId : 11060});
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxLogin'),
			data : data,
			analysis : {pageId : 1340, funId : 11060},
			customHandleError : function(data) {
				account.util.refreshImageVcode();
				return true;
			},
			success : function(data) {
				if (data) {
					var url = settings.baseUrl + data;
					if (data.indexOf("http") != -1) {
						url = data;
					}
					location.href = url;
				}
			}
		});
	};
	
	var _qqLogin = function() {
		//location.href = account.url.getAjaxUrl('ajaxQQLogin') + account.url.getParams();
		var data = {source : $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirect_uri = redirectUri;
		}
		account.ajax.execute({
			method : "GET",
			url: account.url.getAjaxUrl('ajaxQQLogin'),
			data : data,
			success : function(data) {
				if (data) {
					//$('#qqIframe').attr('src', data);
					//$('#tipsPopup').show();
					location.href = data;
				}
			}
		});
	};
	
	var _weixinLogin = function() {
		//location.href = account.url.getAjaxUrl('ajaxQQLogin') + account.url.getParams();
		var data = {source : $('#source').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirect_uri = redirectUri;
		}
		account.ajax.execute({
			method : "GET",
			url: account.url.getAjaxUrl('ajaxWeChatLogin'),
			data : data,
			success : function(data) {
				if (data) {
					location.href = data;
				}
			}
		});
	};
	
	var _bindEvent = function() {
		account.event.click($('#submitBtn'), function(e){
			_submitData(e);
		});
		
		/*account.event.click($('#switchPass'), function(){
			//_showPass();
		});*/
		account.event.click($('#qqLogin'), function(){
			_qqLogin();
		});
		
		var $imageVcode = $("#ImageVcode");
		if ($imageVcode && $imageVcode.length) {
			account.event.click($("#ImageVcode"), function(){
				account.util.refreshImageVcode();
			});
		}
		
		account.event.click($("#closePopup"), function(){
			$("#tipsPopup").hide();
		},'touchend');
		account.event.click($('#weChatLogin'), function(){
			_weixinLogin();
		});
		
		
	};
	
	
	var _init = function() {
		_bindEvent();
		var $imageVcode = $("#ImageVcode");
		if ($imageVcode && $imageVcode.length) {
			account.util.refreshImageVcode();
		}
		
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.common = (function(){
	var _bindEvent = function() {
		$("#backAccountManage").on('click', function(){
			var baseUrl= $('#basePath').val();
			var source = $('#source').val();
			var token = $('#token').val();
			var url = baseUrl + 'page/account/accoutManage?accessToken='+token;
			if (source) {
				url += "&source="+source;
			}
			location.href = url;
		});
	};
	
	var analysisConfig = {'ajaxUnBindMobileByEmail' : {pageId:1450, funId : 11270},
			'ajaxUnBindEmailByEmail' : {pageId:1510, funId : 11370}
	};
	
	var _checkEmail = function() {
		var code = $('#emailCode').val();
		if (!code) {
			$('#main1').show();
			$("#weixin_layer").hide();
			return ;
		}
		var url = $('#u').val();
		if (!url) {
			return ;
		}
		var analysisData = analysisConfig[url];
		setTimeout(function(){
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl(url),
				data : {code : code},
				analysis : analysisData,
				customHandleError : function(data){
					$('#message').text(data.message);
					$('#emailMain').show();
					return false;
				},
				success : function(data) {
					if (data) {
						$('#main1').show();
					}else {
						$('#emailMain').show();
					}
				}
			});
		}, 1000);
	};
	
	var _init = function() {
		_checkEmail();
		_bindEvent();
		$('#backAccountManage').focus();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.registerByEmail = (function(){
	var _checkEmail = function() {
		var code = $('#emailCode').val();
		setTimeout(function(){
			account.ajax.execute({
				method : "GET",
				url: account.url.getAjaxUrl('ajaxRegisterByEmail'),
				data : {code : code},
				analysis : {pageId : 1350, funId : 11080},
				customHandleError : function(data){
					$('#message').text(data.message);
					$('#emailMain').show();
					return false;
				},
				success : function(data) {
					if (data) {
						if (data.url) {
							var url = settings.baseUrl + data.url;
							if (data.url.indexOf("http") != -1) {
								url = data.url;
							}
							location.href = url;
							return ;
						}
						var param = "accessToken="+data.token;
						if (data.source) {
							param += "&source="+data.source;
						}
						location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams(param);
					}else {
						$('#emailMain').show();
					}
				}
			});
		}, 1000);
	};
	
	var _init = function() {
		_checkEmail();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.goToUnbindQQ = (function(){
	var _bindEvent = function() {
		$('#unbindQQ').on('click', function(){
			account.util.analysis.analysis({pageId : 1580, funId : 11470});
			setTimeout(function(){
				location.href = account.url.getTemplateUrl('unBindQQ') + account.url.getParams();
			}, 50);
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.unbindQQ = (function(){
	
	var _unbindQQ = function(){
		account.ajax.execute({
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnbindQQ'),
			analysis : {pageId : 1580, funId : 11480},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('accountManage') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		$('#modifyPass').on('click', function(){
			location.href = account.url.getTemplateUrl('changePass') + account.url.getParams('type=1');
		});
		
		$('#unbindQQ').on('click', function(){
			_unbindQQ();
		});
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.analysis = (function() {
	var _init = function() {
		var data = {pageId : $('#pageId').val(), funId : $('#funId').val()};
		account.util.analysis.analysis(data);
	};
	return {
		init : function() {
			_init();
		}
	};
	
})();


account.view.keySettings = (function() {
	var _bindEvent = function(){
		$('#setPass').on('click', function(){
			location.href = account.url.getTemplateUrl('exSetPass') + account.url.getParams();
		});
		
		$('#bindOldAccount').on('click', function(){
			location.href = account.url.getTemplateUrl('exBindAccount') + account.url.getParams();
		});
	};
	return {
		init : function() {
			_bindEvent();
		}
	};
	
})();

account.view.setPass = (function(){
	
	var _passwordValide = function() {
		var newpass = $('#newPass').val();
		var comfirmPass = $('#comfirmPass').val();
		if (!newpass || $.trim(newpass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		if ($.trim(newpass).length < 6) {
			account.message.showErrorMessage('密码长度不能小于6');
			return false;
		}
		
		if (!/^[0-9a-zA-Z]{1,}$/.test(newpass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return false;
		}
		
		if (account.util.getPasswordLevel(newpass) < 2) {
			account.message.showErrorMessage("密码强度太低，请重新设置");
			return false;
		}
		
		if (!comfirmPass || $.trim(comfirmPass) == '') {
			account.message.showErrorMessage('确认密码不能为空');
			return false;
		}
		
		if ($.trim(comfirmPass) != $.trim(newpass)) {
			account.message.showErrorMessage('两次密码不一致');
			return false;
		}
		
		return newpass;
	};
	
	var _showPass = function() {
		if ($('#switchPass').attr('show') == 'true') {
			$('#newPass').attr('type', 'text');
			$('#switchPass').attr('show', 'false');
			$('#switchPass').attr('class', 'upass-switch-show');
		} else {
			$('#newPass').attr('type', 'password');
			$('#switchPass').attr('show', 'true');
			$('#switchPass').attr('class', 'upass-switch-hide');
		}
	};
	
	var click_time = 0;
	var _submitData = function(element) {
		
		var passValide = _passwordValide();
		if (!passValide) {
			return ;
		}
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		
		click_time ++;
		
		var source = $('#source').val();
		var keytp = account.util.getPageParamsBykey('keytp');
		var key = account.util.getPageParamsBykey('key');
		var data = {source : source, newPass : passValide, keytp : keytp, key : key};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirecUri = redirectUri;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_time,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxExSetpass'),
			//analysis : {pageId : 1390, funId : 11160},
			data : data,
			success : function(data) {
				if (data.result) {
					if (data.url) {
						if (data.url.indexOf("http") != -1) {
							location.href = data.url;
							return ;
						}
						location.href = settings.baseUrl + data.url;
						return ;
					}
				}
			}
		});
		
	};
	
	var _setPasswordLevel = function() {
		var pass = $('#newPass').val();
		if (!/^[0-9a-zA-Z]{1,}$/.test(pass)) {
			account.message.showErrorMessage("密码只能是字母、数字的组合排列");
			return ;
		}
		var level = account.util.getPasswordLevel(pass);
		var $spans = $('span', '#passStrength');
		$spans.removeClass('cur');
		var length = $spans.length;
		if (level == 0) {
			$spans.eq(length - 1).addClass('cur');
		}
		var index = length - 1;
		for (var i = 0; i < level; i++) {
			$spans.eq(index - i).addClass('cur');
		}
		account.message.clearErrorMessage();
		
	};
	
	var _bindEvent = function() {
		
		$('#newPass').on('focus', function(){
			$('#newPass').off('keyup').on('keyup', function(){
				_setPasswordLevel();
			});
		});
		
		$("#newPass").off('blur').on('blur',function(){
			var upass = $(this).val();
			if (upass) {
				if (account.util.getPasswordLevel(upass) < 2) {
					account.message.showErrorMessage("密码强度太低，请重新设置");
					return false;
				} else {
					account.message.clearErrorMessage();
				}
			}
		});
		
		$('#submitBtn').on('click', function(){
			_submitData(this);
		});
		
		$('#switchPass').on('click', function(){
			_showPass();
		});
		
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.exchangeAcc = (function(){
	
	var _validData = function() {
		var uname = $('#uname').val();
		if (!uname|| $.trim(uname) == '') {
			account.message.showErrorMessage("用户名不能为空");
			return false;
		}
		var pass = $('#newPass').val();
		if (!pass || $.trim(pass) == '') {
			account.message.showErrorMessage('密码不能为空');
			return false;
		}
		
		/*var code = $('#code').val();
		if (!code || $.trim(code) == '') {
			account.message.showErrorMessage('验证码不能为空');
			return false;
		}*/
		
		account.message.clearErrorMessage();
		return true;
	};
	
	var click_times = 0;
	var _submitData = function() {
		$parent = $('#submitBtn').parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		click_times ++;
		if (!_validData()) {
			return ;
		}
		var data = $('#from').serialize();
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data +=  '&redirect_uri='+redirectUri;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxExBindAcc'),
			data : data,
			//analysis : {pageId : 1340, funId : 11060},
			customHandleError : function(data) {
				//account.util.refreshImageVcode();
				return true;
			},
			success : function(data) {
				if (data) {
					var url = settings.baseUrl + data;
					if (data.indexOf("http") != -1) {
						url = data;
					}
					location.href = url;
				}
			}
		});
	};
	
	var _qqLogin = function() {
		var data = {source : $('#source').val(), keytp : $('#keytp').val(), key : $('#key').val()};
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirect = redirectUri;
		}
		account.ajax.execute({
			method : "GET",
			url: account.url.getAjaxUrl('ajaxExQQAuth'),
			data : data,
			success : function(data) {
				if (data) {
					location.href = data;
				}
			}
		});
	};
	
	var _bindEvent = function() {
		account.event.click($('#submitBtn'), function(e){
			_submitData(e);
		});
		
		account.event.click($('#qqLogin'), function(){
			_qqLogin();
		});
		
	};
	
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

account.view.vuser = (function(){
	
	var click_times = 0 ;
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
	};
	var _sendSms = function() {
		var $mobile = $('#mobile');
		account.util.valideMobile($mobile, function(){
			account.util.sendSMS('mobile', $mobile.val(), null, {action : account.sms.prefix + account.sms.bindMobile, uname : $('#uname').val()});
		});
	};
	

	var _validNickname = function() {
		var nickname = $('#nickname').val();
		if (!nickname || $.trim(nickname) == '') {
			account.message.showErrorMessage("请输入正确 格式的昵称");
			return false;
		}
		var reg = /^([\u4e00-\u9fa5]|[a-zA-Z0-9_-])+$/;
		if (!reg.test(nickname)) {
			account.message.showErrorMessage("昵称中包含非法字符");
			return false;
		}
		var length = _getLength(nickname);
		if (length < 4) {
			account.message.showErrorMessage("昵称的长度不能小于4个字符");
			return false;
		}
		if (length > 20) {
			account.message.showErrorMessage("昵称的长度不能大于20个字符");
			return false;
		}
		account.message.clearErrorMessage();
		return true;
	};
	
	var _getLength = function(str) {
		var length = 0;
		var str_length = str.length;
		var chine = /^[\u4e00-\u9fa5]+$/;
		for (var i = 0; i < str_length; i++) {
			if (chine.test(str.charAt(i))) {
				length += 2;
			} else {
				length ++;
			}
		}
		return length;
	};
	
	var _submit = function(element) {
		var data = {};
		if ($('#mobile') && $('#mobile').length) {
			var mobile = $('#mobile').val();
			if (!/^1\d{10}$/g.test(mobile)) {
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return ;
			}
			var code = $('#code').val();
			if (!code || $.trim(code) == '') {
				account.message.showErrorMessage('验证码不能为空');
				return ;
			}
			data.mobile = mobile;
			data.code = code;
		}
		
		if ($('#nickname') && $('#nickname').length) {
			if (_validNickname()) {
				data.nickname = $('#nickname').val();
			}
		}
		
		if (!data.nickname && !data.mobile) {
			return ;
		}
		
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxVuserBase'),
			data : data,
			//analysis : {pageId : 1400, funId : 11180},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('vuserInfo') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		if ($('#mobile') && $('#mobile').length) {
			$('#mobile').off('blur').on('blur', function(){
				var $mobile = $(this);
				setTimeout(function(){
					_mobileValidate($mobile);
				},150);
			});
			 $('#sendCode').on('click', function(){
				if ($('#sendCode').hasClass('btn-yzm-disable')) {
					event.preventDefault();
					return false;
				}
				 _sendSms();
			 });
		}
		 
		 $('#submitBtn').on('click', function(){
			 _submit(this);
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();


account.view.vuserinfo = (function(){
	
	var _validData = function() {
		var realname = $('#realname').val();
		if (!realname|| $.trim(realname) == '') {
			account.message.showErrorMessage("姓名不能为空");
			return false;
		}
		var industry = $('#industry').val();
		if (!industry || $.trim(industry) == '') {
			account.message.showErrorMessage('行业不能为空');
			return false;
		}
		
		var company = $('#company').val();
		if (!company || $.trim(company) == '') {
			account.message.showErrorMessage('公司不能为空');
			return false;
		}
		var level = $('#level').val();
		if (!level || $.trim(level) == '') {
			account.message.showErrorMessage('职位不能为空');
			return false;
		}
		var desc = $('#desc').val();
		if (!desc || $.trim(desc) == '') {
			account.message.showErrorMessage('认证说明不能为空');
			return false;
		}
		
		
		account.message.clearErrorMessage();
		return true;
	};
	
	var _uploader = {
			init: function() {
	            uploader = new WebUploader.Uploader({
	                pick: {
	                    id: '#filePicker',
	                    multiple: false
	                },

	                // 设置用什么方式去生成缩略图。
	                thumb: {
	                    quality: 70,

	                    // 不允许放大
	                    allowMagnify: false,

	                    // 是否采用裁剪模式。如果采用这样可以避免空白内容。
	                    crop: false
	                },
	                
	                accept : {
	                	title : 'Images',
	                	extensions: 'gif,jpg,jpeg,bmp,png',
	                	mimeTypes: 'image/*'
	                },

	                // 禁掉分块传输，默认是开起的。
	                chunked: false,

	                // 禁掉上传前压缩功能，因为会手动裁剪。
	                compress: false,

	                // fileSingleSizeLimit: 2 * 1024 * 1024,

	                server: $('#basePath').val() + 'vuser/info',
	                swf: $('#basePath').val() + 'webuploader/js/Uploader.swf',
	                fileNumLimit: 1,
	                onError: function() {
	                    var args = [].slice.call(arguments, 0);
	                    alert(args.join('\n'));
	                }
	            });
	            
	            uploader.on('beforeFileQueued', function(_file){
	            	uploader.reset();
	            	return true;
	            });
	            uploader.on('fileQueued', function( _file ) {
	                file = _file;

	                uploader.makeThumb( file, function( error, src ) {

	                    if ( error ) {
	                        alert('不能预览');
	                        return;
	                    }

	            		$('#previewImg').attr('src', src);

	                }, 1600, 1 );   // 注意这里的 height 值是 1，被当成了 100% 使用。
	            });
	            
	            uploader.on( 'uploadBeforeSend', function(block, data, headers){
	            	var oath = account.util.alg.auth();
	    			if (!oath) {
	    				return ;
	    			}
	    			$('#weixin_layer').show();
	    			
	    			data.realName = $('#realname').val();
	    			data.industry = $('#industry').val();
	    			data.company = $('#company').val();
	    			data.level = $('#level').val();
	    			data.desc = $('#desc').val() ? $('#desc').val() : '省份证+工号';
	    			headers['X-Requested-Type'] = oath;
	            });
	            uploader.on( 'uploadSuccess', function(file, data){
	            	var status = data.code;
					  $('#weixin_layer').hide();
					  if (status != '200') {
						  if (status == 'A1300') {
							  window.location.reload();
							  return ;
						  }
						  if (status == 'A148') {
							 location.href = settings.baseUrl + 'page/account/login'; 
							 return ;
						  }
						  account.message.showErrorMessage(data.message);
						  return ;
					  }
					  alert('success');
	            });
	            uploader.on( 'error', function(type){
	            	alert(type);
	            });
	        },
	        
	        upload : function(){
	        	var files = uploader.getFiles();
	        	if (!files || !files.length) {
	        		account.message.showErrorMessage('图片不能为空');
					return ;
	        	}
	            uploader.upload(file);
	        }
	};
	
	var click_times = 0;
	var _submitData = function() {
		$parent = $('#submitBtn').parent();
		if ($parent.hasClass('disabled')) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
			return ;
		}
		click_times ++;
		if (!_validData()) {
			return ;
		}
		_uploader.upload();
	};
	
	var _bindEvent = function() {
		account.event.click($('#submitBtn'), function(e){
			_submitData(e);
		});
		
	};
	
	
	var _init = function() {
		_uploader.init();
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 绑定湘财资金账号
*/
account.view.bindxcid = (function(){
	var click_times = 0 ;
	var _mobileValidate = function($mobile) {
		return account.util.valideMobile($mobile);
	};
	
	var _changePass = function(){
		location.href = account.url.getTemplateUrl('forgetPass') + account.url.getParams()+'&findPass=findPass';
	};
	var _sendSms = function() {
		var $mobile = $('#mobile');
		account.util.valideMobile($mobile, function(){
			account.util.sendSMS('mobile', $mobile.val(), null, {action : account.sms.prefix + account.sms.bindMobile, uname : $('#uname').val()});
		});
	};
	
	var _submitBindMobile = function(element, forceBind) {
		var $mobileEle = $('#mobile');
		var mobile = undefined;
		var code = undefined;
		if ($mobileEle && $mobileEle.length) {
			
			mobile = $mobileEle.val();
			if (!/^1\d{10}$/g.test(mobile)) {
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return ;
			}
			
			code = $('#code').val();
			if (!code || code.trim() == '') {
				account.message.showErrorMessage('验证码不能为空');
				return ;
			}
		}
		
		var accountVal = $('#account').val();
		if (!accountVal || accountVal.trim() == '') {
			account.message.showErrorMessage('资金账号不能为空');
			return ;
		}
		
		var upass = $('#upass').val();
		if (!upass || upass.trim() == '') {
			account.message.showErrorMessage('交易密码不能为空');
			return ;
		}
		
		
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			event.preventDefault();
			return ;
		}
		var data = {type : $('#accountType').val(), account : accountVal, upass:upass};
		if (mobile) {
			data.mobile = mobile;
			data.code = code;
		}
		if (forceBind) {
			data.forcedBind = true;
		}
		
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxBindxcid'),
			data : data,
			// analysis : {pageId : 1140, funId : 10740},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('bindXCidSucc') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			_sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
		 
		 $('#mobile').off('blur').on('blur', function(){
				var $mobile = $(this);
				setTimeout(function(){
					_mobileValidate($mobile);
				},150);
			});
		 $('#changePass').on('click', function(){
			 _changePass();
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 解绑湘财资金账号
*/
account.view.unbindxcid = (function(){
	var click_times = 0 ;
	
	var _sendSms = function() {
		var $mobile = $('#mobile');
		var $codeContainer = $("#mobileVcode");
		if ($codeContainer.css('display') == 'block') {
			var $codeEle = $("#mCode");
			if ($codeEle && $codeEle.length) {
				var code = $codeEle.val();
				if ($.trim(code) == '') {
					account.message.showErrorMessage("图形验证码不能为空");
					return;
				}
			}
		}
		var mobile = $mobile.val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		account.util.sendSMS('mobile', $mobile.val(), undefined, {p:'1', action : account.sms.prefix + account.sms.unbindxcid});
	};
	
	var _submit = function(element) {
		var $mobileEle = $('#mobile');
		var mobile = undefined;
		var code = undefined;
		if ($mobileEle && $mobileEle.length) {
			
			mobile = $mobileEle.val();
			if (!/^1\d{10}$/g.test(mobile)) {
				account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
				return ;
			}
			
			code = $('#code').val();
			if (!code || code.trim() == '') {
				account.message.showErrorMessage('验证码不能为空');
				return ;
			}
		}
		
		var upass = $('#upass').val();
		if (!upass || upass.trim() == '') {
			account.message.showErrorMessage('交易密码不能为空');
			return ;
		}
		
		
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			event.preventDefault();
			return ;
		}
		var data = {upass:upass};
		if (mobile) {
			data.mobile = mobile;
			data.code = code;
		}
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxUnBindxcid'),
			data : data,
			// analysis : {pageId : 1140, funId : 10740},
			success : function(data) {
				if (data) {
					location.href = account.url.getTemplateUrl('unbindXCidSucc') + account.url.getParams();
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 
		 $('#submitBtn').on('click', function(){
			 _submit(this);
		 });
		 
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			_sendSms();
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

/**
 * 湘财资金账号登录
*/
account.view.loginByxcid = (function(){
	var click_times = 0 ;
	
	var _sendSms = function() {
		var $mobile = $('#mobile');
		var $codeContainer = $("#mobileVcode");
		if ($codeContainer.css('display') == 'block') {
			var $codeEle = $("#mCode");
			if ($codeEle && $codeEle.length) {
				var code = $codeEle.val();
				if ($.trim(code) == '') {
					account.message.showErrorMessage("图形验证码不能为空");
					return;
				}
			}
		}
		var mobile = $mobile.val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return false;
		}
		account.util.sendSMS('mobile', $mobile.val(), undefined, {p:'1', action : account.sms.prefix + account.sms.loginByxcid});
	};
	
	var _submitBindMobile = function(element) {
		var $mobileEle = $('#mobile');
		var mobile = $mobileEle.val();
		
		mobile = $mobileEle.val();
		if (!/^1\d{10}$/g.test(mobile)) {
			account.message.showErrorMessage("手机号输入非法，请输入合法手机号");
			return ;
		}
		
		var code = $('#code').val();
		if (!code || code.trim() == '') {
			account.message.showErrorMessage('验证码不能为空');
			return ;
		}
		
		var accountVal = $('#account').val();
		if (!accountVal || accountVal.trim() == '') {
			account.message.showErrorMessage('资金账号不能为空');
			return ;
		}
		
		var upass = $('#upass').val();
		if (!upass || upass.trim() == '') {
			account.message.showErrorMessage('交易密码不能为空');
			return ;
		}
		
		
		click_times ++;
		$parent = $(element).parent();
		if ($parent.hasClass('disabled')) {
			event.preventDefault();
			return ;
		}
		var data = {mobile : mobile, code : code, type : $('#accountType').attr('value'), account : accountVal, upass:upass};
		
		var redirectUri = account.util.getPageParamsBykey('redirect_uri');
		if (redirectUri) {
			data.redirect_uri = redirectUri;
		}
		var source = $('#source').val();
		if (source) {
			data.source = source;
		}
		
		account.ajax.execute({
			$ele : $parent,
			click_times : click_times,
			method : "POST",
			url: account.url.getAjaxUrl('ajaxLoginByxcid'),
			data : data,
			success : function(data) {
				if (data) {
					var url = settings.baseUrl + data;
					if (data.indexOf("http") != -1) {
						url = data;
					}
					location.href = url;
				}
			}
		});
	};
	
	var _bindEvent = function() {
		 $('#sendCode').on('click', function(){
			if ($('#sendCode').hasClass('btn-yzm-disable')) {
				event.preventDefault();
				return false;
			}
			 _sendSms();
		 });
		 
		 $('#submitBtn').on('click', function(){
			 _submitBindMobile(this);
		 });
	};
	
	var _init = function() {
		_bindEvent();
	};
	
	return {
		init : function() {
			_init();
		}
	};
})();

$(document).ready(function() {
	$(".login-status").hide();
	$(":input[type=text]").off('focus').on('focus',function(){
		$(".login-status").hide();
	});
	$(":input[type=password]").off('focus').on('focus',function(){
		$(".login-status").hide();
	});	
	var id=$("#curFlag").val();
	$("#"+id).addClass("cur");
	$('input').placeholder();
	settings.baseUrl = $('#basePath').val();
	var model = $('#model').val();
	account.view[model].init();
	$('#sendCode').removeAttr('disabled');
	//输入焦点切换
	/*$(".uc-ipt").each(function(){
		var ipt_v = $(this).val();	
		$(this).data("place-holder",ipt_v);
		$(this).focus(function(){
			if($.trim($(this).val())==ipt_v){
				$(this).val("").addClass("uc-ipt-focus");
			}
		}).blur(function(){
			if($.trim($(this).val())==""){
				$(this).val($(this).data("place-holder")).removeClass("uc-ipt-focus");
			}
		})
	});*/
	$(".pc-arr-l").attr('title','返回首页');
	$(".pc-arr-l").click(function(){
		//返回上一步
		//history.back();
		//跳转到首页
		var baseUrl= $('#basePath').val();
		var source = account.util.getPageParamsBykey('source');
    	var token = account.util.getPageParamsBykey('accessToken');		
		var url = baseUrl + 'page/account/accoutManage?p=1';
		if (source) {
			url += "&source="+source;
		}
		if (token) {
			url += "&accessToken="+token;
		}
		location.href = url;		
	});
	var $arryInputs = $('.uc-ipt');
	var index = $arryInputs.length - 1;
	if (index >= 0) {
		//form添加submit绑定事件
		$('form').off('submit').on('submit',function(){
			return false;
		});
		$arryInputs.eq(index).keyup(function(e){
			//为按钮添加回车热键
		    if(e.keyCode == 13){
		    	$('#next').click();
		    	$('#submitBtn').click();
		    	$('#button-sub').click();
		    }
		});
	};
	
	// 绑定获取验证码
	var $mobileCodeEle = $('#mImageVcode');
	if ($mobileCodeEle && $mobileCodeEle.length) {
		$mobileCodeEle.off('click').on("click", function(){
			account.util.refreshImageVcode('mImageVcode');
		});
	}
	var $mobileCodeEle2 = $('#mImageVcode2');
	if ($mobileCodeEle2 && $mobileCodeEle2.length) {
		$mobileCodeEle2.off('click').on("click", function(){
			account.util.refreshImageVcode('mImageVcode2');
		});
	}
	
});
