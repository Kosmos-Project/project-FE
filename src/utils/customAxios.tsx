export interface ResponseBody<T> {
  code: number;
  status: string;
  resultMessage: string;
  error?: string;
  path?: string;
  data: T;
}

export interface Pagable {
  pageNum: number;
  offset: number;
  sort?: string;
}

class APITemplate {
  async get<req, res>(req1) {}

  async post<req, res>() {}

  async put<req, res>() {}

  async delete<req, res>() {}
}

export default new APITemplate();
