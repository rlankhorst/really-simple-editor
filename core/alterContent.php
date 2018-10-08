<?php

class rsed_alterContent {

    public $metaID = 1;

    function __construct() {

        add_filter( 'the_content',  array($this, 'addToContent'));
        add_filter( 'get_post_metadata', array($this, 'addToMeta'), 100, 4 );
        add_action( 'wp_enqueue_scripts',array($this,'enqueue') );
    }

    // adding a div to main content so we can manipulate it via javascript
    public function addToContent( $content ) { 

        global $post;
        if (!$post || !is_singular($post)) {
            return $content;
        }

        $settings = array (
            "tinymce" => array (
                "selector" => '#editor',
                "inline" => false
                )
            );

        $post_id = get_the_ID();

        $content = '<div class="rsed_editable">' . "<div id=\"mainDiv\" class=\"rsed_content rsed_post_{$post_id}\">" . $content . '</div>' . '</div>' . wp_editor($post->post_content, 'editor', $settings);

        return $content;
    }

    public function enqueue() {
        wp_enqueue_script('rsed_makeContentEditable', rsed_js . 'makeContentEditable.js',array('jquery'), rsed_version);
        wp_enqueue_style('rsed_makeContentEditable', rsed_css . 'makeContentEditable.css');
    }


    // adding div to the metadata so we can manipulate it via Javascript
    public function addToMeta ($metadata, $object_id, $meta_key, $single) {
        
        if (substr($meta_key, 0, 1) == '_') {
            return $metadata;
        }
          
        global $wpdb;
        $table = $wpdb->prefix . 'postmeta';
        
        $result = $wpdb->get_results( $wpdb->prepare("
        SELECT * FROM $table
        WHERE meta_key = %s ",
        $meta_key
        ));

        $optionFieldName = 'rsed_' . $meta_key;

        $isFieldEditable = get_option($optionFieldName);

        if (!$isFieldEditable) {
            return $result[0]->meta_value;
        }

        // each meta tag needs to have a 
        // div with a uniquely assigned ID
        $idNr = $this->metaID;
        $id = "rsed_{$idNr}";
        global $post;
        $post_id = get_the_ID();

        $this->metaID += 1;

        if ($isFieldEditable === 'wysiwyg') {
            return "<div class=\"rsed_meta_canUpdate rsed_{$meta_key}_unique123_{$post_id} rsed_hasTinyMCE\" id=\"" . $id . "\">" . $result[0]->meta_value . '</div>' . wp_editor($post->post_content, "editor_{$idNr}", $settings);
        } else {
            return "<div class=\"rsed_meta_canUpdate rsed_{$meta_key}_unique123_{$post_id}\" id=\"" . $id . "\">" . $result[0]->meta_value . '</div>';
        }
        
    }


}


// AJAX handlers
add_action('wp_ajax_autoSave_mainText', 'rsed_update_post_mainText');
add_action('wp_ajax_autoSave_meta', 'rsed_update_post_meta');

function rsed_update_post_mainText() {

    $html = wp_kses_post($_POST['html']);
    $post_ID = intval($_POST['post_ID']);

    $updated_post = array(
        'ID' =>             $post_ID,
        'post_content' =>   $html
    );

    wp_update_post($updated_post);
    exit;
}


function rsed_update_post_meta() {

    $html = wp_kses_post($_POST['html']);
    $post_ID = intval($_POST['post_ID']);
    $meta_key = strval($_POST['meta_key']);

    update_post_meta($post_ID, $meta_key, $html);
    exit;
}