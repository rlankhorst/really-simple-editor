<?php

/**
 * Plugin Name: Really Simple Editor
 * Plugin URI: https://www.really-simple-plugins.com
 * Description: A completely wysiwyg front end editing experience
 * Version: 1.0.0
 * Text Domain: really-simple-editor
 * Domain Path: /languages
 * Author: Willem van der Veen, Rogier Lankhorst
 * Author URI: https://really-simple-plugins.com
 * License: GPL2
 */

/*  Copyright 2018  Rogier Lankhorst  (email : rogier@really-simle-plugins.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
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

    public $alterContent;
    // static public $BackendSettings;

    function __construct() {

        define('rsed_version', 1.0);
        define('rsed_plugin', plugin_dir_url(__FILE__));
        define('rsed_js', rsed_plugin . '/assets/js/');
        define('rsed_css', rsed_plugin . '/assets/css/');
        require_once(ABSPATH.'wp-admin/includes/plugin.php');
        $plugin_data = get_plugin_data( __FILE__ );
        define('rsed_version', $plugin_data['Version'] );

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
