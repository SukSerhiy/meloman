import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { beforeAll, afterEach, afterAll } from 'vitest';
import { THandlerConfig } from './types';

export function createServer(handlerConfig: THandlerConfig) {
  const handlers = handlerConfig.map((config) => {
    return http[config.method || 'get'](config.path, ({ request, params, cookies }) => {
      return HttpResponse.json(config.res({ request, params, cookies }));
    })
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });
  
  afterEach(() => {
    server.resetHandlers();
  });
  
  afterAll(() => {
    server.close();
  });
}