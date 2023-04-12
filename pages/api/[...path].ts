// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware';

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    req.headers.cookie = '';

    httpProxyMiddleware(req, res, {
        // You can use the `http-proxy` option
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false
   });
}

// proxy server ==> http-proxy
