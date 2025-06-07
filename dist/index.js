"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=p(function(H,j){
var z=require('@stdlib/strided-base-reinterpret-complex128/dist');function b(r,e,i,u,a,s,n){var o,q,x,d,v,t,c;if(r<=0)return a;for(o=z(e,0),q=z(a,0),x=i*2,d=s*2,v=u*2,t=n*2,c=0;c<r;c++)q[t]=o[v],q[t+1]=o[v+1],v+=x,t+=d;return a}j.exports=b
});var w=p(function(I,l){
var m=require('@stdlib/strided-base-stride2offset/dist'),g=y();function h(r,e,i,u,a){var s=m(r,i),n=m(r,a);return g(r,e,i,s,u,a,n)}l.exports=h
});var E=p(function(J,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=w(),A=y();k(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=E(),f,O=C(B(__dirname,"./native.js"));D(O)?f=F:f=O;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
