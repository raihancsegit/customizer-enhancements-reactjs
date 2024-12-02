<?php
/*
Plugin Name: React Customizer Control
Description: A WordPress Customizer control built with React.
Version: 1.0
Author: Your Name
*/

if (!defined('ABSPATH')) {
    exit;
}

// Register Customizer Setting and Control
function react_customizer_register($wp_customize) {
    $wp_customize->add_section('react_custom_section', array(
        'title'    => __('React Customizer Control', 'react-customizer'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('react_max_width', array(
        'default'           => 1200,
        'sanitize_callback' => 'absint',
        'transport'         => 'postMessage',
        'type'              => 'option', // Store as an option
    ));

    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'react_custom_control', array(
        'label'       => __('Maximum Site Width (px)', 'react-customizer'),
        'section'     => 'react_custom_section',
        'settings'    => 'react_max_width',
        'type'        => 'hidden',
        'description' => '<div id="react-control-root"></div>',
    )));
}
add_action('customize_register', 'react_customizer_register');

function react_customizer_enqueue() {
    wp_enqueue_script(
        'react-customizer-control',
        plugin_dir_url(__FILE__) . 'build/index.js',
        array('wp-element', 'customize-controls'),
        null,
        true
    );
}
add_action('customize_controls_enqueue_scripts', 'react_customizer_enqueue');

function react_customizer_live_preview() {
    wp_enqueue_script(
        'react-customizer-preview',
        plugin_dir_url(__FILE__) . 'build/live-preview.js',
        array('jquery', 'customize-preview'),
        null,
        true
    );
}
add_action('customize_preview_init', 'react_customizer_live_preview');

add_action('customize_save_after', function ($wp_customize) {
    $max_width = get_option('react_max_width');
    error_log('Current max width: ' . $max_width);
});

function react_customizer_styles() {
    $max_width = get_option('react_max_width', 1200); // Get the value from the database
    ?>
<style>
body {
    max-width: <?php echo esc_attr($max_width);
    ?>px;
    margin: 0 auto;
}
</style>
<?php
}
add_action('wp_head', 'react_customizer_styles');


?>