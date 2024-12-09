// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "It always seems impossible until it’s done."
];

export function activate(context: vscode.ExtensionContext) {

	
	console.log('Congratulations, your extension "quotes" is now active!');

	
	let disposable = vscode.commands.registerCommand('quotes.helloWorld', () => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	
		vscode.window.showInformationMessage(`Motivational Quote: ${randomQuote}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
