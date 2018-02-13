<?php
	get_header();
?>

<?php
	$query = new WP_Query(array('post_type' => 'project', 'orderby' => 'menu_order'));

	if ($query->have_posts()):
		while ($query->have_posts()):
			$query->the_post();



			endwhile;
		endif;
?>

<?php
	get_footer();
?>
