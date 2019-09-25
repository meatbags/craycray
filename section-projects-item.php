<?php
function getColumn($projects, $n) {
  $len = count($projects);
  for ($i=0; $i<$len; $i++) :
    $project = $projects[$i];
    if ($i % 3 === $n) :
      $pid = $project->ID;
      $title = $project->post_title;
      $type = get_field('menu_type', $pid);
      $image1 = get_field('menu_image', $pid);
      $image2 = get_field('hover_image', $pid);
      $sequence = get_field('image_sequence', $pid);
      $permalink = get_the_permalink($pid);
      $cats = get_the_category($pid);
      $id = 'project-' . $pid;
      $seqClass = 'sequence-' . $pid;
      $imgSize = 'medium_large';
      ?>
      <div data-menu-index='<?php echo $i; ?>' class='item <?php
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
<?php
    endif;
  endfor;
}
