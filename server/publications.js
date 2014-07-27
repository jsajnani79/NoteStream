Meteor.publish('documentsOwned', function() {
  return Documents.find({});
  // return Documents.find({createdBy: this.userId});
});

Meteor.publish('documentsContributing', function() {
    return Documents.find({contributors: this.userId});
});

Meteor.publish('chatOfDocument', function(documentId) {
    return Messages.find({documentId: documentId});
});

Meteor.publish('ownedNotesOfDocument', function(documentId) {
    return Notes.find({documentId: documentId, createdBy: this.userId});
});

Meteor.publish('sharedNotesOfDocument', function(documentId) {
    return Notes.find({documentId: documentId, sharedWith: this.userId});
});
