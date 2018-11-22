const editSVG = `<svg  class="rsed_normalEditor" aria-hidden="true" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
    <svg  class="rsed_richEditor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>`;
const editSVG_image = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18 rsed_editSVG" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>`;
const backArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="undo-alt" class="svg-inline--fa fa-undo-alt fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"/></svg>'
const closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" viewBox="0 0 512 512" ><path   fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>';
const checkSVG = `<svg class="rsed_checkSVG" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>`
// Icons from: https://fontawesome.com  
// Licence:  https://fontawesome.com/license

let editableContent = {};    // object with as properties all the wrapper div DOM elements of the editable elements
let editButtons = {};        // object with as properties all the wrapper div DOM elements of the buttons
let focus;                   // string, possible values: main, title, meta_x
let backupHTML = {};         // The original HTML of all fields before editing, first element is the main text, remainder are the meta elements
let normalEditor = true;     // if true wysiwyg is shown else the tinyMCE editor
const saveTime = 500;       // time in Ms when the changes are saved after the user is done typing
let url;


jQuery(document).ready(() => {

    if (window.ajaxurl) {
        url = window.location.origin + window.ajaxurl;
    }

    // initialize the functionality here
    if (document.querySelector('.rsed_editable')) {
        document.body.addEventListener('click', closeEditMode);
        createBackup();
        makeContentEditable();
        makeMetaEditable();
        makeTitleEditable();
        checkTitleforAnchorTags();
        checkIfPlaceholdersNeeded();
        thumbnail_show_EditableText();
    }
});


function createBackup() {
    backupHTML['main'] = document.querySelector('.rsed_content').innerHTML;
    backupHTML['title'] = document.querySelector('.rsed_title').innerHTML;

    // for every meta element with wysiswyg we need to store the html
    for (let el of document.querySelectorAll('.rsed_meta_canUpdate')) {
        backupHTML[el.id] = el.innerHTML;
    }

}

function makeContentEditable() {

    // move the wysiswyg editors to the appropriate places
    for (let el of document.querySelectorAll('.wp-editor-wrap')) {

        if (el.id === 'wp-editor-wrap') {
            jQuery("#wp-editor-wrap").insertAfter(".rsed_editable");
            jQuery("#wp-editor-wrap").css('display', 'none');
        } else {
            const id = el.id.substring(10, 11);
            jQuery(`#wp-editor_${id}-wrap`).insertAfter(`#rsed_${id}`);
            jQuery(`#wp-editor_${id}-wrap`).css('display', 'none');
        }

    }

    addEditIcons('.rsed_editable', 'main');
    addEditableListener(`main`);
}


function makeMetaEditable() {

    const metaElements = document.querySelectorAll('.rsed_meta_canUpdate');

    for (let i = 0; i < metaElements.length; i++) {

        if (metaElements[i].classList.value.indexOf('rsed_hasTinyMCE') !== -1) {
            addEditIcons(`#rsed_${i + 1}`, (i + 1));
        } else {
            addEditIcons(`#rsed_${i + 1}`, (i + 1), true);
        }

        addEditableListener(`${i + 1}`);

    }
}


function makeTitleEditable() {
    addEditIcons('.rsed_title', 'title', true);
    addEditableListener(`title`);
}


function addEditIcons(selector, identifier, noTinyMCE) {

    if (noTinyMCE) {
        jQuery(selector).before(
            `
<div class="rsed_icons_container rsed_editButtons_${identifier}">
    <div class="rsed_icons rsed_icons_noTinyMCE">
        <div data-balloon="Undo changes" data-balloon-pos="up" onclick="revertText(event)" class="rsed_editButtons rsed_danger rsed_dontClose">${backArrowSVG}</div>
        <div data-balloon="Close editor" data-balloon-pos="up" class="rsed_editButtons rsed_danger">${closeSVG}</div>
    </div>
    <span class="rsed_hide rsed_noTinyMCE_text" id="rsed_safeText_${identifier}">Saving...</span>
</div>
`
        );
    } else {
        jQuery(selector).before(
            `
<div class="rsed_icons_container rsed_editButtons_${identifier}">
    <div class="rsed_icons">
        <div data-balloon="Switch editor mode" data-balloon-pos="up" onclick="ToggleEditor()" class="rsed_editButtons rsed_editor rsed_dontClose">${editSVG}</div>
        <div data-balloon="Undo changes" data-balloon-pos="up" onclick="revertText(event)" class="rsed_editButtons rsed_danger rsed_dontClose">${backArrowSVG}</div>
        <div data-balloon="Close editor" data-balloon-pos="up" class="rsed_editButtons rsed_danger">${closeSVG}</div>
    </div>
    <span class="rsed_hide" id="rsed_safeText_${identifier}">Saving...</span>
</div>
`
        );
    }

}

