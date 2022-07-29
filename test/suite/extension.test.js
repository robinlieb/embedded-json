const assert = require('assert');
const path = require('path');
const expectedJson = require("../unit/expected.json");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	teardown(async () => {
		await vscode.commands.executeCommand('workbench.action.closeAllEditors');
	});

	test('Test executing command', () => {
		return vscode.workspace.openTextDocument(path.resolve(__dirname, '../unit', "input.json"))
			.then((doc) => {
				return vscode.window.showTextDocument(doc);
			})
			.then(editor => {
				return vscode.commands.executeCommand('embedded-json.unwrapEmbeddedJSON')
				.then(() => {
					var text = editor.document.getText()
					text = text.replaceAll('\r\n', '\n');
					var exp = JSON.stringify(expectedJson, null, 4)
					assert.equal(text, exp)
				})
			})
	});
});
