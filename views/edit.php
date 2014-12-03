<?php include('_header.php'); ?>

<div class="header">
	<ul class="nav nav-pills pull-right">
		<li><a href="http://193.196.7.22/">Home</a></li>
		<li><a href="http://193.196.7.22/about.php">About</a></li>
	</ul>
	<h3 class="text-muted">JUMPSHOOT</h3>
</div>

<div class="jumbotron">
<div class="box">

<!-- clean separation of HTML and PHP -->
<h2><?php echo $_SESSION['user_name']; ?> <?php echo WORDING_EDIT_YOUR_CREDENTIALS; ?></h2>

<!-- edit form for username / this form uses HTML5 attributes, like "required" and type="email" -->
<form method="post" action="edit.php" name="user_edit_form_avatar">
    <label for="avatar">Change avatar</label><br />
	
	<div class="avatarelinks">
    <input id="avatar" type="radio" name="avatar" value="avatar1">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar1.png" /><br />
	<input id="avatar" type="radio" name="avatar" value="avatar2">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar2.png" /><br />
	</div>
	<div class="avatarerechts">
	<input id="avatar" type="radio" name="avatar" value="avatar3">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar3.png" /><br />
	<input id="avatar" type="radio" name="avatar" value="avatar4">&nbsp;<img style="width:100px;" src="http://193.196.7.22/views/img/avatar4.png" /><br />
	</div>
	<input class="btn btn-sm btn-primary" type="submit" name="user_edit_submit_avatar" value="Change avatar" />
</form><hr/>

<!-- edit form for username / this form uses HTML5 attributes, like "required" and type="email" -->
<form method="post" action="edit.php" name="user_edit_form_name">
    <label for="user_name"><?php echo WORDING_NEW_USERNAME; ?></label>
    <input id="user_name" type="text" name="user_name" pattern="[a-zA-Z0-9]{2,64}" required /> (<?php echo WORDING_CURRENTLY; ?>: <?php echo $_SESSION['user_name']; ?>)
    <input class="btn btn-sm btn-primary" type="submit" name="user_edit_submit_name" value="<?php echo WORDING_CHANGE_USERNAME; ?>" />
</form><hr/>

<!-- edit form for user email / this form uses HTML5 attributes, like "required" and type="email" -->
<form method="post" action="edit.php" name="user_edit_form_email">
    <label for="user_email"><?php echo WORDING_NEW_EMAIL; ?></label>
    <input id="user_email" type="email" name="user_email" required /> (<?php echo WORDING_CURRENTLY; ?>: <?php echo $_SESSION['user_email']; ?>)
    <input class="btn btn-sm btn-primary" type="submit" name="user_edit_submit_email" value="<?php echo WORDING_CHANGE_EMAIL; ?>" />
</form><hr/>

<!-- edit form for user's password / this form uses the HTML5 attribute "required" -->
<form method="post" action="edit.php" name="user_edit_form_password">
    <label for="user_password_old"><?php echo WORDING_OLD_PASSWORD; ?></label>
    <input id="user_password_old" type="password" name="user_password_old" autocomplete="off" />

    <label for="user_password_new"><?php echo WORDING_NEW_PASSWORD; ?></label>
    <input id="user_password_new" type="password" name="user_password_new" autocomplete="off" />

    <label for="user_password_repeat"><?php echo WORDING_NEW_PASSWORD_REPEAT; ?></label>
    <input id="user_password_repeat" type="password" name="user_password_repeat" autocomplete="off" />

    <input class="btn btn-sm btn-primary" type="submit" name="user_edit_submit_password" value="<?php echo WORDING_CHANGE_PASSWORD; ?>" />
</form><hr/>

<!-- backlink -->
<a href="index.php"><?php echo WORDING_BACK_TO_LOGIN; ?></a>

</div>
</div>

<?php include('_footer.php'); ?>
