Template.sidebar.events({
  'click #westPanelToggleLink':function(){
    $('#westPanel').sidebar('toggle');
   } 
});

// Template.sidebar.events({
// 	'click .sidebar-toggle': function(e){
//     e.preventDefault();
// 		$('body').toggleClass('sidebar-open');
// 	},
//   'keyup, search, .filter-field': function(e){
//     e.preventDefault();
//     var val = $(e.target).val().toLowerCase();
//     $("#categoryList > li.category-item").each(function() {
//       if ($(this).text().toLowerCase().search(val) > -1) {
//           $(this).show()
//       }
//       else {
//           $(this).hide();
//       }
//     });
//   },
//   'click #difficultyFilterContainer input': function(e){
//     var val = $(e.target).val();
//     var currentFilter = Session.get('postDifficulty');
//     if(val !== currentFilter) {
//       Session.set('postDifficulty', val);
//     } else {
//       Session.set('postDifficulty', '');
//     }
//   },
//   'click .home a': function(e){
//     Session.set('subCategories', []);
//   },
//   'click .category-link': function(e){

//     var categoryName = $(e.target).text();
//     var subCategories = Session.get('subCategories');
//     if(subCategories.length !== 0){
//       e.preventDefault();
//     }

//     idx = _.indexOf(subCategories, categoryName);
//     if(idx !== -1){
//       subCategories.splice(idx, 1);
//     } else {
//       subCategories.push(categoryName);
//     }
//     Session.set('subCategories', subCategories);
//   }
// });