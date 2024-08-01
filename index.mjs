// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";function t(r,t,n,i,s){var d,o,a,f,m,u,l;if(r<=0)return i;if(d=e(t,0),o=e(i,0),1===n&&1===s){for(l=0;l<2*r;l+=2)o[l]=d[l],o[l+1]=d[l+1];return i}for(m=n<0?2*(1-r)*n:0,u=s<0?2*(1-r)*s:0,a=2*n,f=2*s,l=0;l<r;l++)o[u]=d[m],o[u+1]=d[m+1],m+=a,u+=f;return i}function n(r,t,n,i,s,d,o){var a,f,m,u,l,p,j;if(r<=0)return s;for(a=e(t,0),f=e(s,0),m=2*n,u=2*d,l=2*i,p=2*o,j=0;j<r;j++)f[p]=a[l],f[p+1]=a[l+1],l+=m,p+=u;return s}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
