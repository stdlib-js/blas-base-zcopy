"use strict";var x=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var z=x(function(H,w){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist');function g(e,i,o,s,a){var u,n,f,p,v,t,r;if(e<=0)return s;if(u=l(i,0),n=l(s,0),o===1&&a===1){for(r=0;r<e*2;r+=2)n[r]=u[r],n[r+1]=u[r+1];return s}for(o<0?v=2*(1-e)*o:v=0,a<0?t=2*(1-e)*a:t=0,f=o*2,p=a*2,r=0;r<e;r++)n[t]=u[v],n[t+1]=u[v+1],v+=f,t+=p;return s}w.exports=g
});var R=x(function(I,m){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist');function h(e,i,o,s,a,u,n){var f,p,v,t,r,c,q;if(e<=0)return a;for(f=j(i,0),p=j(a,0),v=o*2,t=u*2,r=s*2,c=n*2,q=0;q<e;q++)p[c]=f[r],p[c+1]=f[r+1],r+=v,c+=t;return a}m.exports=h
});var O=x(function(J,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=z(),A=R();k(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=O(),y,b=C(B(__dirname,"./native.js"));D(b)?y=F:y=b;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
