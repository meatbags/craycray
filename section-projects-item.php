<?php
  $title = get_the_title();
  $type = get_field('menu_type');
  $img = get_field('menu_image');
  $hover = get_field('hover_image');
  //$desc = get_field('description');
  //$video = get_field('video');
  //$gallery = get_field('gallery');
  //$links = get_field('links');
?>

<div class='item'>
  <div class='item__inner <?php echo $type; ?>'>
    <?php if ($type == 'image_hover'): ?>
      <img class='hover' src='<?php echo $img['sizes']['medium']; ?>' />
      <img class='hover' src='<?php echo $hover['sizes']['medium']; ?>' />
    <?php else: ?>
      <img src='<?php echo $img['sizes']['medium']; ?>' />
    <?php endif; ?>
  </div>
</div>
