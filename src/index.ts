import { request, setHeaders } from './fetcher'

export { setHeaders, request } from './fetcher'


export class RpcFetch {
  constructor(public basePath = '/') { }

  getMethod<T>(path: string) {
    let rtn: unknown = (params: any) => request(this.basePath + path, params)
    return rtn as T
  }
}

export default RpcFetch