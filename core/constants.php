<?php

define('rsed_url', plugin_dir_url(rsed_pluginFile));
define('rsed_path', plugin_dir_path(rsed_pluginFile));
define('rsed_plugin', plugin_basename(rsed_pluginFile));
define('rsed_plugin_file', rsed_pluginFile);

define('rsed_js', rsed_url . '/assets/js/');
define('rsed_css', rsed_url . '/assets/css/');

require_once(ABSPATH.'wp-admin/includes/plugin.php');
$rsed_plugin_data = get_plugin_data( rsed_pluginFile );
define('rsed_version', $rsed_plugin_data['Version'] );