function addEditableListener(identifier) {

    let context;

    if (identifier === 'main') {
        context = 'main';
        editableContent['main'] = document.querySelector('.rsed_content');
        editButtons['main'] = document.querySelector('.rsed_editButtons_main');
    } else if (identifier === 'title') {
        context = 'title';
        editableContent['title'] = document.querySelector('.rsed_title');
        editButtons['title'] = document.querySelector('.rsed_editButtons_title');
    } else {
        context = `meta_${identifier}`;
        editableContent[context] = document.querySelector(`#rsed_${identifier}`);
        editButtons[context] = document.querySelector(`.rsed_editButtons_${identifier}`);
    }

    editableContent[context].addEventListener('click', (event) => {

        if (focus === 'title') {
            event.target.classList.add('title_of_post');
        }

        if (focus && focus !== context) {
            closeStyles(focus);
            selectNormalEditor(context.body);
            checkIfPlaceholdersNeeded();
        }

        focus = context;

        if (focus === 'main') {
            if ($('#mainDiv').text() === 'Start typing the main content...') {
                $('#mainDiv').text('');
                $(`#mainDiv`).removeClass('rsed_textPlaceholder');
            }
        } else if (focus === 'title') {
            if ($('.rsed_title.rsed_selected').text() === 'Start typing the title...') {
                $('.rsed_title').text('');
                $(`.rsed_title`).removeClass('rsed_textPlaceholder');
            }
        }  else {
            if ($(`#rsed_${identifier}`).text() === 'Start typing the meta content...') {
                $(`#rsed_${identifier}`).text('');
                $(`#rsed_${identifier}`).removeClass('rsed_textPlaceholder');
            }
        }

        editableContent[context].classList.add('rsed_selected');
        editableContent[context].contentEditable = true;
        editButtons[context].style.display = 'block';
    });

}


function closeEditMode(event) {

    if (!focus) {
        return;
    }

    // for not closing when in media library
    if (event.target.closest('.media-modal.wp-core-ui')) {
        return;
    }

    if (event.target.closest('.mce-btn')) {
        return;
    }

    if (event.target.closest('.wp-editor-wrap')) {
        return;
    }

    if (event.target.closest(".rsed_dontClose")) {
        return;
    }

    if (focus === 'main' && event.target.closest('.rsed_content')) {
        return;
    }

    if (focus === 'title' && event.target.closest('.rsed_title')) {
        return;
    }

    if (focus !== undefined && focus.indexOf('meta_') > -1) {
        focusNr = focus.substr(5, 6)
        try {
            if (event.target.closest(`#rsed_${focusNr}`)) {
                return;
            }
        } catch (e) { }
    }

    closeStyles(focus);
    checkIfPlaceholdersNeeded();
    selectNormalEditor();

}


// When closing or toggling between editable sections 
// the TinyMCE needs to be closed and the normal should be selected
function selectNormalEditor() {

    // updating the icons
    for (let el of document.querySelectorAll('.rsed_richEditor')) {
        el.style.display = 'block';
    }

    for (let el of document.querySelectorAll('.rsed_normalEditor')) {
        el.style.display = 'none';
    }

    // showing text instead of the tinyMCE editor
    for (let el of document.querySelectorAll('.wp-editor-wrap')) {
        el.style.display = 'none';

        if (el.id === 'wp-editor-wrap') {
            document.querySelector('.rsed_editable').style.display = 'block';
        } else {
            const id = focus.substring(5);
            jQuery(`#rsed_${id}`).css('display', 'block');
        }
    }

    normalEditor = true;
}

