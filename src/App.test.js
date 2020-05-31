import React from "react";
import ParserFuncs from "./TextParserFuncs";

test("split words", () => {
	const string = "Test [adjective] [plural noun] are [adjective]!";
	const array = ParserFuncs.getParagraphWords(string);
	expect(array.length).toEqual(5);

	const string2 = "Test [noun]![noun][verb]";
	const array2 = ParserFuncs.getParagraphWords(string2);
	expect(array2.length).toEqual(4);

	const string3 = " Test  ";
	const array3 = ParserFuncs.getParagraphWords(string3);
	expect(array3.length).toEqual(1);
});

test("get word(s) in brackets", () => {
	const string1 = "[adjective]";
	const word1 = ParserFuncs.getFillBlankInstruction(string1);
	expect(word1).toEqual("adjective");

	const string2 = "[plural noun]";
	const word2 = ParserFuncs.getFillBlankInstruction(string2);
	expect(word2).toEqual("plural noun");

	const string3 = "[";
	const word3 = ParserFuncs.getFillBlankInstruction(string3);
	expect(word3).toEqual("");
});

test("get any character immediately after bracketed word", () => {
	const word1 = "[noun]!";
	const after1 = ParserFuncs.getAdjacentFillBlankCharacters(word1);
	expect(after1).toEqual("!");

	const word2 = "[noun]";
	const after2 = ParserFuncs.getAdjacentFillBlankCharacters(word2);
	expect(after2).toEqual("");
});
