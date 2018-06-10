<?php
/**
 * Plugin Name: JetPress for Gutenberg
 * Plugin URI: http://jetmenu.zemez.io/
 * Description:
 * Version:     1.0.0
 * Author:      Zemez
 * Author URI:  https://zemez.io/wordpress/
 * Text Domain: jet-press
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

define( 'JET_PRESS_FILE', __FILE__ );
define( 'JET_PRESS_PATH', plugin_dir_path( JET_PRESS_FILE ) );
define( 'JET_PRESS_URL', plugins_url( '/', JET_PRESS_FILE ) );
define( 'JET_PRESS_VERSION', '1.0.0' );

/**
 * Initialize plugin
 *
 * @return void
 */
function jet_press_init() {
	add_action( 'enqueue_block_editor_assets', 'jet_press_blocks' );
	add_action( 'wp_enqueue_scripts', 'jet_press_stylesheet' );
}

/**
 * Enqueue main stylesheet
 * @return [type] [description]
 */
function jet_press_stylesheet() {
	wp_enqueue_style(
		'jet-press',
		JET_PRESS_URL . 'assets/css/jet-press.css',
		array(),
		JET_PRESS_VERSION
	);
}

function jet_press_blocks() {

	wp_enqueue_script(
		'jet-press-blocks',
		JET_PRESS_URL . 'assets/js/main.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		JET_PRESS_VERSION
	);

	jet_press_stylesheet();

}

add_action( 'init', 'jet_press_init' );
