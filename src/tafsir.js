const fs = require('fs/promises');
const path = require('path');
const tafsirs = require('./config/tafsirs.json');

const getAyahTafsirs = async (ayahId) => {
  const ayahTafsirs = JSON.parse(await fs.readFile(path.join(__dirname, `data/tafsir/${ayahId}.json`)));

  for (const tafsir in ayahTafsirs) {
    ayahTafsirs[tafsir].name = tafsirs[tafsir].name;
  }

  return ayahTafsirs;
};

const listTafsirs = () => {
  return tafsirs;
};

module.exports = {
  getAyahTafsirs,
  listTafsirs,
};
