import { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '@utils/firebase/ClientApp';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
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
      const image_url = await getDownloadURL(image_snapshot.ref).then(
        (downloadUrl) => downloadUrl,
      );
      console.log(`이미지를 업로드했습니당: ${image_url}`);
      await res.status(200).json(image_url);
    } catch (err) {
      console.log('포트폴리오를 업로드하지 못했습니다.');
      console.error(err);
      await res.status(200).json(null);
    }
  }
}
