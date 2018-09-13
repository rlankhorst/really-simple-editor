<?php

class rsed_alterContent {

    public $metaID = 1;

    function __construct() {

        add_filter( 'the_content',  array($this, 'addToContent'));
        add_filter( 'get_post_metadata', array($this, 'addToMeta'), 100, 4 );
        
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

        $content = '<div class="rsed_editable">' . '<div id="mainDiv" class="rsed_content">' . $content . '</div>' . '</div>' . wp_editor($post->post_content, 'editor', $settings);

        wp_enqueue_script('rsed_makeContentEditable', rsed_js . 'makeContentEditable.js');
        wp_enqueue_style('rsed_makeContentEditable', rsed_css . 'makeContentEditable.css');

        return $content;
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

        $this->metaID += 1;

        return "<div class=\"rsed_meta_canUpdate\" id=\"" . $id . "\">" . $result[0]->meta_value . '</div>';
        
    }





}








// array (posttype0)
// forach(get_post_types() as $post_type){

// }

//   post_type_fieldname => array(
//       'editable' => true,
//       'fieldtype' => text,
//   )

//  array(
//      'post_text_summary' => true
//  )
//  update_option('rse_front_end_editable')
//     cmb2_before_field_row