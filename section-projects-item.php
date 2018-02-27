<?php
  $title = get_the_title();
  $type = get_field('menu_type');
  $image1 = get_field('menu_image');
  $image2 = get_field('hover_image');
  $sequence = get_field('image_sequence');
  $video = get_field('video');
  $gallery = get_field('gallery');
  $description = get_field('description');
  $links = get_field('links');
  $id = 'project-' . get_the_ID();
?>

<div class='item'>
  <div class='item__inner <?php echo $type; ?>' data-id='#<?php echo $id; ?>'>
    <?php if ($type == 'image_static'): ?>
      <img src='<?php echo $image1['sizes']['large']; ?>' />
    <?php elseif ($type == 'image_hover'): ?>
      <img class='hover' src='<?php echo $image1['sizes']['large']; ?>' />
      <img class='hover' src='<?php echo $image2['sizes']['large']; ?>' />
    <?php elseif ($type == 'image_sequence'):
      $i = 0;
      foreach ($sequence as $img): ?>
      <img class='sequence <?php if ($i++ == 0){ echo 'active'; } ?>' src='<?php echo $img['sizes']['large']; ?>' />
    <?php endforeach; endif; ?>
  </div>
</div>

<div class='display-none' id='<?php echo $id; ?>'>
  <div class='project-pane__inner__left'>
    <div class='back-to-projects'>&larr; BACK.</div>
    <div class='title'>
      <?php echo $title; ?>.
    </div>
  </div>
  <div class='project-pane__inner__right'>
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
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
