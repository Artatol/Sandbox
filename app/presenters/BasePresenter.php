<?php

namespace App\Presenters;

use Nette,
	App\Model;


/**
 * Base presenter for all application presenters.
 */
abstract class BasePresenter extends Nette\Application\UI\Presenter
{
	/** @persistent */
	public $locale;

	/** @var \Kdyby\Translation\Translator @inject */
	public $translator;

	/** @var \WebLoader\LoaderFactory @inject */
	public $webLoader;

	/** @var Nette\Mail\SmtpMailer @inject */
	public $mailer;

	/** @return CssLoader */
	protected function createComponentCss() {
		return $this->webLoader->createCssLoader('default');
	}

	/** @return JavaScriptLoader */
	protected function createComponentJs() {
		return $this->webLoader->createJavaScriptLoader('default');
	}

}
