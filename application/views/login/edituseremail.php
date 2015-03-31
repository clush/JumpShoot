<div class="content">
    <h1>Change your email adress</h1>

    <!-- echo out the system feedback (error and success messages) -->
    <?php $this->renderFeedbackMessages(); ?>

    <form action="<?php echo URL; ?>login/edituseremail_action" method="post">
        <label>New email adress:</label>
        <input type="text" name="user_email" required />
<<<<<<< HEAD
        <input type="submit" value="Submit" name="submit" />
=======
        <input type="submit" value="Submit" />
>>>>>>> origin/master
    </form>
</div>
