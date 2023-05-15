import { Clipboard } from "@raycast/api";

const isString = (val: unknown) => typeof val === "string" || val instanceof String;

export default async function Command() {
  const text = await Clipboard.readText();

  if (text == null) {
    throw new Error("No text in clipboard");
  }
  await Clipboard.paste(isString(text) ? text.trim() : text);
}
