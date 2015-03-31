<?php 
	$I = new AcceptanceTester($scenario);
	$I->wantTo('edit username');
	$I->amOnUrl('http://jump-shoot.it.dh-karlsruhe.de');
	$I->amOnPage('/login/index');
	$I->fillField('user_name','Peter');
	$I->fillField('user_password','123456');
	$I->click('submit');
	$I->amOnPage('/login/editusername');
	$I->fillField('user_name','Max');
	$I->click('submit');
	$I->see('Your username has been changed successfully.');
	$I->amOnPage('/login/logout');
	$I->amOnPage('/login/index');
	$I->fillField('user_name','Max');
	$I->fillField('user_password','123456');
	$I->click('submit');
	$I->amOnPage('/login/editusername');
	$I->fillField('user_name','Max');
	$I->click('submit');
	$I->see('Sorry, that username is the same as your current one.');
?>
