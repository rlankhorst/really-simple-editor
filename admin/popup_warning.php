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

        $themeName = wp_get_theme()->name;

        $compatible_themes = array(
            'Twenty Fifteen',
            'Twenty Sixteen',
            'Twenty Seventeen',
            'Customizr',
            'Hueman',
            'Oginer',
            'Luzuk',
            'LZ Food Recipee',
            'Izrestaurant',
            'Vantage',
            'Virtue',
        );

        for ( $i = 0; $i < count($compatible_themes); $i++) {

            if ($compatible_themes[$i] == $themeName) {
                return;
            }

        }

        ?>
                <div id="message" class="fade notice notice-warning is-dismissible">
                    <p>
                        <span style="color:#008ec2" class="dashicons-before dashicons-info"></span>&nbsp;<?php printf(__('Your current theme is not declared compatible yet, so we cannot guarantee 100%% compatibility with the Really Simple Editor Plugin. Is it working without issues? %sLet us know%s', 'rsed'), '<a href="https://really-simple-plugins.com/contact" target="blank">','</a>' )?>
                        <hr />
                        <div style="color:#0073aa;cursor:pointer" class="rsed_popup_link"><?php _e("I understand, click here to don't show this message again","rsed")?></div>
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

    public function dismiss_popup()
    {
        update_option('rsed_compatibility_popup_dismissed', 'yes');

        wp_die();
    }
}
