<?php

namespace Artatol;

/**
 * CSS Min filter
 *
 * @author Martin Charouzek
 * @license MIT
 */
class CssMinFilter {

	public function __invoke($code, \WebLoader\Compiler $loader, $file) {
		return \CssMin::minify($code);
	}

}