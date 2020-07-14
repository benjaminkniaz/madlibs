import React, { useState, useEffect } from "react";
import ParserFuncs from "./TextParserFuncs";
import Layout from "./components/Layout";
import FillTheBlank from "./components/FillTheBlank";
import ParagraphWord from "./components/ParagraphWord";
import "./App.scss";

const example = `Amanda [past-tense verb] a really delicious [adjective] pie because today she turned [number] years old.`;

export default function App() {
    const [madLibsText, setMadLibsText] = useState(example);
    const [printableArea, setPrintableArea] = useState(<div />);
    useEffect(createPrintableText, [madLibsText]);

    function createPrintableText() {
        var paragraph = [];

        const words = ParserFuncs.getParagraphWords(madLibsText);

        words.forEach((word, index) => {
            const fillBlankInstruction = ParserFuncs.getFillBlankInstruction(
                word
            );
            if (fillBlankInstruction !== "") {
                const adjacentChars = ParserFuncs.getAdjacentFillBlankCharacters(
                    word
                );
                paragraph.push(
                    <FillTheBlank
                        key={index}
                        fillBlankInstruction={fillBlankInstruction}
                        adjacentFillBlankCharacters={adjacentChars}
                    />
                );
            } else {
                paragraph.push(<ParagraphWord key={index} word={word} />);
            }
        });

        setPrintableArea(paragraph);
    }

    return (
        <Layout
            printableArea={printableArea}
            madLibsText={madLibsText}
            setMadLibsText={setMadLibsText}
        />
    );
}
