<?php

namespace Artatol;

/**
 * JsMinFilter
 *
 * @author Martin Charouzek
 * @license MIT
 */

class JsMinFilter {

	public function __invoke($code, \WebLoader\Compiler $loader, $file) {
		return \JSMin::minify($code);
	}

}
