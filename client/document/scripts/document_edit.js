Template.documents_edit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentDocumentId = this._id;

    var documentProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      contributores: $(e.target).find('[name=contributors]').val()
    }

    Documents.update(currentDocumentId, {$set: documentProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('documents_index')
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentDocumentId = this._id;
      Documents.remove({ _id: currentDocumentId});
      Router.go('documents_index')
    }
  },

  'click .upload': function(e) {
    e.preventDefault();

    var oFReader = new FileReader()
    var _id = Documents.insert({encodedImg: []})

    _.each(document.getElementById("uploadImage").files, function(val, index){
      setTimeout(function(){
        oFReader.readAsDataURL(val);
      }, index*30)
    });

    oFReader.onload = function(fEvent){
      $('#uploadPreview').attr('src', fEvent.target.result);
      $('#base').text(fEvent.target.result);
      Documents.update({_id: _id},{$push: {encodedImg: fEvent.target.result}});
    }
  }
});
