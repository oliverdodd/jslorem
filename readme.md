jslorem
=======
A Javascript Lorem Ipsum Generator.


Usage
-----
	var jslorem = new LoremIpsum();
	var paragraphs = jslorem.paragraphs(3, true);
	
###Output:

	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

	Laciniaconubia arcu blandit ultrices egestas mauris torquent litora leo nec porta curabitur porta, netus nascetur sodales inceptos suspendisse cras, taciti pretium eros tempus sit.  Faucibussit ullamcorper himenaeos purus cubilia tincidunt, nisl fusce egestas facilisis magna ultrices nisi bibendum magna leo, habitasse netus posuere duis felis vestibulum condimentum cubilia, ipsum sodales duis porttitor per cras auctor, etiam venenatis arcu tincidunt facilisis eu dictumst?

	Sagittishabitasse aptent sit arcu et, aliquam id eu inceptos, conubia nulla magnis scelerisque quis natoque duis aliquet molestie etiam ultricies, nam consectetur nullam rhoncus turpis malesuada lobortis curabitur suscipit mi vivamus ultrices?  Conubiahabitasse vivamus mollis vitae luctus gravida proin, nam risus netus?
	
	
Methods
-------

+ **randomWord()**
		- Get a random word.
+ **randomPunctuation()**
		- Get a random punctuation mark.
+ **words(count)**
		- Get a string of words.
+ **sentenceFragment()**
		- Get a sentence fragment.
+ **sentence()**
		- Get a sentence.
+ **sentences(count)**
		- Get multiple sentences.
+ **paragraph(useStandard)**
		- Get a paragraph.
		If useStandard is true, return the standard Lorem Ipsum paragraph.
+ **paragraphs(count)**
		- Get multiple paragraphs.
		If useStandard is true, lead with the standard Lorem Ipsum paragraph.
