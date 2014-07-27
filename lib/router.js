Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [ Meteor.subscribe('documentsOwned') ]
  }
});

Router.map(function(){
  this.route('documents_create', {path: '/documents_create'});
  this.route('documents_index', {path: '/documents_index'});
  this.route('documents_edit', {
    path: '/documents_edit/:_id',
    data: function(){ return Documents.findOne({})}
  });
  this.route('editor',
    {
      path: '/editor/:_id',
      data: function(){
        return _.extend(Documents.findOne({_id: this.params._id}),
          {
            notes: Notes.findOne({documentId: this.params._id})
          }
        )
      }
    }
  )
});
