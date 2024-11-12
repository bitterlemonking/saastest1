import { config } from "../config";
import type { SendEmailHandler } from "../types";

const { from } = config;

export const send: SendEmailHandler = async ({ to, subject, text }) => {
	let formattedOutput = `Sending email to ${to} with subject ${subject}\n\n`;

	formattedOutput += `Text: ${text}\n\n`;

	console.log(formattedOutput);
};