// deletes the dashed border and hides the buttons
function closeStyles(context) {

    editableContent[context].classList.remove('rsed_selected');
    editableContent[context].contentEditable = false;
    editButtons[context].style.display = 'none';
}


function ToggleEditor() {

    // toggling to tinyMCE
    if (normalEditor) {

        for (let el of document.querySelectorAll('.rsed_richEditor')) {
            el.style.display = 'none';
        }

        for (let el of document.querySelectorAll('.rsed_normalEditor')) {
            el.style.display = 'block';
        }

        if (focus === 'main') {
            jQuery('.rsed_editable').css('display', 'none');
            jQuery("#wp-editor-wrap").css('display', 'block');
            setTimeout(() => {
                document.querySelector('#editor_ifr').contentDocument.body.dispatchEvent(new Event('keyup')); // click to resize tinyMCE
            }, 50);
        } else {
            const id = focus.substring(5);
            jQuery(`#wp-editor_${id}-wrap`).css('display', 'block');
            jQuery(`#rsed_${id}`).css('display', 'none');
            setTimeout(() => {
                document.querySelector(`#editor_${id}_ifr`).contentDocument.body.dispatchEvent(new Event('keyup')); // click to resize tinyMCE
            }, 50);
        }
        // toggling to normal editor
    } else {

        for (let el of document.querySelectorAll('.rsed_richEditor')) {
            el.style.display = 'block';
        }

        for (let el of document.querySelectorAll('.rsed_normalEditor')) {
            el.style.display = 'none';
        }

        if (focus === 'main') {
            jQuery('.rsed_editable').css('display', 'block');
            jQuery("#wp-editor-wrap").css('display', 'none');
        } else {
            const id = focus.substring(5);
            jQuery(`#wp-editor_${id}-wrap`).css('display', 'none');
            jQuery(`#rsed_${id}`).css('display', 'block');
        }

    }

    normalEditor = !normalEditor;
};


function revertText() {

    if (focus === 'main') {
        document.querySelector('.rsed_content').innerHTML = backupHTML['main'];
        document.querySelector('#editor_ifr').contentDocument.body.innerHTML = backupHTML['main'];
        document.querySelector('.wp-editor-area#editor').value = backupHTML['main'];
        autoSave_mainText(backupHTML['main']);
    } else if (focus === 'title') {
        document.querySelector('.rsed_title').innerHTML = backupHTML['title'];
        // perform a keyup event to trigger save event
        document.querySelector(`.rsed_title`).dispatchEvent(new Event('keyup'));
    } else {
        const id = focus.substring(5);
        document.querySelector(`#rsed_${id}`).innerHTML = backupHTML[`rsed_${id}`];
        if (document.querySelector(`#editor_${id}_ifr`)) {
            document.querySelector(`#editor_${id}_ifr`).contentDocument.body.innerHTML = backupHTML[`rsed_${id}`];
            document.querySelector(`.wp-editor-area#editor_${id}`).value = backupHTML[`rsed_${id}`];
            // perform a click to trigger a save event
            document.querySelector(`#qt_editor_${id}_toolbar`).click();
        } else {
            // perform a keyup event to trigger save event
            document.querySelector(`#rsed_${id}`).dispatchEvent(new Event('keyup'));
        }
    }

}


