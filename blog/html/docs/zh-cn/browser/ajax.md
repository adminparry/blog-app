# ajax

``` ts
enum options {
  GET = 1;
  POST = 2;
  DELETE = 3;
  PUT = 4;
} 
interface Data {
    url: string;
    data: Object;
}
interface AjaxFace {
    readonly xhr: Object;
    readonly type: options;
    send(type:options, data: Data): Promise<void>;
    abort(): Promise<void>
}

class Ajax implements AjaxFace {
    constructor(){
        this.xhr = null;
        if(window.xmlHttpRequest){
            this.xhr = new window.xmlHttpRequest();
        }else{
            this.xhr = new window.ActiveXObject("Mscrosoft.XMLHttp");
        }

        
    }
    private qs(data:Data): string {
        return Object.keys(data).map(item => `${item}=${JSON.stringify(data[item])}`).join('&');
    }
    public send(type:options, data: Data){
        switch(type){
            case 1:
            this.xhr.open('get', data.url + this.qs(data.data));
            this.xhr.send();
            break;
            case 2:
            this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            this.xhr.open('post', data.url);
            this.xhr.send(this.qs(data.data));
            break;
            case 3:
            case 4:
            break;
        }
        return new Promise((resolve, reject) => {
            this.xhr.onreadystatechange = () => {
                if(this.xhr.readyState === 4){

                    if((this.xhr.status >= 200 && this.xhr.status < 300) || this.xhr.status == 304){
                        resolve(this.xhr.responseText);
                    }else {
                        reject("status error")
                    }
                }else {
                    reject('readyState error')
                }
            }
        });
    }

}
```

> promise 的中断方案

``` js
function getPromise (callback) {
  let _resolve, _reject;
  const promise = new Promise((res, rej) => {
    _resolve = res;
    _reject = rej;
    callback && callback(res, rej);
    return {
      promise,
      abort: () => {
        _reject({ message: "promise aborted" })
      }
    }
  })
}

function runCallback (resolve, reject) {
    setTimeout(() => {
        resolve(12345);
    }, 5000)
}
const { promise, abort } = getPromise(runCallback);
promise.then(/*...*/).catch(/*...*/)
abort()
```