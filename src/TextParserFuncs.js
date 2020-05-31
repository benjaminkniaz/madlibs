function getParagraphWords(text) {
	const brackets_not_preceded_by_space = /(?<!\s)\[/g;
	const textCleaned = text.replace(brackets_not_preceded_by_space, " [");

	const spaces_not_within_brackets = /\s+(?=[^[\]]*(?:\[|$))/; // https://stackoverflow.com/a/9644814/2228486
	var wordArray = textCleaned.split(spaces_not_within_brackets);
	wordArray = wordArray.filter((el) => el !== "");

	console.log("split words", wordArray);
	return wordArray;
}

function getFillBlankInstruction(text) {
	const text_in_brackets = /\[(.*?)\]/;
	const matches = text.match(text_in_brackets);
	return matches !== null ? matches[1] : "";
}

function getAdjacentFillBlankCharacters(text) {
	const array = text.split("]");
	return array.length > 1 ? array[1] : "";
}

export default {
	getParagraphWords,
	getFillBlankInstruction,
	getAdjacentFillBlankCharacters,
};
