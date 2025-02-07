import type { LanguageClient } from "vscode-languageclient/node.js"

import * as vscode from 'vscode';

let client: LanguageClient | undefined

// This function is called when the extension is deactivated.
export function deactivate(): Thenable<void> | undefined {
  if (client !== undefined) {
    return client.stop()
  }
  return undefined
}

// This function is called when the extension is activated.
export async function activate(_context: vscode.ExtensionContext): Promise<void> {}

let uri = vscode.Uri.file('file:///path/to/file');
console.log(uri)