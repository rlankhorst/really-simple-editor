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

register_activation_hook( __FILE__ , 'rsed_activate' );
register_deactivation_hook(__FILE__, 'rsed_deactivate');
add_action("after_switch_theme", "rsed_theme_switch");

function rsed_activate () {
   add_action('admin_init', 'rsed_init');
   update_option('rsed_toggle_editor', 'on');
}

function rsed_deactivate () {
    delete_option('rsed_default_thumbnail_id');
    delete_option('rsed_compatibility_popup_dismissed');
}

function rsed_init () {
    rsed_Master::$BackendSettings->parse_CMB2_boxes();
}

function rsed_theme_switch () {
    add_action('admin_init', 'rsed_init');
    delete_option('rsed_compatibility_popup_dismissed');
}


class rsed_Master {

    static public $alterContent;
    static public $BackendSettings;
    static public $PopupWarning;
    static public $newPost;

    function __construct() {

        require_once 'core/alterContent.php';
        require_once 'core/newPost.php';
        require_once 'admin/backendSettings.php';
        require_once 'admin/popup_warning.php';

        if (  !is_admin() && current_user_can('edit_posts') && get_option('rsed_toggle_editor') != 'off' ) {
            rsed_Master::$alterContent  = new rsed_alterContent();
            rsed_Master::$newPost = new rsed_newPost();
        }

        rsed_Master::$BackendSettings  = new rsed_BackendSettings();

        if ( is_admin() ) {
            rsed_Master::$PopupWarning = new PopupWarning();
        }

    }

}

// plugin initializes here
define('rsed_pluginFile', __FILE__);
require_once 'core/constants.php';
require_once 'core/switchOffEditor.php';
require_once 'core/placeholderImg_removal.php';

add_action( 'plugins_loaded', 'rsed_start_plugin', 9 ,1);

function rsed_start_plugin () {

    if ( !is_admin() ) {
        new rsed_switchOffEditor();
    }

    $rsed_Master = new rsed_Master();
}



