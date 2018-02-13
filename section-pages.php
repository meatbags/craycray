<?php
$query_pages = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order', 'post_status' => 'publish'));

if ($query_pages->have_posts()):
  ?>

  <div class='pages'>
    <?php
    while ($query_pages->have_posts()):
      $query_pages->the_post();
    ?>
      <div class='page'>
        <div class='page__inner'>
          <div class='page__inner__title'><?php the_title(); ?></div>
          <div class='page__inner__content'><?php the_content(); ?></div>
        </div>
      </div>
    <?php
    endwhile;
    ?>
  </div>

  <?php
endif;
?>
