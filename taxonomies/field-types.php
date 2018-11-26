<?php
defined( 'ABSPATH' ) or die( 'no access' );

/*
 *
 * field types which are supported by the plugin
 * These are fieldtypes from CMB2. If a theme uses CMB2 to include fields, these are supported.
 *
 */
$rsed_field_types = [
    'title',
    'text',
    'text_small',
    'text_medium',
    'text_email',
    'text_url',
    'text_money',
    'textarea',
    'textarea_small',
    'textarea_code',
    'wysiwyg'
];


// Full list for reference:
// https://github.com/CMB2/CMB2/wiki/Field-Types

// title An arbitrary title field *
// text
// text_small
// text_medium
// text_email
// text_url
// text_money
// textarea
// textarea_small
// textarea_code
// text_time Time picker
// select_timezone Time zone dropdown
// text_date Date Picker
// text_date_timestamp Date Picker (UNIX timestamp)
// text_datetime_timestamp Text Date/Time Picker Combo (UNIX timestamp)
// text_datetime_timestamp_timezone Text Date/Time Picker/Time zone Combo (serialized DateTime object)
// hidden Hidden input type
// colorpicker Color picker
// radio *
// radio_inline *
// taxonomy_radio * Default Category/Tag/Taxonomy metaboxes replacement.
// taxonomy_radio_inline * Default Category/Tag/Taxonomy metaboxes replacement.
// taxonomy_radio_hierarchical * Default Category/Tag/Taxonomy metaboxes replacement, displayed in a hierarchical fashion (indented).
// select
// taxonomy_select * Default Category/Tag/Taxonomy metaboxes replacement.
// checkbox *
// multicheck and multicheck_inline
// taxonomy_multicheck * Default Category/Tag/Taxonomy metaboxes replacement.
// taxonomy_multicheck_inline Default Category/Tag/Taxonomy metaboxes replacement.
// taxonomy_multicheck_hierarchical Default Category/Tag/Taxonomy metaboxes replacement, displayed in a hierarchical fashion (indented).
// wysiwyg (TinyMCE) *
// file Image/File upload *†
// file_list Image Gallery/File list management
// oembed Converts oembed urls (instagram, twitter, youtube, etc. oEmbed in the Codex)
// group Hybrid field that supports adding other fields as a repeatable group. *