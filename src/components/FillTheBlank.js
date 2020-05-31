import React, { Fragment } from "react";

export default ({ fillBlankInstruction, adjacentFillBlankCharacters }) => (
	<Fragment>
		<span className="fill-blank">
			<span className="instruction">{fillBlankInstruction}</span>
		</span>
		{adjacentFillBlankCharacters}{" "}
	</Fragment>
);
