import { collection, getDoc, getDocs, Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@utils/firebase/ClientApp';

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
}
