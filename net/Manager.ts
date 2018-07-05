/*
-- Created by AI
-- User: AI
-- Date: 2018/6/25
-- Time: 15:11
-- Copyright: YiuGame co.Ltd
--
*/
import {Connection} from "./Connection";
export class Manager {
    //sgingleton
    static sgingleton:Manager = null;
    //connection
    private conn:Connection = null;
    // dest host
    destURL:string = null;
    private constructor(){
        // init all properties
        this.conn = new Connection();
        this.destURL =  "ws://127.0.0.1:3553";
    }
    // 实例化单例
    public static getInstance():Manager{
        if(this.sgingleton != null){
            return this.sgingleton;
        }else{
            return this.sgingleton = new Manager();
        }
    }
    /**
     * 打开连接
     * @param onConnected 连接打开回调函数
     */
    openConnection(onConnected:Function):Connection{
        this.conn.onOpen = onConnected;
        this.conn.connect(this.destURL);
        return this.conn;
    }
}