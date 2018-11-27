<?php

defined('ABSPATH') or die("you do not have acces to this page!");
class PopupWarning
{
    public function __construct()
    {
        //show review notice, only to free users
        add_action('wp_ajax_rsed_dismiss_popup', array($this, 'dismiss_popup'));
        add_action('admin_notices', array($this, 'show_leave_review_notice'));
        add_action('admin_print_footer_scripts', array($this, 'insert_dismiss_review'));
    }

    public function show_leave_review_notice()
    {
        $hasAlreadyDismissed =  get_option('rsed_compatibility_popup_dismissed');

        if ($hasAlreadyDismissed === 'yes') {
            return;
        }

        ?>
                <div id="message" class="fade notice notice-warning is-dismissible">
                    <p>
                        <?php printf(__('<span style="color:#008ec2" class="dashicons-before dashicons-info"></span> There is a small possibility that your current theme is not compatible with the Really Simple Editor Plugin', 'rsed'))?>
                        <hr />
                        <div style="color:#0073aa;cursor:pointer" class="rsed_popup_link">I understand, click here to don't show this message again</div>
                    </p>
                </div>
                <?php
}
    /**
     * Insert some ajax script to dismiss the review notice, and stop nagging about it
     */
    public function insert_dismiss_review()
    {
        ?>
            <script type='text/javascript'>
                jQuery(document).ready(function ($) {
                    $('.rsed_popup_link').on('click', () => {

                        url = window.location.origin + window.ajaxurl;

                        jQuery.post(
                            url,
                            {
                                action: 'rsed_dismiss_popup',
                            },
                                (res) => {
                                    $('#message').remove();
                            });
                    });
                });
            </script>
            <?php
}
    /**
     * Process the ajax dismissal of the review message.
     */
    public function dismiss_popup()
    {
        // update_option('rsed_compatibility_popup_dismissed', 'yes');

        wp_die();
    }
}
