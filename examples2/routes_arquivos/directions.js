google.maps.__gjsload__('directions', '\'use strict\';var TZ="request",UZ,VZ;function Vca(a){return Cf({location:iK,stopover:Tf})(a)}function WZ(a){this.B=a||[]}WZ[v].K=K("B");dm(WZ[v],function(){var a=this.B[0];return a?new pi(a):ri});function XZ(a){a.B[0]=a.B[0]||[];return new pi(a.B[0])}function YZ(a){this.B=a||[]}YZ[v].K=K("B");function ZZ(a){var b=[];Gg(a.B,4)[B](b);return new WZ(b)}\nfunction $Z(a){function b(){var f=Fe(),g=f-e;250<=g?(e=f,c&&(m[Bb](c),c=void 0),a[ed](null,arguments)):(d=arguments,c||(c=m[pc](function(){c=void 0;b[ed](null,d)},250-g)))}var c,d,e=0;return b}function a_(){}var Wca=new a_;function Xca(a,b){function c(a){d=a.polyline;ze(d)&&(e=d.points,Be(e)&&(a.encoded_lat_lngs=e,VH(a,b(e)),a.lat_lngs=a[sJ]))}var d,e;R(a.routes,function(a){R(a.legs,function(a){R(a.steps,function(a){c(a);R(a.steps,c)})});d=a.overview_polyline;if(ze(d)&&(e=a.overview_polyline=d.points,Be(e))){var g=a.overview_path=b(e);a=a.bounds=new vh;for(var h=0,l=g[I];h<l;++h)a[Tc](g[h])}})}function b_(a,b){a[b]&&uH(a[b],new Date(1E3*a[b][qI]))}\nfunction Yca(a){function b(a,b){if(a&&a[b]){var e=Qj.B[14];a[b]=a[b][uc]("//",null!=e&&e?"https://":"http://")}}a&&(b_(a,"arrival_time"),b_(a,"departure_time"),a=a.line)&&(b(a,"icon"),b(a.vehicle,"icon"),b(a.vehicle,"local_icon"))}\nfunction Zca(a,b,c,d){function e(a,b,c,d){a[b]&&(a[c]=a[b],d&&delete a[b])}b(a);c(a);d(a);R(a.routes,function(a){R(a.legs,function(a){R(a.steps,function(a){e(a,"html_instructions","instructions",!0);a.maneuver=a.maneuver||"";R(a.steps,function(a){e(a,"html_instructions","instructions",!0);a.maneuver=a.maneuver||""});e(a,"start_location","start_point",!1);e(a,"end_location","end_point",!1);e(a,"transit_details","transit",!0);Yca(a.transit)});a.via_waypoints=[];R(a.via_waypoint,function(b){a.via_waypoints[B](b[Hc])});\nb_(a,"arrival_time");b_(a,"departure_time")});e(a,"optimized_waypoint_order","waypoint_order",!0)})};function $ca(a,b,c,d){var e=ada,f=bda;b(1)?(b=e(a),f(b,function(b){c(b);b.request=a;d(b,b[nJ])},function(){d(null,Nd)})):d(null,Ld)};var c_=null;\nfunction bda(a,b,c){var d=Ii,e=Hi,f;if(!VZ){f=[];VZ={N:-1,O:f};if(!UZ){var g=[];UZ={N:-1,O:g};g[1]={type:"m",label:2,C:ri,L:UJ()};g[2]={type:"b",label:1,C:!0}}f[5]={type:"m",label:3,L:UZ};f[6]={type:"e",label:1,C:0};f[7]={type:"b",label:1,C:!1};f[8]={type:"b",label:1,C:!1};f[9]={type:"s",label:1,C:""};f[19]={type:"b",label:1,C:!1};f[10]={type:"b",label:1,C:!1};f[11]={type:"b",label:1,C:!1};f[12]={type:"s",label:1,C:""};f[13]={type:"e",label:1,C:0};f[14]={type:"b",label:1,C:!1};f[15]={type:"d",label:1,\nC:0};f[16]={type:"m",label:1,C:ui,L:op()};f[4]={type:"b",label:1,C:!1};f[17]={type:"m",label:1,C:vi,L:YJ()};f[18]={type:"v",label:1,C:""};f[100]={type:"b",label:1,C:!0};f[101]={type:"b",label:1,C:!1};f[102]={type:"b",label:1,C:!1};f[103]={type:"b",label:1,C:!1};f[104]={type:"b",label:1,C:!1};f[105]={type:"b",label:1,C:!1};f[106]={type:"b",label:1,C:!1}}f=Jg.j(a.B,VZ);Er(n,d,mr+"/maps/api/js/DirectionsService.Route",e,FL(f),b,c);a=a.B[5];2==(null!=a?a:0)?fL("transit"):fL("directions")}\nfunction ada(a){a:{var b=a,c=Mj(Pj(Qj)),d=!!ik[8],e=!!ik[1],f=!!ik[24],g=!!ik[22];try{b=Cf({origin:iK,destination:iK,waypoints:Kf(Gf(Vca)),optimizeWaypoints:Tf,travelMode:Ff(xi),provideRouteAlternatives:Tf,avoidFerries:Tf,avoidHighways:Tf,avoidTolls:Tf,region:Sf,transitOptions:Kf(AK),language:Sf,unitSystem:Kf(Ff(wi)),durationInTraffic:Tf,F:Tf,D:Kf(Ai),A:Rf,j:Rf,H:Rf})(b)}catch(h){Bf(h);a=null;break a}a=new YZ;a.B[99]=d;a.B[101]=g;a.B[3]=e;BL(XZ(ZZ(a)),b[Pn]);if(d=b.waypoints)for(e=0;e<d[I];++e)g=\nZZ(a),BL(XZ(g),d[e][Hc]),g.B[1]=d[e].stopover;BL(XZ(ZZ(a)),b.destination);xe(b.j)&&xe(b.A)&&(d=b.j,d=new WZ(Gg(a.B,4)[d]),XZ(d).B[2]=b.A);a.B[7]=b.optimizeWaypoints;d=b.travelMode;a.B[5]=zL[d];a.B[6]=b.provideRouteAlternatives;a.B[18]=b.avoidFerries;a.B[9]=b.avoidHighways;a.B[10]=b.avoidTolls;a.B[8]=b.region;a.B[11]=c;c=b.unitSystem;xe(c)&&(a.B[12]=c);a.B[13]=b.F;a.B[14]=b.H;"TRANSIT"==d&&(a.B[16]=a.B[16]||[],CL(new qi(a.B[16]),b.transitOptions));if(d=b.D)c=d[ub](),d=d[Ab](),a.B[15]=a.B[15]||[],g=\nnew li(a.B[15]),e=dp(g),g=Xo(g),hp(e,c.lat()),fp(e,c.lng()),hp(g,d.lat()),fp(g,d.lng());b.durationInTraffic&&f&&(b=60*k[w](Fe()/6E4),a.B[17]=b+"")}return a}function cda(a,b){Zca(a,function(a){GL(a,HL)},function(a){GL(a,JL)},function(a){Xca(a,b)})}function dda(a){return function(b,c){a[ed](this,arguments);uL(function(a){a.jq(b,c)})}}\na_[v].sj=function(a,b,c){if(c){var d=ik[26]?ka:225;c_||(c_=new DL(10,1,d))}var e=Qr(cs,b),e=dda(e);kg("geometry",function(b){$ca(a,function(a){return!c||EL(c_,a)},function(a){cda(a,b.decodePath)},e)})};function eda(a,b,c,d,e){function f(a){return e==a&&d?d:b[a][Hc]}if(!a||!b)return null;var g={};le(g,a);a=b[I]-1;g.origin=f(0);g.destination=f(a);for(var h=[],l=1;l<a;++l)h[B]({location:f(l),stopover:b[l].Gd});k[rd](e)!=e&&d?(h[Mc](k[rd](e),0,{location:d,stopover:!1}),g.j=k[go](e)):g.j=e;g.waypoints=h;g.optimizeWaypoints=!1;g.A=c[cn]();return g}\nfunction fda(a,b,c,d){if(!a||!b||!c)return null;var e={};e.request=b;var f={};e.routes=[f];f.legs=[];a=a.legs;c=c.routes[0].legs;for(var g=k[go](d)-1,h=k[rd](d)+1,l=d_(b,g),r=d_(b,d),t=0,x=je(a);t<x;++t)if(t==l){var y=e_(b,g);f.legs[B](f_(a[l],c[0].steps[0],g-y,(2==je(c)?d:h)-y))}else if(t==r)y=e_(b,d),f.legs[B](f_(a[r],c[1].steps[0],d-y,h-y));else f.legs[B](a[t]);return e}function e_(a,b){for(var c=k.min(k[rd](b),je(a.waypoints));0<c;--c)if(g_(a,c-1))return c;return 0}\nfunction d_(a,b){for(var c=0,d=k.min(k[rd](b),je(a.waypoints)),e=0;e<d;++e)g_(a,e)&&++c;return c}function f_(a,b,c,d){var e={steps:[]};c=a.via_waypoint[c-1];d=a.via_waypoint[d-1];if(c){for(var f=c.step_index,g=0;g<f;++g)e.steps[B](a.steps[g]);for(g=a.steps[f];g.Sb&&g[sJ][0]!=c[Hc];)e.steps[B](g.Sb[0]),g=g.Sb[1]}e.steps[B](b);if(d){b=d.step_index;for(c=a.steps[b];c.Sb&&c[sJ][0]!=d[Hc];)c=c.Sb[1];e.steps[B](c);g=b+1;for(b=a.steps[I];g<b;++g)e.steps[B](a.steps[g])}return e}\nfunction g_(a,b){var c=a.waypoints[b].stopover;return!xe(c)||c};function h_(){}h_[v].route=function(a,b){kg("directions",function(c){c.sj(a,b,!1)})};function i_(a){this.J=a;this.j=-1;this.M=$Z(O(this.xo,this));S[J](this,"dragstart",this,this.yo);S[J](this,"drag",this,this.ck);S[J](this,"dragend",this,this.Si)}Q(i_,T);L=i_[v];ym(L,function(){this.get("enabled")||j_(this)});WH(L,function(){this.set("routeIndex",0);j_(this);this.G=k_(l_(this),m_(this))});L.routeIndex_changed=function(){j_(this);this.G=k_(l_(this),m_(this))};function j_(a){a.A=!1;a.j=-1;a.D=null;a.I=!1}function m_(a){return(a=a.get("result"))?a[TZ]:null}\nfunction l_(a){var b=a.get("result"),c=b&&b.routes;if(!c)return null;a=a.get("routeIndex");return c[k.min(a||0,je(b.routes)-1)]}L.yo=function(a){this.get("enabled")&&(this.A=!0,this.j=a,this.I=!1)};\nL.ck=function(a){if(this.get("enabled")&&this.A){a=a||this.D;var b;var c=m_(this);b=this.G;var d=this.get("map"),e=this.j;if(c&&b&&a){var f={};le(f,c);f.D=d[dJ]();var g=d[dJ](),c=sk(d[Co]()),h=g[ub](),g=g[Ab]();f.H=QJ(h,g)/(2*k[Ib](c[C]*c[C]+c[E]*c[E]));f.F=!0;f.provideRouteAlternatives=!1;f.optimizeWaypoints=!1;c=0==e;h=e==b[I]-1;f.j=c?0:1;f.A=d[cn]();f.origin=c?a:b[k[go](e)-1][Hc];f.destination=h?a:b[k[rd](e)+1][Hc];f.waypoints=c||h?[]:[{location:a,stopover:k[rd](e)==e&&b[e].Gd}];b=f}else b=null;\nthis.J.route(b,this.M)}};L.xo=function(a,b){if(this.A&&b==Kd){var c=a[TZ];this.D=0==this.j?c[Pn]:1==je(c.waypoints)?c.waypoints[0][Hc]:c.destination;this.set("dragResult",fda(l_(this),m_(this),a,this.j))}};L.Si=function(a,b){if(this.get("enabled")&&(this.A||b)){var c=this.get("map"),d=eda(m_(this),this.G,c,a,this.j);this.A=!1;this.I=!0;var e=this;this.J.route(d,function(a,c){if(e.I){if(c!=Kd)if(c==Id||b)a=e.get("result");else if(!b){e.Si(e.D,!0);return}a.request=d;a.j=!0;e.set("result",a)}})}};\nfunction k_(a,b){var c=[];if(b&&a){c[B]({location:0==b.j?a.legs[0].start_location:b[Pn],Gd:!0});for(var d=je(a.waypoint_order),e=b.waypoints,f=0,g=0,h=je(e);g<h;++g){var l=d?a.waypoint_order[g]:g;0!=e[l].stopover&&(c[B]({location:b.j==g+1?a.legs[f].end_location:e[l][Hc],Gd:!0}),++f)}c[B]({location:b.j==h+1?a.legs[f].end_location:b.destination,Gd:!0});d=0;e=a.legs;g=0;for(h=je(e);g<h;++g)for(var f=e[g].via_waypoint,l=0,r=je(f);l<r;++l)c[Mc](g+1+d,0,{location:f[l][Hc],Gd:!1}),++d}return c};var gda={crossOnDrag:!1,icon:{url:nr("dd-via"),size:new W(11,11),anchor:new U(5,5)},title:"Arraste para alterar o trajeto",shape:{type:"circle",coords:[5,5,6]},draggable:!0};function n_(){this.G=-1;this.j=new Xh(gda);this.j[p]("map",this);o_(this,this.j,-1);this.A=!1;this.M=[];this.I=[];this.J=[]}Q(n_,T);L=n_[v];Ma(L,function(a){"result"!=a&&"routeIndex"!=a||this.j[mc](!1)});\nym(L,function(){if(this.get("enabled"))p_(this);else{for(var a=this.Zf(),b=0,c=je(a);b<c;++b){var d=a[b];1==d[tJ]()&&(d.setDraggable(null),d.setTitle(""))}this.j[mc](!1)}});Ll(L,n_[v].markers_changed=function(){this.J=[];if(this.get("enabled")){var a=this.Zf(),b=this.get("projection");if(b)for(var c=0,d=je(a);c<d;++c)this.J[B](b[Cc](a[c][aI]()))}this.get("enabled")&&p_(this)});\nxa(L,function(){for(var a=0,b=je(this.M);a<b;++a)S[Rc](this.M[a]);(a=this.get("map"))&&Hq(Gq)&&(a=a[ud],this.M=[S[J](a,"movestart",this,this.ek),S[J](a,"move",this,this.fk),S[J](a,"moveend",this,this.dk)])});\nL.polylines_changed=function(){for(var a=0,b=je(this.I);a<b;++a)S[Rc](this.I[a]);gb(this.I,0);this.A=!1;var c=this.get("polylines");if(c&&this.get("enabled"))for(a=0,b=c[I];a<b;++a){var d=c[a];d.set("hitStrokeWeight",24);this.I[B](S[D](d,"mouseover",O(this.Pp,this,a)),S[D](d,"mousemove",O(this.gk,this,a)),S[J](d,"mouseup",this,this.Mf),S[J](d,"mouseout",this,this.hk));d.set("cursor",null)}};Wl(L,function(){var a=this;Ie(function(){a.get("enabled")&&a.A&&S[z](a,"drag",null)})});\nfunction p_(a){for(var b=a.Zf(),c=0,d=je(b);c<d;++c){var e=b[c];0!=e[tJ]()&&(o_(a,e,c),e.setDraggable(!0),e.setTitle("Arraste para alterar o trajeto"))}}function q_(a,b){var c=a.get("projection");a:{for(var d=a.get("zoom"),c=c[Cc](b),d=10/(1<<d),d=d*d,e=0,f=je(a.J);e<f;++e)if(oL(c,a.J[e])<d){c=!0;break a}c=!1}return c}\nfunction o_(a,b,c){b[ud].hasListeners||(b[ud].hasListeners=!0,S[D](b,"dragstart",function(){var b=c;0>b?b=a.P+.5:a.j[mc](!1);a.A=!0;S[z](a,"dragstart",b)}),S[D](b,"drag",$Z(function(b){S[z](a,"drag",b.latLng)})),S[D](b,"dragend",function(b){S[z](a,"dragend",b.latLng)}))}function hda(a){!a.D&&a.j[ec]()&&(a.D=m[pc](function(){a.A||(a.Mf(),a.j[mc](!1));a.D=0},300))}\nL.ek=function(a){if(r_(this,a,!1)&&!Ds(a)){var b=a.latLng,c=0<=this.G,d=q_(this,b);c&&!d&&(RK(a),this.j[mc](!0),this.j[yI](b),this.P=this.G,S[z](this.j,"dragstart"))}};L.fk=function(a){r_(this,a,!0)&&!Ds(a)&&(RK(a),this.j[yI](a.latLng),S[z](this.j,"drag",a))};L.dk=function(a){r_(this,a,!0)&&!Ds(a)&&(this.Mf(),RK(a),this.j[yI](a.latLng),S[z](this.j,"dragend",a))};L.Pp=function(a){this.G=a};L.Mf=function(){this.G=-1};\nL.gk=function(a,b){if(r_(this,b,!1)){var c=b.latLng;if(q_(this,c))this.j[mc](!1);else this.P=a,this.D&&(m[Bb](this.D),this.D=0),this.j[yI](c),this.j[mc](!0)}};L.hk=function(a){r_(this,a,!1)&&hda(this)};function r_(a,b,c){return a.get("enabled")&&b&&b.latLng&&a.A==c}L.Zf=tg("markers");function s_(a){return a[uc](/\\n/g,"<br>")}function t_(a,b){var c=oe(k[go](Je()),1,4);return 0<=a&&26>a?XK(b?"icons/spotlight/spotlight-waypoint-b.png":"icons/spotlight/spotlight-waypoint-a.png",c,la[$c](65+a)):XK("icons/spotlight/spotlight-poi.png",c)};function u_(a,b,c,d,e,f,g){this.M=a;this.J=b;this.A=c;this.D=e;this.G=f;this.I=g;this.P=d;this.j=null}Q(u_,cl);var ida=nr("tip"),jda=nr("tiph");\nHa(u_[v],function(){this[p]("zoom",this[wo]());var a=this[ro]();this.j=Z("div",a[co]);a=Z("div",this.j);TK(a,"0 2px 5px rgba(0,0,0,0.6)");OH(a[q],"12px");Pl(a[q],"1px solid #656");$l(a[q],"2px");Vl(a[q],"13px");wH(a[q],"400");pm(a[q],"Roboto,Arial,sans-serif");LH(a[q],"nowrap");om(a[q],this.A?"3px 3px 0 3px":"3px 3px 3px 0");Tl(a[q],"absolute");a[q][this.A?"right":"left"]="0";vH(a[q],"0");var b;(b=Nq.J)?xm(a[q],b+"(top,#f9f9f9 0%,#eeeeee 52%,#f9f9f9 52%,#e3e3e3 63%,#eeeeee 63%,#e3e3e3 100%)"):1==\nvq[Gc]?Fl(a[q],\'progid:DXImageTransform.Microsoft.gradient(startColorstr="#f9f9f9", endColorstr="#e3e3e3",GradientType=0)\'):xm(a[q],"#e3e3e3");b=sB(this.J,a,null,new W(16,16));RH(b[q],"top");Tl(b[q],"relative");this.D&&(b=Z("span",a),Ol(b[q],"0 1px 0 2px"),Tl(b[q],"relative"),b[q].top="2px",this.G&&(Nl(b[q],this.G),$l(b[q],"0 4px")),this.I&&qm(b[q],this.I),Qq(this.D,b));a=sB(this.A?jda:ida,a);Pq(a,new U(-8,19),this.A)});\nu_[v].draw=function(){var a=this.P<=this.get("zoom");if(a){var b=this[Pb]()[yo](this.M);Pq(this.j,new U(b.x+(this.A?-8:8),b.y-8));Yq(this.j,b.y)}cL(this.j,a)};Aa(u_[v],function(){this[tc]("zoom");this.j&&(Pp(this.j),this.j=null)});function v_(){return\'<div id="adp-iw" class="gm-iw gm-transit" style="max-width:200px"><img jsdisplay="$icon" jsvalues=".src:$icon"/><div jsvalues=".innerHTML:$this.instructions"></div><div jsdisplay="$this.duration" jscontent="formatDuration(duration)"></div></div><div id="adp-transit-iw" class="gm-iw gm-transit" style="max-width:300px"><img jsdisplay="$icon" jsvalues=".src:$icon"/><div><span jscontent="line.vehicle.name"></span><span jsdisplay="line.short_name"><span>&nbsp;-&nbsp;</span><b jscontent="line.short_name"></b></span><span jsdisplay="line.name"><span>&nbsp;-&nbsp;</span><span jscontent="line.name"></span></span><span jsdisplay="$this.headsign"><span>&nbsp;-&nbsp;</span><span jscontent="$direction"></span></span></div><div jsdisplay="line.agencies" jsvalues="$length:line.agencies.length" style="font-size:12px"><span jscontent="$serviceRunBy"></span>&#32; <span jsselect="line.agencies"><a target="_new" jsdisplay="$this.url" jsvalues=".href:url" jscontent="name"></a><span jsdisplay="!$this.url" jscontent="name"></span><span jscontent="$index &lt; $length - 1 ? \\\', \\\' : \\\'\\\'"></span></span></div><br><div><table><tr><td jscontent="$this.departure_time &amp;&amp; departure_time.text || \\\'\\\'" class="gm-time"></td><td jscontent="$depart"></span></tr><tr><td jscontent="$this.arrival_time &amp;&amp; arrival_time.text || \\\'\\\'" class="gm-time"></td><td jscontent="$arrive"></span></tr></table></div></div>\'}\n;function w_(a){switch(a.travel_mode){case "TRANSIT":a=(a=a.transit)&&a.line;if(!a)return"";var b=a.vehicle;return a[eI]||b&&(b.local_icon||b[eI]);case "BICYCLING":return nr("transit/iw2/6/cycle");case "DRIVING":return nr("transit/iw2/6/drive");case "WALKING":return nr("transit/iw2/6/walk");default:return""}}function x_(a,b){return!a||a[eI]?"":a.short_name?a.short_name:a[Nb]?b?a[Nb]:" ":""}\nfunction y_(a,b){var c=a.transit,d=c&&c.line;if(!d)return"";c=x_(d,b);if(!c)return"";var e=[],f=d[Xn];f&&e[B]("background-color:"+f);return" "!=c?(f?e[B]("padding:0 4px"):e[B]("font-weight:400"),(d=d.text_color)&&e[B]("color:"+d),\'<span dir="\'+(Vr.j?"rtl":"ltr")+\'" style="\'+e[Hb](";")+\'">\'+c+"</span>"):f?(e[B]("width:15px"),e[B]("height:15px"),\'<img style="\'+e[Hb](";")+\'" src="\'+or+\'"/>\'):""}function z_(a,b){var c=a.transit;return(c=c&&c[b+"_stop"])&&c[Nb]}\nfunction kda(a,b){var c=z_(a.steps[b],"departure");if(c)return c;for(;0<b;)if(c=--b,c=z_(a.steps[c],"arrival"))return c;return""}function lda(a){a=a.num_stops;return 1==a?"1 ponto":a+" pontos"}function A_(a){return"Cerca de "+a[qJ]}function mda(a){for(var b=[],c={},d=0;d<je(a);++d)for(var e=a[d].steps,f=0;f<je(e);++f)for(var g=e[f].transit,g=(g=g&&g.line)&&g.agencies,h=0;h<je(g);++h){var l=g[h];c[l[Nb]]||(b[B](l),c[l[Nb]]=1)}b[on](function(a,b){return a[Nb].localeCompare(b[Nb])});return b}\nfunction nda(a,b){var c=a.steps,d=c[b];return d.transit||0==b||b==c[I]-1?w_(d):""};var oda={url:nr("dd-via"),size:new W(11,11),anchor:new U(5,5)};function B_(){qk[u](this);this.I=[];this.A=[];this.R=[];this.J=[];this.M=[];this.bc=null}Q(B_,qk);L=B_[v];L.dragResult_changed=function(){this.j=!0;this.Z()};WH(L,function(){this.j=!1;this.U(0);this.Z()});xa(L,function(){this.Z()});L.routeIndex_changed=function(){this.Z()};L.ia=function(){pda(this);C_(this)&&this.D()&&(qda(this),this.j||(this.set("markers",this.A),this.set("polylines",this.I)))};\nL.Ee=function(){this.bc&&this.bc[oI]();this.bc=this.get("suppressInfoWindows")?null:this.get("infoWindow")||new Di({maxWidth:300,logAsInternal:!0})};L.infoWindow_changed=B_[v].suppressInfoWindows_changed=B_[v].Ee;\nfunction qda(a){var b=D_(a);if(b){var c=C_(a),d=a.D();if(!a.get("preserveViewport")&&!a.j&&!c.j){var e=b.bounds;e&&d.fitBounds(e)}a.Ee();var f=c[TZ].travelMode;R(b.legs,O(function(a,c){this.j||this.J[B](rda(this,b,c));sda(this,a,f)},a));a.j||a.J[B](tda(a,b));"BICYCLING"!=f||a.get("suppressBicyclingLayer")||(a.G=new Ni,a.G[rI](d))}}function E_(a,b,c){function d(a){a.Sb?e=e[an](a.Sb[0][sJ]):a[sJ]&&(e=e[an](a[sJ]))}var e=[];R(b,function(a){a.steps?R(a.steps,d):d(a)});return uda(a,e,c)}\nL.Hf=function(a,b){if(b){var c;var d=b.transit;if(d){c="Partida de "+d.departure_stop[Nb];var e="Chegada a "+d.arrival_stop[Nb],f="Dire\\u00e7\\u00e3o: "+d.headsign,d=new KQ(d);d.X.$depart=c;d.X.$arrive=e;d.X.$direction=f;d.X.$serviceRunBy="Servi\\u00e7o realizado por ";d.X.$icon=w_(b);c=fR("adp-transit-iw",v_);TQ(d,c)}else c=null;c||(c=new KQ(b),c.X.$icon=w_(b),c.X.formatDuration=A_,e=fR("adp-iw",v_),TQ(c,e),c=e);f=(e=b.transit)&&e.line;e=new u_(b.start_location,w_(b),.5>k[Oc](),e?0:16,x_(f,!0),f&&\nf[Xn],f&&f.text_color);e[rI](this.D());this.R[B](e);a[B](F_(this,b.start_location,c))}};function G_(a,b,c,d){var e=a.get("polylineOptions")||vda;E_(a,b,e);"TRANSIT"==c&&R(b,O(a.Hf,a,d))}function H_(a,b,c){E_(a,b,wda);R(b,O(a.Hf,a,c))}\nfunction sda(a,b,c){var d=[];a.M[B](d);var e=[],f,g=!0,h=0;R(b.steps,O(function(a,r){var t=a.travel_mode,x=b.via_waypoint,y=0;if(!this.j&&x)for(;x[h]&&x[h].step_index==r;){var A=x[h++],H=A.step_interpolation;A.step_interpolation=(H-y)/(1-y);y=H;F_(this,A[Hc]);var H=a,F;F=a;var N=F[sJ],V=F.polyline;if(N&&V){for(var V=N[I],P=0,M=1;M<V;++M)P+=QJ(N[M],N[M-1]);M=P*A.step_interpolation;P=void 0;for(P=1;P<V;++P){var da=QJ(N[P],N[P-1]);if(M<da)break;M-=da}V=[{},{}];VH(V[0],N[Lb](0,P));V[0][sJ][B](A[Hc]);\nV[0].polyline={};V[0].travel_mode=F.travel_mode;VH(V[1],[A[Hc]][an](N[Lb](P)));V[1].polyline={};V[1].travel_mode=F.travel_mode;F=V}else F=null;H.Sb=F;a.Sb&&(e[B](a),G_(this,e,c,d),e=[],a=a.Sb[1])}f&&t&&f!=t&&(f==c?G_(this,e,c,d):"TRANSIT"!=c||g?H_(this,e,d):(x=e,E_(this,x,xda).set("icons",[I_]),R(x,O(this.Hf,this,d))),e=[],g=!1);e[B](a);f=t},a));f==c?G_(a,e,c,d):H_(a,e,d)}\nfunction pda(a){var b=[];a.bc&&a.bc[oI]();a.bc=null;a.j||(R(a.A,function(a){S.clearListeners(a,"click")}),b=b[an](a.A),a.A=[],b=b[an](a.R),a.R=[],a.M=[],a.J=[]);b=b[an](a.I);a.I=[];a.G&&(b[B](a.G),a.G=null);Ie(function(){R(b,function(a){a[rI](null)})})}function J_(a,b,c,d,e){var f={};le(f,a.get("markerOptions"));xe(f[eI])||(f.icon={url:t_(b,e),scaledSize:new W(22,40)},f.useDefaults=!0);(b=K_(a,c,f,d))&&a.A[B](b);return b}\nfunction rda(a,b,c){b=b.legs[c];return J_(a,c,b.start_location,b.start_address||"",!1)}function tda(a,b){var c=b.legs,d=je(c),c=c[d-1];return J_(a,d,c.end_location,c.end_address||"",!0)}function F_(a,b,c){var d=a.get("markerOptions");b=K_(a,b,{crossOnDrag:!1,icon:oda,useDefaults:!1,optimized:d&&d.optimized},c);a.A[B](b);return b}\nfunction K_(a,b,c,d){var e=a.D();a.get("suppressMarkers")||(c.map=e);Tl(c,b);var f=new Xh(c);if(d){var g=L_(d);S[J](f,"click",a,function(){var a=this.bc;a&&(yL(),a[AI](g),a[kJ](e,f))})}return f}\nvar I_={icon:{path:0,scale:3,fillOpacity:.7,fillColor:"#00b3fd",strokeOpacity:.8,strokeColor:"#3379c3",strokeWeight:1},repeat:"10px"},vda={strokeColor:"#0080ff",strokeWeight:6,strokeOpacity:.55},wda={icons:[I_],strokeColor:"#000000",strokeWeight:5,strokeOpacity:0},xda={strokeColor:"#0000ff",strokeWeight:5,strokeOpacity:0};function uda(a,b,c){if(a.get("suppressPolylines"))return null;var d={};le(d,c);d.map=a.D();VH(d,b);b=new fi(d);a.I[B](b);return b}\nfunction D_(a){var b=C_(a).routes,c=a.get("routeIndex");a=k.min(c||0,C_(a).routes[I]-1);return b[a]}function L_(a){var b;Be(a)?(b=n[xd]("div"),Cm(b,"gm-iw"),b[q].maxWidth="200px",am(b,a)):b=a;FJ(b);return b}function C_(a){return a.get(a.j?"dragResult":"result")}B_[v].D=tg("map");B_[v].U=ug("routeIndex");\nB_[v].selectedLegStep_changed=function(){var a=this.get("selectedLegStep");if(a){var b=D_(this);if(b){var c=a.Zp,a=a.Rn,d=b.legs[a];if(b=this.D())if(a=ye(c)?this.M[a][c]:this.J[a])S[z](a,"click");else if(a=this.bc)yL(),d=d.steps,-1==c&&(c=je(d)-1),c=d[c],d=L_(s_(c.instructions||"")),a[AI](d),a[yI](c.start_location),a[kJ](b)}}};function yda(){return\'<div id="adp-directions" class="adp"><div class="adp-warnbox" jsdisplay="warnings.length"><div class="warnbox-c2"></div><div class="warnbox-c1"></div><div class="warnbox-content" jsselect="warnings" jscontent="$this"></div><div class="warnbox-c1"></div><div class="warnbox-c2"></div></div><div jsselect="legs[0].start_address" jsvalues="$waypointIndex:0;" jseval="setupPanelStep(this, $waypointIndex)"><table id="adp-placemark" class="adp-placemark"><tr><td><img class="adp-marker" jsvalues=".src:markerIconPaths[$waypointIndex]"/></td><td class="adp-text" jscontent="$this"></td></tr></table></div><div jsselect="legs" jsvalues="$legIndex:$index;"><div class="adp-summary"><span jsdisplay="distance" jscontent="distance[\\\'text\\\']"></span><span jsdisplay="distance &amp;&amp; duration"> - </span><span jsdisplay="duration" jscontent="$MSG_about + \\\' \\\' + duration[\\\'text\\\']"></span><span jsdisplay="duration &amp;&amp; $this.duration_in_traffic" jscontent="\\\' \\\' + getInCurrentTrafficMsg($this)"></span></div><div><table class="adp-directions"><tr jsselect="steps" jseval="setupPanelStep(this, $legIndex, $index)"><td class="adp-substep"><div class="adp-stepicon" jsdisplay="maneuver"><div class="adp-maneuver" jseval="addClass(this, \\\'adp-\\\' + maneuver)"></div></div></td><td class="adp-substep" jscontent="($index + 1) + \\\'.\\\'"></td><td class="adp-substep" jsvalues=".innerHTML:format(instructions)"></td><td class="adp-substep"><div class="adp-distance" jscontent="distance[\\\'text\\\']"/></td></tr></table></div><div jsselect="$this.end_address" jsvalues="$waypointIndex:$legIndex + 1;" jseval="setupPanelStep(this, $waypointIndex)"><table transclude="adp-placemark"></table></div></div><div class="adp-legal" jscontent="copyrights"></div></div>\'}\n;function zda(){return\'<div id="adp-directions-routelist" class="adp-list"><table class="adp-fullwidth"><tr><td class="adp-listheader" jscontent="$MSG_suggested_routes + \\\':\\\'"></td></tr><tr jsselect="$this" jsvalues="$routeIndex:$index;"><td jsselect="legs" jseval="setupRouteListRow(this, $routeIndex);"><span class="adp-listinfo" jsvalues="$summary:getSummary($routeIndex)"><b jsdisplay="$summary" jscontent="$summary + \\\' \\\'"></b><span jscontent="distance.text"></span><span jsdisplay="distance &amp;&amp; duration"> - </span><span jsdisplay="duration" jscontent="$MSG_about + \\\' \\\' + duration.text"></span><span jsdisplay="duration &amp;&amp; $this.duration_in_traffic" jscontent="\\\' \\\' + getInCurrentTrafficMsg($this)"></span></span></tr></table></div>\'}\n;function Ada(){return\'<div id="adp-transit" class="adp"><div class="adp-warnbox" jsdisplay="warnings.length"><div class="warnbox-c2"></div><div class="warnbox-c1"></div><div class="warnbox-content" jsselect="warnings" jscontent="$this"></div><div class="warnbox-c1"></div><div class="warnbox-c2"></div></div><div jsselect="legs[0].start_address" jsvalues="$waypointIndex:0;" jseval="setupPanelStep(this, $waypointIndex)"><table id="adp-placemark" class="adp-placemark"><tr><td><img class="adp-marker" jsvalues=".src:markerIconPaths[$waypointIndex]"/></td><td class="adp-text" jscontent="$this"></td></tr></table></div><div jsselect="legs" jsvalues="$legIndex:$index;$leg:$this"><div class="adp-summary"><span jsdisplay="distance" jscontent="distance.text"></span><span jsdisplay="distance &amp;&amp; duration">&nbsp;&mdash;&nbsp;</span><span jsdisplay="duration" jscontent="$MSG_about + \\\' \\\' + duration.text"></span></div><div><table class="adp-directions"><tr jsselect="steps" jseval="setupPanelStep(this, $legIndex, $index)"><td class="adp-substep"><b jscontent="getOrigin($leg, $index)"></b><div><img jsvalues=".src:getIcon($this)"/><span jsvalues=".innerHTML:getLineDisplay($this, true)" style="margin-left:2px"></span><span jscontent="$this.instructions" style="margin-left:4px"></span></div><div jsdisplay="$this.transit"><span jsdisplay="transit.departure_time &amp;&amp; transit.arrival_time"><span jscontent="transit.departure_time.text"></span><span>&ndash;</span><span jscontent="transit.arrival_time.text"></span><span>&nbsp;</span></span><span class="adp-details" jsdisplay="$this.duration || transit.num_stops">(<span jsdisplay="$this.duration" jscontent="duration.text"></span><span jsdisplay="$this.duration &amp;&amp; transit.num_stops">, </span><span jsdisplay="transit.num_stops" jscontent="formatNumStops(transit)"></span>) </span><div jsdisplay="transit.line &amp;&amp; transit.line.agencies" jsvalues="$length:transit.line.agencies.length" style="font-size:80%"><span jscontent="$serviceRunBy"></span>&#32; <span jsselect="transit.line.agencies"><a target="_new" jsdisplay="$this.url" jsvalues=".href:url" jscontent="name"></a><span jsdisplay="!$this.url" jscontent="name"></span><span jscontent="$index &lt; $length - 1 ? \\\', \\\' : \\\'\\\'"></span></span></div></div><div class="adp-details" jsdisplay="!$this.transit &amp;&amp; $this.duration"><span jscontent="formatDuration(duration)"></span></div></td></tr></table></div><div jsselect="$this.end_address" jsvalues="$waypointIndex:$legIndex + 1;" jseval="setupPanelStep(this, $waypointIndex)"><table transclude="adp-placemark"></table></div></div><div class="adp-agencies" jsvalues="$agencies:getAgencies(legs)"><div jsdisplay="$agencies.length"><b jscontent="$localAgencyInfo"></b><div jscontent="$localAgencyExplanation"></div><div jsselect="$agencies"><a target="_new" jsdisplay="$this.url" jsvalues=".href:url" jscontent="name"></a><span jsdisplay="!$this.url" jscontent="name"></span><span jsdisplay="$this.phone"> - </span><span jsdisplay="$this.phone" jscontent="phone"></span></div></div></div><div class="adp-legal" jscontent="copyrights"></div></div>\'}\n;function Bda(){return\'<div id="adp-transit-routelist" class="adp-list"><div class="adp-fullwidth"><div class="adp-listheader" jscontent="$MSG_suggested_routes + \\\':\\\'"></div></div><div><ol style="list-style:none;padding:0;margin:0"><li jsselect="$this" jsvalues="$route:$this;$leg:legs[0]" jseval="setupRouteListRow(this, $index)" style="padding:2px"><div jscontent="$leg.duration.text" class="adp-summary-duration"></div><div><span jsselect="$leg.steps" jsvalues="$icon:getSummaryIcon($leg, $index);$line:getLineDisplay($this, false)"><span style="white-space:nowrap"><span jsdisplay="$icon != \\\'\\\'"><img jsdisplay="$index != 0" jsvalues=".style.background:$arrow;.src:$transparent" class="gm-arrow"/>&#32; <img jsvalues=".src:$icon"/><span jsdisplay="$line != \\\'\\\'" jsvalues=".innerHTML:$line"></span></span></span>&#32; </span></div><div jsdisplay="$leg.departure_time &amp;&amp; $leg.arrival_time"><span jscontent="$leg.departure_time.text"></span><span>&ndash;</span><span jscontent="$leg.arrival_time.text"></span></div></li></ol></div></div>\'}\n;function M_(){qk[u](this);WK();this.G=[];this.D=this.A=this.j=null}Q(M_,qk);L=M_[v];Ma(L,function(a){"result"==a&&this.gh(0);this.Z()});\nL.ia=function(){R(this.G,S[Rc]);this.G=[];this.A&&(Pp(this.A),this.A=null);this.j&&(Pp(this.j),this.j=null,Pp(this.D),this.D=null);if(this.mf()&&this.oi()){var a=N_(this)[O_(this)];if(a){var b=this.oi();FJ(b);var c=this.mf(),d={Pg:Vr.j};this.D&&Pp(this.D);var e;e=".adp,.adp table{font-family:Roboto,Arial,sans-serif;font-weight:300;color:#2c2c2c}.adp b,.adp-list b{font-weight:400}.adp-warnbox{margin:5px 0 3px}.warnbox-content{background:#fff1a8;padding:5px 6px}.warnbox-c1,.warnbox-c2{background:#fff1a8;font-size:1px;height:1px;overflow:hidden}.warnbox-c1{margin:0 2px}.warnbox-c2{margin:0 1px}.adp-list{background:#fff;border:1px solid #cdcdcd;cursor:pointer;padding:4px;font-family:Roboto,Arial,sans-serif;font-weight:300;color:#2c2c2c}.adp-fullwidth{width:100%}.adp-listsel{background:#eee;text-decoration:none}.adp-listheader{padding:4px}.adp-placemark{background:#eee;border:1px solid silver;color:#000;cursor:pointer;margin:10px 0;vertical-align:middle}img.adp-marker{width:22px;height:40px}.adp-details,.adp-legal{color:#676767}.adp-summary{padding:0 3px 3px}.adp-step,.adp-substep{border-top:1px solid #cdcdcd;margin:0;padding:.3em 3px;vertical-align:top}.adp-list img,.adp-substep img{width:15px;height:15px;position:relative;top:2px;margin-right:3px}.adp-distance{white-space:nowrap}.adp-step,.adp-text{width:100%}.adp-directions{cursor:pointer;border-collapse:collapse}.adp-list .gm-arrow{width:8px;height:9px;margin:5px 0 3px}.adp-agencies{font-size:80%;margin:5px 0}.adp-summary-duration{float:right;margin-left:7px;white-space:nowrap}.adp-substep .gm-line{margin-right:4px}.adp-substep .adp-stepicon{overflow:hidden;position:relative;top:0;left:0;width:16px;height:16px}.adp-substep .adp-stepicon .adp-maneuver{background-size:19px 630px;position:absolute;left:0;width:16px;height:16px}.adp-substep .adp-stepicon .adp-maneuver.adp-ferry{background-position:0 -614px}.adp-substep .adp-stepicon .adp-maneuver.adp-ferry-train{background-position:0 -566px}.adp-substep .adp-stepicon .adp-maneuver.adp-merge{background-position:0 -143px}.adp-substep .adp-stepicon .adp-maneuver.adp-straight{background-position:0 -534px}.adp-substep .adp-stepicon .adp-maneuver.adp-fork-left{background-position:0 -550px}.adp-substep .adp-stepicon .adp-maneuver.adp-ramp-left{background-position:0 -598px}.adp-substep .adp-stepicon .adp-maneuver.adp-roundabout-left{background-position:0 -197px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-left{background-position:0 -413px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-sharp-left{background-position:0 0}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-slight-left{background-position:0 -378px}.adp-substep .adp-stepicon .adp-maneuver.adp-uturn-left{background-position:0 -305px}.adp-substep .adp-stepicon .adp-maneuver.adp-fork-right{background-position:0 -499px}.adp-substep .adp-stepicon .adp-maneuver.adp-ramp-right{background-position:0 -429px}.adp-substep .adp-stepicon .adp-maneuver.adp-roundabout-right{background-position:0 -232px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-right{background-position:0 -483px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-sharp-right{background-position:0 -582px}.adp-substep .adp-stepicon .adp-maneuver.adp-turn-slight-right{background-position:0 -51px}.adp-substep .adp-stepicon .adp-maneuver.adp-uturn-right{background-position:0 -35px}"+(".adp-substep .adp-stepicon .adp-maneuver {background-image:url("+\nnr("api-3/images/maneuvers",!0)+");}");this.D=ir(e,d);!this.get("hideRouteList")&&1<je(N_(this))&&(d=new KQ(N_(this)),d.X.$MSG_suggested_routes="Rotas sugeridas",d.X.$MSG_about="cerca de",d.X.getInCurrentTrafficMsg=P_,e=O(this.vn,this),d.X.getSummary=e,e=O(this.Up,this),d.X.setupRouteListRow=e,"TRANSIT"==c[TZ].travelMode?(e=d,e.X.getSummaryIcon=nda,e.X.getLineDisplay=y_,e.X.$transparent=or,e.X.$arrow="url("+nr("dir/dp5")+") no-repeat "+(Vr.j?"0":"-19px")+" -18px",this.A=fR("adp-transit-routelist",\nBda)):this.A=fR("adp-directions-routelist",zda),TQ(d,this.A),b[Xb](this.A));d=new KQ(a);d.X.$MSG_about="cerca de";e=[];for(var f=0,a=je(a.legs);f<=a;++f)e[B](t_(f,f==a));d.X.markerIconPaths=e;a=O(this.Tp,this);d.X.setupPanelStep=a;d.X.getInCurrentTrafficMsg=P_;d.X.format=s_;a=O(this.Wl,this);d.X.addClass=a;"TRANSIT"==c[TZ].travelMode?(c=d,c.X.getIcon=w_,c.X.getLineDisplay=y_,c.X.getOrigin=kda,c.X.getAgencies=mda,c.X.formatNumStops=lda,c.X.formatDuration=A_,c.X.$localAgencyInfo="Informa\\u00e7\\u00f5es das ag\\u00eancias locais:",\nc.X.$localAgencyExplanation="Cont\\u00e9m mais informa\\u00e7\\u00f5es sobre tarifas, hor\\u00e1rios e avisos de servi\\u00e7os",c.X.$serviceRunBy="Servi\\u00e7o realizado por ",this.j=fR("adp-transit",Ada)):this.j=fR("adp-directions",yda);TQ(d,this.j);b[Xb](this.j)}}};function P_(a){return"("+(a.duration_in_traffic[qJ]+" no tr\\u00e2nsito atual)")}function N_(a){return a.mf().routes}L.vn=function(a){return N_(this)[a].summary};L.mf=tg("result");L.oi=tg("panel");L.gh=ug("routeIndex");\nfunction O_(a){var b=a.get("routeIndex");return k.min(b||0,N_(a)[I]-1)}L.Up=function(a,b){b==O_(this)&&Sp(a,"adp-listsel");this.G[B](S[sc](a,"click",O(function(){O_(this)!=b&&this.gh(b)},this)))};L.Tp=function(a,b,c){N_(this)[O_(this)]&&this.G[B](S[sc](a,"click",O(function(){this.set("selectedLegStep",{Rn:b,Zp:c})},this)))};L.selectedLegStep_changed=Pd();L.Wl=function(a,b){b&&Sp(a,b)};a_[v].Kn=function(a,b){if(!a.bound){a.bound=!0;var c=a.j=new B_;c[p]("dragResult",a);c[p]("infoWindow",a);c[p]("map",a);c[p]("markerOptions",a);c[p]("polylineOptions",a);c[p]("preserveViewport",a);c[p]("result",a,"directions");c[p]("suppressBicyclingLayer",a);c[p]("suppressInfoWindows",a);c[p]("suppressMarkers",a);c[p]("suppressPolylines",a);c[p]("routeIndex",a);c[p]("selectedLegStep",a);c=a.D=new M_;c[p]("hideRouteList",a);c[p]("panel",a);c[p]("result",a,"directions");c[p]("routeIndex",a);c[p]("selectedLegStep",\na);var d=new ZC(["draggable","directions"],"enabled",function(a,b){return!!a&&!!b&&"TRANSIT"!=b[TZ].travelMode});d[p]("draggable",a);d[p]("directions",a);c=a.xd=new n_;c[p]("enabled",d);c[p]("map",a);c[p]("markers",a.j);c[p]("polylines",a.j);c[p]("result",a,"directions");c[p]("routeIndex",a);var e=a.A=new i_(new h_);e[p]("dragResult",a);e[p]("enabled",d);e[p]("map",a);e[p]("result",a,"directions");e[p]("routeIndex",a);S[G](c,"dragstart",e);S[G](c,"drag",e);S[G](c,"dragend",e)}"map"==b&&(d=a[wo](),\nc=a.xd,d?(c[p]("projection",d),c[p]("zoom",d)):(c[tc]("projection"),c[tc]("zoom")))};Oh.directions=function(a){eval(a)};lg("directions",Wca);\n')