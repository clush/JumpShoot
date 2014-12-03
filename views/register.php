<?php include('_header.php'); ?>

<div class="container theme-showcase">

<!-- <div class="header">
	<ul class="nav nav-pills pull-right">
		<li><a href="http://193.196.7.22/">Home</a></li>
		<li><a href="http://193.196.7.22/about.php">About</a></li>
	</ul>
	<h3 class="text-muted">JUMPSHOOT</h3>
</div> -->

<div class="jumbotron">

<div class="title">
	<h3><strong>Registration</strong></h3>
</div>

<div class="form">
	
<!-- show registration form, but only if we didn't submit already -->
<?php if (!$registration->registration_successful && !$registration->verification_successful) { ?>
<form method="post" action="register.php" name="registerform">
    <label for="user_name"><?php echo WORDING_REGISTRATION_USERNAME; ?></label>
    <input id="user_name" type="text" pattern="[a-zA-Z0-9]{2,64}" name="user_name" required />

    <label for="user_email"><?php echo WORDING_REGISTRATION_EMAIL; ?></label>
    <input id="user_email" type="email" name="user_email" required />

    <label for="user_password_new"><?php echo WORDING_REGISTRATION_PASSWORD; ?></label>
    <input id="user_password_new" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />

    <label for="user_password_repeat"><?php echo WORDING_REGISTRATION_PASSWORD_REPEAT; ?></label>
    <input id="user_password_repeat" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
	
	<label>Choose an avatar for your profile</label><br />
	<div class="avatarelinks">
	<input type="radio" name="avatar" value="avatar1" checked="checked">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar1.png" /><br />
	<input type="radio" name="avatar" value="avatar2">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar2.png" /><br />
	</div>
	<div class="avatarerechts">
	<input type="radio" name="avatar" value="avatar3">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar3.png" /><br />
	<input type="radio" name="avatar" value="avatar4">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar4.png" /><br />
	</div>
	
    <img src="tools/showCaptcha.php" alt="captcha" />
	<br />
    <label><?php echo WORDING_REGISTRATION_CAPTCHA; ?></label>
    <input id="register_captcha" type="text" name="captcha" required />

    <input class="btn btn-info" type="submit" name="register" value="<?php echo WORDING_REGISTER; ?>" />
</form>
<?php } ?>

<a href="index.php"><?php echo WORDING_BACK_TO_LOGIN; ?></a>

<?php include('_footer.php'); ?>

</div>
</div>

</div>
