/**
 * Templates
 */


Template.chat_slide.document_loaded = function () {
  if (Session.get('documentId').length > 0 ) {
    return true;
  } else {
    return false;
  }
}

Template.chat_slide.document = function () {
  var documentId = Session.get('documentId');
  if (documentId && documentId.length > 0 ) {
    // get the data object
    var doc = Documents.findOne({_id: Session.get('documentId')});
    console.log('your doc:', doc);
    return doc;
  } else {
    return null;
  }
}


Template.messages.messages = function (documentId) {
  return Messages.find({documentId : documentId}, { sort: { time: -1 }});
}



Template.message_input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().emails[0].address;
      else
        var name = 'Anonymous';
      var message = document.getElementById('message');

      if (message.value != '') {
        console.log('adding message');
        Messages.insert({
          name: name,
          userId: Meteor.userId(),
          documentId: Session.get('documentId'),
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}
