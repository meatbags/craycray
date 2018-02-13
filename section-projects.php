<?php
  $query = new WP_Query(array('post_type' => 'project', 'orderby' => 'menu_order'));

  function getColumn($projects, $n) {
    $i = 0;
    foreach ($projects as $project) {
      if ($i++ % 3 == $n) {
        global $post;
        $post = $project;
        get_template_part('section-projects-item');
      }
    }
  }
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
