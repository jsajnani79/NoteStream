Template.documents_create.events({
  'submit form': function(e){
    e.preventDefault()
    var oFReader = new FileReader()

    oFReader.onload =  function(fEvent){
      $('#uploadPreview').attr('src', fEvent.target.result);
      $('#base').text(fEvent.target.result);
      Documents.insert({encodedImg: fEvent.target.result});
    }

    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0])
  }
})
