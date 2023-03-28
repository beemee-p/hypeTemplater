import {
  collection,
  doc,
  getDoc,
  getDocs,
  Firestore,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../firebase/ClientApp";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const getPortfolioList = async (db: Firestore) => {
    const portfolioCol = collection(db, "portfolio");
    const portfolioSnapshot = await getDocs(portfolioCol);
    const portfolioList = portfolioSnapshot.docs.map((doc) => doc.data());
    return portfolioList;
  };

  const data = await getPortfolioList(db);
  res.status(200).json(data);
}
