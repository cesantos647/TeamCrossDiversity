// For full API documentation, including code examples, visit http://wix.to/94BuAAs

let textID = ["#text1", "#text21", "#text22", "#text23"]; //An array to call on any textbox

let shortID = ["#text30","#text31","#text32","#text33"];//an array to call on the shortText textboxes

let buttonID = ["#button8", "#button9", "#button10", "#button11"]; //An array to call on any button

let texts = []; //An array to hold the shortText and fullText properties of each textbox

let shortTexts = [];//an array to hold the shortText version of each textbox

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
		$w(shortID[i]).text = text.shortText;

		//makes the full text disappears
		$w(textID[i]).collapse();

		//makes the short text appear
		$w(shortID[i]).expand();

		//Pushes the fullText version of the textbox into the array texts
		texts.push(text.fullText);

		//Pushes the shortText version of the textbox into the array texts
		shortTexts.push(text.shortText);

	}

});

//Creates functionality for the first button
export function button8_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[0]).collapsed === true) {

		//expands the fullText version
		$w(textID[0]).expand();

		//collapses the shortText version
		$w(shortID[0]).collapse();

		//Changes the text of the button
		$w(buttonID[0]).label = "Show less";

		//Checks if the textbox is the FullText version    
	} else {

		//collapses the fullText version
		$w(textID[0]).collapse();

		//expands the shortText version
		$w(shortID[0]).expand();

		//Changes the text of the button
		$w(buttonID[0]).label = "Show more";

	}

}

//Creates functionality of the second button
export function button9_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[1]).collapsed === true) {

		//expands the fullText version
		$w(textID[1]).expand();

		//collapses the shortText version
		$w(shortID[1]).collapse();

		//Changes the text of the button
		$w(buttonID[1]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		//collapses the fullText version
		$w(textID[1]).collapse();

		//expands the shortText version
		$w(shortID[1]).expand();

		//Changes the text of the button
		$w(buttonID[1]).label = "Show more";

	}

}

//Creates functionality of the third button
export function button10_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[2]).collapsed === true) {

		//expands the fullText version
		$w(textID[2]).expand();

		//collapses the shortText version
		$w(shortID[2]).collapse();

		//Changes the text of the button
		$w(buttonID[2]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		//collapses the fullText version
		$w(textID[2]).collapse();

		//expands the shortText version
		$w(shortID[2]).expand();

		//Changes the text of the button
		$w(buttonID[2]).label = "Show more";

	}

}

//Creates functionality of the fourth button
export function button11_click(event, $w) {

	//Checks if the textbox is the shortText version
	if ($w(textID[3]).collapsed === true) {
		
		//expands the fullText version
		$w(textID[3]).expand();

		//collapses the shortText version
		$w(shortID[3]).collapse();

		//Changes the text of the button
		$w(buttonID[3]).label = "Show less";

		//Checks if the textbox is the fullText version    
	} else {

		//collapses the fullText version
		$w(textID[3]).collapse();

		//expands the shortText version
		$w(shortID[3]).expand();

		//Changes the text of the button
		$w(buttonID[3]).label = "Show more";

	}

}

