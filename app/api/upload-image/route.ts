// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import aws from 'aws-sdk';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

interface UploadRequest extends NextApiRequest {
  body: {
    fileName: string;
    fileType: string;
  };
}

const uploadHandler = async (req: UploadRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { fileName, fileType } = req.body;

    const s3Params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };

    try {
      const signedRequest = await s3.getSignedUrlPromise('putObject', s3Params);
      const url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

      res.status(200).json({ signedRequest, url });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default uploadHandler;
