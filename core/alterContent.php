<?php
defined( 'ABSPATH' ) or die( 'no access' );

defined( 'ABSPATH' ) or die( 'no access' );

class rsed_alterContent
{
    private $metaID = 1; 
    public $metaCounter = 1;
    public $identifier = '';
    public $hasTinyMCE = false;

    public function __construct()
    {
        add_filter('the_content', array($this, 'addToContent'));
        add_filter('get_post_metadata', array($this, 'addToMeta'), 100, 4);
        add_filter('the_title', array($this, 'addToTitle'), 10, 2);
        add_action('wp_enqueue_scripts', array($this, 'enqueue'));
        add_filter('post_thumbnail_html', array($this, 'make_post_thumbnail_editable'), 99, 5);
        add_filter('the_editor_content', array($this, 'add_editor_stylesheet'));
    }

    public function enqueue()
    {
        wp_enqueue_script('rsed_makeContentEditable', rsed_js . 'makeContentEditable.js', array('jquery'), rsed_version);
        wp_enqueue_style('rsed_makeContentEditable', rsed_css . 'makeContentEditable.css', rsed_version);
        wp_localize_script(
            'rsed_makeContentEditable',
            'rsed_translateStrings',
            array(
                'edit_title' =>  __("Start typing the title...", "rsed"),
                'edit_content' =>   __("Start typing the content...", "rsed"),
                'edit_meta' =>   __("Start typing the content..", "rsed"),
                'edit_saving' =>  __("Saving...", "rsed"),
                'edit_saved' =>  __("Saved", "rsed"),
            )
        );
        wp_localize_script(
            'rsed_makeContentEditable',
            'rsed_ajaxURL',
            array('url' => admin_url('admin-ajax.php'))
        );
            
    }

    // adding a div to main content so we can manipulate it via javascript
    public function addToContent($content)
    {
        global $post;

        //don't do this on the archive pages
        if (is_archive() || is_home()) {
            return $content;
        }

        if (!$post || !is_singular($post)) {
            return $content;
        }

        $settings = array(
            "tinymce" => array(
                "inline" => false,
                'autoresize_min_height' => 100,
                'wp_autoresize_on' => true,
            ),
        );

        $post_id = get_the_ID();

        $html = '<div class="rsed_editable">' . "<div id=\"mainDiv\" class=\"rsed_content rsed_post_{$post_id}\">" . $content . '</div>' . '</div>' . wp_editor($post->post_content, 'editor', $settings);

        $this->identifier = 'main';
        $this->hasTinyMCE = true;

        if (strpos($content, '[') && strpos($content, ']')) {
            $addedHTML = $this->get_template('noShortCodes.php');
        } else {
            $addedHTML = $this->get_template('editIcons.php');
        }

        $html = $addedHTML . $html;

        return apply_filters('rsed_editable_content_html', $html, $post_id);
    }

    /*
        1.  Inserts a placeholder if no image is present 
        2.  Adds a div to the metadata so we can manipulate it via Javascript
    */

