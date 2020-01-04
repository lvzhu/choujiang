//两个数组的坐标对应，后期可以直接连数据库 读取数据
var xinm = [ "朱一", "朱二","朱三", "朱四","朱五", "朱六","朱七", "朱八","朱九", "朱十"];

var phone = [1,2,3,4,5,6,7,8,9,10];

$(document).ready(function () {
	if(window.location.hash=='#2'){
		if(xinm.length>0){
			xinm=localStorage.getItem('newXinm').split(',');
			phone=localStorage.getItem('newPhon').split(',');
		}else{
			xinm=[];
			phone=[];
		}
		console.log('刷新浏览器以后');
		console.log(xinm);
	}else{
		localStorage.setItem('newXinm', xinm);
		localStorage.setItem('newPhon', phone);
	}
});

var nametxt = $('.name');
var phonetxt = $('.phone');
var pcount = xinm.length - 1;//参加人数
var runing = true;
var td = 6;//，共6个名额
var num = 0;
var t;


//开始停止
function start() {
	if (runing) {
		runing = false;
		$('#btntxt').removeClass('start').addClass('stop');
		$('#btntxt').html('停止');

		startNum();
	} else {
		runing = true;
		$('#btntxt').removeClass('stop').addClass('start');
		$('#btntxt').html('开始');
		stop();
		zd();//
	}
	//音乐播放暂停

	//	 if(audio.paused()){  
	//		 
	//	        audio.play();//audio.play();// 播放  
	//	 }
	//	 else{
	//	         //audio.pause();// 暂停
	//	         audio.pause();
	//	 } 
}
//循环参加名单
function startNum() {
	num = Math.floor(Math.random() * pcount);
	nametxt.html(xinm[num]);
	phonetxt.html(phone[num]);
	t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
	pcount = xinm.length - 1;
	clearInterval(t);
	t = 0;
}
//打印列表
function zd() {
	//打印中奖者名单
	if (td <= 0) {
		alert("投票结束");
	} else {
		if(xinm[num]){
			$('.list').prepend("<p>" + td + ' ' + xinm[num] + "-" + phone[num] + "</p>");
			//将已中奖者从数组中"删除",防止二次中奖
			var nerXinm = JSON.parse(JSON.stringify(xinm));
			var newPhon = JSON.parse(JSON.stringify(phone));
	
			nerXinm.splice(num, 1);
			newPhon.splice(num, 1);
			xinm = nerXinm;
			phone = newPhon;
			// var nerXinm=xinm.splice($.inArray(xinm[num], xinm), 1);
			// var newPhon=phone.splice($.inArray(phone[num], phone), 1);
	
			localStorage.setItem('newXinm', nerXinm);
			localStorage.setItem('newPhon', newPhon);
			console.log(2);
			console.log(nerXinm);
			window.location.hash=2;
			console.log('删除中奖人');
			console.log(xinm[num]);
		}
		td = td - 1;	
	}
	
}
//音乐
function a() {
	//window.parent.location.reload();
}
