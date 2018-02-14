<?php
  $dir = get_template_directory_uri();
?>

<div class='nav'>
  <div class='nav__inner'>
    <div class='nav__inner__third'>
      <div class='nav-item'>
        <div class='nav-item__inner'>Home</div>
      </div>
    </div>
    <div class='nav__inner__third'>
      <div class='nav-logo'>
        <img class='eye-ray display-none' src='<?php echo $dir . '/lib/img/eye_ray.png'?>' />
        <img class='eye-glow display-none' src='<?php echo $dir . '/lib/img/eye_glow.png'?>' />
        <img class='eye-base display-none' src='<?php echo $dir . '/lib/img/eye_base.png'?>' />
        <img class='eye-pupil display-none' src='<?php echo $dir . '/lib/img/eye_pupil.png'?>' />
      </div>
    </div>
    <div class='nav__inner__third'>
      <div class='nav-item'>
        <div class='nav-item__inner'>Work</div>
      </div>
      <div class='nav-item'>
        <div class='nav-item__inner'>Info</div>
      </div>
      <div class='nav-item'>
        <div class='nav-item__inner'>Instagram</div>
      </div>
    </div>
  </div>
</div>
