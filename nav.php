<?php
  $dir = get_template_directory_uri();
  $home = get_site_url();
?>

<div class='nav'>
  <div class='nav__inner'>
    <div class='nav__inner__third'>
      <div class='nav-item'>
        <div class='nav-item__inner'><a href='<?php echo $home; ?>'>Home</a></div>
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
        <div class='nav-item__inner'><a href='<?php echo $home; ?>'>Work</a></div>
      </div>
      <div class='nav-item'>
        <div class='nav-item__inner'><a target='_blank' href='https://www.instagram.com/bestieboy_director/'>Instagram</a></div>
      </div>
    </div>
  </div>
</div>
