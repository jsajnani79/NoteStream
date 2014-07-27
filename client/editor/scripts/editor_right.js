Template.aceEditor.rendered = function() {
  editor = ace.edit("aceEditor");
  editor.setTheme("ace/theme/vibrant_ink");
  editor.getSession().setMode("ace/mode/css");
  editor.setHighlightActiveLine(true);
};

// Template.notes.Output = function () {
//   return Notes.find({}, { sort: { createdAt: -1 }})
// };

Template.aceEditor.events = {
  'keyup' : function (event) {
    console.log(editor.getValue());
    Notes.insert({
      documentId: "docID",
      createdBy: "Name",
      createdAt: Date.now(),
      sharedWith: ["People"],
      textNote: editor.getValue()
    });
  }
};
