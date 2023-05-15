import { Clipboard } from "@raycast/api";

const isString = (val: unknown) => typeof val === "string" || val instanceof String;

export default async function main() {
  const clipTxt = await Clipboard.readText();
  if (clipTxt == null) {
    throw new Error("No text in clipboard");
  }
  await Clipboard.paste(isString(clipTxt) ? clipTxt.trim() : clipTxt);
}
