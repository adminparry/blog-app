import {Config, Context} from '@netlify/functions'
// netlify/edge-functions/upload.js
export default async (request: Request, context:Context) => {
    // 只处理 POST 请求
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
  
    try {
      // 获取表单数据
      const formData = new ReadableStream({
        start(controller) {
            controller.enqueue(new TextEncoder().encode('Chunk 1\n'));
            controller.enqueue(new TextEncoder().encode('Chunk 2\n'));
            controller.close();
        }
      })
      const reader = request.body?.getReader();
      const form = await reader?.read();
      console.log(request.headers);
    } catch (error) {
        console.error(error);
      return new Response('Error processing file upload', { status: 500 });
    }
  };

  export const config: Config = {
      path: '/upload'
  }