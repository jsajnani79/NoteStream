

Template.editor_middle.helpers({
  images: function(){
    return this.encodedImg
  }
});

Template.editor_left.helpers({
  documents: function(){
    return Documents.find()
  }
});

Template.editor_right.helpers({
	notes: function() {
		return Notes.find()
	}
})
