// examin unit test
LoremIpsumTest = {
	checkString: function(s) {
		console.log(s);
		Assert.notNull(s);
		Assert.notBlank(s);
	},

	countChunks: function(s, d) {
		return s.split(d).length;
	},

	countWords: function(s) {
		return this.countChunks(s, " ");
	},

	countSentences: function(s) {
		return this.countChunks(s, /[.?]/) - 1;
	},

	countParagraphs: function(s) {
		return this.countChunks(s, "\n\n");
	},
	
	randomInt: function() {
		 return Math.round(Math.random()*20) + 1;
	},

	test_randomWord: function() {
		this.checkString(LoremIpsum.randomWord());
	},

	test_randomPunctuation: function() {
		this.checkString(LoremIpsum.randomPunctuation());
	},

	test_words: function() {
		var n = this.randomInt();
		var s = LoremIpsum.words(n);
		this.checkString(s);
		var c = this.countWords(s);
		Assert.equals(n, c, "expecting " + n + " words, counted " + c);
	},

	test_sentenceFragment: function() {
		var m = 3;
		var s = LoremIpsum.sentenceFragment();
		this.checkString(s);
		var c = this.countWords(s);
		Assert.greaterThanOrEqualTo(c, m, "Enough words");
	},

	test_sentence: function() {
		var m = 3;
		var s = LoremIpsum.sentence();
		this.checkString(s);
		var c = this.countWords(s);
		Assert.greaterThanOrEqualTo(c, m, "Enough words");
		Assert.isTrue(s.charAt(0) == s.toUpperCase().charAt(0), "First character uppercase");
		var lastChar = s.charAt(s.length - 1);
		Assert.isTrue(lastChar == "." || lastChar == "?", "Is Punctuated");
	},

	test_sentences_count: function() {
		var n = this.randomInt();
		var s = LoremIpsum.sentences(n);
		this.checkString(s);
		var c = this.countSentences(s);
		Assert.equals(n, c, "expecting " + n + " sentences, counted " + c);
	},

	test_paragraph_useStandard: function() {
		var m = 2;
		var s = LoremIpsum.paragraph(true);
		this.checkString(s);
		var c = this.countSentences(s);
		Assert.greaterThan(c, m, "expecting > " + m + " sentences, counted " + c);
		Assert.stringStartsWith(s, "Lorem ipsum dolor sit amet", "Starts with standard");
	},

	test_paragraph: function() {
		var m = 2;
		var s = LoremIpsum.paragraph();
		this.checkString(s);
		var c = this.countSentences(s);
		Assert.greaterThanOrEqualTo(c, m, "Enough sentences");
	},

	test_paragraphs_count_useStandard: function() {
		var n = this.randomInt();
		var s = LoremIpsum.paragraphs(n, true);
		this.checkString(s);
		var c = this.countParagraphs(s);
		Assert.equals(n, c, "expecting " + n + " paragraphs, counted " + c);
		Assert.stringStartsWith(s, "Lorem ipsum dolor sit amet", "Starts with standard");
	},

	test_paragraphs_count: function() {
		var n = this.randomInt();
		var s = LoremIpsum.paragraphs(n);
		this.checkString(s);
		var c = this.countParagraphs(s);
		Assert.equals(n, c, "expecting " + n + " paragraphs, counted " + c);
	}
};