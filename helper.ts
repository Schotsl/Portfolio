import fs from "fs";

export function getCollection<T>(path: string): T[] {
  const collectionPath = `${process.cwd()}/public/content/${path}`;
  const collectionNames = fs.readdirSync(collectionPath);

  const collectionFiltered = collectionNames.filter((collectionName) =>
    collectionName.endsWith(".json"),
  );
  const collectionObjects = collectionFiltered.map((itemName) => {
    const itemPath = `${collectionPath}/${itemName}`;
    const itemObject = fs.readFileSync(itemPath, "utf8");

    return JSON.parse(itemObject);
  });

  return collectionObjects;
}
