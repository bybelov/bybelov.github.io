(function (){

    var contentArea = document.querySelector('.js-content');
    var buttonEdit = document.querySelector('.js-btn-edit');
    var buttonSave = document.querySelector('.js-btn-save');
    var buttonCancel = document.querySelector('.js-btn-cancel');

    buttonEdit.addEventListener('click', function(e){
        e.preventDefault();
        if(!contentArea.hasAttribute('contenteditable')){
            this.setAttribute('disabled','disabled');
            contentArea.setAttribute('contenteditable','');
            buttonCancel.removeAttribute('disabled');
            buttonSave.removeAttribute('disabled');
        }
    });
    buttonSave.addEventListener('click', function(e){
        if(contentArea.hasAttribute('contenteditable')){
            contentArea.removeAttribute('contenteditable');
            this.setAttribute('disabled','disabled');
            buttonCancel.setAttribute('disabled','disabled');
            buttonEdit.removeAttribute('disabled');
        }
    });
    buttonCancel.addEventListener('click', function(e){
        e.preventDefault();
        if(contentArea.hasAttribute('contenteditable')){
            this.setAttribute('disabled','disabled');
            buttonSave.setAttribute('disabled','disabled');
            buttonEdit.removeAttribute('disabled');
            contentArea.removeAttribute('contenteditable');
        }
    });


})();
