Notes = new Meteor.Collection("reviews", {
    schema: {
        documentId: {
            type: String,
            label: "Associate docuemnt ID"
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
        }
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

