const editSVG = `<svg  id="rsed_normalEditor" aria-hidden="true" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
                <svg  id="rsed_richEditor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>`;
const backArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="undo-alt" class="svg-inline--fa fa-undo-alt fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"/></svg>'
const closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" viewBox="0 0 512 512" ><path   fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>';
// Icons from: https://fontawesome.com  
// Licence:  https://fontawesome.com/license

/// cmb2
// is_single
// is_singular
// tinymc 
// editor text styling zelfde
// Editor min intrusive mogelijk


const editableContent = document.querySelector('.rsed_content');
let editButtons;
let copyHTML;
let normalEditor = true;

document.body.addEventListener('click', closeEditMode);
checkJQuery();


function checkJQuery() {
    if (jQuery) {
        makeEditable();
    } else {
        setTimeout(() => checkJQuery(), 200);
    }
}


function makeEditable() {

    jQuery("#wp-editor-wrap").appendTo(".rsed_editable");

    jQuery(".rsed_editable").before(
        `
        <div class="rsed_icons">
            <div onclick="ToggleEditor()" class="rsed_editButtons rsed_editor rsed_dontClose">${editSVG}</div>
            <div onclick="revertText(event)" class="rsed_editButtons rsed_danger rsed_dontClose">${backArrowSVG}</div>
            <div class="rsed_editButtons rsed_danger">${closeSVG}</div>
        </div>
        `
    );


    if (!editButtons) {
        editButtons = document.querySelector('.rsed_icons');
    }


    editableContent.addEventListener('click', (event) => {

        if (!copyHTML) {
            copyHTML = event.target.closest(".rsed_content").innerHTML;
        }

        editableContent.contentEditable = true;
        editableContent.style.cursor = 'auto';
        editableContent.style.outline = '2px dashed rgb(77, 77, 77)';
        editableContent.style.outlineOffset = '5px';
        editButtons.style.opacity = 1;
    });

}



function closeEditMode(event) {

    if (event.target.closest(".rsed_editable") || event.target.closest(".rsed_dontClose")) {
        return;
    }

    editableContent.contentEditable = false;
    editableContent.style.cursor = 'pointer';
    editableContent.style.outline = '';
    editableContent.style.outlineOffset = '';
    editButtons.style.opacity = 0;

    if (!normalEditor) {
        document.querySelector('.rsed_content').style.display = 'block';
        document.querySelector('#wp-editor-wrap').style.display = 'none';

        document.querySelector('#rsed_richEditor').style.display = 'block';
        document.querySelector('#rsed_normalEditor').style.display = 'none';
    }

}


function ToggleEditor() {

    if(normalEditor) {
        document.querySelector('#rsed_richEditor').style.display = 'none';
        document.querySelector('#rsed_normalEditor').style.display = 'block';

        document.querySelector('.rsed_content').style.display = 'none';
        document.querySelector('#wp-editor-wrap').style.display = 'block';
    } else {
        document.querySelector('#rsed_richEditor').style.display = 'block';
        document.querySelector('#rsed_normalEditor').style.display = 'none';

        document.querySelector('.rsed_content').style.display = 'block';
        document.querySelector('#wp-editor-wrap').style.display = 'none';
    }

    normalEditor = !normalEditor;

};


function revertText(event) {

    document.querySelector('.rsed_content').innerHTML = copyHTML;

    document.querySelector('#editor_ifr').contentDocument.querySelector('#tinymce').innerHTML = copyHTML;
    
}



(function dataBinding () {

    // setTimeout for loading Iframe
    setTimeout(() => {
        let iFrame = document.querySelector('#editor_ifr').contentDocument.body;

        iFrame.addEventListener('keyup', () => {
            document.querySelector('.rsed_content').innerText = iFrame.innerText;
        });

        document.querySelector('.rsed_content').addEventListener('keyup', () => {
            iFrame.innerText = document.querySelector('.rsed_content').innerText;
        });  
    
    }, 1000);

})();







