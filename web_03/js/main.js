function doReplay(){
	location.reload();
}
onload=function(){
	var txt1=document.getElementById("txt1");
	var bg=document.getElementById("part2");
	var imgContact=document.getElementById("imgLogo");
	var imgDiscount=document.getElementById("discount");
	
	var btnsign=document.getElementById("btnsign");
	var txtTs=document.getElementById("txtTs");
	var imgcover=document.getElementById("cover");
	
	var txtengery=document.getElementById("txtengery");
	var imglogocolor=document.getElementById("imglogocolor");
	var txtonline=document.getElementById("txtonline");
	var btnreplay=document.getElementById("replay");
	var studentId=document.getElementById("studentId");
	var timeoutId;
	timeoutId=setTimeout(function(){//change content of text
		txt1.innerHTML=" Switch to Contact <br/>When you move.";
	},1500);
	
	 timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent";
	},3500);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent1";
	},3600);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent2";
	},3700);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent3";
	},3800);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="solid";
	},4000);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="transparent";
	},5000);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="transparent1";
	},5100);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="transparent2";
	},5200);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="transparent3";
	},5300);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="solid";
		txt1.style.opacity=0;
		imgContact.style.opacity=0;
	},5500);
	timeoutId=setTimeout(function(){// show discount text
		imgDiscount.style.opacity=1;
		imgDiscount.style.left="70px";
		imgDiscount.style.top="3px";
	},6500);
	timeoutId=setTimeout(function(){
		imgDiscount.style.opacity=1;
		imgDiscount.style.left="70px";
		imgDiscount.style.top="15px";
	},6800);
	timeoutId=setTimeout(function(){//show button "sign up now"
		btnsign.innerHTML="";
		btnsign.style.opacity=1;
		btnsign.style.transform ="scale(0.5)"
	},7000);
	timeoutId=setTimeout(function(){
		btnsign.innerHTML="sign up now";
		btnsign.style.opacity=1;
		btnsign.style.transform ="scale(1)"
	},7300);
	timeoutId=setTimeout(function(){//show ts & cs text
		txtTs.style.opacity=1;
	},7500);
	timeoutId=setTimeout(function(){//change background to bg2
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent";
	},7600);
	timeoutId=setTimeout(function(){//change background to bg2
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent1";
	},7700);
	timeoutId=setTimeout(function(){//change background to bg2
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent2";
	},7800);
	timeoutId=setTimeout(function(){//change background to bg2
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent3";
	},7900);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="solid";
		btnsign.style.color="#b65473";
	},8100);
	timeoutId=setTimeout(function(){//change background to bg1
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="solid";
		btnsign.style.color="#ec695c";
	},8400);
	timeoutId=setTimeout(function(){//change background white cover red
		bg.style.backgroundImage="url('images/cover1.jpg')";
	},9400);
	timeoutId=setTimeout(function(){//hiden discount text
		imgDiscount.style.opacity=0;
		bg.style.backgroundImage="url('images/cover2.jpg')";
		
	},9700);
	timeoutId=setTimeout(function(){//hiden button
		btnsign.style.opacity=0;
		bg.style.backgroundImage="url('images/cover3.jpg')";
		
		
	},10000);
	timeoutId=setTimeout(function(){//background become white
		txtTs.style.opacity=0;
		bg.style.background="white url()";
		
	},10300);
	timeoutId=setTimeout(function(){//show 
		txtengery.style.opacity=1;
		imglogocolor.style.opacity=1;
		txtonline.style.opacity=1;
		
	},11300);
	timeoutId=setTimeout(function(){//show 
		txtengery.style.color="#983e74";
		
	},11800);
	timeoutId=setTimeout(function(){//show 
		txtengery.style.color="#fb4a3b";
		
	},12600);
	timeoutId=setTimeout(function(){//hiden 
		txtengery.style.opacity=0;
		imglogocolor.style.opacity=0;
		txtonline.style.opacity=0;
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		
	},13500);
	timeoutId=setTimeout(function(){//show logo
		imgContact.style.opacity=1;
		
	},14000);
	timeoutId=setTimeout(function(){//show txt1
		txt1.style.opacity=1;
		txt1.innerHTML="Unlimited <br>broad band on a<br> limited budget";
		
	},15000);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent";
	},16000);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="solid";
	},16200);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="transparent";
	},18200);
	timeoutId=setTimeout(function(){//change the content of text
		bg.style.backgroundImage="url('images/contact_bg1.jpg')";
		bg.className="solid";
		txt1.innerHTML=" Switch to Contact <br/>When you move."
	},18500);
	timeoutId=setTimeout(function(){//change background
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="transparent";
	},20500);
	timeoutId=setTimeout(function(){
		bg.style.backgroundImage="url('images/contact_bg2.jpg')";
		bg.className="solid";
	},20700);
	timeoutId=setTimeout(function(){//show replay button and studentid
		bg.style.opacity=0.7;
		txt1.style.opacity=0.7;
		imgContact.style.opacity=0.7;
		btnreplay.style.opacity=1;
		studentId.style.opacity=0.7;
		studentId.innerHTML="";
		studentId.style.transform ="scale(0.5)"
	},21000);
	timeoutId=setTimeout(function(){//show replay button and studentid
		
		studentId.innerHTML="Chunli Guo <br/> 1506724";
		studentId.style.transform ="scale(1)"
	},21300);

}
