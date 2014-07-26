Documents = new Meteor.Collection("documents", {
    schema: {
        name: {
            type: String,
            label: "Document name",
            max: 100,
            min: 1
        },
        description: {
          type: String,
          label: "Description of the document",
          min: 5,
          optional: true
        },
        created: {
          type: Date,
          label: "Created at time",
        },
        contributors: {
          type: [String],
          label: "Programs under this company",
          optional: true
        },
        numVotes: {
          type: Number,
          label: "Number of votes per member",
          min: 0
        },
        encodedImg: {
          type: String
        }
    }
});

Documents.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  },
  remove: function(userId, doc) {
    if (doc.createdBy == userId)
      return true;
    else return false;
  }
});
