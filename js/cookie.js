/***********
   创建cookie
   mJson:  'cookie名' : '值'
   date:  几天后过期
***********/
function createCookie(mJson, date){
	var time = new Date(new Date().getTime() + date*24*60*60*1000).toGMTString();
	for(var key in mJson){
		document.cookie = key+"="+mJson[key]+"; expires="+time;
	}
}

/***********
   删除cookie
   key:  cookie名字
***********/
function removeCookie(key){
	var json = {};
	json[key] = "";
	createCookie(json,-1);
}
/***********
   获取cookie
   key:  cookie名字
***********/
function getCookie(key){
	var Val = document.cookie.match(new RegExp('\\b'+key+'=([^;]*)(;|$)'));
	return Val?Val[1]:'';
}