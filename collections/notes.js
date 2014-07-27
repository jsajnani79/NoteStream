Notes = new Meteor.Collection("notes", {
    schema: {
        documentId: {
          type: String,
          label: "Associate document ID"
        },
        createdBy: {
          type: String,
          label: "Created By UserID"
        },
        createdAt: {
          type: Date,
          label: "Created at Time"
        },
        sharedWith: {
          type: [String],
          label: "Shared with what users"
        },
        textNote: {
          type: String,
          label: "text note",
          optional: true
        },
        imageNote: {
          type: String,
          label: "image note",
          optional: true
        },
    }
});

Notes.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, doc) {
    if (userId === doc.createdBy)
      return !! userId;
    else return false;
  },
  remove: function(userId, doc) {
    if (doc.createdBy == userId)
      return true;
    else return false;
  }
});
