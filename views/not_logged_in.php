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
	<h3><strong>Login</strong></h3>
</div>

	<div class="form">
	<form method="post" action="index.php" name="loginform">
		<label for="user_name"><?php echo WORDING_USERNAME; ?></label>
		<input id="user_name" type="text" name="user_name" required />
		<label for="user_password"><?php echo WORDING_PASSWORD; ?></label>
		<input id="user_password" type="password" name="user_password" autocomplete="off" required />
		<input type="checkbox" id="user_rememberme" name="user_rememberme" value="1" />
		<label for="user_rememberme"><?php echo WORDING_REMEMBER_ME; ?></label>
		<input class="btn btn-info" type="submit" name="login" value="<?php echo WORDING_LOGIN; ?>" />
	</form>

	<a href="register.php"><?php echo WORDING_REGISTER_NEW_ACCOUNT; ?></a>
	<a href="password_reset.php"><?php echo WORDING_FORGOT_MY_PASSWORD; ?></a>
	</div>
</div>

</div>

<?php include('_footer.php'); ?>
