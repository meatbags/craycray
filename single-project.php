<?php
  get_header();
  $title = get_the_title();
  $video = get_field('video');
  $gallery = get_field('gallery');
  $description = get_field('description');
  $links = get_field('links');
  $id = 'project-' . get_the_ID();
?>

<div class='project' id='<?php echo $id; ?>'>
  <div class='project__inner'>
    <div class='project__inner__left'>
      <?php if ($video): ?>
        <div class='video'>
          <?php echo $video; ?>
        </div>
      <?php endif;
        if ($gallery):
          foreach ($gallery as $img): ?>
        <div class='image'>
          <img src='<?php echo $img['sizes']['large']; ?>' />
        </div>
      <?php
          endforeach;
        endif; ?>
    </div>
    <div class='project__inner__right'>
      <div class='title'>
        <?php echo $title; ?>.
      </div>
      <?php if ($description): ?>
      <div class='description'>
        <?php echo $description; ?>
      </div>
      <?php endif;
        if ($links): ?>
      <div class='links'>
        <?php foreach ($links as $link): ?>
          <div class='link'>
            <a href='<?php echo $link['url']; ?>'><?php echo $link['label']; ?></a>
          </div>
        <?php endforeach; ?>
      </div>
      <?php endif; ?>
    </div>
  </div>
</div>

<div class='featured'>
  <div class='featured__inner'>
    <?php
      $feat = new WP_Query(array('posts_per_page' => 4, 'post_type' => 'project', 'category_name' => 'Featured', 'post__not_in' => array(get_the_ID())));
      $imgSize = 'medium';

      if ($feat->have_posts()):
        while ($feat->have_posts()):
          global $post;
          $feat->the_post();
          $title = get_the_title();
          $url = get_the_permalink();
          $image = get_field('menu_image');
          $sequence = get_field('image_sequence');
          ?>
      <div class='feat-item'>
        <a href="<?php echo $url; ?>">
          <div class='feat-item__inner'>
            <div class='feat-mask'>
              <?php echo get_the_title(); ?>
            </div>
            <?php if ($image != ''): ?>
              <img src='<?php echo $image['sizes'][$imgSize]; ?>' />
            <?php elseif ($sequence): ?>
              <img src='<?php echo $sequence[0]['sizes'][$imgSize];?>' />
            <?php endif; ?>
          </div>
        </a>
      </div>
    <?php endwhile;
      endif;
      wp_reset_query();
    ?>
  </div>
</div>

<?php get_footer(); ?>
