Template.question_slide.document_loaded = function () {
  if (Session.get('documentId')) {
    return true;
  } else {
    return false;
  }
}

Template.question_slide.questions = function (documentId) {
  return questions.find({documentId : documentId}, { sort: { time: -1 }});
}

Template.question_input.events = {
  'keydown input#question' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
        var name = 'Anonymous';
      var question = document.getElementById('question');

      if (question.value != '') {
        Questions.insert({
          userId: Meteor.userId(),
          documentId: Session.get('documentId'),
          test: question.value,
          time: Date.now(),
        });

        document.getElementById('question').value = '';
        question.value = '';
      }
    }
  }
}
