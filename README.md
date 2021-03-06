# rpc-fetch

make fetch calls just like calling backend functions | 像调用函数一样进行fetch请求

## usage | 使用方法

```
import RpcFetch from 'rpc-fetch'
let client = new RpcFetch(bathPath)
let rpc = client.getMethod(relativePath)

let rtn = await rpc(param1,param2,....)
```

example | 使用示例

```
// backend example
app.post('/ping', res=>res.json("pong"))
```

```
// browser example
import RpcFetch from 'rpc-fetch'
let client = new RpcFetch
let ping:()=>Promise<string> = client.getMethod('ping')
console.log(await pong())
```

codesandbox:

https://codesandbox.io/s/frosty-field-c2h0ex?file=/pages/api/getGreeting.js

## rules | 规则

- API return json contain `error` if fail (rpc will throw) and `data` (rpc return value)  
- path map to http method | 路径映射到 http 方法


path map to http method | 路径映射到 http 方法
```
**/*/get*  => GET, ?q[]=param1&q[]=param2..., when you use GET params can only be strings|当你使用GET的时候参数仅限字符串
**/*/put*  => PUT, body json, [param1,param2...]
**/*/delete*  => DELETE, body json, [param1,param2...]
**/*/patch*  => PATCH, body json, [param1,param2...]
else | 其他 => POST, body json, [param1,param2...]
```