    public function addToMeta($metadata, $object_id, $meta_key, $single)
    {
        global $wpdb;
        // don't do this on the archive pages
        if (is_archive() || is_home()){
            return $metadata;
        }

        // 1. inserting placeholder if no image is present 


        if ($meta_key === '_thumbnail_id') {

            $table = $wpdb->prefix . 'postmeta';
            /*
             * We cannot use built in getpostmeta functions, as this would run this same filter, causing a loop. ]
             * We need to bypass the filters.
             *
             * */
            $thumbnail_id = $wpdb->get_var( $wpdb->prepare("SELECT meta_value FROM $table WHERE meta_key =  '_thumbnail_id' AND post_id = %s", $object_id) );

            if ($thumbnail_id) {
                return $metadata;
            }

            if (is_singular()) {
                $thumbnail_id = $this->get_placeholder_thumbnail_id();
                return $thumbnail_id;
            }

        }
 

        if (substr($meta_key, 0, 1) == '_') {
            return $metadata;
        }

        // 2.  Adds a div to the metadata

        $table = $wpdb->prefix . 'postmeta';
        /*
         * We cannot use built in getpostmeta functions, as this would run this same filter, causing a loop. ]
         * We need to bypass the filters.
         *
         * */
        $result = $wpdb->get_results($wpdb->prepare("
            SELECT * FROM $table
            WHERE meta_key = %s 
            AND post_id = %d",
            $meta_key, $object_id
        ));

        if (isset($result[0]) && isset($result[0]->meta_value)) {
            $result = $result[0]->meta_value;
        } else {
            $result = '';
        }

        $optionFieldName = 'rsed_' . $meta_key;

        $isFieldEditable = get_option($optionFieldName);

        if (!$isFieldEditable) {
            return $result;
        }

        // each meta tag needs to have a
        // div with a uniquely assigned ID
        $idNr = $this->metaID;
        $id = "rsed_{$idNr}";
        global $post;
        $post_id = get_the_ID();

        $settings = array(
            "tinymce" => array(
                "inline" => false,
                'autoresize_min_height' => 100,
                'wp_autoresize_on' => true,
            ),
        );

        $this->metaID += 1;

        if ($isFieldEditable === 'wysiwyg') {
            $this->hasTinyMCE = true;
            $html =  "<div class=\"rsed_meta_canUpdate rsed_{$meta_key}_unique123_{$post_id} rsed_hasTinyMCE\" id=\"" . $id . "\">" .
             $result . '</div>' . wp_editor($post->post_content, "editor_{$idNr}", $settings);
        } else {
            $this->hasTinyMCE = false;
            $html = "<div class=\"rsed_meta_canUpdate rsed_{$meta_key}_unique123_{$post_id}\" id=\"" . $id . "\">"  . $result . '</div>';
        }

        $this->identifier = $this->metaCounter;
        $editButtons = $this->get_template('editIcons.php');

        $html_and_EditBtns = $editButtons . $html;

        $this->metaCounter++;

        return apply_filters('rsed_editable_content_html', $html_and_EditBtns, $object_id);

    }


    public function addToTitle ($title, $id) {

        // don't do this on the archive pages
        if (is_archive() || is_home()) {
            return $title;
        }

        $currentPostID = get_the_ID();

        if ($currentPostID != $id) {
            return $title;
        }

        $title = "<div class=\"rsed_title rsed_post_{$id}\">".esc_html($title)."</div>";

        $this->identifier = 'title';
        $this->hasTinyMCE = false;
        $editButtons = $this->get_template('editIcons.php');

        $html_and_EditBtns = $editButtons . $title;

        return apply_filters('rsed_editable_content_html', $html_and_EditBtns, $id);
    }


