_jsload2&&_jsload2('poly', 'function tg(a,b){gb.call(this);this.point=a;this.type=b;this.z={}}z.lang.ta(tg,gb,"Vertex"); z.extend(tg.prototype,{initialize:function(a){this.map=a;var b="",b=this.type?"BMap_vectex BMap_vectex_nodeT":"BMap_vectex BMap_vectex_node",c=this.xH=this.V=document.createElement("div");c.className=b;a.Tf().nP.appendChild(c);this.HA();return c},draw:function(){var a=this.map.Xe(this.point);this.xH.style.left=a.x-5+"px";this.xH.style.top=a.y-5+"px"},sa:function(a){a instanceof J&&(this.point=this.z.point=new J(a.lng,a.lat),this.draw())},ga:w("point"),HA:function(){function a(a,b){b.pixel=b.lb=a.lb; b.point=b.point=a.point;return b}function b(a){var b=a.clientX,c=a.clientY;a.changedTouches&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);return new Q(b,c)}if(this.V&&!this.V.Fi){this.V.Fi=q;var c=this.map,e=this,f=0,g=0,i=0,k={x:0,y:0};this.Hs=function(a){na(a);if(2!=a.button){e.sl=q;var k=c.$b(e.point),o=b(a);f=o.x-k.x;g=o.y-k.y;i=bb();e.map.R.iv=e;z.M(document,"mousemove",e.dj);z.M(document,"mouseup",e.cj);z.M(document,"touchmove",e.dj);z.M(document,"touchend",e.cj);e.V&&e.V.setCapture&& e.V.setCapture();e.V.style.cursor=e.z.Hd;"touchstart"==a.type&&ma(a)}};this.dj=function(i){if(e.sl){i=b(i);k=i=new Q(i.x-f,i.y-g);e.fA=i;var n=e.map.xb(i),o={lb:i,point:n};e.Fl=e.Gl=0;if(20>=i.x||i.x>=e.map.width-20||50>=i.y||i.y>=e.map.height-10){if(20>=i.x?e.Fl=8:i.x>=e.map.width-20&&(e.Fl=-8),50>=i.y?e.Gl=8:i.y>=e.map.height-10&&(e.Gl=-8),!e.Ge)e.Ge=setInterval(function(){c.Ag(e.Fl,e.Gl,{noAnimation:q});var a=c.xb(e.fA);e.sa(a)},30)}else e.Ge&&(clearInterval(e.Ge),e.Ge=s),e.sa(n);e.kl||(e.dispatchEvent(a(o, new P("ondragstart"))),e.kl=q);e.dispatchEvent(a(o,new P("ondragging")))}};this.cj=function(){e.V&&e.V.releaseCapture&&e.V.releaseCapture();e.sl=t;e.map.R.iv=s;z.ed(document,"mousemove",e.dj);z.ed(document,"mouseup",e.cj);z.ed(document,"touchmove",e.dj);z.ed(document,"touchend",e.cj);f=g=0;e.Ge&&(clearInterval(e.Ge),e.Ge=s);if(100<=bb()-i&&(2<k.x||2<k.y))e.kl=t,e.dispatchEvent(a({lb:e.map.$b(e.ga()),point:e.ga()},new P("ondragend"))),k.x=k.y=0;e.Ql();e.V&&(e.V.style.cursor=e.z.jf?"pointer":"")};z.M(this.V, "mousedown",this.Hs);z.M(this.V,"touchstart",this.Hs)}}});z.extend(sc.prototype,{HQ:function(a){return this.repeat?this.JQ(a):this.IQ(a)},JQ:function(a){var b=this.repeat,c=[],e,f,g;if(this.XI){e=Math.floor(1/this.repeat)+1;for(f=0;f<e;f++)c.push(ug(a,1-b*f,q))}else{g=a.Qi[a.Qi.length-1];e=Math.floor(g/b)+1;for(f=0;f<e;f++)c.push(ug(a,g-f*b,t))}return c},IQ:function(a){return[ug(a,this.Zj,this.WI)]},hide:function(){if(this.Vc&&0<this.Vc.length)for(var a=this.Vc.length-1;0<=a;a--)this.Vc[a].U()},show:function(){if(this.Vc&&0<this.Vc.length)for(var a=this.Vc.length- 1;0<=a;a--)this.Vc[a].show()}});function ug(a,b,c){var e=a.ja;if(c){if(0>=b)return{point:e[0],index:1};if(1<=b)return{point:e[e.length-1],index:e.length-1};c=a.kT*b;b=vg(c,a.Kl);a=(c-a.Kl[b-1])/(a.Kl[b]-a.Kl[b-1])}else{c=b;b=a.Qi[a.Qi.length-1];if(0>=c)return{point:e[0],index:1};if(c>=b)return{point:e[e.length-1],index:e.length-1};b=vg(c,a.Qi);a=(c-a.Qi[b-1])/(a.Qi[b]-a.Qi[b-1])}c=e[b-1];e=e[b];return{point:new J(c.lng+(e.lng-c.lng)*a,c.lat+(e.lat-c.lat)*a),index:b}} z.mc.indexOf=function(a,b,c){var e=a.length,c=c|0;for(0>c&&(c=Math.max(0,e+c));c<e;c++)if(c in a&&a[c]===b)return c;return-1};function vg(a,b){var c=wg(b.concat(a));return z.mc.indexOf(c,a)}function wg(a){if(2>a.length)return a;for(var b=Math.floor(a.length/2),c=a.slice(0,b),a=a.slice(b),c=wg(c),a=wg(a),b=[];0<c.length&&0<a.length;)c[0]>a[0]?b.push(a.shift()):b.push(c.shift());return b.concat(c).concat(a)};z.extend(oc.prototype,{initialize:function(a){a&&this.vv&&a.addEventListener("onmousemove",this.vv);a=gb.prototype.initialize.call(this,a);this.z.mf===q&&(this.nk(),this.Ul());return a},Ej:function(){this.V=(this.Tn=xg.Ws(this.map)).Ao()},ba:function(){function a(a,b){var c=a.srcElement||a.target,i=Eb(),k=a.pageX?a.pageX:a.clientX+i[1],i=a.pageY?a.pageY:a.clientY+i[0];if(a&&b&&k&&i&&c){var c=z.lang.Nc(c.aa).map,m=z.D.ga(c.Wa);b.lb=new Q(k-m.left,i-m.top);b.point=c.xb(b.lb);b.pixel=b.lb;b.point=b.point}return b} var b=this.V,c=this;"canvas"!==xg.Ws(this.map).ip()&&!H()&&(c.z.jf&&(b.style.cursor="pointer",z.M(b,"click",function(b){c.DI&&c.DI.pb(c.map.Ka())&&c.dispatchEvent(a(b,la(new P("onclick"),b)))}),z.M(b,"dblclick",function(b){c.dispatchEvent(a(b,la(new P("ondblclick"),b)))}),(!z.ca.Te||4>z.ca.Te)&&z.M(this.V,"contextmenu",function(b){c.dispatchEvent(a(b,la(new P("onrightclick"),b)))})),z.M(b,"mousedown",function(b){c.dispatchEvent(a(b,la(new P("onmousedown"),b)));c.DI=c.map.Ka()}),z.M(b,"mouseup",function(b){c.dispatchEvent(a(b, la(new P("onmouseup"),b)))}),z.M(this.V,"mouseup",function(b){c.dispatchEvent(a(b,la(new P("onmouseup"),b)));z.ca.Te>=4&&(b.button===2&&c.z.jf)&&c.dispatchEvent(a(b,la(new P("onrightclick"),b)))}));b=s;this.Fi||(this.Fi=q,this.vv=function(a){if(c.map&&!c.map.R.iv){var b=c.IS(a.point),g=parseFloat(b.Ba),i;if(g<c.z.kN){i=c.Ra.ay?new P("onmousemove"):new P("onmouseover");c.Ra.JM=t;c.Ra.ay=q}else if(!c.Ra.JM&&c.Ra.ay){i=new P("onmouseout");c.Ra.ay=t;c.Ra.JM=q}if(i){if(!(c instanceof Gc)&&i.type==="onmousemove"&& c.Ra.ay===q&&(g===0||g>c.z.kN)){i.pixel=i.lb=a.lb;i.point=i.point=a.point}else{i.point=i.point=this.JN(b.lb);i.pixel=i.lb=this.$b(i.point)}c.dispatchEvent(i)}}},this.map.addEventListener("onmousemove",this.vv),this.addEventListener("mouseover",u()),this.addEventListener("mouseout",u()))},draw:function(a){this.V&&this.Tn&&("canvas"===this.Tn.Mb&&this.Vv?(this.Vv(),this.Tn.ke(this.V,this.$q(this.ja),this.z)):this.Tn.ke(this.V,this.$q(this.ja)),this instanceof Gc&&this.z.ji&&this.KR(a))},ib:function(){this.map&& (this.initialize(this.map),this.V.style.WebkitUserSelect="none",this.draw())},$q:function(a){var b=this.map,c=[],e=b.ve(),f=this.ve();if(!e.ot(f)||0===a.length||!this.V||!this.jh())return[c];this.z.mf||(e=this.um(b.fa()),this.gf[e]?a=this.gf[e]:(a=yg(a,this.zk(b.fa())),a=this.gf[e]=a));e=this.z.G0;c.push(b.Xe(a[0],s,e));for(var g=f=1,i=a.length;f<i;f++){var k=b.Xe(a[f],s,e);k.pb(c[g-1])||(c.push(k),g++)}return[c]},um:function(a){return this.z.um?this.z.um(a):6>a?0:10>a?1:15>a?2:3},zk:function(a){return this.z.zk? this.z.zk(a):oc.eF[this.um(a)]},Mr:function(a){this.gf.length=0;a=oc.yx(a);this.vo=a.slice(0,a.length-1);this.ja=a.slice(0);this.Bh();this.draw();this.dispatchEvent(new P("onlineupdate"))},ke:function(a){this.Mr(a);this.z.mf===q&&(this.nk(),this.Ul())},gn:function(a,b){b&&this.ja[a]&&(this.gf.length=0,this.ja[a]=new J(b.lng,b.lat),this.Bh(),this.z.mf===q&&(this.nk(),this.Ul()),this.draw(),this.dispatchEvent(new P("onlineupdate")))},setStrokeColor:function(a){this.z&&(this.z.strokeColor=a);this.Ml("strokecolor", a)},Rp:function(a){0<a&&(this.z.rc=a,this.Ml("strokeweight",a),"dashed"===this.VL()&&(this.map&&"svg"===xg.Ws(this.map).ip())&&this.Ml("strokestyle","dashed"))},Pp:function(a){a===l||(1<a||0>a)||(this.z.td=a,this.map&&this.Ml("strokeopacity",a))},Xt:function(a){1<a||0>a||(this.z.tg=a,this.Ml("fillopacity",a))},Qp:function(a){"solid"!==a&&"dashed"!==a||(this.z.strokeStyle=a,this.Ml("strokestyle",a))},setFillColor:function(a){this.z.fillColor=a||"";this.Ml("fillcolor",a)},Ml:function(a,b){this.Tn&& (this.Tn.setAttribute(this.V,a,b||"",this.WL()),this.dispatchEvent(new P("onlineupdate")))},Ul:function(){var a=this;if(!a.tc.length)for(var b=this.bM(),c=function(b){a.Kv(b)},e=u(),f=function(b){a.jB(b)},g=0,i=b.length;g<i;g++){var k=b[g],m=new tg(k.wb,k.pa);m.addEventListener("ondragging",c);m.addEventListener("ondragstart",e);m.addEventListener("ondragend",f);m.index=g;m.pa=k.pa;this.tc.push(m);this.map.Ga(m)}},nk:function(){for(var a;a=this.tc.pop();)this.map.Qb(a);this.tc.length=0},bM:function(){for(var a= [],b=0,c=this.ja.length;b<c;b++){var e=this.ja[b];a.push({wb:e,pa:0});if(b<c-1){var f=this.ja[b+1],e=new J((e.lng+f.lng)/2,(e.lat+f.lat)/2);a.push({wb:e,pa:1})}}return this.Tc=a},R1:u(),jB:function(a){this.Ra.aj&&(this.map.Qb(this.Ra.aj),delete this.Ra.aj);this.Ra.si&&(this.map.Qb(this.Ra.si),delete this.Ra.si);this.Ra.oi&&(this.map.Qb(this.Ra.oi),delete this.Ra.oi);var b=a.point,a=a.currentTarget.index,c;if(0!==a%2){this.aA(a);this.wq(a,b,0);var e=this.Tc[a-1].wb;c=this.Tc[a+1].wb;e=this.Ts(e,b); c=this.Ts(b,c);this.wq(a,e,1);this.wq(a+2,c,1);a=Math.ceil(a/2);c=this.ja.slice();a=c.splice(a,this.ja.length-a);c[c.length]=b;c=c.concat(a)}else this.Tc[a].wb=b,0<=a-2&&(e=this.Tc[a-2].wb,e=this.Ts(e,b),this.tc[a-1].show(),this.tc[a-1].sa(e)),a+2<this.Tc.length&&(c=this.Tc[a+2].wb,c=this.Ts(b,c),this.tc[a+1].show(),this.tc[a+1].sa(c)),this instanceof Fc&&this.Tc.length-1===a&&(this.aA(0),this.wq(0,b,0),this.aA(1),this.wq(1,this.Ts(this.Tc[0].wb,this.Tc[1].wb),1),this.tc[0].V.style.zIndex="-10000000"), a/=2,this.ja.splice(a,1,b),this instanceof Fc&&this.ja.length-1===a&&this.ja.splice(0,1,b),c=this.ja;b=0;for(a=this.tc.length;b<a;b++)this.tc[b].index=b;this.ja=c;this.Mr(c)},wq:function(a,b,c){var e=this;this.Tc.splice(a,0,{wb:b,pa:c});b=new tg(b,c);b.addEventListener("ondragging",function(a){e.Kv(a)});b.addEventListener("ondragstart",u());b.addEventListener("ondragend",function(a){e.jB(a)});b.index=a;b.pa=c;this.tc.splice(a,0,b);this.map.Ga(b)},aA:function(a){this.map.Qb(this.tc[a]);this.Tc.splice(a, 1);this.tc.splice(a,1)},Ts:function(a,b){return new J((a.lng+b.lng)/2,(a.lat+b.lat)/2)},IS:function(a){var b,c,e,f,g,i,k=[],m=this.map.Xe(a),k=this.$q(this.ja)[0],n=k.length;if(1<n){for(f=1;f<n;f++){var o=k[f-1],p=k[f];if(o&&p){o.x!==p.x?(g=(p.y-o.y)/(p.x-o.x),g=Math.abs(g*m.x+(p.y-g*p.x)-m.y)/Math.sqrt(g*g+1)):g=Math.abs(m.x-p.x);var v=Math.pow(p.y-o.y,2)+Math.pow(p.x-o.x,2),p=Math.pow(p.y-m.y,2)+Math.pow(p.x-m.x,2),o=Math.pow(o.y-m.y,2)+Math.pow(o.x-m.x,2),x=Math.pow(g,2);p-x+o-x>v&&(g=Math.sqrt(Math.min(p, o)));if(b==s||b>g)c=Math.sqrt(o-x)/Math.sqrt(v),e=Math.sqrt(p-x)/Math.sqrt(v),b=g,i=f;b=Math.min(b,g)}}if(!(this instanceof Gc)){g=m=0;v=this.ja;for(f=0;f<n;f++)m=f===n-1?0:m+1,v[f].lat!==v[m].lat&&((a.lat>=v[f].lat&&a.lat<v[m].lat||a.lat>=v[m].lat&&a.lat<v[f].lat)&&a.lng<(v[m].lng-v[f].lng)*(a.lat-v[f].lat)/(v[m].lat-v[f].lat)+v[f].lng)&&g++;b=Math.min(b,0<g%2?0:b)}1<c&&(c=1);1<e&&(c=0);a=k[i-1].y-k[i].y;f=k[i-1].x-(k[i-1].x-k[i].x)*c;g=k[i-1].y-a*c}return{lb:new Q(f,g),Ba:b}},show:function(){gb.prototype.show.call(this); this.draw();this.z.mf===q&&this.Ul()},U:function(){gb.prototype.U.call(this);this.z.mf===q&&this.nk()},remove:function(){mc.prototype.remove.call(this);this.z.mf===q&&this.nk()}});function zg(a,b){var c={top:0,bottom:0,right:0,left:0,all:0},e=a.x,f=a.y;f<b.XE?(c.top=8,c.all+=c.top):f>b.UE&&(c.bottom=4,c.all+=c.bottom);e>b.TE?(c.right=2,c.all+=c.right):e<b.WE&&(c.left=1,c.all+=c.left);return c} function yg(a,b){if(1>=a.length)return a;var c=a,e=b!==l?b*b:1,f=c.length,g=new ("undefined"!==typeof Uint8Array?Uint8Array:Array)(f),i=0,k=f-1,m=[],n=[],o,p,v,x;for(g[i]=g[k]=1;k;){p=0;for(o=i+1;o<k;o++){v=c[o];var y=c[i],A=c[k],E=y.lng,y=y.lat,C=A.lng-E,F=A.lat-y;if(0!==C||0!==F){var D=((v.lng-E)*C+(v.lat-y)*F)/(C*C+F*F);1<D?(E=A.lng,y=A.lat):0<D&&(E+=C*D,y+=F*D)}C=v.lng-E;F=v.lat-y;v=C*C+F*F;v>p&&(x=o,p=v)}p>e&&(g[x]=1,m.push(i,x,x,k));k=m.pop();i=m.pop()}for(o=0;o<f;o++)g[o]&&n.push(c[o]);return n} T(of,{show:of.show,hide:of.U,remove:of.remove,setPath:of.ke,setPositionAt:of.gn,setStrokeColor:of.setStrokeColor,setStrokeWeight:of.Rp,setStrokeOpacity:of.Pp,setFillOpacity:of.Xt,setStrokeStyle:of.Qp,setFillColor:of.setFillColor});z.extend(Gc.prototype,{initialize:function(a){oc.prototype.initialize.call(this,a);this.hJ=[0];this.Kr=[0];this.Kl=[0];for(var a=1,b=this.ja,c=b.length;a<c;a++){this.hJ[a]=S.$o(b[a],b[a-1]);var e=S.Eb(b[a-1]),f=S.Eb(b[a]);this.Kr[a]=90-180*Math.atan2(f.lat-e.lat,f.lng-e.lng)/Math.PI;this.Kl[a]=this.Kl[a-1]+this.hJ[a]}this.kT=this.Kl[c-1];this.Vv();this.Uv={};return this.V},Vv:function(){this.setFillColor("");this.setStrokeColor(this.z.strokeColor);this.Rp(this.z.rc);this.Qp(this.z.strokeStyle);this.Pp(this.z.td)}, $q:function(a){var b=this.map,c=[],e=b.ve(),f=this.ve();if(!e.ot(f)||0==a.length||!this.V||!this.jh())return[c];!(H()&&5E3<a.length)&&!this.z.mf&&(e=this.um(b.fa()),this.gf[e]?a=this.gf[e]:(f=yg(a,this.zk(b.fa())),a=this.gf[e]=f));c.push(b.Xe(a[0]));for(var g=e=1,f=a.length;e<f;e++){var i=b.Xe(a[e]);i.pb(c[g-1])||(c.push(i),g++)}a=[];e=b.offsetX;f=b.offsetY;g=b.K.lx;b={WE:-e-g,XE:-f-g,TE:-e+g+b.width,UE:-f+g+b.height};e=0;for(f=c.length-1;e<f;e++){var k=c[e],m=c[e+1],g=b,n=i=t,o=t,k=new Q(k.x,k.y), m=new Q(m.x,m.y),p=zg(k,g),v=zg(m,g),x=l,y=l,A=l,E=g.WE,C=g.XE,F=g.TE,D=g.UE;do 0===p.all&&0===v.all?o=i=q:0!==(p.all&v.all)?o=q:(x=0!==p.all?p:v,x.top?(y=k.x+(m.x-k.x)*(C-k.y)/(m.y-k.y),A=C):x.bottom?(y=k.x+(m.x-k.x)*(D-k.y)/(m.y-k.y),A=D):x.right?(A=k.y+(m.y-k.y)*(F-k.x)/(m.x-k.x),y=F):x.left&&(A=k.y+(m.y-k.y)*(E-k.x)/(m.x-k.x),y=E),n=q,x.all===p.all)?(k.x=Math.round(y),k.y=Math.round(A),p=zg(k,g)):(m.x=Math.round(y),m.y=Math.round(A),v=zg(m,g));while(!o);g=i?{MN:new Q(k.x,k.y),NN:new Q(m.x,m.y), clip:n?q:t}:l;g&&a.push(g)}c=[[]];e=0;for(f=a.length;e<f;e++)a[e].clip?(c[c.length-1].push(a[e].MN),c[c.length-1].push(a[e].NN),a[e+1]&&a[e+1].clip&&c.push([])):(c[c.length-1].push(a[e].MN),e==a.length-1&&c[c.length-1].push(a[e].NN));return c},hide:function(){oc.prototype.U.call(this);if(this.z.ji&&0<this.z.ji.length)for(var a=0,b=this.z.ji.length;a<b;a++)this.z.ji[a].hide()},show:function(){oc.prototype.show.call(this);if(this.z.ji&&0<this.z.ji.length)for(var a=0,b=this.z.ji.length;a<b;a++)this.z.ji[a].show()}, KR:function(a){var b=this.Dx(),c=b.fa(),e=b.ve();icons=this.z.ji;displayPixels=oc.prototype.$q.call(this,this.ja);if(this.Uv[c]&&0<this.Uv[c].length)this.Qi=this.Uv[c];else{for(var f=[0],g=1,i=displayPixels[0],k=i.length;g<k;g++)f[g]=f[g-1]+Fb(i[g],i[g-1]);this.Qi=this.Uv[c]=f}for(g=0;g<icons.length;g++){var f=icons[g],i=f.c0,m,n;f.Ov[c]&&0<f.Ov[c].length?n=f.Ov[c]:f.Ov[c]=n=f.HQ(this);if(1===n.length)e.js(n[0].point)&&(f.Vc[0]&&(b.Qb(f.Vc[0]),f.Vc[0].remove()),f.qL||(7===i.Mb||5===i.Mb?i.Op(-180+ this.Kr[n[0].index]):i.Op(this.Kr[n[0].index])),f.Vc[0]=new U(n[0].point,{icon:i}),b.Ga(f.Vc[0]));else if(1<n.length){var o=[],p,v={};if(a&&"onzoomend"===a.type){for(var x in f.Vc)b.Qb(f.Vc[x]),f.Vc[x].remove();f.Vc=[]}else z.mc.Fb(f.Vc,function(a){e.js(a.ga())?(p=""+a.ga().lat+(""+a.ga().lng),v[p]=q,o.push(a)):(b.Qb(a),a.remove())}),f.Vc=o;for(x=0;x<n.length;x++){m=n[x].index;var k=n[x].point,y=""+k.lat+(""+k.lng);e.js(k)&&!v[y]&&(f.qL||(7===i.Mb||5===i.Mb?i.setRotation(-180+this.Kr[m]):i.setRotation(this.Kr[m])), k=new U(k,{icon:i}),f.Vc.push(k),b.Ga(k))}}}},Kv:function(a){var b=a.currentTarget,c=a.point,e=b.index,f=this.Tc,g,i=a=s;if(0==e){var k=f[e+2].wb;g=[c,k];a=new J((k.lng+c.lng)/2,(k.lat+c.lat)/2);this.tc[e+1]&&this.tc[e+1].U()}else if(e==f.length-1){var m=f[e-2].wb;g=[m,c];a=new J((m.lng+c.lng)/2,(m.lat+c.lat)/2);this.tc[e-1]&&this.tc[e-1].U()}else m=f[e-1].wb,k=f[e+1].wb,g=[m,c,k],b.pa||(m=f[e-2].wb,k=f[e+2].wb,g=[m,c,k],a=new J((m.lng+c.lng)/2,(m.lat+c.lat)/2),i=new J((k.lng+c.lng)/2,(k.lat+c.lat)/ 2),this.tc[e-1]&&this.tc[e-1].U(),this.tc[e+1]&&this.tc[e+1].U());this.Ra.aj?(this.Ra.aj.ke(g),this.Ra.aj.show()):(b=new Gc(g,{strokeStyle:"dashed",strokeColor:this.z.strokeColor,rc:this.z.rc,td:this.z.td}),this.map.Ga(b),b.U(),this.Ra.aj=b);!this.Ra.si&&a?(this.Ra.si=new tg(a,1),this.map.Ga(this.Ra.si)):a&&this.Ra.si.sa(a);!this.Ra.oi&&i?(this.Ra.oi=new tg(i,1),this.map.Ga(this.Ra.oi)):i&&this.Ra.oi.sa(i)}});z.mc.remove=function(a,b){for(var c=a.length;c--;)a[c]===b&&a.splice(c,1);return a};z.extend(Fc.prototype,{initialize:function(a){oc.prototype.initialize.call(this,a);this.setStrokeColor(this.z.strokeColor);this.Rp(this.z.rc);this.Qp(this.z.strokeStyle);this.setFillColor(this.z.fillColor);this.Pp(this.z.td);this.Xt(this.z.tg);return this.V},gn:function(a,b){this.vo[a]&&(this.gf.length=0,this.vo[a]=new J(b.lng,b.lat),this.ja[a]=new J(b.lng,b.lat),0==a&&!this.ja[0].pb(this.ja[this.ja.length-1])&&(this.ja[this.ja.length-1]=new J(b.lng,b.lat)),this.Bh(),this.z.mf==q&&(this.nk(),this.Ul()), this.draw(),this.dispatchEvent(new P("onlineupdate")))},Vv:function(){this.setStrokeColor(this.z.strokeColor);this.Rp(this.z.rc);this.Qp(this.z.strokeStyle);this.setFillColor(this.z.fillColor);this.Pp(this.z.td);this.Xt(this.z.tg)},containPoint:function(a){var b=this.ja,c=t;if(!(!a instanceof J)){if(this.Vu.js(a)){for(var e=a.lat,a=a.lng,f=0,g=b.length-1;f<b.length;g=f++){var i=b[f].lat,k=b[f].lng,m=b[g].lat,g=b[g].lng;k>a!=g>a&&e<(m-i)*(a-k)/(g-k)+i&&(c=!c)}return c}return t}},Kv:function(a){var b= a.currentTarget,c=a.point,e=b.index,f=this.Tc,g,i=a=s;if(0==e){var k=f[f.length-2].wb,m=f[e+2].wb;g=[k,c,m];b.pa||(a=new J((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new J((m.lng+c.lng)/2,(m.lat+c.lat)/2))}else e==f.length-1?(m=f[2].wb,k=f[e-2].wb,g=[k,c,m],b.pa||(a=new J((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new J((m.lng+c.lng)/2,(m.lat+c.lat)/2))):(k=f[e-1].wb,m=f[e+1].wb,g=[k,c,m],b.pa||(k=f[e-2].wb,m=f[e+2].wb,g=[k,c,m],a=new J((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new J((m.lng+c.lng)/2,(m.lat+c.lat)/2),this.tc[e- 1]&&this.tc[e-1].U(),this.tc[e+1]&&this.tc[e+1].U()));this.Ra.aj?this.Ra.aj.ke(g):(b=new Gc(g,{strokeStyle:"dashed",strokeColor:this.z.strokeColor,rc:this.z.rc,td:this.z.td}),this.map.Ga(b),this.Ra.aj=b);!this.Ra.si&&a?(this.Ra.si=new tg(a,1),this.map.Ga(this.Ra.si)):a&&this.Ra.si.sa(a);!this.Ra.oi&&i?(this.Ra.oi=new tg(i,1),this.map.Ga(this.Ra.oi)):i&&this.Ra.oi.sa(i)}});T(qf,{setPositionAt:qf.gn});z.extend(Hc.prototype,{initialize:function(a){Fc.prototype.initialize.call(this,a);this.ja=this.qv(this.point,this.wa);this.Bh();return this.V},Zf:function(a,b){a&&(this.gf.length=0,b||(this.Tc=s),this.point=a,this.ja=this.qv(a,this.wa),this.Bh(),this.draw(),this.dispatchEvent(new P("onlineupdate")))},xf:function(a,b){isNaN(a)||(this.gf.length=0,b||(this.Tc=s),this.wa=Math.abs(a),this.ja=this.qv(this.point,this.wa),this.Bh(),this.draw(),this.dispatchEvent(new P("onlineupdate")))},zk:function(a){return this.z.zk? this.z.zk(a):Hc.eF[this.um(a)]},Kv:function(a){var b,a=a.currentTarget,c=this.Tc;b=c[0].wb;c=c[c.length-1].wb;0==a.index?(b=a.ga(),a=c):a=a.ga();this.xf(S.$o(b,a),q);this.Zf(b,q)},jB:function(a){var a=a.currentTarget,b=a.index;this.Tc[0]={wb:this.point,pa:0};1==b&&(this.Tc[1]={wb:a.point,pa:0});this.nk();this.Ul()},bM:function(){if(!this.Tc){var a=[];a.push({wb:this.point,pa:0});a.push({wb:this.ja[Math.floor(3*this.ja.length/4)],pa:0});this.Tc=a}return this.Tc}});T(pf,{setCenter:pf.Zf,setRadius:pf.xf});var xg={Ws:function(a){xg["_"+a.aa]||(xg["_"+a.aa]={});switch(a.K.cL){case 1:return xg.XL(a);case 2:return xg.cM(a);case 3:return xg.ND(a)}if(H()&&xg.FM()&&4!==a.K.cL)return xg.ND(a);if(xg.$Y())return xg.XL(a);if(xg.aZ())return xg.cM(a);if(xg.FM())return xg.ND(a)},XL:function(a){xg["_"+a.aa].zJ||(xg["_"+a.aa].zJ=new B.ZP(a));return xg["_"+a.aa].zJ},cM:function(a){xg["_"+a.aa].LJ||(xg["_"+a.aa].LJ=new B.bQ(a));return xg["_"+a.aa].LJ},ND:function(a){xg["_"+a.aa].iH||(xg["_"+a.aa].iH=new B.zP(a));return xg["_"+ a.aa].iH},aZ:function(){if(Hb(xg.LO))return xg.LO;var a=Mb();return xg.LO=a},$Y:function(){Hb(xg.KO)||(xg.KO=Nb());return xg.KO},FM:function(){Hb(xg.JO)||(xg.JO=Ob());return xg.JO}};B.hq=xg; ');