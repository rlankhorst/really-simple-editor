<?php

class rsed_alterContent {

    function __construct() {

        add_action( 'loop_start', array(&$this, 'isSinglePost'));
        
    }

    function isSinglePost () {

        global $post;

        if (is_singular($post)) {
            add_filter( 'the_content',  array(&$this, 'addToContent'));
        }

    }



    function addToContent( $content ) { 

        global $post;

        $content = '<div class="rsed_editable">' . '<div id="mainDiv" class="rsed_content">' . $content . '</div>' . '</div>' . wp_editor($post->post_content, 'editor');

        wp_enqueue_script('rsed_makeContentEditable', rsed_js . 'makeContentEditable.js');
        wp_enqueue_style('rsed_makeContentEditable', rsed_css . 'makeContentEditable.css');

        return $content;
    }


}