<?php

defined( 'ABSPATH' ) or die( 'no access' );

add_action('delete_attachment', 'rsed_delete_attachment_cleanup');
// Need to clear a option when a user removes the placeholder img, otherwise the img will not be reloaded.
function rsed_delete_attachment_cleanup ($attachment_id) {

    $thumbnail_id = get_option("rsed_default_thumbnail_id");

    if ($thumbnail_id == $attachment_id) {
        delete_option('rsed_default_thumbnail_id');
    }

}
