<?php
	get_header();

	// project grid

	$query_projects = new WP_Query(array('post_type' => 'project', 'orderby' => 'menu_order'));

	if ($query_projects->have_posts()):
		while ($query_projects->have_posts()):
			$query_projects->the_post();
			get_template_part('section-project');
		endwhile;
	endif;

	// page stack

	$query_pages = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order', 'post_status' => 'publish'));

	if ($query_pages->have_posts()):
		while ($query_pages->have_posts()):
			$query_pages->the_post();
			get_template_part('section-page');
		endwhile;
	endif;

	get_footer();
?>
