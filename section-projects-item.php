<?php
  $title = get_the_title();
  $type = get_field('menu_type');
  $image1 = get_field('menu_image');
  $image2 = get_field('hover_image');
  $sequence = get_field('image_sequence');
  $permalink = get_the_permalink();
  $cats = get_the_category();
  $id = 'project-' . get_the_ID();
  $seqClass = 'sequence-' . get_the_ID();
  $imgSize = 'medium_large';
?>

<div class='item fade-out <?php
    $featured = false;
    foreach($cats as $cat){
      if ($cat->name == 'Featured') {
        $featured = true;
      }
      echo 'filter-' . $cat->slug . ' ';
    }
    if (!$featured) {
      echo ' display-none';
    }
  ?>'>
  <a href='<?php echo $permalink; ?>'>
    <div class='item__inner loading <?php echo $type; ?>' data-id='#<?php echo $id; ?>' data-class='.<?php echo $seqClass; ?>'>
      <?php if ($type == 'image_static'): ?>
        <img src='<?php echo $image1['sizes'][$imgSize]; ?>' />
      <?php elseif ($type == 'image_hover'): ?>
        <img class='hover' src='<?php echo $image1['sizes'][$imgSize]; ?>' />
        <img class='hover defer-load' data-src='<?php echo $image2['sizes'][$imgSize]; ?>' />
      <?php elseif ($type == 'image_sequence'):
        $i = 0;
        foreach ($sequence as $img):
          if ($i++ == 0): ?>
          <img class='sequence active <?php echo $seqClass; ?>' src='<?php echo $img['sizes'][$imgSize]; ?>' />
        <?php else: ?>
          <img class='sequence defer-load <?php echo $seqClass; ?>' data-src='<?php echo $img['sizes'][$imgSize]; ?>' />
      <?php endif; endforeach; endif; ?>
      <div class='item__inner__title'>
        <?php echo $title; ?>
      </div>
    </div>
  </a>
</div>