    private function get_placeholder_thumbnail_id() {

        $thumbnail_id = get_option("rsed_default_thumbnail_id");

        if ($thumbnail_id) {
            return $thumbnail_id;
        }

        $filepath = rsed_path . "/assets/images/placeholder.png";
        $filename = "placeholder.png";

        $uploads = wp_upload_dir();

        $upload_dir = $uploads['path'];
        $upload_url = trailingslashit($uploads['path']);
  
        $i = strrpos($filename, ".");
        $l = strlen($filename) - $i;
        $ext = substr($filename, $i + 1, $l);
        $filename_no_ext = substr($filename, 0, strlen($filename) - strlen($ext) - 1);
  
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir);
        }
  
        if (file_exists($upload_dir . "/" . $filename)) {
            $filename = $filename_no_ext . "-" . time() . "." . $ext;
        }
  
        copy($filepath, $upload_dir . "/" . $filename);
        $filename_dir = $upload_dir . "/" . $filename;
        $filename_url = $upload_url . "/" . $filename;        
        
        $filetype = wp_check_filetype(basename($filename_dir), null);

        $args = array(
            'guid' => $filename_url,
            'post_mime_type' => $filetype['type'],
            'post_title' => preg_replace('/\.[^.]+$/', '', sanitize_file_name($filename_no_ext)),
            'post_content' => '',
            'post_status' => 'inherit'
        );
  
        $thumbnail_id = intval(wp_insert_attachment($args, $filename_dir));
        require_once(ABSPATH . 'wp-admin/includes/image.php');

        $attach_data = wp_generate_attachment_metadata($thumbnail_id, $filename_dir);

        wp_update_attachment_metadata($thumbnail_id, $attach_data);
  
        update_option("rsed_default_thumbnail_id", $thumbnail_id);

        return $thumbnail_id;
    }

    public function make_post_thumbnail_editable($html, $post_id, $post_thumbnail_id, $size, $attr)
    {
        //don't do this on the archive pages
        if (is_archive() || is_home()){
            return $html;
        }

        $img_html = $html;

        $html =
        '<div class="rsed-image-container">' .
        '<div id="postimagediv" class="postbox rsed_changecolor">' .
        '<div class="inside">' .
        '<a href="' . home_url() . '/wp-admin/media-upload.php?post_id=' . $post_id . '&type=image" id="set-post-thumbnail" class="thickbox rsed_imagelink">' .
            '<div class="edit-image">' .
            '</div>';

        if (has_post_thumbnail($post_id)) {
            $img_src_pattern = '/(?<=src=\")(.*?)(?=\")/';
            $img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post_id), $size, false);
            $html .= preg_replace($img_src_pattern, $img_src[0], $img_html, -1, $count);
        } else {
            $html .=
                '<span class="default-image">' .
                '<i original-title="Upload banner afbeelding" class="um-icon-plus um-tip-n"></i>' .
                '</span>';
        }
        $html .= '</a>' .
            '</div>' .
            '</div>' .
            '</div>';

        return $html;
    }


    public function add_editor_stylesheet ()
    {
        global $editor_styles;

        if (!isset($editor_styles)) {
            $editor_styles = array();
        }

        $stylesheets = array(
            'assets/css/editor-style.css',
            'css/editor-style.css',
            'editor-style.css',
        );

        $editor_styles = array_merge( $editor_styles, $stylesheets );
    }


    public function get_template($file)
    {
        $plugin_path = $plugin_dir = ABSPATH . 'wp-content/plugins/really-simple-editor/';

        $file = trailingslashit($plugin_path) . 'templates/' . $file;
        $theme_file = trailingslashit(get_stylesheet_directory()) . dirname($plugin_path) . $file;
        if (file_exists($theme_file)) {
            $file = $theme_file;
        }
        if (strpos($file, '.php') !== FALSE) {
            ob_start();
            require $file;
            $contents = ob_get_clean();
        } else {
            $contents = file_get_contents($file);
        }
        return $contents;
    }


}

// AJAX handlers
add_action('wp_ajax_autoSave_mainText', 'rsed_update_post_mainText');
function rsed_update_post_mainText()
{
    $html = wp_kses_post($_POST['html']);
    $post_ID = intval($_POST['post_ID']);

    $updated_post = array(
        'ID' => $post_ID,
        'post_content' => $html,
    );

    wp_update_post($updated_post);
    exit;
}


add_action('wp_ajax_autoSave_meta', 'rsed_update_post_meta');
function rsed_update_post_meta()
{
    $html = wp_kses_post($_POST['html']);
    $post_ID = intval($_POST['post_ID']);
    $meta_key = strval($_POST['meta_key']);

    update_post_meta($post_ID, $meta_key, $html);
    exit;
}

add_action('wp_ajax_rsed_save_thumbnail', 'rsed_save_thumbnail');
function rsed_save_thumbnail()
{
    $post_ID = intval($_POST['post_ID']);
    $thumbNail_ID = intval($_POST['thumbNail_ID']);

    set_post_thumbnail($post_ID, $thumbNail_ID);
    exit;
}

add_action('wp_ajax_autoSave_title', 'rsed_save_title');
function rsed_save_title () {

    $html = wp_kses_post($_POST['html']);
    $post_ID = intval($_POST['post_ID']);

    $updatedPost = array (
        'ID' => $post_ID,
        'post_title' => $html,
    );

    wp_update_post($updatedPost);
    exit;
}
