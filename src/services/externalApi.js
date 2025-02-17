import https from 'node:https';
import { setTimeout } from 'node:timers/promises';

class ExternalApiService {
  async makeRequest(options, body = null) {
    const controller = new AbortController();
    const { signal } = controller;
    
    try {
      const timeoutPromise = setTimeout(options.timeout ?? 5000, 'Timeout', { signal });
      
      const request = new Promise((resolve, reject) => {
        const req = https.request({
          ...options,
          signal
        }, (res) => {
          const chunks = [];

          res.on('data', (chunk) => chunks.push(chunk));

          res.on('end', () => {
            try {
              const data = Buffer.concat(chunks).toString();
              // Verifica se o status está OK (2xx)
              if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve(JSON.parse(data));
              } else {
                reject(new Error(`Erro na requisição: ${res.statusCode} - ${data}`));
              }
            } catch (error) {
              reject(new Error('Erro ao fazer parse dos dados'));
            }
          });
        });

        req.on('error', reject);
        
        // Se tiver body, envia
        if (body) {
          req.write(body);
        }
        
        req.end();
      });

      const result = await Promise.race([request, timeoutPromise]);
      if (result === 'Timeout') {
        throw new Error('Timeout da requisição');
      }
      return result;
    } finally {
      controller.abort();
    }
  }

  // GET com query parameters
  async getDataWithParams(params = {}) {
    try {
      const url = new URL('/dados', 'https://api.example.com');
      
      // Adiciona query parameters à URL
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
      
      const options = {
        hostname: url.hostname,
        port: url.port || 443,
        path: `${url.pathname}${url.search}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 15000
      };

      return await this.makeRequest(options);
    } catch (error) {
      console.error('Erro ao buscar dados com parâmetros:', error.message);
      throw error;
    }
  }

  // POST com body
  async postData(data) {
    try {
      const url = new URL('/dados', 'https://api.example.com');
      const bodyData = JSON.stringify(data);
      
      const options = {
        hostname: url.hostname,
        port: url.port || 443,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Content-Length': Buffer.byteLength(bodyData)
        },
        timeout: 15000
      };

      return await this.makeRequest(options, bodyData);
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
      throw error;
    }
  }
}

export default new ExternalApiService();