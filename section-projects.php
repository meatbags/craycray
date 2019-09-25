<?php
  include_once("section-projects-item.php");
  $query = new WP_Query(array('posts_per_page' => -1, 'post_type' => 'project', 'orderby' => 'menu_order'));
?>

<div class='projects'>
  <div class='projects__inner'>
    <div class='column'>
      <?php getColumn($query->posts, 0); ?>
    </div>
    <div class='column'>
      <?php getColumn($query->posts, 1); ?>
    </div>
    <div class='column'>
      <?php getColumn($query->posts, 2); ?>
    </div>
  </div>
</div>
