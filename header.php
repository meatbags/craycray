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
	<!--<link href="https://fonts.googleapis.com/css?family=Condiment" rel="stylesheet">-->
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/lib/icons/favicon.png">
	<?php wp_head(); ?>

	<script>
		/* <![CDATA[ */
			var themePath = '<?php echo get_template_directory_uri(); ?>';
			var ajaxUrl = '<?php //echo admin_url('admin-ajax.php'); ?>';
			var homeURL = '<?php echo get_site_url(); ?>';
			var pageTitle = '<?php echo get_the_title(); ?>';
			var isHome = '<?php echo is_home(); ?>';
		/* ]]> */
	</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63871746-2"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-63871746-2');
	</script>

	<noscript>
    <style></style>
  </noscript>
</head>
<body>

<?php get_template_part('nav'); ?>

<div class="wrapper">
	<div class="content">
