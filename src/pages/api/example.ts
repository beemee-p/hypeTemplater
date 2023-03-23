import { collection, getDocs, Firestore } from "firebase/firestore/lite";
import { db } from "./firebase/ClientApp";

export async function GET(request: Request) {
  // Get a list of cities from your database
  async function getCities(db: Firestore) {
    const portfolioCol = collection(db, "portfolio");
    const portfolioSnapshot = await getDocs(portfolioCol);
    const portfolioList = portfolioSnapshot.docs.map((doc) => doc.data());
    return portfolioList;
  }
  const data = await getCities(db);
  return new Response(JSON.stringify(data));
}
