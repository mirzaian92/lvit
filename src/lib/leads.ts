import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export async function appendLeadJsonl(filePath: string, payload: unknown) {
  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(payload)}\n`, "utf8");
}

