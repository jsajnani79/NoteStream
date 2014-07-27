Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [ Meteor.subscribe('documentsOwned') ]
  }
});

Router.map(function(){
  this.route('documents_create', {path: '/documents_create'});
  this.route('documents_index', {path: '/documents_index'})
  this.route('editor',
    {
      path: '/editor/:_id',
      waitOn: function() {
        return [Meteor.subscribe('documentsOwned')];
      },
      data: function() {
        Session.set('documentId', this.params._id);

        //console.log('notes!!!!', Notes.findOne({documentId: this.params._id}));
        // return _.extend(Documents.findOne({_id: this.params._id}),
        //   {
        //     notes: Notes.find()
        //   }
        // )
      }
    }
  )
});