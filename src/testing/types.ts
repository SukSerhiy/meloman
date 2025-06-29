import { DefaultBodyType, JsonBodyType, PathParams, StrictRequest } from "msw";

export interface IHandlerConfigItem {
  method?: "get" | "post" | "put" | "delete";
  path: string;
  res: (params: {
    request: StrictRequest<DefaultBodyType>;
    params: PathParams;
    cookies: Record<string, string>;
  }) => JsonBodyType;
}

export type THandlerConfig = IHandlerConfigItem[];
