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

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-zcopy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zcopy = require( '@stdlib/blas-base-zcopy' );
```

#### zcopy( N, x, strideX, y, strideY )

Copies values from `x` into `y`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy( x.length, x, 1, y, 1 );
// y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.
-   **y**: destination [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are copied into `y`. For example, to copy in reverse order every other value in `x` into the first `N` elements of `y`,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy( 2, x, -2, y, 1 );
// y => <Complex128Array>[ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Copy in reverse order every other value from `x1` into `y1`...
zcopy( 2, x1, -2, y1, 1 );
// y0 => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ]
```

#### zcopy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Copies values from `x` into `y` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to copy every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zcopy.ndarray( 2, x, 2, 1, y, -1, y.length-1 );
// y => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ]
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
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zcopy = require( '@stdlib/blas-base-zcopy' );

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

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/zcopy.h"
```

#### c_zcopy( N, \*X, strideX, \*Y, strideY )

Copies values from `X` into `Y`.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 0.0, 0.0, 0.0, 0.0 };

c_zcopy( 2, (void *)x, 1, (void *)y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[out] void*` output array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.

```c
void c_zcopy( const CBLAS_INT N, const void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY );
```

#### c_zcopy_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

Copies values from `X` into `Y` using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 0.0, 0.0, 0.0, 0.0 };

c_zcopy_ndarray( 2, (void *)x, 1, 0, (void *)y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[out] void*` output array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void c_zcopy_ndarray( const CBLAS_INT N, const void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/zcopy.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = -1;

    // Copy elements:
    c_zcopy( N, (void *)x, strideX, (void *)y, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }

    // Copy elements using alternative indexing semantics:
    c_zcopy_ndarray( N, (void *)x, -strideX, N-1, (void *)y, strideY, N-1 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-zcopy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-zcopy

[test-image]: https://github.com/stdlib-js/blas-base-zcopy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-zcopy/actions/workflows/test.yml?query=branch:main

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

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
