Template.documents_create.events({
  'submit form': function(e){
    e.preventDefault()
    var oFReader = new FileReader()
    var _id = Documents.insert({name: $('.name').val(), description: $('.description').val(),encodedImg: []})

    _.each(document.getElementById("uploadImage").files, function(val, index){
      setTimeout(function(){
        oFReader.readAsDataURL(val);
      }, index*30)
    })

    oFReader.onload =  function(fEvent){
      $('#uploadPreview').attr('src', fEvent.target.result);
      $('#base').text(fEvent.target.result);
      Documents.update({_id: _id},{$push: {encodedImg: fEvent.target.result}});
    }

  }
});
