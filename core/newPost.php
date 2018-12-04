<?php 

class rsed_newPost {

    function __construct() {
        add_action( 'admin_bar_menu', array($this, 'modify_admin_bar'), 100);
        add_action('init', array($this, 'createNewPost'));
    }

    function modify_admin_bar($wp_admin_bar) {

        $wp_admin_bar->remove_menu('edit');

        $new_content_node = $wp_admin_bar->get_node('new-content');
        $new_post_node = $wp_admin_bar->get_node('new-post');
        $new_page_node = $wp_admin_bar->get_node('new-page');

        $all_toolbar_nodes = $wp_admin_bar->get_nodes();
        $current_url="//".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        $current_url = remove_query_arg('rsed_new_item', $current_url);
        $public_post_types = get_post_types(
            array(
                'public' => true,
                'publicly_queryable' => true,
            )
        );

        _log($public_post_types);

        foreach ($all_toolbar_nodes as $toolBarItem_id => $toolBarItem ) {

            if ($toolBarItem_id === 'new-user' || $toolBarItem_id === 'new-media') {
                continue;
            }

            $public_postType_bool = false;
            $post_type = substr($toolBarItem_id, 4);
            
            foreach ($public_post_types as $postTypeLoop) {
                if ($post_type === $postTypeLoop) {
                    $public_postType_bool = true;
                }
            }


            if (strpos($toolBarItem_id, 'new-') !== false && $public_postType_bool) {
                $toolBarItem->href = add_query_arg('rsed_new_item', $post_type ,$current_url);
                $wp_admin_bar->add_node($toolBarItem);
            }
        }

    }

    function createNewPost () {

        if (isset($_GET['rsed_new_item'])) {

            $postType = strval($_GET['rsed_new_item']);

            $id = wp_insert_post(
                array(
                    'post_type' => $postType,
                    'post_content' => 'Start typing the content here',
                    'post_status' => 'publish',
                    'post_title' => 'Start typing the title',
                )
            );

            $url = get_permalink($id);

            _log($url);

            wp_redirect( $url );
            exit;
        }
        
    }
}