// delay function utility:
const delay = (() => {
    let timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


// Following block:
// 1) synchronizes the tinymce and the normal editing
// 2) does the Ajax call to the backend to autoSave the data
jQuery(document).ready(() => {

    // programmatically set the tinyMCE view to visual.
    setTimeout(() => {
        for (let btn of document.querySelectorAll('.switch-tmce')) {
            btn.click();
        }
    }, 500);


    if (document.querySelector('.rsed_editable')) { // check if we have to make the page editable

        // setTimeout is required for loading the Iframes. Otherwise we would
        // get a referenceError for trying to access non existing DOM elements
        setTimeout(() => {

            ///////////// main text 2 way data binding/auto saving: /////////////
            let iFrame = document.querySelector('#editor_ifr').contentDocument.body;
            iFrame.innerHTML = document.querySelector('.rsed_content').innerHTML;

            // visual editor
            iFrame.addEventListener('keyup', (event) => {
                const html = iFrame.innerHTML;

                // if event is programmatically induced we don't want to save
                if (event instanceof Event) {
                    return;
                }

                document.querySelector('.rsed_content').innerHTML = html;
                delay(() => {
                    autoSave_mainText(html);
                }, saveTime);
            });

            // text editor
            document.querySelector('#editor').addEventListener('keyup', () => {
                const html = document.querySelector('#editor').value;

                document.querySelector('.rsed_content').innerHTML = `<p>${html}</p>`;
                delay(() => {
                    autoSave_mainText(html);
                }, saveTime);
            });

            // no TinyMCE editor
            document.querySelector('.rsed_content').addEventListener('keyup', () => {
                const html = document.querySelector('.rsed_content').innerHTML;

                iFrame.innerHTML = html;
                document.querySelector('#editor').value = html;
                delay(() => {
                    autoSave_mainText(html);
                }, saveTime);
            });

            // TinyMCE button events (e.g. make text bold) main text
            document.querySelector('#wp-editor-wrap').addEventListener('click', (event) => {
                // visual editor
                if (event.target.closest('.mce-container-body.mce-flow-layout')) {
                    const html = iFrame.innerHTML;

                    document.querySelector('.rsed_content').innerHTML = html;
                    delay(() => {
                        autoSave_mainText(html);
                    }, saveTime);
                }

                // text editor
                if (event.target.closest('#qt_editor_toolbar')) {
                    const html = document.querySelector('#editor').value;

                    document.querySelector('.rsed_content').innerHTML = `<p>${html}</p>`;
                    delay(() => {
                        autoSave_mainText(html);
                    }, saveTime);
                }

            });

            ///////////// other meta tags with tinyMCE 2 way data binding/autosaving: /////////////////
            const elements = document.querySelectorAll('.rsed_hasTinyMCE');
            const ID_List_with_tinyMCE = []; // list of id's of meta fields with tinyMCE editors 

            for (let i = 0; i < elements.length; i++) {

                const id = elements[i].id.substring(5);
                ID_List_with_tinyMCE.push(id);

                const iFrame = document.querySelector(`#editor_${id}_ifr`).contentDocument.body;
                iFrame.innerHTML = document.querySelector(`#rsed_${id}`).innerHTML;
                const meta_element = document.querySelector(`#rsed_${id}`);

                const [metaKey, postID] = getMetaData(meta_element);

                // visual editor
                iFrame.addEventListener('keyup', (event) => {
                    const html = iFrame.innerHTML;

                    // if event is programmatically induced we don't want to save
                    if (event instanceof Event) {
                        return;
                    }

                    document.querySelector(`#rsed_${id}`).innerHTML = html;
                    delay(() => {
                        autoSave_meta(html, metaKey, postID, id);
                    }, saveTime);
                });

                // text editor
                document.querySelector(`#editor_${id}`).addEventListener('keyup', () => {
                    const html = document.querySelector(`#editor_${id}`).value;
                    document.querySelector(`#rsed_${id}`).innerHTML = `<p>${html}</p>`;
                    delay(() => {
                        autoSave_meta(html, metaKey, postID, id);
                    }, saveTime);
                });

                // no TinyMCE editor
                document.querySelector(`#rsed_${id}`).addEventListener('keyup', () => {
                    const html = document.querySelector(`#rsed_${id}`).innerHTML;

                    document.querySelector(`#editor_${id}`).value = html;
                    iFrame.innerHTML = html;
                    delay(() => {
                        autoSave_meta(html, metaKey, postID, id);
                    }, saveTime);
                });


                // TinyMCE button events main text
                document.querySelector(`#wp-editor_${id}-wrap`).addEventListener('click', (event) => {

                    // visual editor
                    if (event.target.closest('.mce-container-body.mce-flow-layout')) {
                        const html = iFrame.innerHTML;

                        document.querySelector(`#rsed_${id}`).innerHTML = html;
                        delay(() => {
                            autoSave_meta(html, metaKey, postID, id);
                        }, saveTime);
                    }

                    // text editor
                    if (event.target.closest(`#qt_editor_${id}_toolbar`)) {
                        const html = document.querySelector(`#editor_${id}`).value;

                        document.querySelector(`#rsed_${id}`).innerHTML = `<p>${html}</p>`;
                        delay(() => {
                            autoSave_meta(html, metaKey, postID, id);
                        }, saveTime);
                    }

                });

            }

            // meta tags without tinyMCE, autosaving
            const meta_without_tinyMCE = []; // DOM meta wrapping div elements without tinyMCE

            for (let el of document.querySelectorAll('.rsed_meta_canUpdate')) {
                meta_without_tinyMCE.push(el);

                for (let i = 0; i < ID_List_with_tinyMCE.length; i++) {
                    if (el.id.substring(5) === ID_List_with_tinyMCE[i]) {
                        meta_without_tinyMCE.pop();
                        break;
                    }
                }
            }

            for (let el of meta_without_tinyMCE) {
                const id = el.id.substring(5);

                document.querySelector(`#rsed_${id}`).addEventListener('keyup', () => {

                    const meta_element = document.querySelector(`#rsed_${id}`);
                    const html = meta_element.innerHTML;
                    const [metaKey, postID] = getMetaData(meta_element);

                    delay(() => {
                        autoSave_meta(html, metaKey, postID, id);
                    }, saveTime);

                });
            }

            // title autoSaving
            document.querySelector(`.rsed_title`).addEventListener('keyup', () => {

                delay(() => {
                    autoSave_title();
                }, saveTime);

            });


        }, 1500);  // end setTimeout

    }  // end if document.querySelector('.rsed_editable')

}); // JQuery ready


function getMetaData(meta_element) {

    const endMetaString = meta_element.classList[1].indexOf('_unique123_');
    const metaKey = meta_element.classList[1].substring(5, endMetaString);
    const postID = meta_element.classList[1].substring(endMetaString + 11);

    return [metaKey, postID];
}



//////////////////////////////////////////////////////////
// autoSave functions for saving to backend
function autoSave_mainText(html) {

    const id = document.getElementById('mainDiv').classList[1].substring(10);

    const data = {
        html,
        action: 'autoSave_mainText',
        post_ID: id
    };

    const safeTextBox = document.getElementById('rsed_safeText_main');

    safeTextBox.innerText = 'Saving...';
    safeTextBox.classList.add('rsed_safeText');

    jQuery.post(
        url,
        data,
        (res) => {
            safeTextBox.innerHTML = `${checkSVG} Saved`;
            console.log('succesfully saved post');
        });
}

function autoSave_title() {

    const id = document.querySelector('.rsed_title').classList[1].substring(10);
    const html = document.querySelector('.rsed_title').innerHTML;

    const data = {
        html,
        action: 'autoSave_title',
        post_ID: id
    };

    const safeTextBox = document.getElementById('rsed_safeText_title');

    safeTextBox.innerText = 'Saving...';
    safeTextBox.classList.add('rsed_safeText');

    jQuery.post(
        url,
        data,
        (res) => {
            safeTextBox.innerHTML = `${checkSVG} Saved`;
            console.log('succesfully saved title');
        });

}


function autoSave_meta(html, meta_key, meta_postID, id) {

    const data = {
        html,
        action: 'autoSave_meta',
        post_ID: meta_postID,
        meta_key,
    };

    const safeTextBox = document.getElementById(`rsed_safeText_${id}`);

    safeTextBox.innerText = 'Saving...';
    safeTextBox.classList.add('rsed_safeText');

    jQuery.post(
        url,
        data,
        (res) => {
            safeTextBox.innerHTML = `${checkSVG} Saved`;
            console.log('succesfully saved meta');
        });

}//////////////////////////


// when clicking on Add media on TinyMCE editor we want trigger a 
// save when the user adds an img tag via the add media modal
setTimeout(() => { // setTimout > waiting for tinyMCE to load

    jQuery('[data-editor]').each((index) => { // iterate over all the addd media buttons
        jQuery('[data-editor]')[index].addEventListener('click', () => {
            setTimeout(() => { // setTimout for waiting for modal to load

                // multiple modals can exists wihout unique identifiers, we need to listen to them all
                for (let btn of document.querySelectorAll('.media-button.media-button-insert')) {

                    btn.addEventListener('click', function saveImage() { // when modal is opened we need to attach listener to save button

                        setTimeout(() => { // setTimeout for waiting for the img tag to be inserted into the editor

                            // maintext
                            if (jQuery('[data-editor]')[index].dataset.editor === 'editor') {
                                let iFrame = document.querySelector('#editor_ifr').contentDocument.body;
                                const html = iFrame.innerHTML;

                                document.querySelector('.rsed_content').innerHTML = html;

                                autoSave_mainText(html);
                            } else { // meta elements adding pictures

                                const id = jQuery('[data-editor]')[index].dataset.editor.substring(7, 8)
                                const [metaKey, postID] = getMetaData(document.querySelector(`#rsed_${id}`));

                                const iFrame = document.querySelector(`#editor_${id}_ifr`).contentDocument.body;
                                html = iFrame.innerHTML;

                                document.querySelector(`#rsed_${id}`).innerHTML = html;

                                autoSave_meta(html, metaKey, postID, id);

                                // we need to remove the saveImage click listeners otherwise they will stack up
                                for (let btn of document.querySelectorAll('.media-button.media-button-insert')) {
                                    btn.removeEventListener('click', saveImage);
                                }

                            }

                        }, 1000); // wait image inserted in tinyMCE
                    });
                }
            }, 1000); // wait modal load
        });
    });
}, 1500); // wait load tinyMCE


// TD rewrite of the above functionality

// jQuery(document).ready(() => {
//     $('.media-button.media-button-insert').on('click', () => {
//         // maintext
//         if (jQuery('[data-editor]')[index].dataset.editor === 'editor') {
//             let iFrame = document.querySelector('#editor_ifr').contentDocument.body;
//             const html = iFrame.innerHTML;

//             document.querySelector('.rsed_content').innerHTML = html;

//             autoSave_mainText(html);
//         } else { // meta elements adding pictures

//             const id = jQuery('[data-editor]')[index].dataset.editor.substring(7, 8)
//             const [metaKey, postID] = getMetaData(document.querySelector(`#rsed_${id}`));

//             const iFrame = document.querySelector(`#editor_${id}_ifr`).contentDocument.body;
//             html = iFrame.innerHTML;

//             document.querySelector(`#rsed_${id}`).innerHTML = html;

//             autoSave_meta(html, metaKey, postID, id);

//         }
//     });
// });


//// safe when a user sets the thumbnail image:
jQuery(document).ready(() => {

    const thumbNail = document.querySelector('#set-post-thumbnail')

    if (thumbNail) {

        thumbNail.addEventListener('click', () => {

            setTimeout(() => {  // needed for waiting for the modal to render

                let selectedEl = document.querySelector('.attachment.selected');
                let thumbNail_ID;

                if (selectedEl) {
                    thumbNail_ID = selectedEl.dataset.id;
                }

                document.querySelector('.media-modal-content').addEventListener('click', (event) => {

                    if (event.target.closest('.media-button-select.media-button')) {
                        return;
                    }

                    selectedEl = document.querySelector('.attachment.selected');

                    if (selectedEl) {
                        thumbNail_ID = selectedEl.dataset.id;
                    }

                });

                document.querySelector('.media-button.media-button-select').addEventListener('click', () => {
                    save_thumnail(thumbNail_ID);
                });
            }, 500);
        })
    }

});


function save_thumnail(thumbNail_ID) {

    const index = document.querySelector('#mainDiv').classList[1].indexOf('rsed_post_');
    const id = document.querySelector('#mainDiv').classList[1].substring(index + 10);

    const data = {
        action: 'rsed_safe_thumbnail',
        post_ID: id,
        thumbNail_ID
    };

    jQuery.post(
        url,
        data,
        (res) => {
            console.log('succesfully saved thumbnail');
            window.location.reload(true);
        });
}



// pictures editing in the tinyMCE editor
jQuery(document).ready(($) => {
    // button container in visual editor when you click on image
    $(document).on('click', '.mce-container.mce-btn-group', (e) => {
        pictureEditingSave();
    });
    // when click on edit image in visual editor it will open a modal, this targets the update button of the modal
    $(document).on('click', '.image-details .media-button.media-button-select', (e) => {
        pictureEditingSave();
    });
})

// saves picture when we are editing it via the visual tinyMCE editor 
function pictureEditingSave() {
    if (focus === 'main') {
        let iFrame = document.querySelector('#editor_ifr').contentDocument.body;
        const html = iFrame.innerHTML;
        document.querySelector('.rsed_content').innerHTML = html;
        autoSave_mainText(html);
    } else {
        id = focus.substring(5, 6);
        const iFrame = document.querySelector(`#editor_${id}_ifr`).contentDocument.body;
        const html = iFrame.innerHTML;
        const meta_element = document.querySelector(`#rsed_${id}`);
        meta_element.innerHTML = html;
        const [metaKey, postID] = getMetaData(meta_element);
        autoSave_meta(html, metaKey, postID, id);
    }
}


// drag and drop of images need to trigger save within the non tinyMCE editor:
jQuery(document).ready(($) => {

    $(document).on('dragend', '', (e) => {

        if (!focus) {
            return;
        }

        if (e.target.id === 'mainDiv') {
            const html = document.querySelector('.rsed_content').innerHTML;
            document.querySelector('#editor_ifr').contentDocument.body.innerHTML = html;
            autoSave_mainText(html);
        } else {
            id = focus.substring(5);
            const meta_element = document.querySelector(`#rsed_${id}`);
            const html = document.querySelector(`#rsed_${id}`).innerHTML;
            document.querySelector(`#editor_${id}_ifr`).contentDocument.body.innerHTML = html;
            const [metaKey, postID] = getMetaData(meta_element);
            autoSave_meta(html, metaKey, postID, id);
        }
    });
});


// placeholders logic, when a content or metabox is emtpy a 
// placeholder need to be there so the user can start typing
function checkIfPlaceholdersNeeded() {

    if (!($(`.rsed_title`).text())) {
        $(`.rsed_title`).text('Start typing the title...');
        $(`.rsed_title`).addClass('rsed_textPlaceholder');
    }

    if (!($(`.title_of_post`).text())) {
        $(`.title_of_post`).text('Start typing the title...');
        $(`.title_of_post`).addClass('rsed_textPlaceholder');
    }

    if (!($(`#mainDiv`).text())) {
        $(`#mainDiv`).text('Start typing the main content...');
        $(`#mainDiv`).addClass('rsed_textPlaceholder');
    }

    $(`.rsed_meta_canUpdate`).each((index) => {

        if (!($(`#rsed_${index + 1}`).text())) {
            $(`#rsed_${index + 1}`).text('Start typing the meta content...');
            $(`#rsed_${index + 1}`).addClass('rsed_textPlaceholder');
        }

    });

}

// Add eventListeners to the thumbnail picture so it will display a text.
function thumbnail_show_EditableText() {
    $('#postimagediv').on("mouseenter", () => {
        $('#set-post-thumbnail').append(`<span class="rsed_editText">${editSVG_image}</span>`);
    });

    $('#postimagediv').on("mouseleave", () => {
        $('.rsed_editText').remove();
    });
}



// the wrapping div can be also attached to titles in the menu.
function checkTitleforAnchorTags () {

    for (let title of document.querySelectorAll('.rsed_title')) {
        if (title.parentElement.tagName === 'A') {
            title.classList.remove('rsed_title');
        }
    }

}


// https://wordpress.org/plugins/advanced-custom-fields/
