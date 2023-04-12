import { collection, getDoc, getDocs, Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@utils/firebase/ClientApp';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const getUserList = async (db: Firestore) => {
    const userCol = collection(db, 'user');
    const userSnapshot = await getDocs(userCol);
    const userList = await Promise.all(
      userSnapshot.docs.map(async (doc) => {
        const user = doc.data();

        if (user.thumbnail) {
          const thumbnailSnapShot = await getDoc(user.thumbnail);
          user.thumbnail = thumbnailSnapShot.data();
        }

        return user;
      }),
    );
    return userList;
  };

  const data = await getUserList(db);
  await console.log({ data });
  res.status(200).json(data);
}

//https://velog.io/@minsangk/2019-09-06-0209-%EC%9E%91%EC%84%B1%EB%90%A8-eik06xy8mm
