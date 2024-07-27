<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zcopy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.



<section class="usage">

## Usage

```javascript
import zcopy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zcopy@v0.1.1-deno/mod.js';
```

#### zcopy( N, x, strideX, y, strideY )

Copies values from `x` into `y`.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy( x.length, x, 1, y, 1 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.
-   **y**: destination [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are copied into `y`. For example, to copy in reverse order every other value in `x` into the first `N` elements of `y`,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy( 2, x, -2, y, 1 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 5.0

var im = imag( z );
// returns 6.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Copy in reverse order every other value from `x1` into `y1`...
zcopy( 2, x1, -2, y1, 1 );

var z = y0.get( 2 );
// returns <Complex128>

var re = real( z );
// returns 7.0

var im = imag( z );
// returns 8.0
```

#### zcopy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Copies values from `x` into `y` using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to copy every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy.ndarray( 2, x, 2, 1, y, -1, y.length-1 );

var z = y.get( y.length-1 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   `zcopy()` corresponds to the [BLAS][blas] level 1 function [`zcopy`][zcopy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
import zcopy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-zcopy@v0.1.1-deno/mod.js';

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex128', rand );
console.log( x.get( 0 ).toString() );

var y = filledarrayBy( 10, 'complex128', rand );
console.log( y.get( 0 ).toString() );

// Copy elements from `x` into `y` starting from the end of `y`:
zcopy( x.length, x, 1, y, -1 );
console.log( y.get( y.length-1 ).toString() );
```

</section>

<!-- /.examples -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zcopy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zcopy

[test-image]: https://github.com/stdlib-js/blas-base-zcopy/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/blas-base-zcopy/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-zcopy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-zcopy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-zcopy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-zcopy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-zcopy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-zcopy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-zcopy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-zcopy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-zcopy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-zcopy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-zcopy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-zcopy/main/LICENSE

[blas]: http://www.netlib.org/blas

[zcopy]: https://www.netlib.org/lapack/explore-html/d5/d2b/group__copy_gaca1a115319081adeb0a9b80ec37ce626.html#gaca1a115319081adeb0a9b80ec37ce626

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

</section>

<!-- /.links -->
