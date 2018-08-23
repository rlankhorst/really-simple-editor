<?php
 // this file is for developement only

 /////// How to programmatically update a post ////////////////////////////////////

//here you need to specify the post id in-order to get the post to edit
$kv_post = $wpdb->get_row("SELECT post_content,post_title FROM $wpdb->posts WHERE ID = 13");
$kv_post = get_post(13);

//get the post title and content 

$kv_post_title = $kv_post->post_content;

$kv_post_content = $kv_post->post_title;  

$kv_edited_post = array(
    'ID'           => 10,
    'post_title' => $kv_post_title, 
    'post_content' => $kv_post_content
);
wp_update_post( $kv_edited_post);








//////////////////////

<?php // <img src="<?php echo get_post_meta($post_id, 'my_theme_image', true)?>
<!-- <p><?php // echo get_post_meta($post_id, 'my_theme_intro_text', true)?>"> -->



