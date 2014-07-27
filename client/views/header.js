Template.header.events = {
  'click #toggle_chat' : function (event) {
    console.log('toggle clicked');
    $('#chat_slide').toggleClass('sb-active');
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
