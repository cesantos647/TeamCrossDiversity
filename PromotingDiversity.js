// For full API documentation, including code examples, visit http://wix.to/94BuAAs
let fullText; // variables to hold the full text
let fullText2;
let fullText3;
let fullText4;
let shortText; // variables to hold the short version of the text
let shortText2;
let shortText3;
let shortText4;
let end = "...";

$w.onReady(function () {
	// how many characters to include in the shortened version
	const shortTextLength = 70;
	// read the full text and store it in the fullText variable
	fullText = $w("#text22").text;
	// grab the number of characters defined in shortTextLength and store them in the shortText variable
	shortText = fullText.substr(0, shortTextLength) + end;
	// set the contents of the text element to be the short text
	$w("#text22").text = shortText;
	// read the full text and store it in the fullText variable
	fullText2 = $w("#text23").text;
	// grab the number of characters defined in shortTextLength and store them in the shortText variable
	shortText2 = fullText2.substr(0, shortTextLength) + end;
	// set the contents of the text element to be the short text
	$w("#text23").text = shortText2;
	// read the full text and store it in the fullText variable
	fullText3 = $w("#text24").text;
	// grab the number of characters defined in shortTextLength and store them in the shortText variable
	shortText3 = fullText3.substr(0, shortTextLength) + end;
	// set the contents of the text element to be the short text
	$w("#text24").text = shortText3;
	// read the full text and store it in the fullText variable
	fullText4 = $w("#text25").text;
	// grab the number of characters defined in shortTextLength and store them in the shortText variable
	shortText4 = fullText4.substr(0, shortTextLength) + end;
	// set the contents of the text element to be the short text
	$w("#text25").text = shortText4;
});

export function button1_click(event, $w) {
	//Add your code for this event here:
	// check the contents of the text element
	if ($w("#text22").text === shortText) {
		// if currently displaying short text, display the full text
		$w("#text22").text = fullText;
		$w("#button1").label = "Show less";
	} else {
		// if currently displaying full text, display the short text
		$w("#text22").text = shortText;
		$w("#button1").label = "Show more";
	}

}

export function button2_click(event, $w) {
	//Add your code for this event here:
	// check the contents of the text element
	if ($w("#text23").text === shortText2) {
		// if currently displaying short text, display the full text
		$w("#text23").text = fullText2;
		$w("#button2").label = "Show less";
	} else {
		// if currently displaying full text, display the short text
		$w("#text23").text = shortText2;
		$w("#button2").label = "Show more";
	}

}

export function button3_click_1(event, $w) {
	//Add your code for this event here:
	// check the contents of the text element
	if ($w("#text24").text === shortText3) {
		// if currently displaying short text, display the full text
		$w("#text24").text = fullText3;
		$w("#button3").label = "Show less";
	} else {
		// if currently displaying full text, display the short text
		$w("#text24").text = shortText;
		$w("#button3").label = "Show more";
	}

}

export function button4_click_1(event, $w) {
	//Add your code for this event here:
	// check the contents of the text element
	if ($w("#text25").text === shortText4) {
		// if currently displaying short text, display the full text
		$w("#text25").text = fullText4;
		$w("#button4").label = "Show less";
	} else {
		// if currently displaying full text, display the short text
		$w("#text25").text = shortText4;
		$w("#button4").label = "Show more";
	}

}
