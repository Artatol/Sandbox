<?php

namespace App\Presenters;

use Nette,
	App\Model;


/**
 * Base presenter for all application presenters.
 */
abstract class BasePresenter extends Nette\Application\UI\Presenter {

	/** @var \WebLoader\LoaderFactory @inject */
	public $webLoader;

	/** @return CssLoader */
	protected function createComponentCss() {
		return $this->webLoader->createCssLoader('default');
	}

	/** @return JavaScriptLoader */
	protected function createComponentJs() {
		return $this->webLoader->createJavaScriptLoader('default');
	}

}