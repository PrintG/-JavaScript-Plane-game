/*
*	元素    样式    目标距离     执行时间    回调函数
*/
function move(obj, myJson, time, callBack){
	//兼容定时器
	window.requestAnimationFrame = window.requestAnimationFrame || function(a){return setTimeout(a,1000/60);};
	window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
	
	var cVal = {};   //初始值
	var tVal = {};   //目标值
	for(var key in myJson){
		cVal[key] = parseFloat( getStyle(obj,key) );
		tVal[key] = parseFloat( myJson[key] );
	}
	var newDate = new Date();
	m();
	function m(){
		var nowDate = new Date();
		var prop = (nowDate - newDate)/time;
		prop >= 1?prop = 1:requestAnimationFrame(m);
		for(key in myJson){
			if(key === "opacity"){
				var opac = prop*(tVal[key] - cVal[key]);
				obj.style[key] = cVal[key] + opac;
				obj.style.filter = "alpha(opacity="+opac*100+")";
			}else{
				obj.style[key] = cVal[key] + prop*(tVal[key] - cVal[key]) + "px";
			}
			
		}
		//执行回调
		if(prop == 1){
			callBack && callBack();
		}
	}
}
//获取样式
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}