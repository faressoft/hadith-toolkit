const path = require('path');
const fs = require('fs/promises');
const collections = require('./config/collections.json');

const getCollection = (collectionId) => {
  return collections.find((c) => c.id === collectionId);
};

const detectCollectionId = (refString) => {
  const refStringLower = refString.toLowerCase();

  const collection = collections.find((c) => {
    const aliases = c.aliases.map((a) => a.toLowerCase());
    const englishName = c.englishName.toLowerCase();

    // Check if the refString contains any of the aliases, the english name,
    // the collection id, or the collection name.
    return (
      aliases.some((a) => refStringLower.includes(a)) ||
      refStringLower.includes(englishName) ||
      refStringLower.includes(c.id) ||
      refStringLower.includes(c.name)
    );
  });

  return collection ? collection.id : null;
};

const getHadiths = async (collectionId, hadithBaseId) => {
  const collectionFile = path.join(__dirname, `data/collections/${collectionId}.json`);

  const hadiths = JSON.parse(await fs.readFile(collectionFile, 'utf-8'));

  return hadiths
    .filter((h) => h.id.match(new RegExp(`^${hadithBaseId}[a-z]*$`)))
    .map((h) => {
      return {
        ...h,
        collection: getCollection(collectionId).englishName,
      };
    });
};

module.exports = {
  detectCollectionId,
  getHadiths,
};
