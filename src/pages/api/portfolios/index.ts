import { collection, getDoc, getDocs, Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db, storage } from '@utils/firebase/ClientApp';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const getPortfolioList = async (db: Firestore) => {
      const portfolioCol = collection(db, 'portfolio');
      const portfolioSnapshot = await getDocs(portfolioCol);
      const portfolioList = await Promise.all(
        portfolioSnapshot.docs.map(async (doc) => {
          const portfolio = doc.data();

          if (portfolio.thumbnail) {
            const thumbnailSnapShot = await getDoc(portfolio.thumbnail);
            portfolio.thumbnail = thumbnailSnapShot.data();
          }

          if (portfolio.user) {
            const userSnapShot = await getDoc(portfolio.user);
            portfolio.user = userSnapShot.data();
          }

          if (portfolio.comment) {
            const commentSnapShot = await getDoc(portfolio.comment);
            portfolio.comment = commentSnapShot.data();
          }

          return portfolio;
        }),
      );
      return portfolioList;
    };

    const data = await getPortfolioList(db);
    await res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const image = req.body.data.image;
    try {
      const storage_ref = ref(storage, 'hi.jpg');
      const image_snapshot = await uploadString(
        storage_ref,
        image,
        'data_url',
      ).then((snapshot) => {
        return snapshot;
      });
      const image_url = getDownloadURL(image_snapshot.ref).then(
        (downloadUrl) => downloadUrl,
      );
      console.log(`이미지를 업로드했습니당: ${image_url}`);
    } catch (err) {
      console.log('포트폴리오를 업로드하지 못했습니다.');
      console.error(err);
    }
    const data = null;
    await res.status(200).json(data);
  }
}
