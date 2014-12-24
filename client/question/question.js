Template.question_slide.document_loaded = function () {
  if (Session.get('documentId')) {
    return true;
  } else {
    return false;
  }
}

Template.question_slide.questions = function () {
  return Questions.find({documentId : Session.get('documentId'), resolved: false }, { sort: { vote: -1 } });
}

Template.question_slide.selected_name = function () {
  var question = Questions.findOne(Session.get("selected_question"));
  return question && player.text;
};

Template.question_entry.selected = function () {
  return Session.equals("selected_question", this._id) ? "selected" : '';
};

Template.question_entry.events = {
  'click .inc' : function(event) {
    console.log('>>> data-id', $(event.currentTarget).attr("data-id"));
console.log($(event.currentTarget));
    Questions.update($(event.currentTarget).attr("data-id"), {$inc: {vote:1}})
  },

  'click .done' : function(event) {
    console.log('>>> data-id', $(event.currentTarget).attr("data-id"));
    Questions.update($(event.currentTarget).attr("data-id"), {resolved: 'true'})
  },

}
Template.question_input.events = {

  'keydown input#question' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.userId();
      else
        var name = 'Anonymous';
      var question = document.getElementById('question');

      if (question.value != '') {
        Questions.insert({
          userId: name,
          documentId: Session.get('documentId'),
          text: question.value,
          time: Date.now(),
          resolved: false,
          vote: 1

        });

        document.getElementById('question').value = '';
        question.value = '';
      }
    }
  }
}
