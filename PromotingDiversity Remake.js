
// For full API documentation, including code examples, visit http://wix.to/94BuAAs

let textID = ["#text1", "#text21", "#text22", "#text23"]; //An array to call on any textbox

let buttonID = ["#button8", "#button9", "#button10", "#button11"]; //An array to call on any button

let texts = []; //An array to hold the shortText and fullText properties of each textbox

//Creates and object to define properties of textbox
function text(shortText, fullText) {

	this.shortText = shortText || "", //Short version of the text 

		this.fullText = fullText || ""; //Full version of the text

}

//Prepares each textbox properties
$w.onReady(function () {

	//Stores the properties of each textbox
	for (var i = 0; i < 4; i++) {

		new text();

		//Assigns the fullText property to the whole text in the textbox
		text.fullText = $w(textID[i]).text;

		//Assigns the shortText property to the first 70 characters in the textbox
		text.shortText = text.fullText.substr(0, 70) + " ...";

		//Sets the shown text to the shortText version
		$w(textID[i]).text = text.shortText;

		//Pushes the fullText version of the textbox into the array texts
		texts.push(text.fullText);

		//Pushes the shortText version of the textbox into the array texts
		texts.push(text.shortText);

	}

});

//Creates functionality for the first button
export function button8_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[0]).text === texts[1]) {

		// if currently displaying short text, display the full text
		$w(textID[0]).text = texts[0];

		//Changes the text of the button
		$w(buttonID[0]).label = "Show less";

		//Checks if the textbox is the FullText version    
	} else {

		// if currently displaying full text, display the short text
		$w(textID[0]).text = texts[1];

		//Changes the text of the button
		$w(buttonID[0]).label = "Show more";

	}

}

//Creates functionality of the second button
export function button9_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[1]).text === texts[3]) {

		// if currently displaying short text, display the full text
		$w(textID[1]).text = texts[2];

		//Changes the text of the button
		$w(buttonID[1]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		//if currently displaying full text, display the short text
		$w(textID[1]).text = texts[3];

		//Changes the text of the button
		$w(buttonID[1]).label = "Show more";

	}

}

//Creates functionality of the third button
export function button10_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[2]).text === texts[5]) {

		// if currently displaying short text, display the full text
		$w(textID[2]).text = texts[4];

		//Changes the text of the button
		$w(buttonID[2]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		// if currently displaying full text, display the short text
		$w(textID[2]).text = texts[5];

		//Changes the text of the button
		$w(buttonID[2]).label = "Show more";

	}

}

//Creates functionality of the fourth button
export function button11_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[3]).text === texts[7]) {

		// if currently displaying short text, display the full text
		$w(textID[3]).text = texts[6];

		//Changes the text of the button
		$w(buttonID[3]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		// if currently displaying full text, display the short text
		$w(textID[3]).text = texts[7];

		//Changes the text of the button
		$w(buttonID[3]).label = "Show more";

	}

}


