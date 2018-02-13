<!DOCTYPE html>

<!-- site by xavierburrow.com -->

<html lang="en">
<head>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo(); ?>">
	<meta name='keywords' content='Neirin Best'>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
	<link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet">
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/lib/icons/favicon.png">
	<?php wp_head(); ?>

	<script>
		/* <![CDATA[ */
			var themePath = '<?php echo get_template_directory_uri(); ?>';
			var ajaxUrl = '<?php //echo admin_url('admin-ajax.php'); ?>';
			var pageTitle = '<?php echo get_the_title(); ?>';
			var isHome = '<?php echo is_home(); ?>';
		/* ]]> */
	</script>

	<noscript>
    <style></style>
  </noscript>
</head>
<body>

<div class="wrapper">
	<div class="content">
