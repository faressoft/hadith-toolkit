const { detectCollectionId, getHadiths } = require('./utils');

describe('utils', () => {
  describe.only('getHadiths', () => {
    it('should return hadith 1000 from bukhari', async () => {
      expect(await getHadiths('bukhari', 1000)).toEqual([
        {
          id: '1000',
          reference: 'Book 14, Hadith 11',
          content: expect.any(String),
          collection: 'Sahih al-Bukhari',
          grade: '',
        },
      ]);
    });

    it('should return hadith 8 from muslim', async () => {
      expect(await getHadiths('muslim', 8)).toEqual([
        {
          id: '8a',
          reference: 'Book 1, Hadith 1',
          content: expect.any(String),
          collection: 'Sahih Muslim',
          grade: '',
        },
        {
          id: '8b',
          reference: 'Book 1, Hadith 2',
          content: expect.any(String),
          collection: 'Sahih Muslim',
          grade: '',
        },
        {
          id: '8c',
          reference: 'Book 1, Hadith 3',
          content: expect.any(String),
          collection: 'Sahih Muslim',
          grade: '',
        },
        {
          id: '8d',
          reference: 'Book 1, Hadith 4',
          content: expect.any(String),
          collection: 'Sahih Muslim',
          grade: '',
        },
        {
          id: '8e',
          reference: 'Book 1, Hadith 5',
          content: expect.any(String),
          collection: 'Sahih Muslim',
          grade: '',
        },
      ]);
    });
  });

  describe('detectCollectionId', () => {
    it('should return bukhari for bukhari', () => {
      expect(detectCollectionId('bukhari')).toEqual('bukhari');
    });

    it('should return bukhari for al-bukhari 2231', () => {
      expect(detectCollectionId('al-bukhari 2231')).toEqual('bukhari');
    });

    it('should return bukhari for albukhari 2231', () => {
      expect(detectCollectionId('albukhari 2231')).toEqual('bukhari');
    });

    it('should return bukhari for صحيح البخاري', () => {
      expect(detectCollectionId('صحيح البخاري')).toEqual('bukhari');
    });

    it('should return bukhari for صحيح البخاري 1203', () => {
      expect(detectCollectionId('صحيح البخاري 1203')).toEqual('bukhari');
    });

    it('should return bukhari for البخاري 1203', () => {
      expect(detectCollectionId('البخاري 1203')).toEqual('bukhari');
    });
  });
});
