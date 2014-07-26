Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('documents_create', {path: '/documents_create'});
  this.route('documents_index', {path: '/documents_index'})
  this.route('editor',
    {
      path: '/editor/:_id',
      data: function(){ return Documents.findOne({})}
    }
  )
})
