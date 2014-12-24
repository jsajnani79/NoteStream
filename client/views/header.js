Template.header.events = {
  'click #toggle_chat' : function (event) {
    console.log('toggle clicked');
    $('#chat_slide').toggleClass('sb-active');
  },
  'click #toggle_question' : function (event) {
    console.log('toggle clicked');
    $('#question_slide').toggleClass('sb-active');
  }
}

Template.header.class_name = function() {
  var doc = Documents.find({_id : Session.get('documentId')}).fetch();
  return doc.name;
}

Template.header.document_loaded = function () {
  if (Session.get('documentId')) {
    console.log('I got docmentId', Session.get('documentId'))
    return true;
  } else {
    console.log('I dont have id');
    return false;
  }
}

Template.home.helpers({
  documents: function(){
    return Documents.find()
  }
});

