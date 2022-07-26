import glob from "glob";
import fs from "fs";
import {remark }from "remark";
import fm from "front-matter";
import html from "remark-html";
// import { rehype } from "rehype";

export function convertMarkdown(path) {
	let file = fs.readFileSync(path, 'utf-8');
	let { attributes, body } = fm(file);

	let result = remark().use(html).processSync(body);
	return {html: result.value}
}

