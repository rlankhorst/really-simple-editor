<?php
/*
Plugin Name: Really simple editor
Plugin URI: http://ultimatemember.com/
Description: Really simple way to edit your front-end
Version: 1.0.0
Author: RogierLankhorst, willemvanderveen
*/


defined( 'ABSPATH' ) or die( 'no access' );

// development functions
require_once 'developementUtils.php';

register_activation_hook( __FILE__ , 'rsed_activate' );
register_deactivation_hook(__FILE__, 'rsed_deactivate');

function rsed_activate () {
    // add_action('admin_menu', 'rsed_initialSetup');
   add_action('admin_init', 'rsed_init');
}

function rsed_init () {
    // $rsed_Master::$BackendSettings->parse_CMB2_boxes;
}


function rsed_deactivate () {
    
}


class rsed_Master {

    static public $alterContent;
    // static public $BackendSettings;

    function __construct() {

        define('rsed_version', 1.0);
        define('rsed_plugin', plugin_dir_url(__FILE__));
        define('rsed_js', rsed_plugin . '/assets/js/');
        define('rsed_css', rsed_plugin . '/assets/css/');

        require_once 'core/alterContent.php';
        require_once 'admin/backendSettings.php';

        if (  !is_admin() ) {
            rsed_Master::$alterContent  = new rsed_alterContent();
        }

        // if (  is_admin() ) {
        //     $this->BackendSettings  = new rsed_BackendSettings();
        // }

    }

}


add_action( 'plugins_loaded', 'start_plugin', 9 ,1);

function start_plugin () {

   if (current_user_can('editor') || current_user_can('administrator')) {  // can user edit a post  // check via capabilities

    $rsed_Master = new rsed_Master();

   }

}



add_action('delete_attachment', 'rsed_delete_attachment_cleanup');
// Need to clear a option when a user removes the placeholder svg, otherwise the SVG will not be reloaded.
function rsed_delete_attachment_cleanup ($attachment_id) {

    $thumbnail_id = get_option("rsed_default_thumbnail_id");

    if ($thumbnail_id == $attachment_id) {
        delete_option('rsed_default_thumbnail_id');
    }

}
