Template.aceEditor.rendered = function() {
  //console.log(this.data._id);
  console.log('render');
  //editor = ace.edit("aceEditor"+this.data._id);
  editor = ace.edit("aceEditor");
  editor.setTheme("ace/theme/xcode");
  editor.getSession().setMode("ace/mode/css");
  editor.setHighlightActiveLine(true);
};

Template.one_note.owns_doc = function () {
  return Meteor.userId() === this.createdBy;
}

Template.editor_right.rendered = function() {
  // add note if there is none
  var myCursor = Notes.find({_id: Meteor.userId()});
  var myDoc = myCursor.hasNext() ? myCursor.next() : null;
  if (myDoc == null) {
    Notes.insert({documentId: Session.get('documentId'), createdBy: Meteor.userId(), createdAt: Date.now(), modifiedAt:Date.now(), sharedWith:[], textNote:""})
  } else {
    Session.set('myNote', myDoc._id);
  }

}

Template.editor_right.notes = function () {
  return Notes.find({}, { sort: { modifiedAt: -1 }})
};

Template.aceEditor.events = {
  'keyup': function (event) {
    console.log($(event.currentTarget).closest('.aceEditor').attr('data-id'));
    console.log(editor.getValue());
    var new_id = $(event.currentTarget).closest('.aceEditor').attr('data-id');
    console.log('>>id', new_id);
    Notes.update(new_id, {
      $set:{
        textNote: editor.getValue(),
        modifiedAt: Date.now()
      }
    });
  }
};
