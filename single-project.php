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
      <div class='back-to-projects'>&larr; BACK.</div>
      <div class='title'>
        <?php echo $title; ?>.
      </div>
    </div>
    <div class='project__inner__right'>
      <?php if ($video): ?>
        <div class='video'>
          <?php echo $video; ?>
        </div>
      <?php endif;
        if ($gallery):
          foreach ($gallery as $img):
      ?>
        <div class='image'>
          <img src='<?php echo $img['sizes']['large']; ?>' />
        </div>
      <?php
          endforeach;
        endif;
        if ($description): ?>
        <div class='description'>
          <?php echo $description; ?>
        </div>
      <?php
        endif;
        if ($links): ?>
        <div class='links'>
          <?php foreach ($links as $link): ?>
            <div class='link'>
              <a href='<?php echo $link['url']; ?>'><?php echo $link['label']; ?></a>
            </div>
            <div class='link'>
              <a href='<?php echo $link['url']; ?>'><?php echo $link['label']; ?></a>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>
