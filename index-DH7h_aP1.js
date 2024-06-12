(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const is="147",Rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vo=0,ms=1,Mo=2,Wa=1,yo=2,mi=3,Jn=0,It=1,Bt=2,cn=0,Kn=1,gs=2,_s=3,xs=4,bo=5,jn=100,So=101,wo=102,vs=103,Ms=104,Eo=200,To=201,Ao=202,Co=203,Xa=204,qa=205,Lo=206,Po=207,Do=208,Ro=209,Io=210,Fo=0,zo=1,No=2,jr=3,Uo=4,Oo=5,Bo=6,Go=7,rs=0,ko=1,Vo=2,Jt=0,Ho=1,Wo=2,Xo=3,qo=4,Yo=5,Ya=300,ei=301,ti=302,Zr=303,$r=304,nr=306,Kr=1e3,Ut=1001,Qr=1002,Mt=1003,ys=1004,bs=1005,Dt=1006,jo=1007,ir=1008,An=1009,Zo=1010,$o=1011,ja=1012,Ko=1013,Sn=1014,wn=1015,bi=1016,Qo=1017,Jo=1018,Qn=1020,el=1021,tl=1022,Ot=1023,nl=1024,il=1025,En=1026,ni=1027,rl=1028,sl=1029,al=1030,ol=1031,ll=1033,dr=33776,fr=33777,pr=33778,mr=33779,Ss=35840,ws=35841,Es=35842,Ts=35843,cl=36196,As=37492,Cs=37496,Ls=37808,Ps=37809,Ds=37810,Rs=37811,Is=37812,Fs=37813,zs=37814,Ns=37815,Us=37816,Os=37817,Bs=37818,Gs=37819,ks=37820,Vs=37821,Hs=36492,Cn=3e3,He=3001,ul=3200,hl=3201,Za=0,dl=1,kt="srgb",Si="srgb-linear",gr=7680,fl=519,Ws=35044,Xs="300 es",Jr=1035;class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qs=1234567;const Mi=Math.PI/180,Ji=180/Math.PI;function ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[s&255]+ut[s>>8&255]+ut[s>>16&255]+ut[s>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function ss(s,e){return(s%e+e)%e}function pl(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ml(s,e,t){return s!==e?(t-s)/(e-s):0}function yi(s,e,t){return(1-t)*s+t*e}function gl(s,e,t,n){return yi(s,e,1-Math.exp(-t*n))}function _l(s,e=1){return e-Math.abs(ss(s,e*2)-e)}function xl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ml(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yl(s,e){return s+Math.random()*(e-s)}function bl(s){return s*(.5-Math.random())}function Sl(s){s!==void 0&&(qs=s);let e=qs+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wl(s){return s*Mi}function El(s){return s*Ji}function es(s){return(s&s-1)===0&&s!==0}function Tl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function er(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Al(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),u=a(t/2),l=r((e+n)/2),c=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*c,u*h,u*f,o*l);break;case"YZY":s.set(u*f,o*c,u*h,o*l);break;case"ZXZ":s.set(u*h,u*f,o*c,o*l);break;case"XZX":s.set(o*c,u*v,u*m,o*l);break;case"YXY":s.set(u*m,o*c,u*v,o*l);break;case"ZYZ":s.set(u*v,u*m,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Cl=Object.freeze({__proto__:null,DEG2RAD:Mi,RAD2DEG:Ji,generateUUID:ri,clamp:gt,euclideanModulo:ss,mapLinear:pl,inverseLerp:ml,lerp:yi,damp:gl,pingpong:_l,smoothstep:xl,smootherstep:vl,randInt:Ml,randFloat:yl,randFloatSpread:bl,seededRandom:Sl,degToRad:wl,radToDeg:El,isPowerOfTwo:es,ceilPowerOfTwo:Tl,floorPowerOfTwo:er,setQuaternionFromProperEuler:Al,normalize:xt,denormalize:gi});class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,u,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=r,c[5]=u,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],c=n[4],h=n[7],f=n[2],m=n[5],v=n[8],p=i[0],d=i[3],_=i[6],b=i[1],M=i[4],y=i[7],x=i[2],A=i[5],L=i[8];return r[0]=a*p+o*b+u*x,r[3]=a*d+o*M+u*A,r[6]=a*_+o*y+u*L,r[1]=l*p+c*b+h*x,r[4]=l*d+c*M+h*A,r[7]=l*_+c*y+h*L,r[2]=f*p+m*b+v*x,r[5]=f*d+m*M+v*A,r[8]=f*_+m*y+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8];return t*a*c-t*o*l-n*r*c+n*o*u+i*r*l-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=c*a-o*l,f=o*u-c*r,m=l*r-a*u,v=t*h+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(i*l-c*n)*p,e[2]=(o*n-i*a)*p,e[3]=f*p,e[4]=(c*t-i*u)*p,e[5]=(i*r-o*t)*p,e[6]=m*p,e[7]=(n*u-l*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const u=Math.cos(r),l=Math.sin(r);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-i*l,i*u,-i*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_r.makeScale(e,t)),this}rotate(e){return this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Et;function $a(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const xr={[kt]:{[Si]:Tn},[Si]:{[kt]:$i}},pt={legacyMode:!0,get workingColorSpace(){return Si},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(xr[e]&&xr[e][t]!==void 0){const n=xr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function vr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ti(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=ss(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vr(a,r,e+1/3),this.g=vr(a,r,e),this.b=vr(a,r,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,pt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,pt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const u=parseFloat(r[1])/360,l=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return n(r[4]),this.setHSL(u,l,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,pt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,pt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kt){const n=Ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return pt.fromWorkingColorSpace(Ti(this,Qe),e),gt(Qe.r*255,0,255)<<16^gt(Qe.g*255,0,255)<<8^gt(Qe.b*255,0,255)<<0}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Ti(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let u,l;const c=(o+a)/2;if(o===a)u=0,l=0;else{const h=a-o;switch(l=c<=.5?h/(a+o):h/(2-a-o),a){case n:u=(i-r)/h+(i<r?6:0);break;case i:u=(r-n)/h+2;break;case r:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Ti(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=kt){return pt.fromWorkingColorSpace(Ti(this,Qe),e),e!==kt?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Ei);const n=yi(Ft.h,Ei.h,t),i=yi(Ft.s,Ei.s,t),r=yi(Ft.l,Ei.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Ka;let Fn;class Qa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=tr("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ja{constructor(e=null){this.isSource=!0,this.uuid=ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Mr(i[a].image)):r.push(Mr(i[a]))}else r=Mr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Tt extends Dn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Ut,i=Ut,r=Dt,a=ir,o=Ot,u=An,l=Tt.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=ri(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Ya;Tt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,l=u[0],c=u[4],h=u[8],f=u[1],m=u[5],v=u[9],p=u[2],d=u[6],_=u[10];if(Math.abs(c-f)<.01&&Math.abs(h-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+p)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(m+1)/2,x=(_+1)/2,A=(c+f)/4,L=(h+p)/4,g=(v+d)/4;return M>y&&M>x?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=L/n):y>x?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=g/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=L/r,i=g/r),this.set(n,i,r,t),this}let b=Math.sqrt((d-v)*(d-v)+(h-p)*(h-p)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(d-v)/b,this.y=(h-p)/b,this.z=(f-c)/b,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends Dn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class at{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let u=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],v=r[a+2],p=r[a+3];if(o===0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(h!==p||u!==f||l!==m||c!==v){let d=1-o;const _=u*f+l*m+c*v+h*p,b=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const x=Math.sqrt(M),A=Math.atan2(x,_*b);d=Math.sin(d*A)/x,o=Math.sin(o*A)/x}const y=o*b;if(u=u*d+f*y,l=l*d+m*y,c=c*d+v*y,h=h*d+p*y,d===1-o){const x=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=x,l*=x,c*=x,h*=x}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],u=n[i+1],l=n[i+2],c=n[i+3],h=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+c*h+u*m-l*f,e[t+1]=u*v+c*f+l*h-o*m,e[t+2]=l*v+c*m+o*f-u*h,e[t+3]=c*v-o*h-u*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),c=o(i/2),h=o(r/2),f=u(n/2),m=u(i/2),v=u(r/2);switch(a){case"XYZ":this._x=f*c*h+l*m*v,this._y=l*m*h-f*c*v,this._z=l*c*v+f*m*h,this._w=l*c*h-f*m*v;break;case"YXZ":this._x=f*c*h+l*m*v,this._y=l*m*h-f*c*v,this._z=l*c*v-f*m*h,this._w=l*c*h+f*m*v;break;case"ZXY":this._x=f*c*h-l*m*v,this._y=l*m*h+f*c*v,this._z=l*c*v+f*m*h,this._w=l*c*h-f*m*v;break;case"ZYX":this._x=f*c*h-l*m*v,this._y=l*m*h+f*c*v,this._z=l*c*v-f*m*h,this._w=l*c*h+f*m*v;break;case"YZX":this._x=f*c*h+l*m*v,this._y=l*m*h+f*c*v,this._z=l*c*v-f*m*h,this._w=l*c*h-f*m*v;break;case"XZY":this._x=f*c*h-l*m*v,this._y=l*m*h-f*c*v,this._z=l*c*v+f*m*h,this._w=l*c*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],u=t[9],l=t[2],c=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-u)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-u)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+a*o+i*l-r*u,this._y=i*c+a*u+r*o-n*l,this._z=r*c+a*l+n*u-i*o,this._w=a*c-n*o-i*u-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const u=1-o*o;if(u<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),c=Math.atan2(l,o),h=Math.sin((1-t)*c)/l,f=Math.sin(t*c)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,u=e.w,l=u*t+a*i-o*n,c=u*n+o*t-r*i,h=u*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=l*u+f*-r+c*-o-h*-a,this.y=c*u+f*-a+h*-r-l*-o,this.z=h*u+f*-o+l*-a-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,u=t.z;return this.x=i*u-r*o,this.y=r*a-n*u,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new P,Ys=new at;class wi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let u=0,l=e.length;u<l;u+=3){const c=e[u],h=e[u+1],f=e[u+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>r&&(r=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let u=0,l=e.count;u<l;u++){const c=e.getX(u),h=e.getY(u),f=e.getZ(u);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>r&&(r=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)pn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),Ai.subVectors(this.max,ci),zn.subVectors(e.a,ci),Nn.subVectors(e.b,ci),Un.subVectors(e.c,ci),en.subVectors(Nn,zn),tn.subVectors(Un,Nn),mn.subVectors(zn,Un);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-mn.z,mn.y,en.z,0,-en.x,tn.z,0,-tn.x,mn.z,0,-mn.x,-en.y,en.x,0,-tn.y,tn.x,0,-mn.y,mn.x,0];return!Sr(t,zn,Nn,Un,Ai)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,zn,Nn,Un,Ai))?!1:(Ci.crossVectors(en,tn),t=[Ci.x,Ci.y,Ci.z],Sr(t,zn,Nn,Un,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,br=new wi,zn=new P,Nn=new P,Un=new P,en=new P,tn=new P,mn=new P,ci=new P,Ai=new P,Ci=new P,gn=new P;function Sr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gn.fromArray(s,r);const o=i.x*Math.abs(gn.x)+i.y*Math.abs(gn.y)+i.z*Math.abs(gn.z),u=e.dot(gn),l=t.dot(gn),c=n.dot(gn);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>o)return!1}return!0}const Dl=new wi,ui=new P,wr=new P;class rr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(wr)),this.expandByPoint(ui.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new P,Er=new P,Li=new P,nn=new P,Tr=new P,Pi=new P,Ar=new P;class as{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Er.copy(e).add(t).multiplyScalar(.5),Li.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Li),o=nn.dot(this.direction),u=-nn.dot(Li),l=nn.lengthSq(),c=Math.abs(1-a*a);let h,f,m,v;if(c>0)if(h=a*u-o,f=a*o-u,v=r*c,h>=0)if(f>=-v)if(f<=v){const p=1/c;h*=p,f*=p,m=h*(h+a*f+2*o)+f*(a*h+f+2*u)+l}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+l;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+l;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-u),r),m=-h*h+f*(f+2*u)+l):f<=v?(h=0,f=Math.min(Math.max(-r,-u),r),m=f*(f+2*u)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-u),r),m=-h*h+f*(f+2*u)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*u)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Li).multiplyScalar(f).add(Er),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,u=n+a;return o<0&&u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,u=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,u=(e.min.z-f.z)*h),n>u||o>i)||((o>n||n!==n)&&(n=o),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,r){Tr.subVectors(t,e),Pi.subVectors(n,e),Ar.crossVectors(Tr,Pi);let a=this.direction.dot(Ar),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nn.subVectors(this.origin,e);const u=o*this.direction.dot(Pi.crossVectors(nn,Pi));if(u<0)return null;const l=o*this.direction.dot(Tr.cross(nn));if(l<0||u+l>a)return null;const c=-o*nn.dot(Ar);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,u,l,c,h,f,m,v,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=u,_[2]=l,_[6]=c,_[10]=h,_[14]=f,_[3]=m,_[7]=v,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),r=1/On.setFromMatrixColumn(e,1).length(),a=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*c,m=a*h,v=o*c,p=o*h;t[0]=u*c,t[4]=-u*h,t[8]=l,t[1]=m+v*l,t[5]=f-p*l,t[9]=-o*u,t[2]=p-f*l,t[6]=v+m*l,t[10]=a*u}else if(e.order==="YXZ"){const f=u*c,m=u*h,v=l*c,p=l*h;t[0]=f+p*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-v,t[6]=p+f*o,t[10]=a*u}else if(e.order==="ZXY"){const f=u*c,m=u*h,v=l*c,p=l*h;t[0]=f-p*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*c,t[9]=p-f*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const f=a*c,m=a*h,v=o*c,p=o*h;t[0]=u*c,t[4]=v*l-m,t[8]=f*l+p,t[1]=u*h,t[5]=p*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const f=a*u,m=a*l,v=o*u,p=o*l;t[0]=u*c,t[4]=p-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-l*c,t[6]=m*h+v,t[10]=f-p*h}else if(e.order==="XZY"){const f=a*u,m=a*l,v=o*u,p=o*l;t[0]=u*c,t[4]=-h,t[8]=l*c,t[1]=f*h+p,t[5]=a*c,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*c,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rl,e,Il)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),rn.crossVectors(n,St),rn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),rn.crossVectors(n,St)),rn.normalize(),Di.crossVectors(St,rn),i[0]=rn.x,i[4]=Di.x,i[8]=St.x,i[1]=rn.y,i[5]=Di.y,i[9]=St.y,i[2]=rn.z,i[6]=Di.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],c=n[1],h=n[5],f=n[9],m=n[13],v=n[2],p=n[6],d=n[10],_=n[14],b=n[3],M=n[7],y=n[11],x=n[15],A=i[0],L=i[4],g=i[8],E=i[12],D=i[1],B=i[5],Y=i[9],N=i[13],R=i[2],O=i[6],$=i[10],W=i[14],V=i[3],K=i[7],Q=i[11],G=i[15];return r[0]=a*A+o*D+u*R+l*V,r[4]=a*L+o*B+u*O+l*K,r[8]=a*g+o*Y+u*$+l*Q,r[12]=a*E+o*N+u*W+l*G,r[1]=c*A+h*D+f*R+m*V,r[5]=c*L+h*B+f*O+m*K,r[9]=c*g+h*Y+f*$+m*Q,r[13]=c*E+h*N+f*W+m*G,r[2]=v*A+p*D+d*R+_*V,r[6]=v*L+p*B+d*O+_*K,r[10]=v*g+p*Y+d*$+_*Q,r[14]=v*E+p*N+d*W+_*G,r[3]=b*A+M*D+y*R+x*V,r[7]=b*L+M*B+y*O+x*K,r[11]=b*g+M*Y+y*$+x*Q,r[15]=b*E+M*N+y*W+x*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],u=e[9],l=e[13],c=e[2],h=e[6],f=e[10],m=e[14],v=e[3],p=e[7],d=e[11],_=e[15];return v*(+r*u*h-i*l*h-r*o*f+n*l*f+i*o*m-n*u*m)+p*(+t*u*m-t*l*f+r*a*f-i*a*m+i*l*c-r*u*c)+d*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*c-n*l*c)+_*(-i*o*c-t*u*h+t*o*f+i*a*h-n*a*f+n*u*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=e[9],f=e[10],m=e[11],v=e[12],p=e[13],d=e[14],_=e[15],b=h*d*l-p*f*l+p*u*m-o*d*m-h*u*_+o*f*_,M=v*f*l-c*d*l-v*u*m+a*d*m+c*u*_-a*f*_,y=c*p*l-v*h*l+v*o*m-a*p*m-c*o*_+a*h*_,x=v*h*u-c*p*u-v*o*f+a*p*f+c*o*d-a*h*d,A=t*b+n*M+i*y+r*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=b*L,e[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*_-n*f*_)*L,e[2]=(o*d*r-p*u*r+p*i*l-n*d*l-o*i*_+n*u*_)*L,e[3]=(h*u*r-o*f*r-h*i*l+n*f*l+o*i*m-n*u*m)*L,e[4]=M*L,e[5]=(c*d*r-v*f*r+v*i*m-t*d*m-c*i*_+t*f*_)*L,e[6]=(v*u*r-a*d*r-v*i*l+t*d*l+a*i*_-t*u*_)*L,e[7]=(a*f*r-c*u*r+c*i*l-t*f*l-a*i*m+t*u*m)*L,e[8]=y*L,e[9]=(v*h*r-c*p*r-v*n*m+t*p*m+c*n*_-t*h*_)*L,e[10]=(a*p*r-v*o*r+v*n*l-t*p*l-a*n*_+t*o*_)*L,e[11]=(c*o*r-a*h*r-c*n*l+t*h*l+a*n*m-t*o*m)*L,e[12]=x*L,e[13]=(c*p*i-v*h*i+v*n*f-t*p*f-c*n*d+t*h*d)*L,e[14]=(v*o*i-a*p*i-v*n*u+t*p*u+a*n*d-t*o*d)*L,e[15]=(a*h*i-c*o*i+c*n*u-t*h*u-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,u=e.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-i*u,l*u+i*o,0,l*o+i*u,c*o+n,c*u-i*a,0,l*u-i*o,c*u+i*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,u=t._w,l=r+r,c=a+a,h=o+o,f=r*l,m=r*c,v=r*h,p=a*c,d=a*h,_=o*h,b=u*l,M=u*c,y=u*h,x=n.x,A=n.y,L=n.z;return i[0]=(1-(p+_))*x,i[1]=(m+y)*x,i[2]=(v-M)*x,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+_))*A,i[6]=(d+b)*A,i[7]=0,i[8]=(v+M)*L,i[9]=(d-b)*L,i[10]=(1-(f+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=On.set(i[0],i[1],i[2]).length();const a=On.set(i[4],i[5],i[6]).length(),o=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zt.copy(this);const l=1/r,c=1/a,h=1/o;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=c,zt.elements[5]*=c,zt.elements[6]*=c,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,u=2*r/(t-e),l=2*r/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=u,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,u=1/(t-e),l=1/(n-i),c=1/(a-r),h=(t+e)*u,f=(n+i)*l,m=(a+r)*c;return o[0]=2*u,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const On=new P,zt=new Ze,Rl=new P(0,0,0),Il=new P(1,1,1),rn=new P,Di=new P,St=new P,js=new Ze,Zs=new at;class si{constructor(e=0,t=0,n=0,i=si.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],u=i[1],l=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zs.setFromEuler(this),this.setFromQuaternion(Zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}si.DefaultOrder="XYZ";si.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class os{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fl=0;const $s=new P,Bn=new at,Yt=new Ze,Ri=new P,hi=new P,zl=new P,Nl=new at,Ks=new P(1,0,0),Qs=new P(0,1,0),Js=new P(0,0,1),Ul={type:"added"},ea={type:"removed"};class Je extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DefaultUp.clone();const e=new P,t=new si,n=new at,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Et}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DefaultMatrixWorldAutoUpdate,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(Ks,e)}rotateY(e){return this.rotateOnAxis(Qs,e)}rotateZ(e){return this.rotateOnAxis(Js,e)}translateOnAxis(e,t){return $s.copy(e).applyQuaternion(this.quaternion),this.position.add($s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ks,e)}translateY(e){return this.translateOnAxis(Qs,e)}translateZ(e){return this.translateOnAxis(Js,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ri.copy(e):Ri.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(hi,Ri,this.up):Yt.lookAt(Ri,hi,this.up),this.quaternion.setFromRotationMatrix(Yt),i&&(Yt.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ul)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,Nl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];r(e.shapes,h)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(r(e.materials,this.material[u]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];i.animations.push(r(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DefaultUp=new P(0,1,0);Je.DefaultMatrixAutoUpdate=!0;Je.DefaultMatrixWorldAutoUpdate=!0;const Nt=new P,jt=new P,Cr=new P,Zt=new P,Gn=new P,kn=new P,ta=new P,Lr=new P,Pr=new P,Dr=new P;class Qt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nt.subVectors(i,t),jt.subVectors(n,t),Cr.subVectors(e,t);const a=Nt.dot(Nt),o=Nt.dot(jt),u=Nt.dot(Cr),l=jt.dot(jt),c=jt.dot(Cr),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*u-o*c)*f,v=(a*c-o*u)*f;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,i,r,a,o,u){return this.getBarycoord(e,t,n,i,Zt),u.set(0,0),u.addScaledVector(r,Zt.x),u.addScaledVector(a,Zt.y),u.addScaledVector(o,Zt.z),u}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),jt.subVectors(e,t),Nt.cross(jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Nt.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gn.subVectors(i,n),kn.subVectors(r,n),Lr.subVectors(e,n);const u=Gn.dot(Lr),l=kn.dot(Lr);if(u<=0&&l<=0)return t.copy(n);Pr.subVectors(e,i);const c=Gn.dot(Pr),h=kn.dot(Pr);if(c>=0&&h<=c)return t.copy(i);const f=u*h-c*l;if(f<=0&&u>=0&&c<=0)return a=u/(u-c),t.copy(n).addScaledVector(Gn,a);Dr.subVectors(e,r);const m=Gn.dot(Dr),v=kn.dot(Dr);if(v>=0&&m<=v)return t.copy(r);const p=m*l-u*v;if(p<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(kn,o);const d=c*v-m*h;if(d<=0&&h-c>=0&&m-v>=0)return ta.subVectors(r,i),o=(h-c)/(h-c+(m-v)),t.copy(i).addScaledVector(ta,o);const _=1/(d+p+f);return a=p*_,o=f*_,t.copy(n).addScaledVector(Gn,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ol=0;class ai extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Kn,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const u=r[o];delete u.metadata,a.push(u)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new P,Ii=new be;class At{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ws,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix3(e),this.setXY(t,Ii.x,Ii.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ws&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class to extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class no extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ge extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bl=0;const Pt=new Ze,Rr=new Je,Vn=new P,wt=new wi,di=new wi,st=new P;class lt extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($a(e)?no:to)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];di.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(wt.min,di.min),wt.expandByPoint(st),st.addVectors(wt.max,di.max),wt.expandByPoint(st)):(wt.expandByPoint(di.min),wt.expandByPoint(di.max))}wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)st.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(st));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],u=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)st.fromBufferAttribute(o,l),u&&(Vn.fromBufferAttribute(e,l),st.add(Vn)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*o),4));const u=this.getAttribute("tangent").array,l=[],c=[];for(let D=0;D<o;D++)l[D]=new P,c[D]=new P;const h=new P,f=new P,m=new P,v=new be,p=new be,d=new be,_=new P,b=new P;function M(D,B,Y){h.fromArray(i,D*3),f.fromArray(i,B*3),m.fromArray(i,Y*3),v.fromArray(a,D*2),p.fromArray(a,B*2),d.fromArray(a,Y*2),f.sub(h),m.sub(h),p.sub(v),d.sub(v);const N=1/(p.x*d.y-d.x*p.y);isFinite(N)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(N),b.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(N),l[D].add(_),l[B].add(_),l[Y].add(_),c[D].add(b),c[B].add(b),c[Y].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,B=y.length;D<B;++D){const Y=y[D],N=Y.start,R=Y.count;for(let O=N,$=N+R;O<$;O+=3)M(n[O+0],n[O+1],n[O+2])}const x=new P,A=new P,L=new P,g=new P;function E(D){L.fromArray(r,D*3),g.copy(L);const B=l[D];x.copy(B),x.sub(L.multiplyScalar(L.dot(B))).normalize(),A.crossVectors(g,B);const N=A.dot(c[D])<0?-1:1;u[D*4]=x.x,u[D*4+1]=x.y,u[D*4+2]=x.z,u[D*4+3]=N}for(let D=0,B=y.length;D<B;++D){const Y=y[D],N=Y.start,R=Y.count;for(let O=N,$=N+R;O<$;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,u=new P,l=new P,c=new P,h=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),c.subVectors(a,r),h.subVectors(i,r),c.cross(h),o.fromBufferAttribute(n,v),u.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),o.add(c),u.add(c),l.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(i,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(o,u){const l=o.array,c=o.itemSize,h=o.normalized,f=new l.constructor(u.length*c);let m=0,v=0;for(let p=0,d=u.length;p<d;p++){o.isInterleavedBufferAttribute?m=u[p]*o.data.stride+o.offset:m=u[p]*c;for(let _=0;_<c;_++)f[v++]=l[m++]}return new At(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,i=this.attributes;for(const o in i){const u=i[o],l=e(u,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const u=[],l=r[o];for(let c=0,h=l.length;c<h;c++){const f=l[c],m=e(f,n);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(i[u]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],h=r[l];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new Ze,Hn=new as,Ir=new rr,sn=new P,an=new P,on=new P,Fr=new P,zr=new P,Nr=new P,Fi=new P,zi=new P,Ni=new P,Ui=new be,Oi=new be,Bi=new be,Ur=new P,Gi=new P;class le extends Je{constructor(e=new lt,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),e.ray.intersectsSphere(Ir)===!1)||(na.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(na),n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,u=n.attributes.position,l=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,v=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],b=i[_.materialIndex],M=Math.max(_.start,v.start),y=Math.min(o.count,Math.min(_.start+_.count,v.start+v.count));for(let x=M,A=y;x<A;x+=3){const L=o.getX(x),g=o.getX(x+1),E=o.getX(x+2);a=ki(this,b,e,Hn,u,l,c,h,f,L,g,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),d=Math.min(o.count,v.start+v.count);for(let _=p,b=d;_<b;_+=3){const M=o.getX(_),y=o.getX(_+1),x=o.getX(_+2);a=ki(this,i,e,Hn,u,l,c,h,f,M,y,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],b=i[_.materialIndex],M=Math.max(_.start,v.start),y=Math.min(u.count,Math.min(_.start+_.count,v.start+v.count));for(let x=M,A=y;x<A;x+=3){const L=x,g=x+1,E=x+2;a=ki(this,b,e,Hn,u,l,c,h,f,L,g,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),d=Math.min(u.count,v.start+v.count);for(let _=p,b=d;_<b;_+=3){const M=_,y=_+1,x=_+2;a=ki(this,i,e,Hn,u,l,c,h,f,M,y,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Gl(s,e,t,n,i,r,a,o){let u;if(e.side===It?u=n.intersectTriangle(a,r,i,!0,o):u=n.intersectTriangle(i,r,a,e.side!==Bt,o),u===null)return null;Gi.copy(o),Gi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Gi);return l<t.near||l>t.far?null:{distance:l,point:Gi.clone(),object:s}}function ki(s,e,t,n,i,r,a,o,u,l,c,h){sn.fromBufferAttribute(i,l),an.fromBufferAttribute(i,c),on.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Fi.set(0,0,0),zi.set(0,0,0),Ni.set(0,0,0);for(let v=0,p=r.length;v<p;v++){const d=f[v],_=r[v];d!==0&&(Fr.fromBufferAttribute(_,l),zr.fromBufferAttribute(_,c),Nr.fromBufferAttribute(_,h),a?(Fi.addScaledVector(Fr,d),zi.addScaledVector(zr,d),Ni.addScaledVector(Nr,d)):(Fi.addScaledVector(Fr.sub(sn),d),zi.addScaledVector(zr.sub(an),d),Ni.addScaledVector(Nr.sub(on),d)))}sn.add(Fi),an.add(zi),on.add(Ni)}s.isSkinnedMesh&&(s.boneTransform(l,sn),s.boneTransform(c,an),s.boneTransform(h,on));const m=Gl(s,e,t,n,sn,an,on,Ur);if(m){o&&(Ui.fromBufferAttribute(o,l),Oi.fromBufferAttribute(o,c),Bi.fromBufferAttribute(o,h),m.uv=Qt.getUV(Ur,sn,an,on,Ui,Oi,Bi,new be)),u&&(Ui.fromBufferAttribute(u,l),Oi.fromBufferAttribute(u,c),Bi.fromBufferAttribute(u,h),m.uv2=Qt.getUV(Ur,sn,an,on,Ui,Oi,Bi,new be));const v={a:l,b:c,c:h,normal:new P,materialIndex:0};Qt.getNormal(sn,an,on,v.normal),m.face=v}return m}class je extends lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const u=[],l=[],c=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2));function v(p,d,_,b,M,y,x,A,L,g,E){const D=y/L,B=x/g,Y=y/2,N=x/2,R=A/2,O=L+1,$=g+1;let W=0,V=0;const K=new P;for(let Q=0;Q<$;Q++){const G=Q*B-N;for(let k=0;k<O;k++){const J=k*D-Y;K[p]=J*b,K[d]=G*M,K[_]=R,l.push(K.x,K.y,K.z),K[p]=0,K[d]=0,K[_]=A>0?1:-1,c.push(K.x,K.y,K.z),h.push(k/L),h.push(1-Q/g),W+=1}}for(let Q=0;Q<g;Q++)for(let G=0;G<L;G++){const k=f+G+O*Q,J=f+G+O*(Q+1),ne=f+(G+1)+O*(Q+1),se=f+(G+1)+O*Q;u.push(k,J,se),u.push(J,ne,se),V+=6}o.addGroup(m,V,E),m+=V,f+=W}}static fromJSON(e){return new je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ii(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(s){const e={};for(let t=0;t<s.length;t++){const n=ii(s[t]);for(const i in n)e[i]=n[i]}return e}function kl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function io(s){return s.getRenderTarget()===null&&s.outputEncoding===He?kt:Si}const Vl={clone:ii,merge:mt};var Hl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=kl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ro extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends ro{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/u,t-=a.offsetY*n/l,i*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wn=-90,Xn=1;class Xl extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Rt(Wn,Xn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Rt(Wn,Xn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Rt(Wn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Rt(Wn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const u=new Rt(Wn,Xn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new Rt(Wn,Xn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,u,l]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Jt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class so extends Tt{constructor(e,t,n,i,r,a,o,u,l,c){e=e!==void 0?e:[],t=t!==void 0?t:ei,super(e,t,n,i,r,a,o,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new so(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new je(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:cn});r.uniforms.tEquirect.value=t;const a=new le(i,r),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=Dt),new Xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Or=new P,Yl=new P,jl=new Et;class xn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Or.subVectors(n,t).cross(Yl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jl.getNormalMatrix(e),i=this.coplanarPoint(Or).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new rr,Vi=new P;class ao{constructor(e=new xn,t=new xn,n=new xn,i=new xn,r=new xn,a=new xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],u=n[4],l=n[5],c=n[6],h=n[7],f=n[8],m=n[9],v=n[10],p=n[11],d=n[12],_=n[13],b=n[14],M=n[15];return t[0].setComponents(o-i,h-u,p-f,M-d).normalize(),t[1].setComponents(o+i,h+u,p+f,M+d).normalize(),t[2].setComponents(o+r,h+l,p+m,M+_).normalize(),t[3].setComponents(o-r,h-l,p-m,M-_).normalize(),t[4].setComponents(o-a,h-c,p-v,M-b).normalize(),t[5].setComponents(o+a,h+c,p+v,M+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vi.x=i.normal.x>0?e.max.x:e.min.x,Vi.y=i.normal.y>0?e.max.y:e.min.y,Vi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oo(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,c){const h=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(c,m),s.bufferData(c,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,h){const f=c.array,m=c.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(s.deleteBuffer(c.buffer),n.delete(l))}function u(l,c){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,c)):h.version<l.version&&(r(h.buffer,l,c),h.version=l.version)}return{get:a,remove:o,update:u}}class ar extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),u=Math.floor(i),l=o+1,c=u+1,h=e/o,f=t/u,m=[],v=[],p=[],d=[];for(let _=0;_<c;_++){const b=_*f-a;for(let M=0;M<l;M++){const y=M*h-r;v.push(y,-b,0),p.push(0,0,1),d.push(M/o),d.push(1-_/u)}}for(let _=0;_<u;_++)for(let b=0;b<o;b++){const M=b+l*_,y=b+l*(_+1),x=b+1+l*(_+1),A=b+1+l*_;m.push(M,y,A),m.push(y,x,A)}this.setIndex(m),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var $l=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ql=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ec=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nc="vec3 transformed = vec3( position );",ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ac=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_c=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ic=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Gc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Xc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ou=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,uu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Pu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Gu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ku=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,th=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ch=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_h=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Th=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:$l,alphamap_pars_fragment:Kl,alphatest_fragment:Ql,alphatest_pars_fragment:Jl,aomap_fragment:ec,aomap_pars_fragment:tc,begin_vertex:nc,beginnormal_vertex:ic,bsdfs:rc,iridescence_fragment:sc,bumpmap_pars_fragment:ac,clipping_planes_fragment:oc,clipping_planes_pars_fragment:lc,clipping_planes_pars_vertex:cc,clipping_planes_vertex:uc,color_fragment:hc,color_pars_fragment:dc,color_pars_vertex:fc,color_vertex:pc,common:mc,cube_uv_reflection_fragment:gc,defaultnormal_vertex:_c,displacementmap_pars_vertex:xc,displacementmap_vertex:vc,emissivemap_fragment:Mc,emissivemap_pars_fragment:yc,encodings_fragment:bc,encodings_pars_fragment:Sc,envmap_fragment:wc,envmap_common_pars_fragment:Ec,envmap_pars_fragment:Tc,envmap_pars_vertex:Ac,envmap_physical_pars_fragment:Bc,envmap_vertex:Cc,fog_vertex:Lc,fog_pars_vertex:Pc,fog_fragment:Dc,fog_pars_fragment:Rc,gradientmap_pars_fragment:Ic,lightmap_fragment:Fc,lightmap_pars_fragment:zc,lights_lambert_fragment:Nc,lights_lambert_pars_fragment:Uc,lights_pars_begin:Oc,lights_toon_fragment:Gc,lights_toon_pars_fragment:kc,lights_phong_fragment:Vc,lights_phong_pars_fragment:Hc,lights_physical_fragment:Wc,lights_physical_pars_fragment:Xc,lights_fragment_begin:qc,lights_fragment_maps:Yc,lights_fragment_end:jc,logdepthbuf_fragment:Zc,logdepthbuf_pars_fragment:$c,logdepthbuf_pars_vertex:Kc,logdepthbuf_vertex:Qc,map_fragment:Jc,map_pars_fragment:eu,map_particle_fragment:tu,map_particle_pars_fragment:nu,metalnessmap_fragment:iu,metalnessmap_pars_fragment:ru,morphcolor_vertex:su,morphnormal_vertex:au,morphtarget_pars_vertex:ou,morphtarget_vertex:lu,normal_fragment_begin:cu,normal_fragment_maps:uu,normal_pars_fragment:hu,normal_pars_vertex:du,normal_vertex:fu,normalmap_pars_fragment:pu,clearcoat_normal_fragment_begin:mu,clearcoat_normal_fragment_maps:gu,clearcoat_pars_fragment:_u,iridescence_pars_fragment:xu,output_fragment:vu,packing:Mu,premultiplied_alpha_fragment:yu,project_vertex:bu,dithering_fragment:Su,dithering_pars_fragment:wu,roughnessmap_fragment:Eu,roughnessmap_pars_fragment:Tu,shadowmap_pars_fragment:Au,shadowmap_pars_vertex:Cu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Pu,skinbase_vertex:Du,skinning_pars_vertex:Ru,skinning_vertex:Iu,skinnormal_vertex:Fu,specularmap_fragment:zu,specularmap_pars_fragment:Nu,tonemapping_fragment:Uu,tonemapping_pars_fragment:Ou,transmission_fragment:Bu,transmission_pars_fragment:Gu,uv_pars_fragment:ku,uv_pars_vertex:Vu,uv_vertex:Hu,uv2_pars_fragment:Wu,uv2_pars_vertex:Xu,uv2_vertex:qu,worldpos_vertex:Yu,background_vert:ju,background_frag:Zu,backgroundCube_vert:$u,backgroundCube_frag:Ku,cube_vert:Qu,cube_frag:Ju,depth_vert:eh,depth_frag:th,distanceRGBA_vert:nh,distanceRGBA_frag:ih,equirect_vert:rh,equirect_frag:sh,linedashed_vert:ah,linedashed_frag:oh,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:uh,meshlambert_frag:hh,meshmatcap_vert:dh,meshmatcap_frag:fh,meshnormal_vert:ph,meshnormal_frag:mh,meshphong_vert:gh,meshphong_frag:_h,meshphysical_vert:xh,meshphysical_frag:vh,meshtoon_vert:Mh,meshtoon_frag:yh,points_vert:bh,points_frag:Sh,shadow_vert:wh,shadow_frag:Eh,sprite_vert:Th,sprite_frag:Ah},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},Vt={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Vt.physical={uniforms:mt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Hi={r:0,b:0,g:0};function Ch(s,e,t,n,i,r,a){const o=new Fe(0);let u=r===!0?0:1,l,c,h=null,f=0,m=null;function v(d,_){let b=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M));const y=s.xr,x=y.getSession&&y.getSession();x&&x.environmentBlendMode==="additive"&&(M=null),M===null?p(o,u):M&&M.isColor&&(p(M,1),b=!0),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===nr)?(c===void 0&&(c=new le(new je(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ii(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==M||f!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new le(new ar(2,2),new Pn({name:"BackgroundMaterial",uniforms:ii(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,_){d.getRGB(Hi,io(s)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(d,_=1){o.set(d),u=_,p(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(d){u=d,p(o,u)},render:v}}function Lh(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},u=d(null);let l=u,c=!1;function h(R,O,$,W,V){let K=!1;if(a){const Q=p(W,$,O);l!==Q&&(l=Q,m(l.object)),K=_(R,W,$,V),K&&b(R,W,$,V)}else{const Q=O.wireframe===!0;(l.geometry!==W.id||l.program!==$.id||l.wireframe!==Q)&&(l.geometry=W.id,l.program=$.id,l.wireframe=Q,K=!0)}V!==null&&t.update(V,34963),(K||c)&&(c=!1,g(R,O,$,W),V!==null&&s.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function v(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,O,$){const W=$.wireframe===!0;let V=o[R.id];V===void 0&&(V={},o[R.id]=V);let K=V[O.id];K===void 0&&(K={},V[O.id]=K);let Q=K[W];return Q===void 0&&(Q=d(f()),K[W]=Q),Q}function d(R){const O=[],$=[],W=[];for(let V=0;V<i;V++)O[V]=0,$[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:W,object:R,attributes:{},index:null}}function _(R,O,$,W){const V=l.attributes,K=O.attributes;let Q=0;const G=$.getAttributes();for(const k in G)if(G[k].location>=0){const ne=V[k];let se=K[k];if(se===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;Q++}return l.attributesNum!==Q||l.index!==W}function b(R,O,$,W){const V={},K=O.attributes;let Q=0;const G=$.getAttributes();for(const k in G)if(G[k].location>=0){let ne=K[k];ne===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),V[k]=se,Q++}l.attributes=V,l.attributesNum=Q,l.index=W}function M(){const R=l.newAttributes;for(let O=0,$=R.length;O<$;O++)R[O]=0}function y(R){x(R,0)}function x(R,O){const $=l.newAttributes,W=l.enabledAttributes,V=l.attributeDivisors;$[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),V[R]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),V[R]=O)}function A(){const R=l.newAttributes,O=l.enabledAttributes;for(let $=0,W=O.length;$<W;$++)O[$]!==R[$]&&(s.disableVertexAttribArray($),O[$]=0)}function L(R,O,$,W,V,K){n.isWebGL2===!0&&($===5124||$===5125)?s.vertexAttribIPointer(R,O,$,V,K):s.vertexAttribPointer(R,O,$,W,V,K)}function g(R,O,$,W){if(n.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const V=W.attributes,K=$.getAttributes(),Q=O.defaultAttributeValues;for(const G in K){const k=K[G];if(k.location>=0){let J=V[G];if(J===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const ne=J.normalized,se=J.itemSize,j=t.get(J);if(j===void 0)continue;const Ae=j.buffer,fe=j.type,xe=j.bytesPerElement;if(J.isInterleavedBufferAttribute){const de=J.data,ze=de.stride,Se=J.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve,de.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve);s.bindBuffer(34962,Ae);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,se/k.locationSize,fe,ne,ze*xe,(Se+se/k.locationSize*ve)*xe)}else{if(J.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)x(k.location+de,J.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<k.locationSize;de++)y(k.location+de);s.bindBuffer(34962,Ae);for(let de=0;de<k.locationSize;de++)L(k.location+de,se/k.locationSize,fe,ne,se*xe,se/k.locationSize*de*xe)}}else if(Q!==void 0){const ne=Q[G];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(k.location,ne);break;case 3:s.vertexAttrib3fv(k.location,ne);break;case 4:s.vertexAttrib4fv(k.location,ne);break;default:s.vertexAttrib1fv(k.location,ne)}}}}A()}function E(){Y();for(const R in o){const O=o[R];for(const $ in O){const W=O[$];for(const V in W)v(W[V].object),delete W[V];delete O[$]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const O=o[R.id];for(const $ in O){const W=O[$];for(const V in W)v(W[V].object),delete W[V];delete O[$]}delete o[R.id]}function B(R){for(const O in o){const $=o[O];if($[R.id]===void 0)continue;const W=$[R.id];for(const V in W)v(W[V].object),delete W[V];delete $[R.id]}}function Y(){N(),c=!0,l!==u&&(l=u,m(l.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:y,disableUnusedAttributes:A}}function Ph(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,c){s.drawArrays(r,l,c),t.update(c,r,1)}function u(l,c,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,c,h),t.update(c,r,h)}this.setMode=a,this.render=o,this.renderInstances=u}function Dh(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const u=r(o);u!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const l=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),v=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),b=s.getParameter(36349),M=f>0,y=a||e.has("OES_texture_float"),x=M&&y,A=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:A}}function Rh(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new xn,o=new Et,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const v=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,v},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const v=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=s.get(h);if(!i||v===null||v.length===0||r&&!d)r?c(null):l();else{const b=r?0:n,M=b*4;let y=_.clippingState||null;u.value=y,y=c(v,f,M,m);for(let x=0;x!==M;++x)y[x]=t[x];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,v){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=u.value,v!==!0||d===null){const _=m+p*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,y=m;M!==p;++M,y+=4)a.copy(h[M]).applyMatrix4(b,o),a.normal.toArray(d,y),d[y+3]=a.constant}u.value=d,u.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Ih(s){let e=new WeakMap;function t(a,o){return o===Zr?a.mapping=ei:o===$r&&(a.mapping=ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Zr||o===$r)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const l=new ql(u.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fh extends ro{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,u=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zn=4,ia=[.125,.215,.35,.446,.526,.582],yn=20,Br=new Fh,ra=new Fe;let Gr=null;const vn=(1+Math.sqrt(5))/2,Yn=1/vn,sa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,vn,Yn),new P(0,vn,-Yn),new P(Yn,0,vn),new P(-Yn,0,vn),new P(vn,Yn,0),new P(-vn,Yn,0)];class aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=la(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr),e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:bi,format:Ot,encoding:Cn,depthBuffer:!1},i=oa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(r)),this._blurMaterial=Nh(r,e,t)}return i}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,i){const o=new Rt(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(ra),c.toneMapping=Jt,c.autoClear=!1;const m=new sr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new le(new je,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(ra),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,u[_],0),o.lookAt(l[_],0,0)):b===1?(o.up.set(0,0,u[_]),o.lookAt(0,l[_],0)):(o.up.set(0,u[_],0),o.lookAt(0,0,l[_]));const M=this._cubeSize;Wi(i,b*M,_>2?M:0,M,M),c.setRenderTarget(i),p&&c.render(v,o),c.render(e,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ei||e.mapping===ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=la());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const u=this._cubeSize;Wi(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=sa[(i-1)%sa.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new le(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*yn-1),p=r/v,d=isFinite(r)?1+Math.floor(c*p):yn;d>yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${yn}`);const _=[];let b=0;for(let L=0;L<yn;++L){const g=L/p,E=Math.exp(-g*g/2);_.push(E),L===0?b+=E:L<d&&(b+=2*E)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const y=this._sizeLods[i],x=3*y*(i>M-Zn?i-M+Zn:0),A=4*(this._cubeSize-y);Wi(t,x,A,3*y,2*y),u.setRenderTarget(t),u.render(h,Br)}}function zh(s){const e=[],t=[],n=[];let i=s;const r=s-Zn+1+ia.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let u=1/o;a>s-Zn?u=ia[a-s+Zn-1]:a===0&&(u=0),n.push(u);const l=1/(o-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,v=6,p=3,d=2,_=1,b=new Float32Array(p*v*m),M=new Float32Array(d*v*m),y=new Float32Array(_*v*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,g=A>2?0:-1,E=[L,g,0,L+2/3,g,0,L+2/3,g+1,0,L,g,0,L+2/3,g+1,0,L,g+1,0];b.set(E,p*v*A),M.set(f,d*v*A);const D=[A,A,A,A,A,A];y.set(D,_*v*A)}const x=new lt;x.setAttribute("position",new At(b,p)),x.setAttribute("uv",new At(M,d)),x.setAttribute("faceIndex",new At(y,_)),e.push(x),i>Zn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oa(s,e,t){const n=new Ln(s,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nh(s,e,t){const n=new Float32Array(yn),i=new P(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function la(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ca(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ls(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uh(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,l=u===Zr||u===$r,c=u===ei||u===ti;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new aa(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new aa(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let u=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&u++;return u===l}function r(o){const u=o.target;u.removeEventListener("dispose",r);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Oh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bh(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function u(h){const f=h.attributes;for(const v in f)e.update(f[v],34962);const m=h.morphAttributes;for(const v in m){const p=m[v];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function l(h){const f=[],m=h.index,v=h.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let M=0,y=b.length;M<y;M+=3){const x=b[M+0],A=b[M+1],L=b[M+2];f.push(x,A,A,L,L,x)}}else{const b=v.array;p=v.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const x=M+0,A=M+1,L=M+2;f.push(x,A,A,L,L,x)}}const d=new($a(f)?no:to)(f,1);d.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function c(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:u,getWireframeAttribute:c}}function Gh(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,u;function l(f){o=f.type,u=f.bytesPerElement}function c(f,m){s.drawElements(r,m,o,f*u),t.update(m,r,1)}function h(f,m,v){if(v===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,o,f*u,v),t.update(m,r,v)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=h}function kh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vh(s,e){return s[0]-e[0]}function Hh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Wh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ot,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function u(l,c,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(c);if(_===void 0||_.count!==d){let $=function(){R.dispose(),r.delete(c),c.removeEventListener("dispose",$)};var v=$;_!==void 0&&_.texture.dispose();const y=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let D=0;y===!0&&(D=1),x===!0&&(D=2),A===!0&&(D=3);let B=c.attributes.position.count*D,Y=1;B>e.maxTextureSize&&(Y=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const N=new Float32Array(B*Y*4*d),R=new eo(N,B,Y,d);R.type=wn,R.needsUpdate=!0;const O=D*4;for(let W=0;W<d;W++){const V=L[W],K=g[W],Q=E[W],G=B*Y*4*W;for(let k=0;k<V.count;k++){const J=k*O;y===!0&&(a.fromBufferAttribute(V,k),N[G+J+0]=a.x,N[G+J+1]=a.y,N[G+J+2]=a.z,N[G+J+3]=0),x===!0&&(a.fromBufferAttribute(K,k),N[G+J+4]=a.x,N[G+J+5]=a.y,N[G+J+6]=a.z,N[G+J+7]=0),A===!0&&(a.fromBufferAttribute(Q,k),N[G+J+8]=a.x,N[G+J+9]=a.y,N[G+J+10]=a.z,N[G+J+11]=Q.itemSize===4?a.w:1)}}_={count:d,texture:R,size:new be(B,Y)},r.set(c,_),c.addEventListener("dispose",$)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const M=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let x=0;x<p;x++)d[x]=[x,0];n[c.id]=d}for(let x=0;x<p;x++){const A=d[x];A[0]=x,A[1]=m[x]}d.sort(Hh);for(let x=0;x<8;x++)x<p&&d[x][1]?(o[x][0]=d[x][0],o[x][1]=d[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Vh);const _=c.morphAttributes.position,b=c.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const A=o[x],L=A[0],g=A[1];L!==Number.MAX_SAFE_INTEGER&&g?(_&&c.getAttribute("morphTarget"+x)!==_[L]&&c.setAttribute("morphTarget"+x,_[L]),b&&c.getAttribute("morphNormal"+x)!==b[L]&&c.setAttribute("morphNormal"+x,b[L]),i[x]=g,M+=g):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),b&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const y=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:u}}function Xh(s,e,t,n){let i=new WeakMap;function r(u){const l=n.render.frame,c=u.geometry,h=e.get(u,c);return i.get(h)!==l&&(e.update(h),i.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function a(){i=new WeakMap}function o(u){const l=u.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const lo=new Tt,co=new eo,uo=new Pl,ho=new so,ua=[],ha=[],da=new Float32Array(16),fa=new Float32Array(9),pa=new Float32Array(4);function oi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ua[i];if(r===void 0&&(r=new Float32Array(i),ua[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function or(s,e){let t=ha[e];t===void 0&&(t=new Int32Array(e),ha[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;s.uniform2fv(this.addr,e),tt(t,e)}}function jh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;s.uniform3fv(this.addr,e),tt(t,e)}}function Zh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;s.uniform4fv(this.addr,e),tt(t,e)}}function $h(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;pa.set(n),s.uniformMatrix2fv(this.addr,!1,pa),tt(t,n)}}function Kh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;fa.set(n),s.uniformMatrix3fv(this.addr,!1,fa),tt(t,n)}}function Qh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;da.set(n),s.uniformMatrix4fv(this.addr,!1,da),tt(t,n)}}function Jh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ed(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;s.uniform2iv(this.addr,e),tt(t,e)}}function td(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;s.uniform3iv(this.addr,e),tt(t,e)}}function nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;s.uniform4iv(this.addr,e),tt(t,e)}}function id(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;s.uniform2uiv(this.addr,e),tt(t,e)}}function sd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;s.uniform3uiv(this.addr,e),tt(t,e)}}function ad(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;s.uniform4uiv(this.addr,e),tt(t,e)}}function od(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||lo,i)}function ld(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uo,i)}function cd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ho,i)}function ud(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||co,i)}function hd(s){switch(s){case 5126:return qh;case 35664:return Yh;case 35665:return jh;case 35666:return Zh;case 35674:return $h;case 35675:return Kh;case 35676:return Qh;case 5124:case 35670:return Jh;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return nd;case 5125:return id;case 36294:return rd;case 36295:return sd;case 36296:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ud}}function dd(s,e){s.uniform1fv(this.addr,e)}function fd(s,e){const t=oi(e,this.size,2);s.uniform2fv(this.addr,t)}function pd(s,e){const t=oi(e,this.size,3);s.uniform3fv(this.addr,t)}function md(s,e){const t=oi(e,this.size,4);s.uniform4fv(this.addr,t)}function gd(s,e){const t=oi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _d(s,e){const t=oi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xd(s,e){const t=oi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vd(s,e){s.uniform1iv(this.addr,e)}function Md(s,e){s.uniform2iv(this.addr,e)}function yd(s,e){s.uniform3iv(this.addr,e)}function bd(s,e){s.uniform4iv(this.addr,e)}function Sd(s,e){s.uniform1uiv(this.addr,e)}function wd(s,e){s.uniform2uiv(this.addr,e)}function Ed(s,e){s.uniform3uiv(this.addr,e)}function Td(s,e){s.uniform4uiv(this.addr,e)}function Ad(s,e,t){const n=this.cache,i=e.length,r=or(t,i);et(n,r)||(s.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lo,r[a])}function Cd(s,e,t){const n=this.cache,i=e.length,r=or(t,i);et(n,r)||(s.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||uo,r[a])}function Ld(s,e,t){const n=this.cache,i=e.length,r=or(t,i);et(n,r)||(s.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ho,r[a])}function Pd(s,e,t){const n=this.cache,i=e.length,r=or(t,i);et(n,r)||(s.uniform1iv(this.addr,r),tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||co,r[a])}function Dd(s){switch(s){case 5126:return dd;case 35664:return fd;case 35665:return pd;case 35666:return md;case 35674:return gd;case 35675:return _d;case 35676:return xd;case 5124:case 35670:return vd;case 35667:case 35671:return Md;case 35668:case 35672:return yd;case 35669:case 35673:return bd;case 5125:return Sd;case 36294:return wd;case 36295:return Ed;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return Ad;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Pd}}class Rd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hd(t.type)}}class Id{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Dd(t.type)}}class Fd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function ma(s,e){s.seq.push(e),s.map[e.id]=e}function zd(s,e,t){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),a=kr.lastIndex;let o=r[1];const u=r[2]==="]",l=r[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===i){ma(t,l===void 0?new Rd(o,s,e):new Id(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Fd(o),ma(t,h)),t=h}}}class Ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);zd(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ga(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Nd=0;function Ud(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Od(s){switch(s){case Cn:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function _a(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ud(s.getShaderSource(e),a)}else return i}function Bd(s,e){const t=Od(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gd(s,e){let t;switch(e){case Ho:t="Linear";break;case Wo:t="Reinhard";break;case Xo:t="OptimizedCineon";break;case qo:t="ACESFilmic";break;case Yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_i).join(`
`)}function Vd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hd(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function _i(s){return s!==""}function xa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function va(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ts(s){return s.replace(Wd,Xd)}function Xd(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ts(t)}const qd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ma(s){return s.replace(qd,Yd)}function Yd(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ya(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $d(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Kd(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rs:e="ENVMAP_BLENDING_MULTIPLY";break;case ko:e="ENVMAP_BLENDING_MIX";break;case Vo:e="ENVMAP_BLENDING_ADD";break}return e}function Qd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jd(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=jd(t),l=Zd(t),c=$d(t),h=Kd(t),f=Qd(t),m=t.isWebGL2?"":kd(t),v=Vd(r),p=i.createProgram();let d,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(_i).join(`
`),d.length>0&&(d+=`
`),_=[m,v].filter(_i).join(`
`),_.length>0&&(_+=`
`)):(d=[ya(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),_=[m,ya(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?we.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,Bd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_i).join(`
`)),a=ts(a),a=xa(a,t),a=va(a,t),o=ts(o),o=xa(o,t),o=va(o,t),a=Ma(a),o=Ma(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=b+d+a,y=b+_+o,x=ga(i,35633,M),A=ga(i,35632,y);if(i.attachShader(p,x),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(x).trim(),B=i.getShaderInfoLog(A).trim();let Y=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const R=_a(i,x,"vertex"),O=_a(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+R+`
`+O)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:Y,programLog:E,vertexShader:{log:D,prefix:d},fragmentShader:{log:B,prefix:_}})}i.deleteShader(x),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Ki(i,p)),L};let g;return this.getAttributes=function(){return g===void 0&&(g=Hd(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Nd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=A,this}let ef=0;class tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nf(e),t.set(e,n)),n}}class nf{constructor(e){this.id=ef++,this.code=e,this.usedTimes=0}}function rf(s,e,t,n,i,r,a){const o=new os,u=new tf,l=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,E,D,B,Y){const N=B.fog,R=Y.geometry,O=g.isMeshStandardMaterial?B.environment:null,$=(g.isMeshStandardMaterial?t:e).get(g.envMap||O),W=$&&$.mapping===nr?$.image.height:null,V=v[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Q=K!==void 0?K.length:0;let G=0;R.morphAttributes.position!==void 0&&(G=1),R.morphAttributes.normal!==void 0&&(G=2),R.morphAttributes.color!==void 0&&(G=3);let k,J,ne,se;if(V){const ze=Vt[V];k=ze.vertexShader,J=ze.fragmentShader}else k=g.vertexShader,J=g.fragmentShader,u.update(g),ne=u.getVertexShaderID(g),se=u.getFragmentShaderID(g);const j=s.getRenderTarget(),Ae=g.alphaTest>0,fe=g.clearcoat>0,xe=g.iridescence>0;return{isWebGL2:c,shaderID:V,shaderName:g.type,vertexShader:k,fragmentShader:J,defines:g.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?s.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Cn,map:!!g.map,matcap:!!g.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:W,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===dl,tangentSpaceNormalMap:g.normalMapType===Za,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===He,clearcoat:fe,clearcoatMap:fe&&!!g.clearcoatMap,clearcoatRoughnessMap:fe&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!g.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!g.iridescenceMap,iridescenceThicknessMap:xe&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Kn,alphaMap:!!g.alphaMap,alphaTest:Ae,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!R.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!N,useFog:g.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:G,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:Jt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bt,flipSided:g.side===It,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)E.push(D),E.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(_(E,g),b(E,g),E.push(s.outputEncoding)),E.push(g.customProgramCacheKey),E.join()}function _(g,E){g.push(E.precision),g.push(E.outputEncoding),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.combine),g.push(E.vertexUvs),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function b(g,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),g.push(o.mask)}function M(g){const E=v[g.type];let D;if(E){const B=Vt[E];D=Vl.clone(B.uniforms)}else D=g.uniforms;return D}function y(g,E){let D;for(let B=0,Y=l.length;B<Y;B++){const N=l[B];if(N.cacheKey===E){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Jd(s,E,g,r),l.push(D)),D}function x(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),g.destroy()}}function A(g){u.remove(g)}function L(){u.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:x,releaseShaderCache:A,programs:l,dispose:L}}function sf(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function af(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ba(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,v,p,d){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:p,group:d},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=p,_.group=d),e++,_}function o(h,f,m,v,p,d){const _=a(h,f,m,v,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function u(h,f,m,v,p,d){const _=a(h,f,m,v,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||af),n.length>1&&n.sort(f||ba),i.length>1&&i.sort(f||ba)}function c(){for(let h=e,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:u,finish:c,sort:l}}function of(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sa,s.set(n,[a])):i>=r.length?(a=new Sa,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function cf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let uf=0;function hf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function df(s,e){const t=new lf,n=cf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new Ze,o=new Ze;function u(c,h){let f=0,m=0,v=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,d=0,_=0,b=0,M=0,y=0,x=0,A=0,L=0,g=0;c.sort(hf);const E=h!==!0?Math.PI:1;for(let B=0,Y=c.length;B<Y;B++){const N=c[B],R=N.color,O=N.intensity,$=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=R.r*O*E,m+=R.g*O*E,v+=R.b*O*E;else if(N.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],O);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const K=N.shadow,Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=N.shadow.matrix,y++}i.directional[p]=V,p++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(R).multiplyScalar(O*E),V.distance=$,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[_]=V;const K=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,K.updateMatrices(N),N.castShadow&&g++),i.spotLightMatrix[_]=K.matrix,N.castShadow){const Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=W,A++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(R).multiplyScalar(O),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=V,b++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*E),V.distance=N.distance,V.decay=N.decay,N.castShadow){const K=N.shadow,Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[d]=Q,i.pointShadowMap[d]=W,i.pointShadowMatrix[d]=N.shadow.matrix,x++}i.point[d]=V,d++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(O*E),V.groundColor.copy(N.groundColor).multiplyScalar(O*E),i.hemi[M]=V,M++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=v;const D=i.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==M||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==A||D.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+L-g,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=g,D.directionalLength=p,D.pointLength=d,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=M,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=A,D.numSpotMaps=L,i.version=uf++)}function l(c,h){let f=0,m=0,v=0,p=0,d=0;const _=h.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){const y=c[b];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(y.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),v++}else if(y.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const x=i.hemi[d];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(_),d++}}}return{setup:u,setupView:l,state:i}}function wa(s,e){const t=new df(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function u(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:l,pushLight:a,pushShadow:o}}function ff(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let u;return o===void 0?(u=new wa(s,e),t.set(r,[u])):a>=o.length?(u=new wa(s,e),o.push(u)):u=o[a],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class pf extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mf extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_f=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xf(s,e,t){let n=new ao;const i=new be,r=new be,a=new ot,o=new pf({depthPacking:hl}),u=new mf,l={},c=t.maxTextureSize,h={0:It,1:Jn,2:Bt},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:gf,fragmentShader:_f}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new lt;v.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new le(v,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa,this.render=function(y,x,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const L=s.getRenderTarget(),g=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),D=s.state;D.setBlending(cn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let B=0,Y=y.length;B<Y;B++){const N=y[B],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const O=R.getFrameExtents();if(i.multiply(O),r.copy(R.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/O.x),i.x=r.x*O.x,R.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/O.y),i.y=r.y*O.y,R.mapSize.y=r.y)),R.map===null){const W=this.type!==mi?{minFilter:Mt,magFilter:Mt}:{};R.map=new Ln(i.x,i.y,W),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const $=R.getViewportCount();for(let W=0;W<$;W++){const V=R.getViewport(W);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(a),R.updateMatrices(N,W),n=R.getFrustum(),M(x,A,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===mi&&_(R,A),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(L,g,E)};function _(y,x){const A=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ln(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(x,null,A,f,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(x,null,A,m,p,null)}function b(y,x,A,L,g,E){let D=null;const B=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(B!==void 0?D=B:D=A.isPointLight===!0?u:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const Y=D.uuid,N=x.uuid;let R=l[Y];R===void 0&&(R={},l[Y]=R);let O=R[N];O===void 0&&(O=D.clone(),R[N]=O),D=O}return D.visible=x.visible,D.wireframe=x.wireframe,E===mi?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:h[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.map=x.map,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=g),D}function M(y,x,A,L,g){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===mi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const B=e.update(y),Y=y.material;if(Array.isArray(Y)){const N=B.groups;for(let R=0,O=N.length;R<O;R++){const $=N[R],W=Y[$.materialIndex];if(W&&W.visible){const V=b(y,W,L,A.near,A.far,g);s.renderBufferDirect(A,null,B,V,y,$)}}}else if(Y.visible){const N=b(y,Y,L,A.near,A.far,g);s.renderBufferDirect(A,null,B,N,y,null)}}const D=y.children;for(let B=0,Y=D.length;B<Y;B++)M(D[B],x,A,L,g)}}function vf(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const q=new ot;let ee=null;const ue=new ot(0,0,0,0);return{setMask:function(ge){ee!==ge&&!I&&(s.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){I=ge},setClear:function(ge,Ne,it,ct,un){un===!0&&(ge*=ct,Ne*=ct,it*=ct),q.set(ge,Ne,it,ct),ue.equals(q)===!1&&(s.clearColor(ge,Ne,it,ct),ue.copy(q))},reset:function(){I=!1,ee=null,ue.set(-1,0,0,0)}}}function r(){let I=!1,q=null,ee=null,ue=null;return{setTest:function(ge){ge?Ae(2929):fe(2929)},setMask:function(ge){q!==ge&&!I&&(s.depthMask(ge),q=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case Fo:s.depthFunc(512);break;case zo:s.depthFunc(519);break;case No:s.depthFunc(513);break;case jr:s.depthFunc(515);break;case Uo:s.depthFunc(514);break;case Oo:s.depthFunc(518);break;case Bo:s.depthFunc(516);break;case Go:s.depthFunc(517);break;default:s.depthFunc(515)}ee=ge}},setLocked:function(ge){I=ge},setClear:function(ge){ue!==ge&&(s.clearDepth(ge),ue=ge)},reset:function(){I=!1,q=null,ee=null,ue=null}}}function a(){let I=!1,q=null,ee=null,ue=null,ge=null,Ne=null,it=null,ct=null,un=null;return{setTest:function(ke){I||(ke?Ae(2960):fe(2960))},setMask:function(ke){q!==ke&&!I&&(s.stencilMask(ke),q=ke)},setFunc:function(ke,Ht,Lt){(ee!==ke||ue!==Ht||ge!==Lt)&&(s.stencilFunc(ke,Ht,Lt),ee=ke,ue=Ht,ge=Lt)},setOp:function(ke,Ht,Lt){(Ne!==ke||it!==Ht||ct!==Lt)&&(s.stencilOp(ke,Ht,Lt),Ne=ke,it=Ht,ct=Lt)},setLocked:function(ke){I=ke},setClear:function(ke){un!==ke&&(s.clearStencil(ke),un=ke)},reset:function(){I=!1,q=null,ee=null,ue=null,ge=null,Ne=null,it=null,ct=null,un=null}}}const o=new i,u=new r,l=new a,c=new WeakMap,h=new WeakMap;let f={},m={},v=new WeakMap,p=[],d=null,_=!1,b=null,M=null,y=null,x=null,A=null,L=null,g=null,E=!1,D=null,B=null,Y=null,N=null,R=null;const O=s.getParameter(35661);let $=!1,W=0;const V=s.getParameter(7938);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=W>=2);let K=null,Q={};const G=s.getParameter(3088),k=s.getParameter(2978),J=new ot().fromArray(G),ne=new ot().fromArray(k);function se(I,q,ee){const ue=new Uint8Array(4),ge=s.createTexture();s.bindTexture(I,ge),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Ne=0;Ne<ee;Ne++)s.texImage2D(q+Ne,0,6408,1,1,0,6408,5121,ue);return ge}const j={};j[3553]=se(3553,3553,1),j[34067]=se(34067,34069,6),o.setClear(0,0,0,1),u.setClear(1),l.setClear(0),Ae(2929),u.setFunc(jr),Ke(!1),dt(ms),Ae(2884),nt(cn);function Ae(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function fe(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function xe(I,q){return m[I]!==q?(s.bindFramebuffer(I,q),m[I]=q,n&&(I===36009&&(m[36160]=q),I===36160&&(m[36009]=q)),!0):!1}function de(I,q){let ee=p,ue=!1;if(I)if(ee=v.get(q),ee===void 0&&(ee=[],v.set(q,ee)),I.isWebGLMultipleRenderTargets){const ge=I.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ne=0,it=ge.length;Ne<it;Ne++)ee[Ne]=36064+Ne;ee.length=ge.length,ue=!0}}else ee[0]!==36064&&(ee[0]=36064,ue=!0);else ee[0]!==1029&&(ee[0]=1029,ue=!0);ue&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ze(I){return d!==I?(s.useProgram(I),d=I,!0):!1}const Se={[jn]:32774,[So]:32778,[wo]:32779};if(n)Se[vs]=32775,Se[Ms]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Se[vs]=I.MIN_EXT,Se[Ms]=I.MAX_EXT)}const ve={[Eo]:0,[To]:1,[Ao]:768,[Xa]:770,[Io]:776,[Do]:774,[Lo]:772,[Co]:769,[qa]:771,[Ro]:775,[Po]:773};function nt(I,q,ee,ue,ge,Ne,it,ct){if(I===cn){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),I!==bo){if(I!==b||ct!==E){if((M!==jn||A!==jn)&&(s.blendEquation(32774),M=jn,A=jn),ct)switch(I){case Kn:s.blendFuncSeparate(1,771,1,771);break;case gs:s.blendFunc(1,1);break;case _s:s.blendFuncSeparate(0,769,0,1);break;case xs:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Kn:s.blendFuncSeparate(770,771,1,771);break;case gs:s.blendFunc(770,1);break;case _s:s.blendFuncSeparate(0,769,0,1);break;case xs:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,L=null,g=null,b=I,E=ct}return}ge=ge||q,Ne=Ne||ee,it=it||ue,(q!==M||ge!==A)&&(s.blendEquationSeparate(Se[q],Se[ge]),M=q,A=ge),(ee!==y||ue!==x||Ne!==L||it!==g)&&(s.blendFuncSeparate(ve[ee],ve[ue],ve[Ne],ve[it]),y=ee,x=ue,L=Ne,g=it),b=I,E=!1}function $e(I,q){I.side===Bt?fe(2884):Ae(2884);let ee=I.side===It;q&&(ee=!ee),Ke(ee),I.blending===Kn&&I.transparent===!1?nt(cn):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),u.setFunc(I.depthFunc),u.setTest(I.depthTest),u.setMask(I.depthWrite),o.setMask(I.colorWrite);const ue=I.stencilWrite;l.setTest(ue),ue&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ae(32926):fe(32926)}function Ke(I){D!==I&&(I?s.frontFace(2304):s.frontFace(2305),D=I)}function dt(I){I!==vo?(Ae(2884),I!==B&&(I===ms?s.cullFace(1029):I===Mo?s.cullFace(1028):s.cullFace(1032))):fe(2884),B=I}function We(I){I!==Y&&($&&s.lineWidth(I),Y=I)}function Ue(I,q,ee){I?(Ae(32823),(N!==q||R!==ee)&&(s.polygonOffset(q,ee),N=q,R=ee)):fe(32823)}function Ct(I){I?Ae(3089):fe(3089)}function _t(I){I===void 0&&(I=33984+O-1),K!==I&&(s.activeTexture(I),K=I)}function T(I,q,ee){ee===void 0&&(K===null?ee=33984+O-1:ee=K);let ue=Q[ee];ue===void 0&&(ue={type:void 0,texture:void 0},Q[ee]=ue),(ue.type!==I||ue.texture!==q)&&(K!==ee&&(s.activeTexture(ee),K=ee),s.bindTexture(I,q||j[I]),ue.type=I,ue.texture=q)}function S(){const I=Q[K];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){J.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function pe(I){ne.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function Ce(I,q){let ee=h.get(q);ee===void 0&&(ee=new WeakMap,h.set(q,ee));let ue=ee.get(I);ue===void 0&&(ue=s.getUniformBlockIndex(q,I.name),ee.set(I,ue))}function Le(I,q){const ue=h.get(q).get(I);c.get(I)!==ue&&(s.uniformBlockBinding(q,ue,I.__bindingPointIndex),c.set(I,ue))}function Oe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},K=null,Q={},m={},v=new WeakMap,p=[],d=null,_=!1,b=null,M=null,y=null,x=null,A=null,L=null,g=null,E=!1,D=null,B=null,Y=null,N=null,R=null,J.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),o.reset(),u.reset(),l.reset()}return{buffers:{color:o,depth:u,stencil:l},enable:Ae,disable:fe,bindFramebuffer:xe,drawBuffers:de,useProgram:ze,setBlending:nt,setMaterial:$e,setFlipSided:Ke,setCullFace:dt,setLineWidth:We,setPolygonOffset:Ue,setScissorTest:Ct,activeTexture:_t,bindTexture:T,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:he,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:F,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:C,scissor:me,viewport:pe,reset:Oe}}function Mf(s,e,t,n,i,r,a){const o=i.isWebGL2,u=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,S){return _?new OffscreenCanvas(T,S):tr("canvas")}function M(T,S,H,te){let ie=1;if((T.width>te||T.height>te)&&(ie=te/Math.max(T.width,T.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=S?er:Math.floor,Me=ae(ie*T.width),C=ae(ie*T.height);p===void 0&&(p=b(Me,C));const F=H?b(Me,C):p;return F.width=Me,F.height=C,F.getContext("2d").drawImage(T,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+C+")."),F}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return es(T.width)&&es(T.height)}function x(T){return o?!1:T.wrapS!==Ut||T.wrapT!==Ut||T.minFilter!==Mt&&T.minFilter!==Dt}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==Mt&&T.minFilter!==Dt}function L(T){s.generateMipmap(T)}function g(T,S,H,te,ie=!1){if(o===!1)return S;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=S;return S===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),S===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),S===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=te===He&&ie===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function E(T,S,H){return A(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Mt&&T.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function D(T){return T===Mt||T===ys||T===bs?9728:9729}function B(T){const S=T.target;S.removeEventListener("dispose",B),N(S),S.isVideoTexture&&v.delete(S)}function Y(T){const S=T.target;S.removeEventListener("dispose",Y),O(S)}function N(T){const S=n.get(T);if(S.__webglInit===void 0)return;const H=T.source,te=d.get(H);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(T),Object.keys(te).length===0&&d.delete(H)}n.remove(T)}function R(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const H=T.source,te=d.get(H);delete te[S.__cacheKey],a.memory.textures--}function O(T){const S=T.texture,H=n.get(T),te=n.get(S);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ae=S.length;ie<ae;ie++){const Me=n.get(S[ie]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(T)}let $=0;function W(){$=0}function V(){const T=$;return T>=u&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+u),$+=1,T}function K(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function Q(T,S){const H=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,T,S);return}}t.bindTexture(3553,H.__webglTexture,33984+S)}function G(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){fe(H,T,S);return}t.bindTexture(35866,H.__webglTexture,33984+S)}function k(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){fe(H,T,S);return}t.bindTexture(32879,H.__webglTexture,33984+S)}function J(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,S);return}t.bindTexture(34067,H.__webglTexture,33984+S)}const ne={[Kr]:10497,[Ut]:33071,[Qr]:33648},se={[Mt]:9728,[ys]:9984,[bs]:9986,[Dt]:9729,[jo]:9985,[ir]:9987};function j(T,S,H){if(H?(s.texParameteri(T,10242,ne[S.wrapS]),s.texParameteri(T,10243,ne[S.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,ne[S.wrapR]),s.texParameteri(T,10240,se[S.magFilter]),s.texParameteri(T,10241,se[S.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(S.wrapS!==Ut||S.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,D(S.magFilter)),s.texParameteri(T,10241,D(S.minFilter)),S.minFilter!==Mt&&S.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.type===wn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",B));const te=S.source;let ie=d.get(te);ie===void 0&&(ie={},d.set(te,ie));const ae=K(S);if(ae!==T.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[ae].usedTimes++;const Me=ie[T.__cacheKey];Me!==void 0&&(ie[T.__cacheKey].usedTimes--,Me.usedTimes===0&&R(S)),T.__cacheKey=ae,T.__webglTexture=ie[ae].texture}return H}function fe(T,S,H){let te=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=35866),S.isData3DTexture&&(te=32879);const ie=Ae(T,S),ae=S.source;t.bindTexture(te,T.__webglTexture,33984+H);const Me=n.get(ae);if(ae.version!==Me.__version||ie===!0){t.activeTexture(33984+H),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const C=x(S)&&y(S.image)===!1;let F=M(S.image,C,!1,c);F=_t(S,F);const ce=y(F)||o,he=r.convert(S.format,S.encoding);let oe=r.convert(S.type),me=g(S.internalFormat,he,oe,S.encoding,S.isVideoTexture);j(te,S,ce);let pe;const Ce=S.mipmaps,Le=o&&S.isVideoTexture!==!0,Oe=Me.__version===void 0||ie===!0,I=E(S,F,ce);if(S.isDepthTexture)me=6402,o?S.type===wn?me=36012:S.type===Sn?me=33190:S.type===Qn?me=35056:me=33189:S.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===En&&me===6402&&S.type!==ja&&S.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Sn,oe=r.convert(S.type)),S.format===ni&&me===6402&&(me=34041,S.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Qn,oe=r.convert(S.type))),Oe&&(Le?t.texStorage2D(3553,1,me,F.width,F.height):t.texImage2D(3553,0,me,F.width,F.height,0,he,oe,null));else if(S.isDataTexture)if(Ce.length>0&&ce){Le&&Oe&&t.texStorage2D(3553,I,me,Ce[0].width,Ce[0].height);for(let q=0,ee=Ce.length;q<ee;q++)pe=Ce[q],Le?t.texSubImage2D(3553,q,0,0,pe.width,pe.height,he,oe,pe.data):t.texImage2D(3553,q,me,pe.width,pe.height,0,he,oe,pe.data);S.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(3553,I,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,oe,F.data)):t.texImage2D(3553,0,me,F.width,F.height,0,he,oe,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(35866,I,me,Ce[0].width,Ce[0].height,F.depth);for(let q=0,ee=Ce.length;q<ee;q++)pe=Ce[q],S.format!==Ot?he!==null?Le?t.compressedTexSubImage3D(35866,q,0,0,0,pe.width,pe.height,F.depth,he,pe.data,0,0):t.compressedTexImage3D(35866,q,me,pe.width,pe.height,F.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,q,0,0,0,pe.width,pe.height,F.depth,he,oe,pe.data):t.texImage3D(35866,q,me,pe.width,pe.height,F.depth,0,he,oe,pe.data)}else{Le&&Oe&&t.texStorage2D(3553,I,me,Ce[0].width,Ce[0].height);for(let q=0,ee=Ce.length;q<ee;q++)pe=Ce[q],S.format!==Ot?he!==null?Le?t.compressedTexSubImage2D(3553,q,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(3553,q,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,q,0,0,pe.width,pe.height,he,oe,pe.data):t.texImage2D(3553,q,me,pe.width,pe.height,0,he,oe,pe.data)}else if(S.isDataArrayTexture)Le?(Oe&&t.texStorage3D(35866,I,me,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,oe,F.data)):t.texImage3D(35866,0,me,F.width,F.height,F.depth,0,he,oe,F.data);else if(S.isData3DTexture)Le?(Oe&&t.texStorage3D(32879,I,me,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,oe,F.data)):t.texImage3D(32879,0,me,F.width,F.height,F.depth,0,he,oe,F.data);else if(S.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(3553,I,me,F.width,F.height);else{let q=F.width,ee=F.height;for(let ue=0;ue<I;ue++)t.texImage2D(3553,ue,me,q,ee,0,he,oe,null),q>>=1,ee>>=1}}else if(Ce.length>0&&ce){Le&&Oe&&t.texStorage2D(3553,I,me,Ce[0].width,Ce[0].height);for(let q=0,ee=Ce.length;q<ee;q++)pe=Ce[q],Le?t.texSubImage2D(3553,q,0,0,he,oe,pe):t.texImage2D(3553,q,me,he,oe,pe);S.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(3553,I,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,oe,F)):t.texImage2D(3553,0,me,he,oe,F);A(S,ce)&&L(te),Me.__version=ae.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function xe(T,S,H){if(S.image.length!==6)return;const te=Ae(T,S),ie=S.source;t.bindTexture(34067,T.__webglTexture,33984+H);const ae=n.get(ie);if(ie.version!==ae.__version||te===!0){t.activeTexture(33984+H),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,F=[];for(let q=0;q<6;q++)!Me&&!C?F[q]=M(S.image[q],!1,!0,l):F[q]=C?S.image[q].image:S.image[q],F[q]=_t(S,F[q]);const ce=F[0],he=y(ce)||o,oe=r.convert(S.format,S.encoding),me=r.convert(S.type),pe=g(S.internalFormat,oe,me,S.encoding),Ce=o&&S.isVideoTexture!==!0,Le=ae.__version===void 0||te===!0;let Oe=E(S,ce,he);j(34067,S,he);let I;if(Me){Ce&&Le&&t.texStorage2D(34067,Oe,pe,ce.width,ce.height);for(let q=0;q<6;q++){I=F[q].mipmaps;for(let ee=0;ee<I.length;ee++){const ue=I[ee];S.format!==Ot?oe!==null?Ce?t.compressedTexSubImage2D(34069+q,ee,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(34069+q,ee,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+q,ee,0,0,ue.width,ue.height,oe,me,ue.data):t.texImage2D(34069+q,ee,pe,ue.width,ue.height,0,oe,me,ue.data)}}}else{I=S.mipmaps,Ce&&Le&&(I.length>0&&Oe++,t.texStorage2D(34067,Oe,pe,F[0].width,F[0].height));for(let q=0;q<6;q++)if(C){Ce?t.texSubImage2D(34069+q,0,0,0,F[q].width,F[q].height,oe,me,F[q].data):t.texImage2D(34069+q,0,pe,F[q].width,F[q].height,0,oe,me,F[q].data);for(let ee=0;ee<I.length;ee++){const ge=I[ee].image[q].image;Ce?t.texSubImage2D(34069+q,ee+1,0,0,ge.width,ge.height,oe,me,ge.data):t.texImage2D(34069+q,ee+1,pe,ge.width,ge.height,0,oe,me,ge.data)}}else{Ce?t.texSubImage2D(34069+q,0,0,0,oe,me,F[q]):t.texImage2D(34069+q,0,pe,oe,me,F[q]);for(let ee=0;ee<I.length;ee++){const ue=I[ee];Ce?t.texSubImage2D(34069+q,ee+1,0,0,oe,me,ue.image[q]):t.texImage2D(34069+q,ee+1,pe,oe,me,ue.image[q])}}}A(S,he)&&L(34067),ae.__version=ie.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function de(T,S,H,te,ie){const ae=r.convert(H.format,H.encoding),Me=r.convert(H.type),C=g(H.internalFormat,ae,Me,H.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,C,S.width,S.height,S.depth,0,ae,Me,null):t.texImage2D(ie,0,C,S.width,S.height,0,ae,Me,null)),t.bindFramebuffer(36160,T),Ue(S)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(H).__webglTexture,0,We(S)):(ie===3553||ie>=34069&&ie<=34074)&&s.framebufferTexture2D(36160,te,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(T,S,H){if(s.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(H||Ue(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===wn?te=36012:ie.type===Sn&&(te=33190));const ae=We(S);Ue(S)?f.renderbufferStorageMultisampleEXT(36161,ae,te,S.width,S.height):s.renderbufferStorageMultisample(36161,ae,te,S.width,S.height)}else s.renderbufferStorage(36161,te,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const te=We(S);H&&Ue(S)===!1?s.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ue(S)?f.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],Me=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),F=g(ae.internalFormat,Me,C,ae.encoding),ce=We(S);H&&Ue(S)===!1?s.renderbufferStorageMultisample(36161,ce,F,S.width,S.height):Ue(S)?f.renderbufferStorageMultisampleEXT(36161,ce,F,S.width,S.height):s.renderbufferStorage(36161,F,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function Se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=We(S);if(S.depthTexture.format===En)Ue(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):s.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===ni)Ue(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(T){const S=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=s.createRenderbuffer(),ze(S.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),ze(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function nt(T,S,H){const te=n.get(T);S!==void 0&&de(te.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&ve(T)}function $e(T){const S=T.texture,H=n.get(T),te=n.get(S);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=S.version,a.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,Me=y(T)||o;if(ie){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=s.createFramebuffer()}else{if(H.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const C=T.texture;for(let F=0,ce=C.length;F<ce;F++){const he=n.get(C[F]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Ue(T)===!1){const C=ae?S:[S];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let F=0;F<C.length;F++){const ce=C[F];H.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,H.__webglColorRenderbuffer[F]);const he=r.convert(ce.format,ce.encoding),oe=r.convert(ce.type),me=g(ce.internalFormat,he,oe,ce.encoding,T.isXRRenderTarget===!0),pe=We(T);s.renderbufferStorageMultisample(36161,pe,me,T.width,T.height),s.framebufferRenderbuffer(36160,36064+F,36161,H.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),j(34067,S,Me);for(let C=0;C<6;C++)de(H.__webglFramebuffer[C],T,S,36064,34069+C);A(S,Me)&&L(34067),t.unbindTexture()}else if(ae){const C=T.texture;for(let F=0,ce=C.length;F<ce;F++){const he=C[F],oe=n.get(he);t.bindTexture(3553,oe.__webglTexture),j(3553,he,Me),de(H.__webglFramebuffer,T,he,36064+F,3553),A(he,Me)&&L(3553)}t.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),j(C,S,Me),de(H.__webglFramebuffer,T,S,36064,C),A(S,Me)&&L(C),t.unbindTexture()}T.depthBuffer&&ve(T)}function Ke(T){const S=y(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,ie=H.length;te<ie;te++){const ae=H[te];if(A(ae,S)){const Me=T.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(Me,C),L(Me),t.unbindTexture()}}}function dt(T){if(o&&T.samples>0&&Ue(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,te=T.height;let ie=16384;const ae=[],Me=T.stencilBuffer?33306:36096,C=n.get(T),F=T.isWebGLMultipleRenderTargets===!0;if(F)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){ae.push(36064+ce),T.depthBuffer&&ae.push(Me);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ce]),he===!0&&(s.invalidateFramebuffer(36008,[Me]),s.invalidateFramebuffer(36009,[Me])),F){const oe=n.get(S[ce]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,oe,0)}s.blitFramebuffer(0,0,H,te,0,0,H,te,ie,9728),m&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ce,36161,C.__webglColorRenderbuffer[ce]);const he=n.get(S[ce]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ce,3553,he,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function We(T){return Math.min(h,T.samples)}function Ue(T){const S=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(T){const S=a.render.frame;v.get(T)!==S&&(v.set(T,S),T.update())}function _t(T,S){const H=T.encoding,te=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Jr||H!==Cn&&(H===He?o===!1?e.has("EXT_sRGB")===!0&&te===Ot?(T.format=Jr,T.minFilter=Dt,T.generateMipmaps=!1):S=Qa.sRGBToLinear(S):(te!==Ot||ie!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ue}function yf(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===An)return 5121;if(r===Qo)return 32819;if(r===Jo)return 32820;if(r===Zo)return 5120;if(r===$o)return 5122;if(r===ja)return 5123;if(r===Ko)return 5124;if(r===Sn)return 5125;if(r===wn)return 5126;if(r===bi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===el)return 6406;if(r===Ot)return 6408;if(r===nl)return 6409;if(r===il)return 6410;if(r===En)return 6402;if(r===ni)return 34041;if(r===tl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Jr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rl)return 6403;if(r===sl)return 36244;if(r===al)return 33319;if(r===ol)return 33320;if(r===ll)return 36249;if(r===dr||r===fr||r===pr||r===mr)if(a===He)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===dr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===dr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ss||r===ws||r===Es||r===Ts)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ss)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ws)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Es)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ts)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===As||r===Cs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===As)return a===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ls||r===Ps||r===Ds||r===Rs||r===Is||r===Fs||r===zs||r===Ns||r===Us||r===Os||r===Bs||r===Gs||r===ks||r===Vs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ls)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ps)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ds)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Is)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ns)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Us)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Os)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ks)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Hs)return a===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Qn?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class bf extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),_=this._getHandJoint(l,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=i!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wf extends Tt{constructor(e,t,n,i,r,a,o,u,l,c){if(c=c!==void 0?c:En,c!==En&&c!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===En&&(n=Sn),n===void 0&&c===ni&&(n=Qn),super(null,i,r,a,o,u,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=u!==void 0?u:Mt,this.flipY=!1,this.generateMipmaps=!1}}class Ef extends Dn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",u=null,l=null,c=null,h=null,f=null,m=null;const v=t.getContextAttributes();let p=null,d=null;const _=[],b=[],M=new Set,y=new Map,x=new Rt;x.layers.enable(1),x.viewport=new ot;const A=new Rt;A.layers.enable(2),A.viewport=new ot;const L=[x,A],g=new bf;g.layers.enable(1),g.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=_[G];return k===void 0&&(k=new Vr,_[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=_[G];return k===void 0&&(k=new Vr,_[G]=k),k.getGripSpace()},this.getHand=function(G){let k=_[G];return k===void 0&&(k=new Vr,_[G]=k),k.getHandSpace()};function B(G){const k=b.indexOf(G.inputSource);if(k===-1)return;const J=_[k];J!==void 0&&J.dispatchEvent({type:G.type,data:G.inputSource})}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",N);for(let G=0;G<_.length;G++){const k=b[G];k!==null&&(b[G]=null,_[G].disconnect(k))}E=null,D=null,e.setRenderTarget(p),f=null,h=null,c=null,i=null,d=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:f}),d=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:An,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let k=null,J=null,ne=null;v.depth&&(ne=v.stencil?35056:33190,k=v.stencil?ni:En,J=v.stencil?Qn:Sn);const se={colorFormat:32856,depthFormat:ne,scaleFactor:r};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(se),i.updateRenderState({layers:[h]}),d=new Ln(h.textureWidth,h.textureHeight,{format:Ot,type:An,depthTexture:new wf(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const j=e.properties.get(d);j.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),u=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(G){for(let k=0;k<G.removed.length;k++){const J=G.removed[k],ne=b.indexOf(J);ne>=0&&(b[ne]=null,_[ne].disconnect(J))}for(let k=0;k<G.added.length;k++){const J=G.added[k];let ne=b.indexOf(J);if(ne===-1){for(let j=0;j<_.length;j++)if(j>=b.length){b.push(J),ne=j;break}else if(b[j]===null){b[j]=J,ne=j;break}if(ne===-1)break}const se=_[ne];se&&se.connect(J)}}const R=new P,O=new P;function $(G,k,J){R.setFromMatrixPosition(k.matrixWorld),O.setFromMatrixPosition(J.matrixWorld);const ne=R.distanceTo(O),se=k.projectionMatrix.elements,j=J.projectionMatrix.elements,Ae=se[14]/(se[10]-1),fe=se[14]/(se[10]+1),xe=(se[9]+1)/se[5],de=(se[9]-1)/se[5],ze=(se[8]-1)/se[0],Se=(j[8]+1)/j[0],ve=Ae*ze,nt=Ae*Se,$e=ne/(-ze+Se),Ke=$e*-ze;k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ke),G.translateZ($e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const dt=Ae+$e,We=fe+$e,Ue=ve-Ke,Ct=nt+(ne-Ke),_t=xe*fe/We*dt,T=de*fe/We*dt;G.projectionMatrix.makePerspective(Ue,Ct,_t,T,dt,We)}function W(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;g.near=A.near=x.near=G.near,g.far=A.far=x.far=G.far,(E!==g.near||D!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,D=g.far);const k=G.parent,J=g.cameras;W(g,k);for(let se=0;se<J.length;se++)W(J[se],k);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),G.matrix.copy(g.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ne=G.children;for(let se=0,j=ne.length;se<j;se++)ne[se].updateMatrixWorld(!0);J.length===2?$(g,x,A):g.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.getPlanes=function(){return M};let V=null;function K(G,k){if(l=k.getViewerPose(u||a),m=k,l!==null){const J=l.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ne=!1;J.length!==g.cameras.length&&(g.cameras.length=0,ne=!0);for(let se=0;se<J.length;se++){const j=J[se];let Ae=null;if(f!==null)Ae=f.getViewport(j);else{const xe=c.getViewSubImage(h,j);Ae=xe.viewport,se===0&&(e.setRenderTargetTextures(d,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(d))}let fe=L[se];fe===void 0&&(fe=new Rt,fe.layers.enable(se),fe.viewport=new ot,L[se]=fe),fe.matrix.fromArray(j.transform.matrix),fe.projectionMatrix.fromArray(j.projectionMatrix),fe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),se===0&&g.matrix.copy(fe.matrix),ne===!0&&g.cameras.push(fe)}}for(let J=0;J<_.length;J++){const ne=b[J],se=_[J];ne!==null&&se!==void 0&&se.update(ne,k,u||a)}if(V&&V(G,k),k.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let J=null;for(const ne of M)k.detectedPlanes.has(ne)||(J===null&&(J=[]),J.push(ne));if(J!==null)for(const ne of J)M.delete(ne),y.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of k.detectedPlanes)if(!M.has(ne))M.add(ne),y.set(ne,k.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const se=y.get(ne);ne.lastChangedTime>se&&(y.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}m=null}const Q=new oo;Q.setAnimationLoop(K),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function Tf(s,e){function t(p,d){d.color.getRGB(p.fogColor.value,io(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),c(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,M)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),v(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,b):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===It&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===It&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=b*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===It&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Af(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function u(b,M){const y=M.program;n.uniformBlockBinding(b,y)}function l(b,M){let y=i[b.id];y===void 0&&(v(b),y=c(b),i[b.id]=y,b.addEventListener("dispose",d));const x=M.program;n.updateUBOMapping(b,x);const A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function c(b){const M=h();b.__bindingPointIndex=M;const y=s.createBuffer(),x=b.__size,A=b.usage;return s.bindBuffer(35345,y),s.bufferData(35345,x,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,y),y}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=i[b.id],y=b.uniforms,x=b.__cache;s.bindBuffer(35345,M);for(let A=0,L=y.length;A<L;A++){const g=y[A];if(m(g,A,x)===!0){const E=g.value,D=g.__offset;typeof E=="number"?(g.__data[0]=E,s.bufferSubData(35345,D,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):E.toArray(g.__data),s.bufferSubData(35345,D,g.__data))}}s.bindBuffer(35345,null)}function m(b,M,y){const x=b.value;if(y[M]===void 0)return typeof x=="number"?y[M]=x:y[M]=x.clone(),!0;if(typeof x=="number"){if(y[M]!==x)return y[M]=x,!0}else{const A=y[M];if(A.equals(x)===!1)return A.copy(x),!0}return!1}function v(b){const M=b.uniforms;let y=0;const x=16;let A=0;for(let L=0,g=M.length;L<g;L++){const E=M[L],D=p(E);if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,L>0){A=y%x;const B=x-A;A!==0&&B-D.boundary<0&&(y+=x-A,E.__offset=y)}y+=D.storage}return A=y%x,A>0&&(y+=x-A),b.__size=y,b.__cache={},this}function p(b){const M=b.value,y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function d(b){const M=b.target;M.removeEventListener("dispose",d);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:u,update:l,dispose:_}}function Cf(){const s=tr("canvas");return s.style.display="block",s}function fo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Cf(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,u=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cn,this.physicallyCorrectLights=!1,this.toneMapping=Jt,this.toneMappingExposure=1;const p=this;let d=!1,_=0,b=0,M=null,y=-1,x=null;const A=new ot,L=new ot;let g=null,E=e.width,D=e.height,B=1,Y=null,N=null;const R=new ot(0,0,E,D),O=new ot(0,0,E,D);let $=!1;const W=new ao;let V=!1,K=!1,Q=null;const G=new Ze,k=new be,J=new P,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return M===null?B:1}let j=t;function Ae(w,U){for(let X=0;X<w.length;X++){const z=w[X],Z=e.getContext(z,U);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${is}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),j===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),j=Ae(U,w),j===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let fe,xe,de,ze,Se,ve,nt,$e,Ke,dt,We,Ue,Ct,_t,T,S,H,te,ie,ae,Me,C,F,ce;function he(){fe=new Oh(j),xe=new Dh(j,fe,s),fe.init(xe),C=new yf(j,fe,xe),de=new vf(j,fe,xe),ze=new kh,Se=new sf,ve=new Mf(j,fe,de,Se,xe,C,ze),nt=new Ih(p),$e=new Uh(p),Ke=new Zl(j,xe),F=new Lh(j,fe,Ke,xe),dt=new Bh(j,Ke,ze,F),We=new Xh(j,dt,Ke,ze),ie=new Wh(j,xe,ve),S=new Rh(Se),Ue=new rf(p,nt,$e,fe,xe,F,S),Ct=new Tf(p,Se),_t=new of,T=new ff(fe,xe),te=new Ch(p,nt,$e,de,We,c,a),H=new xf(p,We,xe),ce=new Af(j,ze,xe,de),ae=new Ph(j,fe,ze,xe),Me=new Gh(j,fe,ze,xe),ze.programs=Ue.programs,p.capabilities=xe,p.extensions=fe,p.properties=Se,p.renderLists=_t,p.shadowMap=H,p.state=de,p.info=ze}he();const oe=new Ef(p,j);this.xr=oe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(E,D,!1))},this.getSize=function(w){return w.set(E,D)},this.setSize=function(w,U,X){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,D=U,e.width=Math.floor(w*B),e.height=Math.floor(U*B),X!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(E*B,D*B).floor()},this.setDrawingBufferSize=function(w,U,X){E=w,D=U,B=X,e.width=Math.floor(w*X),e.height=Math.floor(U*X),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,U,X,z){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,U,X,z),de.viewport(A.copy(R).multiplyScalar(B).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,U,X,z){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,U,X,z),de.scissor(L.copy(O).multiplyScalar(B).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){de.setScissorTest($=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(w=!0,U=!0,X=!0){let z=0;w&&(z|=16384),U&&(z|=256),X&&(z|=1024),j.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),_t.dispose(),T.dispose(),Se.dispose(),nt.dispose(),$e.dispose(),We.dispose(),F.dispose(),ce.dispose(),Ue.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ue),oe.removeEventListener("sessionend",ge),Q&&(Q.dispose(),Q=null),Ne.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=ze.autoReset,U=H.enabled,X=H.autoUpdate,z=H.needsUpdate,Z=H.type;he(),ze.autoReset=w,H.enabled=U,H.autoUpdate=X,H.needsUpdate=z,H.type=Z}function Ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){const U=w.target;U.removeEventListener("dispose",Le),Oe(U)}function Oe(w){I(w),Se.remove(w)}function I(w){const U=Se.get(w).programs;U!==void 0&&(U.forEach(function(X){Ue.releaseProgram(X)}),w.isShaderMaterial&&Ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,X,z,Z,_e){U===null&&(U=ne);const ye=Z.isMesh&&Z.matrixWorld.determinant()<0,Ee=mo(w,U,X,z,Z);de.setMaterial(z,ye);let Te=X.index,Ie=1;z.wireframe===!0&&(Te=dt.getWireframeAttribute(X),Ie=2);const Pe=X.drawRange,De=X.attributes.position;let Xe=Pe.start*Ie,yt=(Pe.start+Pe.count)*Ie;_e!==null&&(Xe=Math.max(Xe,_e.start*Ie),yt=Math.min(yt,(_e.start+_e.count)*Ie)),Te!==null?(Xe=Math.max(Xe,0),yt=Math.min(yt,Te.count)):De!=null&&(Xe=Math.max(Xe,0),yt=Math.min(yt,De.count));const Wt=yt-Xe;if(Wt<0||Wt===1/0)return;F.setup(Z,z,Ee,X,Te);let hn,qe=ae;if(Te!==null&&(hn=Ke.get(Te),qe=Me,qe.setIndex(hn)),Z.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*se()),qe.setMode(1)):qe.setMode(4);else if(Z.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),de.setLineWidth(Re*se()),Z.isLineSegments?qe.setMode(1):Z.isLineLoop?qe.setMode(2):qe.setMode(3)}else Z.isPoints?qe.setMode(0):Z.isSprite&&qe.setMode(4);if(Z.isInstancedMesh)qe.renderInstances(Xe,Wt,Z.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lr=Math.min(X.instanceCount,Re);qe.renderInstances(Xe,Wt,lr)}else qe.render(Xe,Wt)},this.compile=function(w,U){function X(z,Z,_e){z.transparent===!0&&z.side===Bt?(z.side=It,z.needsUpdate=!0,Lt(z,Z,_e),z.side=Jn,z.needsUpdate=!0,Lt(z,Z,_e),z.side=Bt):Lt(z,Z,_e)}f=T.get(w),f.init(),v.push(f),w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(p.physicallyCorrectLights),w.traverse(function(z){const Z=z.material;if(Z)if(Array.isArray(Z))for(let _e=0;_e<Z.length;_e++){const ye=Z[_e];X(ye,w,z)}else X(Z,w,z)}),v.pop(),f=null};let q=null;function ee(w){q&&q(w)}function ue(){Ne.stop()}function ge(){Ne.start()}const Ne=new oo;Ne.setAnimationLoop(ee),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(w){q=w,oe.setAnimationLoop(w),w===null?Ne.stop():Ne.start()},oe.addEventListener("sessionstart",ue),oe.addEventListener("sessionend",ge),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,U,M),f=T.get(w,v.length),f.init(),v.push(f),G.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(G),K=this.localClippingEnabled,V=S.init(this.clippingPlanes,K,U),h=_t.get(w,m.length),h.init(),m.push(h),it(w,U,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,N),V===!0&&S.beginShadows();const X=f.state.shadowsArray;if(H.render(X,w,U),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,w),f.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const z=U.cameras;for(let Z=0,_e=z.length;Z<_e;Z++){const ye=z[Z];ct(h,w,ye,ye.viewport)}}else ct(h,w,U);M!==null&&(ve.updateMultisampleRenderTarget(M),ve.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(p,w,U),F.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function it(w,U,X,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){z&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const ye=We.update(w),Ee=w.material;Ee.visible&&h.push(w,ye,Ee,X,J.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ze.render.frame&&(w.skeleton.update(),w.skeleton.frame=ze.render.frame),!w.frustumCulled||W.intersectsObject(w))){z&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const ye=We.update(w),Ee=w.material;if(Array.isArray(Ee)){const Te=ye.groups;for(let Ie=0,Pe=Te.length;Ie<Pe;Ie++){const De=Te[Ie],Xe=Ee[De.materialIndex];Xe&&Xe.visible&&h.push(w,ye,Xe,X,J.z,De)}}else Ee.visible&&h.push(w,ye,Ee,X,J.z,null)}}const _e=w.children;for(let ye=0,Ee=_e.length;ye<Ee;ye++)it(_e[ye],U,X,z)}function ct(w,U,X,z){const Z=w.opaque,_e=w.transmissive,ye=w.transparent;f.setupLightsView(X),_e.length>0&&un(Z,U,X),z&&de.viewport(A.copy(z)),Z.length>0&&ke(Z,U,X),_e.length>0&&ke(_e,U,X),ye.length>0&&ke(ye,U,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function un(w,U,X){const z=xe.isWebGL2;Q===null&&(Q=new Ln(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?bi:An,minFilter:ir,samples:z&&r===!0?4:0})),p.getDrawingBufferSize(k),z?Q.setSize(k.x,k.y):Q.setSize(er(k.x),er(k.y));const Z=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const _e=p.toneMapping;p.toneMapping=Jt,ke(w,U,X),p.toneMapping=_e,ve.updateMultisampleRenderTarget(Q),ve.updateRenderTargetMipmap(Q),p.setRenderTarget(Z)}function ke(w,U,X){const z=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,_e=w.length;Z<_e;Z++){const ye=w[Z],Ee=ye.object,Te=ye.geometry,Ie=z===null?ye.material:z,Pe=ye.group;Ee.layers.test(X.layers)&&Ht(Ee,U,X,Te,Ie,Pe)}}function Ht(w,U,X,z,Z,_e){w.onBeforeRender(p,U,X,z,Z,_e),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(p,U,X,z,w,_e),Z.transparent===!0&&Z.side===Bt?(Z.side=It,Z.needsUpdate=!0,p.renderBufferDirect(X,U,z,Z,w,_e),Z.side=Jn,Z.needsUpdate=!0,p.renderBufferDirect(X,U,z,Z,w,_e),Z.side=Bt):p.renderBufferDirect(X,U,z,Z,w,_e),w.onAfterRender(p,U,X,z,Z,_e)}function Lt(w,U,X){U.isScene!==!0&&(U=ne);const z=Se.get(w),Z=f.state.lights,_e=f.state.shadowsArray,ye=Z.state.version,Ee=Ue.getParameters(w,Z.state,_e,U,X),Te=Ue.getProgramCacheKey(Ee);let Ie=z.programs;z.environment=w.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(w.isMeshStandardMaterial?$e:nt).get(w.envMap||z.environment),Ie===void 0&&(w.addEventListener("dispose",Le),Ie=new Map,z.programs=Ie);let Pe=Ie.get(Te);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===ye)return ds(w,Ee),Pe}else Ee.uniforms=Ue.getUniforms(w),w.onBuild(X,Ee,p),w.onBeforeCompile(Ee,p),Pe=Ue.acquireProgram(Ee,Te),Ie.set(Te,Pe),z.uniforms=Ee.uniforms;const De=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=S.uniform),ds(w,Ee),z.needsLights=_o(w),z.lightsStateVersion=ye,z.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Xe=Pe.getUniforms(),yt=Ki.seqWithValue(Xe.seq,De);return z.currentProgram=Pe,z.uniformsList=yt,Pe}function ds(w,U){const X=Se.get(w);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function mo(w,U,X,z,Z){U.isScene!==!0&&(U=ne),ve.resetTextureUnits();const _e=U.fog,ye=z.isMeshStandardMaterial?U.environment:null,Ee=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Cn,Te=(z.isMeshStandardMaterial?$e:nt).get(z.envMap||ye),Ie=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!z.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color,Wt=z.toneMapped?p.toneMapping:Jt,hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qe=hn!==void 0?hn.length:0,Re=Se.get(z),lr=f.state.lights;if(V===!0&&(K===!0||w!==x)){const bt=w===x&&z.id===y;S.setState(z,w,bt)}let rt=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==lr.state.version||Re.outputEncoding!==Ee||Z.isInstancedMesh&&Re.instancing===!1||!Z.isInstancedMesh&&Re.instancing===!0||Z.isSkinnedMesh&&Re.skinning===!1||!Z.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||z.fog===!0&&Re.fog!==_e||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==S.numPlanes||Re.numIntersection!==S.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Pe||Re.morphTargets!==De||Re.morphNormals!==Xe||Re.morphColors!==yt||Re.toneMapping!==Wt||xe.isWebGL2===!0&&Re.morphTargetsCount!==qe)&&(rt=!0):(rt=!0,Re.__version=z.version);let dn=Re.currentProgram;rt===!0&&(dn=Lt(z,U,Z));let fs=!1,li=!1,cr=!1;const ft=dn.getUniforms(),fn=Re.uniforms;if(de.useProgram(dn.program)&&(fs=!0,li=!0,cr=!0),z.id!==y&&(y=z.id,li=!0),fs||x!==w){if(ft.setValue(j,"projectionMatrix",w.projectionMatrix),xe.logarithmicDepthBuffer&&ft.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),x!==w&&(x=w,li=!0,cr=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const bt=ft.map.cameraPosition;bt!==void 0&&bt.setValue(j,J.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&ft.setValue(j,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){ft.setOptional(j,Z,"bindMatrix"),ft.setOptional(j,Z,"bindMatrixInverse");const bt=Z.skeleton;bt&&(xe.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),ft.setValue(j,"boneTexture",bt.boneTexture,ve),ft.setValue(j,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ur=X.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0&&xe.isWebGL2===!0)&&ie.update(Z,X,z,dn),(li||Re.receiveShadow!==Z.receiveShadow)&&(Re.receiveShadow=Z.receiveShadow,ft.setValue(j,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fn.envMap.value=Te,fn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),li&&(ft.setValue(j,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&go(fn,cr),_e&&z.fog===!0&&Ct.refreshFogUniforms(fn,_e),Ct.refreshMaterialUniforms(fn,z,B,D,Q),Ki.upload(j,Re.uniformsList,fn,ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ki.upload(j,Re.uniformsList,fn,ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(j,"center",Z.center),ft.setValue(j,"modelViewMatrix",Z.modelViewMatrix),ft.setValue(j,"normalMatrix",Z.normalMatrix),ft.setValue(j,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const bt=z.uniformsGroups;for(let hr=0,xo=bt.length;hr<xo;hr++)if(xe.isWebGL2){const ps=bt[hr];ce.update(ps,dn),ce.bind(ps,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function go(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function _o(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,U,X){Se.get(w.texture).__webglTexture=U,Se.get(w.depthTexture).__webglTexture=X;const z=Se.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const X=Se.get(w);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,X=0){M=w,_=U,b=X;let z=!0,Z=null,_e=!1,ye=!1;if(w){const Te=Se.get(w);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),z=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(w):Te.__hasExternalTextures&&ve.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Pe=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=Pe[U],_e=!0):xe.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?Z=Se.get(w).__webglMultisampledFramebuffer:Z=Pe,A.copy(w.viewport),L.copy(w.scissor),g=w.scissorTest}else A.copy(R).multiplyScalar(B).floor(),L.copy(O).multiplyScalar(B).floor(),g=$;if(de.bindFramebuffer(36160,Z)&&xe.drawBuffers&&z&&de.drawBuffers(w,Z),de.viewport(A),de.scissor(L),de.setScissorTest(g),_e){const Te=Se.get(w.texture);j.framebufferTexture2D(36160,36064,34069+U,Te.__webglTexture,X)}else if(ye){const Te=Se.get(w.texture),Ie=U||0;j.framebufferTextureLayer(36160,36064,Te.__webglTexture,X||0,Ie)}y=-1},this.readRenderTargetPixels=function(w,U,X,z,Z,_e,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){de.bindFramebuffer(36160,Ee);try{const Te=w.texture,Ie=Te.format,Pe=Te.type;if(Ie!==Ot&&C.convert(Ie)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===bi&&(fe.has("EXT_color_buffer_half_float")||xe.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Pe!==An&&C.convert(Pe)!==j.getParameter(35738)&&!(Pe===wn&&(xe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&X>=0&&X<=w.height-Z&&j.readPixels(U,X,z,Z,C.convert(Ie),C.convert(Pe),_e)}finally{const Te=M!==null?Se.get(M).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(w,U,X=0){const z=Math.pow(2,-X),Z=Math.floor(U.image.width*z),_e=Math.floor(U.image.height*z);ve.setTexture2D(U,0),j.copyTexSubImage2D(3553,X,0,0,w.x,w.y,Z,_e),de.unbindTexture()},this.copyTextureToTexture=function(w,U,X,z=0){const Z=U.image.width,_e=U.image.height,ye=C.convert(X.format),Ee=C.convert(X.type);ve.setTexture2D(X,0),j.pixelStorei(37440,X.flipY),j.pixelStorei(37441,X.premultiplyAlpha),j.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?j.texSubImage2D(3553,z,w.x,w.y,Z,_e,ye,Ee,U.image.data):U.isCompressedTexture?j.compressedTexSubImage2D(3553,z,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):j.texSubImage2D(3553,z,w.x,w.y,ye,Ee,U.image),z===0&&X.generateMipmaps&&j.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(w,U,X,z,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Te=C.convert(z.format),Ie=C.convert(z.type);let Pe;if(z.isData3DTexture)ve.setTexture3D(z,0),Pe=32879;else if(z.isDataArrayTexture)ve.setTexture2DArray(z,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,z.flipY),j.pixelStorei(37441,z.premultiplyAlpha),j.pixelStorei(3317,z.unpackAlignment);const De=j.getParameter(3314),Xe=j.getParameter(32878),yt=j.getParameter(3316),Wt=j.getParameter(3315),hn=j.getParameter(32877),qe=X.isCompressedTexture?X.mipmaps[0]:X.image;j.pixelStorei(3314,qe.width),j.pixelStorei(32878,qe.height),j.pixelStorei(3316,w.min.x),j.pixelStorei(3315,w.min.y),j.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?j.texSubImage3D(Pe,Z,U.x,U.y,U.z,_e,ye,Ee,Te,Ie,qe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Pe,Z,U.x,U.y,U.z,_e,ye,Ee,Te,qe.data)):j.texSubImage3D(Pe,Z,U.x,U.y,U.z,_e,ye,Ee,Te,Ie,qe),j.pixelStorei(3314,De),j.pixelStorei(32878,Xe),j.pixelStorei(3316,yt),j.pixelStorei(3315,Wt),j.pixelStorei(32877,hn),Z===0&&z.generateMipmaps&&j.generateMipmap(Pe),de.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){_=0,b=0,M=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lf extends fo{}Lf.prototype.isWebGL1Renderer=!0;class Pf extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cs extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new P,Ta=new P,Aa=new Ze,Hr=new as,qi=new rr;class Kt extends Je{constructor(e=new lt,t=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ea.fromBufferAttribute(t,i-1),Ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(Ta);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),qi.radius+=r,e.ray.intersectsSphere(qi)===!1)return;Aa.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Aa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=new P,c=new P,h=new P,f=new P,m=this.isLineSegments?2:1,v=n.index,d=n.attributes.position;if(v!==null){const _=Math.max(0,a.start),b=Math.min(v.count,a.start+a.count);for(let M=_,y=b-1;M<y;M+=m){const x=v.getX(M),A=v.getX(M+1);if(l.fromBufferAttribute(d,x),c.fromBufferAttribute(d,A),Hr.distanceSqToSegment(l,c,f,h)>u)continue;f.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(f);g<e.near||g>e.far||t.push({distance:g,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let M=_,y=b-1;M<y;M+=m){if(l.fromBufferAttribute(d,M),c.fromBufferAttribute(d,M+1),Hr.distanceSqToSegment(l,c,f,h)>u)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ca=new P,La=new P;class Df extends Kt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ca.fromBufferAttribute(t,i),La.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ca.distanceTo(La);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ht extends lt{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:u};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],h=[],f=[],m=[];let v=0;const p=[],d=n/2;let _=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(m,2));function b(){const y=new P,x=new P;let A=0;const L=(t-e)/n;for(let g=0;g<=r;g++){const E=[],D=g/r,B=D*(t-e)+e;for(let Y=0;Y<=i;Y++){const N=Y/i,R=N*u+o,O=Math.sin(R),$=Math.cos(R);x.x=B*O,x.y=-D*n+d,x.z=B*$,h.push(x.x,x.y,x.z),y.set(O,L,$).normalize(),f.push(y.x,y.y,y.z),m.push(N,1-D),E.push(v++)}p.push(E)}for(let g=0;g<i;g++)for(let E=0;E<r;E++){const D=p[E][g],B=p[E+1][g],Y=p[E+1][g+1],N=p[E][g+1];c.push(D,B,N),c.push(B,Y,N),A+=6}l.addGroup(_,A,0),_+=A}function M(y){const x=v,A=new be,L=new P;let g=0;const E=y===!0?e:t,D=y===!0?1:-1;for(let Y=1;Y<=i;Y++)h.push(0,d*D,0),f.push(0,D,0),m.push(.5,.5),v++;const B=v;for(let Y=0;Y<=i;Y++){const R=Y/i*u+o,O=Math.cos(R),$=Math.sin(R);L.x=E*$,L.y=d*D,L.z=E*O,h.push(L.x,L.y,L.z),f.push(0,D,0),A.x=O*.5+.5,A.y=$*.5*D+.5,m.push(A.x,A.y),v++}for(let Y=0;Y<i;Y++){const N=x+Y,R=B+Y;y===!0?c.push(R,R+1,N):c.push(R+1,R,N),g+=3}l.addGroup(_,g,y===!0?1:2),_+=g}}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),c(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new P,y=new P,x=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],y),m(t[A+2],x),u(M,y,x,b)}function u(b,M,y,x){const A=x+1,L=[];for(let g=0;g<=A;g++){L[g]=[];const E=b.clone().lerp(y,g/A),D=M.clone().lerp(y,g/A),B=A-g;for(let Y=0;Y<=B;Y++)Y===0&&g===A?L[g][Y]=E:L[g][Y]=E.clone().lerp(D,Y/B)}for(let g=0;g<A;g++)for(let E=0;E<2*(A-g)-1;E++){const D=Math.floor(E/2);E%2===0?(f(L[g][D+1]),f(L[g+1][D]),f(L[g][D])):(f(L[g][D+1]),f(L[g+1][D+1]),f(L[g+1][D]))}}function l(b){const M=new P;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(b),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function c(){const b=new P;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const y=d(b)/2/Math.PI+.5,x=_(b)/Math.PI+.5;a.push(y,1-x)}v(),h()}function h(){for(let b=0;b<a.length;b+=6){const M=a[b+0],y=a[b+2],x=a[b+4],A=Math.max(M,y,x),L=Math.min(M,y,x);A>.9&&L<.1&&(M<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),x<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function m(b,M){const y=b*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function v(){const b=new P,M=new P,y=new P,x=new P,A=new be,L=new be,g=new be;for(let E=0,D=0;E<r.length;E+=9,D+=6){b.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[D+0],a[D+1]),L.set(a[D+2],a[D+3]),g.set(a[D+4],a[D+5]),x.copy(b).add(M).add(y).divideScalar(3);const B=d(x);p(A,D+0,b,B),p(L,D+2,M,B),p(g,D+4,y,B)}}function p(b,M,y,x){x<0&&b.x===1&&(a[M]=b.x-1),y.x===0&&y.z===0&&(a[M]=x/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}static fromJSON(e){return new us(e.vertices,e.indices,e.radius,e.details)}}class $n extends us{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $n(e.radius,e.detail)}}class hs extends lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const c=[],h=new P,f=new P,m=[],v=[],p=[],d=[];for(let _=0;_<=n;_++){const b=[],M=_/n;let y=0;_==0&&a==0?y=.5/t:_==n&&u==Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){const A=x/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+M*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(A+y,1-M),b.push(l++)}c.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const M=c[_][b+1],y=c[_][b],x=c[_+1][b],A=c[_+1][b+1];(_!==0||a>0)&&m.push(M,y,A),(_!==n-1||u<Math.PI)&&m.push(y,x,A)}this.setIndex(m),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bn extends lt{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],u=[],l=[],c=new P,h=new P,f=new P;for(let m=0;m<=n;m++)for(let v=0;v<=i;v++){const p=v/i*r,d=m/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(p),h.y=(e+t*Math.cos(d))*Math.sin(p),h.z=t*Math.sin(d),o.push(h.x,h.y,h.z),c.x=e*Math.cos(p),c.y=e*Math.sin(p),f.subVectors(h,c).normalize(),u.push(f.x,f.y,f.z),l.push(v/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=i;v++){const p=(i+1)*m+v-1,d=(i+1)*(m-1)+v-1,_=(i+1)*(m-1)+v,b=(i+1)*m+v;a.push(p,d,b),a.push(d,_,b)}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(l,2))}static fromJSON(e){return new bn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pa extends ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Da={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],v=l[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const If=new Rf;class po{constructor(e){this.manager=e!==void 0?e:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $t={};class Ff extends Error{constructor(e,t){super(e),this.response=t}}class zf extends po{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Da.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($t[e]!==void 0){$t[e].push({onLoad:t,onProgress:n,onError:i});return}$t[e]=[],$t[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,u=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=$t[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,v=m!==0;let p=0;const d=new ReadableStream({start(_){b();function b(){h.read().then(({done:M,value:y})=>{if(M)_.close();else{p+=y.byteLength;const x=new ProgressEvent("progress",{lengthComputable:v,loaded:p,total:m});for(let A=0,L=c.length;A<L;A++){const g=c[A];g.onProgress&&g.onProgress(x)}_.enqueue(y),b()}})}}});return new Response(d)}else throw new Ff(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(u){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Da.add(e,l);const c=$t[e];delete $t[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=$t[e];if(c===void 0)throw this.manager.itemError(e),l;delete $t[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nf extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Uf extends Nf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class Of{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bf{constructor(e,t,n=0,i=1/0){this.ray=new as(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ns(e,this,n,t),n.sort(Ra),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ns(e[i],this,n,t);return n.sort(Ra),n}}function Ra(s,e){return s.distance-e.distance}function ns(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ns(i[r],e,t,!0)}}class Ia{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wr extends Df{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const r=t/2,a=e/t,o=e/2,u=[],l=[];for(let f=0,m=0,v=-o;f<=t;f++,v+=a){u.push(-o,0,v,o,0,v),u.push(v,0,-o,v,0,o);const p=f===r?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const c=new lt;c.setAttribute("position",new Ge(u,3)),c.setAttribute("color",new Ge(l,3));const h=new cs({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=is);const Fa={type:"change"},Xr={type:"start"},za={type:"end"};class Gf extends Dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",_t),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fa),n.update(),r=i.NONE},this.update=function(){const C=new P,F=new at().setFromUnitVectors(e.up,new P(0,1,0)),ce=F.clone().invert(),he=new P,oe=new at,me=2*Math.PI;return function(){const Ce=n.object.position;C.copy(Ce).sub(n.target),C.applyQuaternion(F),o.setFromVector3(C),n.autoRotate&&r===i.NONE&&E(L()),n.enableDamping?(o.theta+=u.theta*n.dampingFactor,o.phi+=u.phi*n.dampingFactor):(o.theta+=u.theta,o.phi+=u.phi);let Le=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(Oe)&&(Le<-Math.PI?Le+=me:Le>Math.PI&&(Le-=me),Oe<-Math.PI?Oe+=me:Oe>Math.PI&&(Oe-=me),Le<=Oe?o.theta=Math.max(Le,Math.min(Oe,o.theta)):o.theta=o.theta>(Le+Oe)/2?Math.max(Le,o.theta):Math.min(Oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),C.setFromSpherical(o),C.applyQuaternion(ce),Ce.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),c.set(0,0,0)),l=1,h||he.distanceToSquared(n.object.position)>a||8*(1-oe.dot(n.object.quaternion))>a?(n.dispatchEvent(Fa),he.copy(n.object.position),oe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",dt),n.domElement.removeEventListener("wheel",Ct),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ke),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",_t)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Ia,u=new Ia;let l=1;const c=new P;let h=!1;const f=new be,m=new be,v=new be,p=new be,d=new be,_=new be,b=new be,M=new be,y=new be,x=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function E(C){u.theta-=C}function D(C){u.phi-=C}const B=function(){const C=new P;return function(ce,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-ce),c.add(C)}}(),Y=function(){const C=new P;return function(ce,he){n.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ce),c.add(C)}}(),N=function(){const C=new P;return function(ce,he){const oe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;C.copy(me).sub(n.target);let pe=C.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ce*pe/oe.clientHeight,n.object.matrix),Y(2*he*pe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ce*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),Y(he*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?l/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(C){n.object.isPerspectiveCamera?l*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C){f.set(C.clientX,C.clientY)}function W(C){b.set(C.clientX,C.clientY)}function V(C){p.set(C.clientX,C.clientY)}function K(C){m.set(C.clientX,C.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*v.x/F.clientHeight),D(2*Math.PI*v.y/F.clientHeight),f.copy(m),n.update()}function Q(C){M.set(C.clientX,C.clientY),y.subVectors(M,b),y.y>0?R(g()):y.y<0&&O(g()),b.copy(M),n.update()}function G(C){d.set(C.clientX,C.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),N(_.x,_.y),p.copy(d),n.update()}function k(C){C.deltaY<0?O(g()):C.deltaY>0&&R(g()),n.update()}function J(C){let F=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),F=!0;break}F&&(C.preventDefault(),n.update())}function ne(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),F=.5*(x[0].pageY+x[1].pageY);f.set(C,F)}}function se(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),F=.5*(x[0].pageY+x[1].pageY);p.set(C,F)}}function j(){const C=x[0].pageX-x[1].pageX,F=x[0].pageY-x[1].pageY,ce=Math.sqrt(C*C+F*F);b.set(0,ce)}function Ae(){n.enableZoom&&j(),n.enablePan&&se()}function fe(){n.enableZoom&&j(),n.enableRotate&&ne()}function xe(C){if(x.length==1)m.set(C.pageX,C.pageY);else{const ce=Me(C),he=.5*(C.pageX+ce.x),oe=.5*(C.pageY+ce.y);m.set(he,oe)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*v.x/F.clientHeight),D(2*Math.PI*v.y/F.clientHeight),f.copy(m)}function de(C){if(x.length===1)d.set(C.pageX,C.pageY);else{const F=Me(C),ce=.5*(C.pageX+F.x),he=.5*(C.pageY+F.y);d.set(ce,he)}_.subVectors(d,p).multiplyScalar(n.panSpeed),N(_.x,_.y),p.copy(d)}function ze(C){const F=Me(C),ce=C.pageX-F.x,he=C.pageY-F.y,oe=Math.sqrt(ce*ce+he*he);M.set(0,oe),y.set(0,Math.pow(M.y/b.y,n.zoomSpeed)),R(y.y),b.copy(M)}function Se(C){n.enableZoom&&ze(C),n.enablePan&&de(C)}function ve(C){n.enableZoom&&ze(C),n.enableRotate&&xe(C)}function nt(C){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",Ke)),te(C),C.pointerType==="touch"?T(C):We(C))}function $e(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Ue(C))}function Ke(C){ie(C),x.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ke)),n.dispatchEvent(za),r=i.NONE}function dt(C){ie(C)}function We(C){let F;switch(C.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Rn.DOLLY:if(n.enableZoom===!1)return;W(C),r=i.DOLLY;break;case Rn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;$(C),r=i.ROTATE}break;case Rn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;$(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Xr)}function Ue(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(C);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(C);break;case i.PAN:if(n.enablePan===!1)return;G(C);break}}function Ct(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(Xr),k(C),n.dispatchEvent(za))}function _t(C){n.enabled===!1||n.enablePan===!1||J(C)}function T(C){switch(ae(C),x.length){case 1:switch(n.touches.ONE){case In.ROTATE:if(n.enableRotate===!1)return;ne(),r=i.TOUCH_ROTATE;break;case In.PAN:if(n.enablePan===!1)return;se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case In.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),r=i.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Xr)}function S(C){switch(ae(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(C),n.update();break;default:r=i.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function te(C){x.push(C)}function ie(C){delete A[C.pointerId];for(let F=0;F<x.length;F++)if(x[F].pointerId==C.pointerId){x.splice(F,1);return}}function ae(C){let F=A[C.pointerId];F===void 0&&(F=new be,A[C.pointerId]=F),F.set(C.pageX,C.pageY)}function Me(C){const F=C.pointerId===x[0].pointerId?x[1]:x[0];return A[F.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",dt),n.domElement.addEventListener("wheel",Ct,{passive:!1}),this.update()}}class Na extends po{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new zf(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(u){i?i(u):console.error(u),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const c=new DataView(l),h=32/8*3+32/8*3*3+16/8,f=c.getUint32(80,!0);if(80+32/8+f*h===c.byteLength)return!0;const v=[115,111,108,105,100];for(let p=0;p<5;p++)if(n(v,c,p))return!1;return!0}function n(l,c,h){for(let f=0,m=l.length;f<m;f++)if(l[f]!==c.getUint8(h+f))return!1;return!0}function i(l){const c=new DataView(l),h=c.getUint32(80,!0);let f,m,v,p=!1,d,_,b,M,y;for(let D=0;D<70;D++)c.getUint32(D,!1)==1129270351&&c.getUint8(D+4)==82&&c.getUint8(D+5)==61&&(p=!0,d=new Float32Array(h*3*3),_=c.getUint8(D+6)/255,b=c.getUint8(D+7)/255,M=c.getUint8(D+8)/255,y=c.getUint8(D+9)/255);const x=84,A=12*4+2,L=new lt,g=new Float32Array(h*3*3),E=new Float32Array(h*3*3);for(let D=0;D<h;D++){const B=x+D*A,Y=c.getFloat32(B,!0),N=c.getFloat32(B+4,!0),R=c.getFloat32(B+8,!0);if(p){const O=c.getUint16(B+48,!0);O&32768?(f=_,m=b,v=M):(f=(O&31)/31,m=(O>>5&31)/31,v=(O>>10&31)/31)}for(let O=1;O<=3;O++){const $=B+O*12,W=D*3*3+(O-1)*3;g[W]=c.getFloat32($,!0),g[W+1]=c.getFloat32($+4,!0),g[W+2]=c.getFloat32($+8,!0),E[W]=Y,E[W+1]=N,E[W+2]=R,p&&(d[W]=f,d[W+1]=m,d[W+2]=v)}}return L.setAttribute("position",new At(g,3)),L.setAttribute("normal",new At(E,3)),p&&(L.setAttribute("color",new At(d,3)),L.hasColors=!0,L.alpha=y),L}function r(l){const c=new lt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let m=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+v+v+v,"g"),d=new RegExp("normal"+v+v+v,"g"),_=[],b=[],M=new P;let y,x=0,A=0,L=0;for(;(y=h.exec(l))!==null;){A=L;const g=y[0];for(;(y=f.exec(g))!==null;){let B=0,Y=0;const N=y[0];for(;(y=d.exec(N))!==null;)M.x=parseFloat(y[1]),M.y=parseFloat(y[2]),M.z=parseFloat(y[3]),Y++;for(;(y=p.exec(N))!==null;)_.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),b.push(M.x,M.y,M.z),B++,L++;Y!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const E=A,D=L-A;c.addGroup(E,D,x),x++}return c.setAttribute("position",new Ge(_,3)),c.setAttribute("normal",new Ge(b,3)),c}function a(l){return typeof l!="string"?Of.decodeText(new Uint8Array(l)):l}function o(l){if(typeof l=="string"){const c=new Uint8Array(l.length);for(let h=0;h<l.length;h++)c[h]=l.charCodeAt(h)&255;return c.buffer||c}else return l}const u=o(e);return t(u)?i(u):r(a(e))}}class kf{parse(e,t={}){const n=t.binary!==void 0?t.binary:!1,i=[];let r=0;e.traverse(function(_){if(_.isMesh){const b=_.geometry,M=b.index,y=b.getAttribute("position");r+=M!==null?M.count/3:y.count/3,i.push({object3d:_,geometry:b})}});let a,o=80;if(n===!0){const _=r*2+r*3*4*4+80+4,b=new ArrayBuffer(_);a=new DataView(b),a.setUint32(o,r,!0),o+=4}else a="",a+=`solid exported
`;const u=new P,l=new P,c=new P,h=new P,f=new P,m=new P;for(let _=0,b=i.length;_<b;_++){const M=i[_].object3d,y=i[_].geometry,x=y.index,A=y.getAttribute("position");if(x!==null)for(let L=0;L<x.count;L+=3){const g=x.getX(L+0),E=x.getX(L+1),D=x.getX(L+2);v(g,E,D,A,M)}else for(let L=0;L<A.count;L+=3){const g=L+0,E=L+1,D=L+2;v(g,E,D,A,M)}}return n===!1&&(a+=`endsolid exported
`),a;function v(_,b,M,y,x){u.fromBufferAttribute(y,_),l.fromBufferAttribute(y,b),c.fromBufferAttribute(y,M),x.isSkinnedMesh===!0&&(x.boneTransform(_,u),x.boneTransform(b,l),x.boneTransform(M,c)),u.applyMatrix4(x.matrixWorld),l.applyMatrix4(x.matrixWorld),c.applyMatrix4(x.matrixWorld),p(u,l,c),d(u),d(l),d(c),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function p(_,b,M){h.subVectors(M,b),f.subVectors(_,b),h.cross(f).normalize(),m.copy(h).normalize(),n===!0?(a.setFloat32(o,m.x,!0),o+=4,a.setFloat32(o,m.y,!0),o+=4,a.setFloat32(o,m.z,!0),o+=4):(a+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,a+=`		outer loop
`)}function d(_){n===!0?(a.setFloat32(o,_.x,!0),o+=4,a.setFloat32(o,_.y,!0),o+=4,a.setFloat32(o,_.z,!0),o+=4):a+="			vertex "+_.x+" "+_.y+" "+_.z+`
`}}}const _n=new Bf,vt=new P,ln=new P,Ve=new at,Ua={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},qr={type:"change"},Oa={type:"mouseDown"},Ba={type:"mouseUp",mode:null},Ga={type:"objectChange"};class Vf extends Je{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new jf;this._gizmo=n,this.add(n);const i=new Zf;this._plane=i,this.add(i);const r=this;function a(b,M){let y=M;Object.defineProperty(r,b,{get:function(){return y!==void 0?y:M},set:function(x){y!==x&&(y=x,i[b]=x,n[b]=x,r.dispatchEvent({type:b+"-changed",value:x}),r.dispatchEvent(qr))}}),r[b]=M,i[b]=M,n[b]=M}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new P,u=new P,l=new at,c=new at,h=new P,f=new at,m=new P,v=new P,p=new P,d=0,_=new P;a("worldPosition",o),a("worldPositionStart",u),a("worldQuaternion",l),a("worldQuaternionStart",c),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",v),a("rotationAxis",p),a("rotationAngle",d),a("eye",_),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new at,this._parentQuaternionInv=new at,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new at,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new at,this._scaleStart=new P,this._getPointer=Hf.bind(this),this._onPointerDown=Xf.bind(this),this._onPointerHover=Wf.bind(this),this._onPointerMove=qf.bind(this),this._onPointerUp=Yf.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;_n.setFromCamera(e,this.camera);const t=Yr(this._gizmo.picker[this.mode],_n);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){_n.setFromCamera(e,this.camera);const t=Yr(this._plane,_n,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Oa.mode=this.mode,this.dispatchEvent(Oa)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;_n.setFromCamera(e,this.camera);const a=Yr(this._plane,_n,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(Ve.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(vt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(vt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),ln.set(o,o,o)}else vt.copy(this.pointStart),ln.copy(this.pointEnd),vt.applyQuaternion(this._worldQuaternionInv),ln.applyQuaternion(this._worldQuaternionInv),ln.divide(vt),t.search("X")===-1&&(ln.x=1),t.search("Y")===-1&&(ln.y=1),t.search("Z")===-1&&(ln.z=1);i.scale.copy(this._scaleStart).multiply(ln),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(vt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(vt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Ua[t]),vt.copy(Ua[t]),r==="local"&&vt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(vt.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Ve.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Ve.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(qr),this.dispatchEvent(Ga)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Ba.mode=this.mode,this.dispatchEvent(Ba)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(qr),this.dispatchEvent(Ga),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _n}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Hf(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function Wf(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function Xf(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function qf(s){this.enabled&&this.pointerMove(this._getPointer(s))}function Yf(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Yr(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Yi=new si,Be=new P(0,1,0),ka=new P(0,0,0),Va=new Ze,ji=new at,Qi=new at,Gt=new P,Ha=new Ze,xi=new P(1,0,0),Mn=new P(0,1,0),vi=new P(0,0,1),Zi=new P,fi=new P,pi=new P;class jf extends Je{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new sr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new cs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const u=e.clone();u.color.setHex(16711680),u.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const c=e.clone();c.color.setHex(255),c.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const p=new ht(0,.04,.1,12);p.translate(0,.05,0);const d=new je(.08,.08,.08);d.translate(0,.04,0);const _=new lt;_.setAttribute("position",new Ge([0,0,0,1,0,0],3));const b=new ht(.0075,.0075,.5,3);b.translate(0,.25,0);function M(O,$){const W=new bn(O,.0075,3,64,$*Math.PI*2);return W.rotateY(Math.PI/2),W.rotateX(Math.PI/2),W}function y(){const O=new lt;return O.setAttribute("position",new Ge([0,0,0,1,1,1],3)),O}const x={X:[[new le(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new le(p,r),[-.5,0,0],[0,0,Math.PI/2]],[new le(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new le(p,a),[0,.5,0]],[new le(p,a),[0,-.5,0],[Math.PI,0,0]],[new le(b,a)]],Z:[[new le(p,o),[0,0,.5],[Math.PI/2,0,0]],[new le(p,o),[0,0,-.5],[-Math.PI/2,0,0]],[new le(b,o),null,[Math.PI/2,0,0]]],XYZ:[[new le(new $n(.1,0),h.clone()),[0,0,0]]],XY:[[new le(new je(.15,.15,.01),c.clone()),[.15,.15,0]]],YZ:[[new le(new je(.15,.15,.01),u.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new je(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new le(new ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new ht(.2,0,.6,4),n),[0,.3,0]],[new le(new ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new le(new $n(.2,0),n)]],XY:[[new le(new je(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new je(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new je(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new le(new $n(.01,2),i),null,null,null,"helper"]],END:[[new le(new $n(.01,2),i),null,null,null,"helper"]],DELTA:[[new Kt(y(),i),null,null,null,"helper"]],X:[[new Kt(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kt(_,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kt(_,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},g={XYZE:[[new le(M(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new le(M(.5,.5),r)]],Y:[[new le(M(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new le(M(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new le(M(.75,1),f),null,[0,Math.PI/2,0]]]},E={AXIS:[[new Kt(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new le(new hs(.25,10,8),n)]],X:[[new le(new bn(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new le(new bn(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new le(new bn(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new le(new bn(.75,.1,2,24),n)]]},B={X:[[new le(d,r),[.5,0,0],[0,0,-Math.PI/2]],[new le(b,r),[0,0,0],[0,0,-Math.PI/2]],[new le(d,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new le(d,a),[0,.5,0]],[new le(b,a)],[new le(d,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new le(d,o),[0,0,.5],[Math.PI/2,0,0]],[new le(b,o),[0,0,0],[Math.PI/2,0,0]],[new le(d,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new le(new je(.15,.15,.01),c),[.15,.15,0]]],YZ:[[new le(new je(.15,.15,.01),u),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new je(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new je(.1,.1,.1),h.clone())]]},Y={X:[[new le(new ht(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new le(new ht(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new le(new ht(.2,0,.6,4),n),[0,.3,0]],[new le(new ht(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new le(new ht(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new le(new ht(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new le(new je(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new le(new je(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new le(new je(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new le(new je(.2,.2,.2),n),[0,0,0]]]},N={X:[[new Kt(_,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kt(_,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kt(_,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function R(O){const $=new Je;for(const W in O)for(let V=O[W].length;V--;){const K=O[W][V][0].clone(),Q=O[W][V][1],G=O[W][V][2],k=O[W][V][3],J=O[W][V][4];K.name=W,K.tag=J,Q&&K.position.set(Q[0],Q[1],Q[2]),G&&K.rotation.set(G[0],G[1],G[2]),k&&K.scale.set(k[0],k[1],k[2]),K.updateMatrix();const ne=K.geometry.clone();ne.applyMatrix4(K.matrix),K.geometry=ne,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),$.add(K)}return $}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=R(x)),this.add(this.gizmo.rotate=R(g)),this.add(this.gizmo.scale=R(B)),this.add(this.picker.translate=R(A)),this.add(this.picker.rotate=R(D)),this.add(this.picker.scale=R(Y)),this.add(this.helper.translate=R(L)),this.add(this.helper.rotate=R(E)),this.add(this.helper.scale=R(N)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Qi;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const a=i[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.position.copy(this.worldPositionStart),a.visible=!!this.axis,this.axis==="X"&&(Ve.setFromEuler(Yi.set(0,0,0)),a.quaternion.copy(n).multiply(Ve),Math.abs(Be.copy(xi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(Ve.setFromEuler(Yi.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(Ve),Math.abs(Be.copy(Mn).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(Ve.setFromEuler(Yi.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(Ve),Math.abs(Be.copy(vi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(Ve.setFromEuler(Yi.set(0,Math.PI/2,0)),Be.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Va.lookAt(ka,Be,Mn)),a.quaternion.multiply(Ve),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),vt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),vt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(vt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(Be.copy(xi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(Be.copy(Mn).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(Be.copy(vi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(Be.copy(vi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(Be.copy(xi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(Be.copy(Mn).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(ji.copy(n),Be.copy(this.eye).applyQuaternion(Ve.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Va.lookAt(this.eye,ka,Mn)),a.name==="X"&&(Ve.setFromAxisAngle(xi,Math.atan2(-Be.y,Be.z)),Ve.multiplyQuaternions(ji,Ve),a.quaternion.copy(Ve)),a.name==="Y"&&(Ve.setFromAxisAngle(Mn,Math.atan2(Be.x,Be.z)),Ve.multiplyQuaternions(ji,Ve),a.quaternion.copy(Ve)),a.name==="Z"&&(Ve.setFromAxisAngle(vi,Math.atan2(Be.y,Be.x)),Ve.multiplyQuaternions(ji,Ve),a.quaternion.copy(Ve))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(u){return a.name===u}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class Zf extends le{constructor(){super(new ar(1e5,1e5,2,2),new sr({visible:!1,wireframe:!0,side:Bt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Zi.copy(xi).applyQuaternion(t==="local"?this.worldQuaternion:Qi),fi.copy(Mn).applyQuaternion(t==="local"?this.worldQuaternion:Qi),pi.copy(vi).applyQuaternion(t==="local"?this.worldQuaternion:Qi),Be.copy(fi),this.mode){case"translate":case"scale":switch(this.axis){case"X":Be.copy(this.eye).cross(Zi),Gt.copy(Zi).cross(Be);break;case"Y":Be.copy(this.eye).cross(fi),Gt.copy(fi).cross(Be);break;case"Z":Be.copy(this.eye).cross(pi),Gt.copy(pi).cross(Be);break;case"XY":Gt.copy(pi);break;case"YZ":Gt.copy(Zi);break;case"XZ":Be.copy(pi),Gt.copy(fi);break;case"XYZ":case"E":Gt.set(0,0,0);break}break;case"rotate":default:Gt.set(0,0,0)}Gt.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ha.lookAt(vt.set(0,0,0),Gt,Be),this.quaternion.setFromRotationMatrix(Ha)),super.updateMatrixWorld(e)}}document.addEventListener("DOMContentLoaded",()=>{const s=new Pf;s.background=new Fe(15790320);const e=new Rt(55,window.innerWidth/window.innerHeight,.1,2e3),t=new fo({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas-container").appendChild(t.domElement),e.position.set(300,300,300),e.up.set(0,0,1);const n=new Gf(e,t.domElement);n.enableDamping=!0,n.dampingFactor=.25,n.screenSpacePanning=!0,n.minDistance=1,n.maxDistance=1e3,n.maxPolarAngle=Math.PI;const i=new Vf(e,t.domElement);i.setMode("rotate"),i.setRotationSnap(Cl.degToRad(45)),i.addEventListener("change",()=>t.render(s,e)),i.addEventListener("dragging-changed",x=>{n.enabled=!x.value}),s.add(i),i.detach();let r=new Wr(200,10);r.rotation.x=Math.PI/2,s.add(r);let a,o=null,u=null,l=1;const c=new Uf(13882323,3158064,2);c.position.set(0,0,300),s.add(c);const h=document.getElementById("twistSlider");h.addEventListener("input",()=>{const x=h.value*Math.PI/180;b(a.geometry,x)});const f=document.getElementById("fileInput"),m=document.getElementById("uploadButton"),v=document.getElementById("resetButton"),p=document.getElementById("exportButton"),d=document.getElementById("rotateButton");m.addEventListener("click",()=>{f.click()}),f.addEventListener("change",x=>{const A=x.target.files[0];if(A){const L=new FileReader;L.onload=function(g){const E=g.target.result,B=new Na().parse(E);B.computeBoundingBox();const Y=B.boundingBox,N=(Y.max.x+Y.min.x)/2,R=(Y.max.y+Y.min.y)/2,O=(Y.max.z+Y.min.z)/2,$=Y.max.x-Y.min.x,W=Y.max.y-Y.min.y,V=Y.max.z-Y.min.z;l=Math.max($,W,V);const K=Y.min.z;B.translate(-N,-R,-K),a&&s.remove(a);const Q=new Pa({color:8421504,side:Bt,shininess:40});a=new le(B,Q),s.add(a),o=Float32Array.from(B.attributes.position.array),u=a.rotation.clone(),h.value=0;const G=Math.max($,W,V),k=e.fov*(Math.PI/180),J=G*1.5/(2*Math.tan(k/2));e.position.set(N+J,R-J,O+J),e.lookAt(N,R,O),n.update(),s.remove(r),r=new Wr(l*2,10),r.rotation.x=Math.PI/2,s.add(r),i.attach(a),i.detach()},L.readAsArrayBuffer(A)}}),v.addEventListener("click",()=>{_()});function _(){if(a&&o&&u){const A=a.geometry.attributes.position;for(let L=0;L<A.count;L++)A.setXYZ(L,o[L*3],o[L*3+1],o[L*3+2]);A.needsUpdate=!0,a.rotation.copy(u),h.value=0}}p.addEventListener("click",()=>{if(a){const A=new kf().parse(a,{binary:!0}),L=new Blob([A],{type:"application/octet-stream"}),g=document.createElement("a");g.style.display="none",document.body.appendChild(g),g.href=URL.createObjectURL(L),g.download="twisted_model.stl",g.click()}}),d.addEventListener("click",()=>{i.visible=!i.visible,i.visible?i.attach(a):i.detach()}),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)});function b(x,A){const L=x.attributes.position,g=new P,E=new P,D=new at().copy(a.quaternion).invert();for(let B=0;B<L.count;B++){g.fromArray(o,B*3),g.applyQuaternion(D);const N=g.z/l*A,R=Math.sin(N),O=Math.cos(N),$=g.x*O-g.y*R,W=g.x*R+g.y*O;E.set($,W,g.z).applyQuaternion(a.quaternion),L.setXYZ(B,E.x,E.y,E.z)}L.needsUpdate=!0}function M(){requestAnimationFrame(M),n.update(),t.render(s,e)}new Na().load("static/gnome.stl",x=>{x.computeBoundingBox();const A=x.boundingBox,L=(A.max.x+A.min.x)/2,g=(A.max.y+A.min.y)/2,E=(A.max.z+A.min.z)/2,D=A.max.x-A.min.x,B=A.max.y-A.min.y,Y=A.max.z-A.min.z;l=Math.max(D,B,Y);const N=A.min.z;x.translate(-L,-g,-N);const R=new Pa({color:8421504,side:Bt,shininess:40});a=new le(x,R),s.add(a),o=Float32Array.from(x.attributes.position.array),u=a.rotation.clone();const O=Math.max(D,B,Y),$=e.fov*(Math.PI/180),W=O*1.5/(2*Math.tan($/2));e.position.set(L+W,g-W,E+W),e.lookAt(L,g,E),n.update(),s.remove(r),r=new Wr(l*2,10),r.rotation.x=Math.PI/2,s.add(r),i.attach(a),i.detach()}),M(),document.getElementById("lowLabel").addEventListener("click",()=>{h.min=-50,h.max=50,_()}),document.getElementById("mediumLabel").addEventListener("click",()=>{h.min=-180,h.max=180,_()}),document.getElementById("highLabel").addEventListener("click",()=>{h.min=-500,h.max=500,_()})});
