"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=p(function(H,j){
var z=require('@stdlib/strided-base-reinterpret-complex128/dist');function b(e,r,a,u,i,s,n){var o,q,x,d,v,t,c;if(e<=0)return i;for(o=z(r,0),q=z(i,0),x=a*2,d=s*2,v=u*2,t=n*2,c=0;c<e;c++)q[t]=o[v],q[t+1]=o[v+1],v+=x,t+=d;return i}j.exports=b
});var w=p(function(I,l){
var m=require('@stdlib/strided-base-stride2offset/dist'),g=y();function h(e,r,a,u,i){var s=m(e,a),n=m(e,i);return g(e,r,a,s,u,i,n)}l.exports=h
});var E=p(function(J,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=w(),A=y();k(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=E(),f,O=C(B(__dirname,"./native.js"));D(O)?f=F:f=O;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
