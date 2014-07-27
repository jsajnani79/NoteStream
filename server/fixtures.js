if (Notes.find().count() === 0) {
	Notes.insert({
		documentID: "zNQYBtAuDxaiBncAy",
		createdBy: "sue",
		modifiedAt: Date.now(),
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
		textNote: "Irony cliche keffiyeh disrupt ugh banjo bicycle rights, hoodie +1 quinoa. Cornhole XOXO drinking vinegar lo-fi semiotics ennui, cray mlkshk lomo. Brooklyn Shoreditch single-origin coffee, squid master cleanse tousled Bushwick literally Neutra. Fap twee four loko, keffiyeh stumptown Odd Future Blue Bottle ethnic Tonx skateboard kale chips. Meh cornhole art party, Brooklyn banh mi Shoreditch stumptown Blue Bottle viral. Brunch hella direct trade fanny pack Tonx farm-to-table, Austin typewriter. Ennui High Life pop-up photo booth crucifix banjo, fixie single-origin coffee before they sold out retro umami paleo.", 
	});

}

if (Documents.find().count() === 0) {
	Documents.insert({
		name: "Lecture 1",
		created: Date.now(),
		createdBy: "Teacher"
	})
}