/**
 * Templates
 */

Template.messages.messages = function (documentId) {
  return Messages.find({documentId : documentId}, { sort: { time: -1 }});
}


Template.message_input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
        var name = 'Anonymous';
      var message = document.getElementById('message');

      if (message.value != '') {
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
