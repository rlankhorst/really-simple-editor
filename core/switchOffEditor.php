<?php

class rsed_switchOffEditor
{

    private $toggleHTML = '';

    public function __construct()
    {
        add_action('admin_bar_menu', array($this, 'toolbar_link_to_mypage'), 999);
        add_action('print_footer_scripts', array($this, 'rsed_toggle_editor_js'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue'));
    }

    public function enqueue () {
        wp_enqueue_style('rsed_toggleGrahpic', rsed_css . 'toggleGrahpic.css', rsed_version);
    }

    public function toolbar_link_to_mypage($wp_admin_bar)
    {
        $editorStatus = get_option('rsed_toggle_editor');

        if ($editorStatus == 'on') {
            $statusWord = 'off';
            $status = '';
        } else {
            $statusWord = 'on';
            $status = 'checked';
        }

        $args = array(
            'id' => 'rsed_toggleBtn',
            'title' => "

            Turn editor $statusWord

            <label class=\"rsed-switch\">
            <input name=\"test\" type=\"hidden\" value=\"\"/>
            <input name=\"test\" type=\"checkbox\"
            $status   />
            <span class=\"rsed-slider rsed-round\"></span>
            </label>
            ",
            'href' => '#',
            'meta' => array(
                'class' => 'rsed_toggleBtn',
                'onclick' => 'rsed_toggleEditor()',
                'html' => '',
            ),
        );
        $wp_admin_bar->add_node($args);
    }

    public function rsed_toggle_editor_js()
    {

        ?>
        <script type='text/javascript'>

            function rsed_toggleEditor () {
                var data = {
                    action: 'rsed_toggle_editor',
                };

                var url = '<?php echo admin_url('admin-ajax.php');?>';

                jQuery.post(
                    url,
                    data,
                    function (res) {
                        window.location.reload(true);
                    });
            }
        </script>
        <?php
    }   

}


add_action('wp_ajax_rsed_toggle_editor', 'rsed_toggle_editor');

function rsed_toggle_editor()
{
    $editorToggle = get_option('rsed_toggle_editor');

    if ($editorToggle == 'off') {
        update_option('rsed_toggle_editor', 'on');
    } else {
        update_option('rsed_toggle_editor', 'off');
    }
}


