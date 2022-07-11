import { promises as fs } from "fs";
import path from "path";

const JSON_FILEPATH = path.join(__dirname, "json");

export const readFakePiratesList = async () => {
  const filePath = path.join(JSON_FILEPATH, "PiratesList.json");
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
};

export const readFakePirateCrew = async () => {
  const filePath = path.join(JSON_FILEPATH, "PirateCrew.json");
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
};

export const readFakePirateDetail = async () => {
  const filePath = path.join(JSON_FILEPATH, "PirateDetail.json");
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
};
