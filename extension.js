
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('embedded-json.unwrapEmbeddedJSON', function () {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const document = editor.document;
		const text = document.getText();

		const fullRange = new vscode.Range(
			document.positionAt(0),
			document.positionAt(text.length)
		)

		var alteredText = text.replaceAll('\"{', '{');
		alteredText = alteredText.replaceAll('}\"', '}');
		alteredText = alteredText.replaceAll('\\"', '"');

		editor.edit(
			(editBuilder) => {
				editBuilder.replace(fullRange, alteredText);
			});
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
