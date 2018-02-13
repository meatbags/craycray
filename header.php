<!DOCTYPE html>

<!-- site by xavierburrow.com -->

<html lang="en">
<head>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo(); ?>">
	<meta name='keywords' content='Casting Guild Australia, Casting, Casting Guild of Australia'>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
	<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
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

	<!-- case noscript, open all interactive tabs, rm scripted elements -->
	<noscript>
    <style>
			.section__body {
				height: auto;
			}
			.noscript-hide {
				display: none;
			}
		</style>
  </noscript>
</head>
<body>

<?php get_template_part('loading'); ?>

<div class="content">
	<div class="wrapper">
