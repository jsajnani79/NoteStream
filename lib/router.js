Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return [ Meteor.subscribe('documentsOwned'),
             Meteor.subscribe('chatOfDocument', this.params._id)]
  }
});

Router.map(function(){
  this.route('documents_create', {path: '/documents_create'});
  this.route('documents_index', {path: '/documents_index'});
  this.route('home', {
    path: '/',
    data: function(){
      delete session.keys['documentId'];
      return { documents: Documents.find() };
    }
  });
  this.route('documents_edit', {
    path: '/documents_edit/:_id',
    data: function(){ return Documents.findOne({})}
  });
  this.route('editor',
    {
      path: '/editor/:_id',
      data: function() {
        Session.set('documentId', this.params._id);
        //console.log('notes!!!!', Notes.findOne({documentId: this.params._id}));
        return _.extend(Documents.findOne({_id: this.params._id}),{ notes: Notes.find() });
      }
    }
  )
});
