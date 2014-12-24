Template.editor_middle.helpers({
  images: function(){
    // var docs = Documents.findOne({_id: 'vgMPMZdrZZThZqBKZ'}).encodedImg
    // var img = docs[Session.get('editor:index')].length
    // if(docs.length < Session.get('editor:index')){
    //   Session.set('editor:index', Session.get('editor:index')+1)
    // } else {
    //   Session.set('editor:index', 0)
    // }

    
  },
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
});

Template.docListItem.helpers({
  cssClass: function() {
    console.log(this);
    // var id_path = "/editor/" + {{this.id}};
    // console.log("ID_PATH", id_path);
    console.log(Session.documentID);
    // if(this._id == )
  }
})