import axios, { AxiosInstance } from "axios";

type HeadersType = {
  [key: string]: string;
};

class AxiosDomain {
  private url = "";
  private headers: HeadersType = {
    "Content-Type": "application/json",
  };
  private withCredentials = false;

  constructor(
    public BaseURL: string,
    public Headers: HeadersType,
    public WithCredentials: boolean
  ) {
    this.url = BaseURL;
    this.headers = Headers;
    this.withCredentials = WithCredentials;
  }

  initInstance(): AxiosInstance {
    return axios.create({
      baseURL: this.url,
      headers: this.headers,
      withCredentials: this.withCredentials,
    });
  }
}

export class AxiosBuilder {
  private url = "";
  private headers: HeadersType = {};
  private withCredentials = false;

  static create(): AxiosBuilder {
    return new AxiosBuilder();
  }

  toDomain(): AxiosDomain {
    return new AxiosDomain(this.url, this.headers, this.withCredentials);
  }

  withUrl(url: string) {
    this.url = url;
    return this;
  }
  withHeaders(headers: HeadersType) {
    this.headers = headers;
    return this;
  }

  haveCredentials() {
    this.withCredentials = true;
    return this;
  }
}
