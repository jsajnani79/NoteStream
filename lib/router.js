Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [ Meteor.subscribe('documentsOwned') ]
  }
});

Router.map(function(){
  this.route('documents_create', {path: '/documents_create'});
  this.route('documents_index', {path: '/documents_index'});
  //this.route('home', {
  //  path: '/',
  //  waitOn: function() {
  //    return [
  //      Meteor.subscribe('documentsOwned')
  //    ]}
  //});
  this.route('documents_edit', {
    path: '/documents_edit/:_id',
    data: function(){ return Documents.findOne({})}
  });
  this.route('editor',
    {
      path: '/editor/:_id',
      waitOn: function() {
        return [
              Meteor.subscribe('chatOfDocument', this.params._id),
            ];
      },
      data: function() {
        Session.set('documentId', this.params._id);
        return _.extend(Documents.findOne({_id: this.params._id}),
          {
            notes: Notes.findOne({documentId: this.params._id})
          }
        )
      }
    }
  )
});
>>>>>>> 4f8b5b0ffae076ba8932071ec67a87e87d9762d0
