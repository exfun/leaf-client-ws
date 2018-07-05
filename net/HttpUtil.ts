/*
-- Created by AI
-- User: AI
-- Date: 2018/6/25
-- Time: 15:11
-- Copyright: YiuGame co.Ltd
--
*/
export class HttpUtil {
    public static xhrTimeout:number = 5000;
    // send http/https get
    public static doGet(url:string, callback:Function, errorCall?:Function):void {
        this.doRequest(url,"GET",null,callback,errorCall);
    }
    // send http/https post
    public static doPost(url:string, data:any, callback:Function, errorCall?:Function):void {
        this.doRequest(url, "POST", data, callback, errorCall);
    }

    private static doRequest(url:string, method:string, data:any, callback:Function, errorCall?:Function):void {
        let xhr = new XMLHttpRequest();
        xhr.timeout = this.xhrTimeout;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 ) {
                // 200, 302, 301 etc.
                if(xhr.status >= 200 && xhr.status < 400){
                    let response = xhr.responseText;
                    if(callback) {
                        callback(response);
                    }
                }else{
                    console.log("request err->", xhr.status, xhr.responseText );
                    if(errorCall){
                        errorCall();
                    }
                }
            }
        };
        xhr.ontimeout = function() {
            console.log("request err-> timeout.");
            xhr.abort();
        }
        //asyn
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
}
