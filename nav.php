<?php
  $dir = get_template_directory_uri();
  $home = get_site_url();
  $cats = get_categories(array('orderby' => 'menu_order'));
  $excludeCats = array('Featured', 'Uncategorised');
?>

<div class='nav'>
  <div class='nav__inner'>
    <div class='nav__inner__third'>
      <?php if (!is_home()): ?>
        <div class='nav-item'>
          <div class='nav-item__inner home-button'><a href='<?php echo $home; ?>'>&larr; Back</a></div>
        </div>
      <?php else: ?>
        <div class='nav-item'>
          <div class='nav-item__inner'>
            <a target='_blank' href='https://www.instagram.com/bestieboyberlin/'>Instagram</a>
          </div>
        </div>
      <?php endif; ?>
    </div>
    <div class='nav__inner__third'>
      <div class='nav-logo'>
        <img class='eye-ray display-none' src='<?php //echo $dir . '/lib/img/eye_ray.png' ?>' />
        <img class='eye-glow display-none' src='<?php echo $dir . '/lib/img/2_eye_drip.png'?>' />
        <img class='eye-pupil display-none' src='<?php echo $dir . '/lib/img/2_eye_glow.png'?>' alt='logo-eye' />
        <img class='eye-base display-none' src='<?php echo $dir . '/lib/img/2_eye_base.png'?>' />
      </div>
    </div>
    <div class='nav__inner__third'>
      <?php
          if (is_home()):
            foreach($cats as $cat):
              if ($cat->parent == 0 && !in_array($cat->name, $excludeCats)):
            ?>
                <div class='nav-item cat-parent' data-name='.parent-<?php echo $cat->slug; ?>' data-filter='.filter-<?php echo $cat->slug; ?>'>
                  <div class='nav-item__inner'>
                    <?php echo $cat->name; ?>
                  </div>
                </div>
            <?php
              endif;
            endforeach;
          endif;
        ?>
    </div>
  </div>
</div>

<div class='drop-down'>
  <div class='drop-down__inner'>
    <?php foreach($cats as $cat):
      if (!in_array($cat->name, $excludeCats) && $cat->parent != 0):
        $parent = explode('/', get_category_parents($cat->term_id, false, '/', true))[0];
        ?>
        <div class='drop-down-item display-none hash-<?php echo $cat->slug; ?> parent-<?php echo $parent; ?>' data-parent='.parent-<?php echo $parent; ?>' data-hash='<?php echo $cat->slug; ?>' data-filter='.filter-<?php echo $cat->slug; ?>'>
          <?php echo $cat->name; ?>
        </div>
    <?php endif;
      endforeach; ?>
  </div>
</div>
