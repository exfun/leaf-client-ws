/*
-- Created by AI
-- User: AI
-- Date: 2018/6/25
-- Time: 15:11
-- Copyright: YiuGame co.Ltd
--
*/

export class WSocket {
    protected ws:WebSocket;
    protected onMessage:Function;
    isOpen = false;
    onOpen:Function;
    onErr:Function;
    onClose:Function;
    onTimeout:Function;
    _connTimeout = 5000;
    dest:string;

    connect(destTo:string, reCall?:Function):void {
        if(!this.onOpen || !this.onMessage) {
            cc.warn("wsocket onOpen && onMessage maybe required.");
        }
        if(this.ws && this.ws.readyState === WebSocket.OPEN) {
            // established
            this.onOpen();
            this.isOpen = true;
            return;
        }
        this.dest = destTo;
        let self = this;
        this.ws = new WebSocket(destTo);
        this.ws.onopen = function (event) {
            self.onOpen();
            self.isOpen = true;
            //reconnet call
            if(reCall){
                reCall();
            }
            //console.log("Send Text WS was opened.");
        };
        this.ws.onmessage = function (event) {
            self.onMessage(event.data);
            //console.log("response text msg: " + event.data);
        };
        this.ws.onerror = function (event) {
            if(self.onErr){
                self.onErr();
            }
            //console.log("Send Text fired an error");
        };
        this.ws.onclose = function (event) {
            if(self.onClose) {
                self.onClose();    
            }
            self.isOpen = false;
            //console.log("WebSocket instance closed.");
        };
        setTimeout(function () {
            if (self.ws.readyState === WebSocket.OPEN) {
                cc.log("this.ws.readyState === WebSocket.OPEN");
            }else {
                if(self.onTimeout) {
                    self.onTimeout();
                }
                //console.log("WebSocket instance wasn't ready...");
                self.ws.close();
            }
        }, self._connTimeout);
    }
    reConnect(call?:Function):void{
        if(this.dest) {
            this.connect(this.dest, call);
        }else{
            cc.error("you should call connect method first.");
        }
    }
    protected send(data:any):void {
        if(this.ws.readyState != WebSocket.OPEN) {
            // reconnet and send data
            cc.warn("try auto reconnect...");
            let self = this;
            self.reConnect(function(){
                self.ws.send(data);
            });
        }else{
            this.ws.send(data);
        }
    }
    close():void{
        this.isOpen = false;
        this.ws.close();
    }
    set setTimeout(timeout:number){
        this._connTimeout = timeout
    }
}