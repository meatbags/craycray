<?php
function echo_projects($arr) {
  foreach ($arr as $p) {
    echo $p;
  }
}

$query_projects = new WP_Query(array('post_type' => 'project', 'orderby' => 'menu_order'));

if ($query_projects->have_posts()):
  // create project columns

  $column_a = array();
  $column_b = array();
  $column_c = array();
  $i = 0;

  while ($query_projects->have_posts()) {
    $query_projects->the_post();
    $mod = $i % 3;
    $res = "<div class='project'>" . get_the_title() . "</div>";

    if ($mod == 0):
      array_push($column_a, $res);
    elseif ($mod == 1):
      array_push($column_b, $res);
    else:
      array_push($column_c, $res);
    endif;

    $i++;
  }
?>

<div class='projects'>
  <div class='projects__inner'>
    <div class='column'>
      <?php echo_projects($column_a); ?>
    </div>
    <div class='column'>
      <?php echo_projects($column_b); ?>
    </div>
    <div class='column'>
      <?php echo_projects($column_c); ?>
    </div>
  </div>
</div>

<?php endif; ?>
