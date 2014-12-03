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
	<h3><strong>Reset Password</strong></h3>
</div>

<div class="form">

<?php if ($login->passwordResetLinkIsValid() == true) { ?>
<form method="post" action="password_reset.php" name="new_password_form">
    <input type='hidden' name='user_name' value='<?php echo $_GET['user_name']; ?>' />
    <input type='hidden' name='user_password_reset_hash' value='<?php echo $_GET['verification_code']; ?>' />

    <label for="user_password_new"><?php echo WORDING_NEW_PASSWORD; ?></label>
    <input id="user_password_new" type="password" name="user_password_new" pattern=".{6,}" required autocomplete="off" />

    <label for="user_password_repeat"><?php echo WORDING_NEW_PASSWORD_REPEAT; ?></label>
    <input id="user_password_repeat" type="password" name="user_password_repeat" pattern=".{6,}" required autocomplete="off" />
    <input type="submit" name="submit_new_password" value="<?php echo WORDING_SUBMIT_NEW_PASSWORD; ?>" />
</form>
<!-- no data from a password-reset-mail has been provided, so we simply show the request-a-password-reset form -->
<?php } else { ?>
<form method="post" action="password_reset.php" name="password_reset_form">
    <label for="user_name"><?php echo WORDING_REQUEST_PASSWORD_RESET; ?></label>
    <input id="user_name" type="text" name="user_name" required />
    <input class="btn btn-info" type="submit" name="request_password_reset" value="<?php echo WORDING_RESET_PASSWORD; ?>" />
</form>
<?php } ?>

<a href="index.php"><?php echo WORDING_BACK_TO_LOGIN; ?></a>

</div>
</div>
</div>

<?php include('_footer.php'); ?>
