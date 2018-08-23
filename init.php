<?php
/*
Plugin Name: Really simple editor
Plugin URI: http://ultimatemember.com/
Description: Really simple way to edit your front-end
Version: 1.0.0
Author: RogierLankhorst, willemvanderveen
*/

//plugins_loaded


defined( 'ABSPATH' ) or die( 'no access' );

// is user logged in else exit


register_activation_hook( __FILE__ , 'rsed_activate' );
register_deactivation_hook(__FILE__, 'rsed_deactivate');

function rsed_activate () {

}


function rsed_deactivate () {
    
}


class rsed_Master {

    public $alterContent;

    function __construct() {

        define('rsed_plugin', plugins_url() . '/Really_simple_editor');
        define('rsed_js', rsed_plugin . '/assets/js/');
        define('rsed_css', rsed_plugin . '/assets/css/');

        require_once 'core/alterContent.php';

        $this->alterContent  = new rsed_alterContent();

    }

}


add_action( 'plugins_loaded', 'start_plugin' );

function start_plugin () {

    if (current_user_can('editor') || current_user_can('administrator')) {  // can user edit a post  // check via capabilities
        global $rsed_Master;               // static
        $rsed_Master = new rsed_Master();
    }

}



// https://github.com/rlankhorst/complianz-gdpr




