Template.header.events = {
  'click slide-toggle-left' : function (event) {
    $('.slidebar').hide();
  }
}

Template.header.class_name = function() {
  var doc = Documents.find({_id : Session.get('documentId')}).fetch();
  return doc.name;
}


Template.home.helpers({
  documents: function(){
    return Documents.find()
  }
});
