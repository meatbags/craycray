<?php
  $title = get_the_title();
  $type = get_field('menu_type');
  $image1 = get_field('menu_image');
  $image2 = get_field('hover_image');
  $sequence = get_field('image_sequence');
  $permalink = get_the_permalink();
  $id = 'project-' . get_the_ID();
?>

<div class='item'>
  <a href='<?php echo $permalink; ?>'>
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
  </a>
</div>
