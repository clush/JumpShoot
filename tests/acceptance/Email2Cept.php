<?php 
	$I = new AcceptanceTester($scenario);
	$I->wantTo('edit useremail');
	$I->amOnUrl('http://jump-shoot.it.dh-karlsruhe.de');
	$I->amOnPage('/login/index');
	$I->fillField('user_name','Max');
	$I->fillField('user_password','123456');
	$I->click('submit');
	$I->amOnPage('/login/edituseremail');
	$I->fillField('user_email','kuehn_maximilian@web.de');
	$I->click('submit');
	$I->see('Your email address has been changed successfully.');
	$I->amOnPage('/login/logout');
	$I->amOnPage('/login/index');
	$I->fillField('user_name','Max');
	$I->fillField('user_password','123456');
	$I->click('submit');
	$I->amOnPage('/login/edituseremail');
	$I->fillField('user_email','kuehn_maximilian@web.de');
	$I->click('submit');
	$I->see('Sorry, that email address is the same as your current one.');
?>

