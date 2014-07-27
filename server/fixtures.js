if (Notes.find().count() === 0) {
	Notes.insert({
		documentID: "zNQYBtAuDxaiBncAy",
		createdBy: "sue",
		// createdAt: ,
		sharedWith: ["joe", "tim", "kelly"],
		textNote: "This is a note",
	});

	Notes.insert({
		documentID: "EEjAHEzD2w8eAnuBL",
		createdBy: "kelly",
		// createdAt: ,
		sharedWith: ["joe", "tim", "sue"],
		textNote: "This is another note",
	});

	Notes.insert({
		documentID: "EEjAHEzD2w8eAnuBL",
		createdBy: "tim",
		// createdAt: ,
		sharedWith: ["joe", "sue", "kelly"],
		textNote: "This is yet another note", 
	});

}

if (Documents.find().count() === 0) {
	Documents.insert({
		name: "Lecture 1",
		created: Date.now(),
		createdBy: "Teacher"
	})
}