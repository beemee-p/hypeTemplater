<<<<<<< HEAD
import {
  collection,
  doc,
  getDoc,
  getDocs,
  Firestore,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../firebase/ClientApp";

=======
import { collection, getDoc, getDocs, Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../firebase/ClientApp';
>>>>>>> update portfolio list api
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const getPortfolioList = async (db: Firestore) => {
    const portfolioCol = collection(db, "portfolio");
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
  await console.log({ data });
  res.status(200).json(data);
}

//https://velog.io/@minsangk/2019-09-06-0209-%EC%9E%91%EC%84%B1%EB%90%A8-eik06xy8mm
