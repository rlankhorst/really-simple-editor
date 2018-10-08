<?php

class rsed_BackendSettings
{

    public function __construct()
    {
        add_action('admin_menu', array($this, 'extend_settings'));
        add_action('admin_menu', array($this, 'parse_CMB2_boxes'));
    }

    public function extend_settings()
    {

        if (class_exists('CMB2_Boxes')) {

            add_options_page(
                'Editor',
                'Editor',
                'edit_pages',
                'editor',
                array($this, 'editor_template')
            );

        }
    }



    public function editor_template()
    {
        require __DIR__ . '/../templates/settings.php';
    }



    // returns an array of all the meta which the user
    // potentially can set editable
    public function parse_CMB2_boxes()
    {
        $CMB2_fields = CMB2_Boxes::get_all();

        $metaBoxProtected = wp_list_pluck($CMB2_fields, 'meta_box');

        foreach ($metaBoxProtected as $metaboxes => $metabox) {

            if (count($metabox['object_types']) == 1 && $metabox['object_types'][0] == 'user') {
                unset($metaBoxProtected[$metabox['id']]);
            }

        }

        $fieldsArray = wp_list_pluck($metaBoxProtected, 'fields');

        foreach ($fieldsArray as $fields => $fieldElements) {
            foreach ($fieldElements as $fieldElement => $field) {

                $validType = null;
                $validType = $this->assessFieldType($field['type']);

                $id = $field['id'];

                if ($validType === 'wysiwyg') {
                    update_option("rsed_{$id}", 'wysiwyg');
                } elseif($validType) {
                    update_option("rsed_{$id}", 'editable');
                }

            }
        }

    }

    // returns true if the value is inside the taxonomy field-types array, else false
    // returns special string wysiwyg to indicate that the editor is wysiwyg
    private function assessFieldType($field)
    {
        require __DIR__ . '/../taxonomies/field-types.php';

        if ($field == 'wysiwyg') {
            return 'wysiwyg';
        }

        for ($i = 0; $i < count($rsed_field_types); $i++) {

            if ($field == $rsed_field_types[$i]) {
                return true;
            }
        }

        return false;

    }
}

/// use settings api for extending functionality
///
