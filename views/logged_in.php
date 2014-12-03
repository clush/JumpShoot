<?php include('_header.php'); ?>

<div class="header">
	<ul class="nav nav-pills pull-right">
		<li><a href="http://193.196.7.22/">Home</a></li>
		<li><a href="http://193.196.7.22/about.php">About</a></li>
		<li><a href="index.php?logout"><?php echo WORDING_LOGOUT; ?></a></li>
	</ul>
	<h3 class="text-muted">JUMPSHOOT</h3>
</div>

<div class="jumbotron">
<div class="box">

<div class="user" style="text-align:center;"><?php
// if you need the user's information, just put them into the $_SESSION variable and output them here
echo WORDING_YOU_ARE_LOGGED_IN_AS . ": " . "<strong>". $_SESSION['user_name'] . "</strong>" . "<br />";
//echo WORDING_PROFILE_PICTURE . '<br/><img src="' . $login->user_gravatar_image_url . '" />;
?></div>
<?php
echo /*WORDING_PROFILE_PICTURE .*/ '<br/>' . "<img src=\"http://193.196.7.22/views/img/" . $_SESSION['avatar'] . ".png\" />";
?>

<div style="text-align:center;">
    <a href="edit.php"><?php echo WORDING_EDIT_USER_DATA; ?></a>
</div>

<a class="btn btn-info" href="http://193.196.7.22/pong">PLAY!</a>
</div>
</div>

<?php include('_footer.php'); ?>
