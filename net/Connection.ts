/*
-- Created by AI
-- User: AI
-- Date: 2018/6/25
-- Time: 15:11
-- Copyright: YiuGame co.Ltd
--
*/
/* USAGE
npm install protobufjs (install project src)
pbjs -t static-module -w commonjs -o bundle.js msg.proto
pbts -o bundle.d.ts bundle.js
*/
import { WSocket } from "./WSocket"; 
import { msgTypes } from "./Msg";

export class Connection extends WSocket {
    protected handlers = {};
    constructor() {
        super();
        this.onMessage = this.decodeMsg;
    }
    /**
     * send msg
     * @param msg eg:msg.Object in *.proto
     */
    sendMsg(msg){
        let pkg = this.encodeMsg(msg);
        super.send(pkg);
    }
    /**
     * register msg handler 
     * @param msgType 消息类型 in net/Msg.ts
     * @param call 回调方法
     */
    onMsg(msgType:any, call:Function){
        let msgId = -1;
        for(let i=0; i<msgTypes.length; i++) {
            if(msgType.name === msgTypes[i].name){
                msgId = i;
                break;
            }
        }
        if(msgId === -1) {
            cc.error("Can't register msg package for type->", typeof msgType, "\n Please const first.")
            return;
        }
        this.handlers[msgId] = call;
    } 
    // encode protobuf bytes
    private encodeMsg(data):Uint8Array {
        let msgId = -1;
        for(let i=0; i<msgTypes.length; i++) {
            if(data.constructor.name === msgTypes[i].name){
                msgId = i;
                break;
            }
        }
        if(msgId === -1) {
            cc.error("Can't encode data package for type->", typeof data, "\n Please register first.")
            return;
        }
        //let message = msg[type].create(value);
        let message = msgTypes[msgId].create(data);
        // message content
        let buffer  = msgTypes[msgId].encode(message).finish();
        // write leaf's id (uint16 BigEndian 2 byte)
        let idBuffer = new ArrayBuffer(2);
        let idView = new DataView(idBuffer);
        idView.setUint16(0,msgId,false);
        // wrap bytes package
        let pkg = this.concatenate(new Uint8Array(idBuffer), buffer);
        return pkg;
    }
    // decode protobuf bytes
    private decodeMsg(message){
        // try decode
        let self = this;
        try {
            if(cc.sys.isNative){
                self.bufferToCall(message);
            }else if(message instanceof Blob){
                let fileReader = new FileReader();
                fileReader.onload = function() {
                    let arrayBuffer:ArrayBuffer = this.result;
                    self.bufferToCall(arrayBuffer);
                };
                fileReader.readAsArrayBuffer(message);
            }else{
                cc.warn("can't decode msg type, ", message);
            }
        } catch (error) {
            cc.warn("decode msg error, ", error);
        }
    }
    private bufferToCall(arrayBuffer:ArrayBuffer){
        let pkgData:Uint8Array = new Uint8Array(arrayBuffer);
        let msgIdView = new DataView(arrayBuffer);
        // msg type id
        let msgId = msgIdView.getUint16(0);
        // msg body content
        let body = pkgData.subarray(2, pkgData.length);
        let decodedMsg = msgTypes[msgId].decode(body);
        let call =  this.handlers[msgId];
        if(call){
            call(decodedMsg);
        }else{
            cc.warn("Unhandle msgId->", msgId);
            cc.warn("received unhandle message->", decodedMsg);
        }
    }
    
    // array contact
    private concatenate(...arrays) {
        let totalLength = 0;
        for (let arr of arrays) {
            totalLength += arr.length;
        }
        let result = new Uint8Array(totalLength);
        let offset = 0;
        for (let arr of arrays) {
            result.set(arr, offset);
            offset += arr.length;
        }
        return result;
    }
}
