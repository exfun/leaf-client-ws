import { Manager } from "./Manager";
import { HttpUtil } from "./HttpUtil";
import { msg } from "./bundle"; 
import { Connection } from "./Connection";
const {ccclass, property} = cc._decorator;
@ccclass
export default class TestNet  extends cc.Component {
    @property(cc.Prefab)
    ppre:cc.Prefab = null;
    me:cc.Node;
    // map es5
    allPlayers: {[key: string]: cc.Node} = {}
    @property
    speed = 0;
    conn:Connection;
    onLoad () {
        // test protobuf bytes
        let readyTime = new Date().getTime();
        let self = this;
        this.conn = Manager.getInstance().openConnection(function(){
            let openTime = new Date().getTime();
            let latency = openTime - readyTime;
            cc.warn("latency->", latency, "ms");
            self.conn.onMsg(msg.Location, function(pos:msg.Location){
                cc.warn("received location message ->", pos);
                let from = new cc.Vec2(pos.fromX,pos.fromY);
                let to = new cc.Vec2(pos.toX,pos.toY);
                // 移动目标
                let target = self.allPlayers[pos.player];
                if(!target) {
                    // 添加新玩家到场景
                    target = self.initNewPlayer(from,pos.player);
                }
                self.moveToPostion(target,from,to, false, pos.speed);
            });
            // 初始化本地玩家
            self.initLocalPlayer();
            // conn.onMsg(msg.Skill, function(sk:msg.Skill){
            //     cc.warn("received skill message ->", sk);
            // });
        });
        // test http get
        // HttpUtil.doGet("http://47.100.40.109:82/login",function(respose){
        //     cc.warn(respose);
        // });
        // // test http post
        // let data = {x:1}
        // HttpUtil.doPost("http://47.100.40.109:82/login",data, function(respose){
        //     cc.warn(respose);
        // });
        this.addListeners();
    }
    initLocalPlayer(){
        // load resourse
        this.speed = cc.random0To1() * 500;
        let newPlayer = cc.instantiate(this.ppre);
        newPlayer.setPosition(this.randomNextPos());
        this.me = newPlayer;
        let uuid = this.generateUUID();
        this.allPlayers[uuid] = newPlayer;
        this.me["uid"] = uuid;
        let idlb = newPlayer.addComponent(cc.Label);;
        idlb.string = "ID:" + uuid;
        idlb.overflow =cc.Label.Overflow.CLAMP;
        cc.director.getScene().addChild(newPlayer);
        this.onAtkFinished(); 
    }
    initNewPlayer(pos:cc.Vec2, uuid:string):cc.Node{
        let newPlayer = cc.instantiate(this.ppre);
        newPlayer.setPosition(pos);
        newPlayer["uid"] = uuid;
        cc.director.getScene().addChild(newPlayer);
        this.allPlayers[uuid] = newPlayer;
        return newPlayer;
    }
    start(){
        
    }
    update(){
        
    }
    addListeners(){
        let self = this;
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(evt:any){
            let btnId:number = evt._button;
            //native 0,2,1 //brower 0,1,2
            let isRightClick:boolean = (cc.sys.isNative && btnId === 1) || (!cc.sys.isNative && btnId === 2) ? true : false;
            if(isRightClick) {
                let x:number = evt._x;
                let y:number = evt._y;
                let to = new cc.Vec2(x,y);
                self.moveToPostion(self.me,self.me.getPosition(),to,true,this.speed);
            }
        });
    }
    onAtkFinished(){
        let to = this.randomNextPos();
        this.moveToPostion(this.me,this.me.getPosition(),to, true,this.speed);
    }

    moveToPostion(target:cc.Node, from:cc.Vec2, to:cc.Vec2, toNet:boolean, xspeed:number){
        if(toNet){
            // 发送消息到服务器
            let loc = new msg.Location();
            loc.fromX = from.x;
            loc.fromY = from.y;
            loc.toX = to.x;
            loc.toY = to.y;
            loc.player = this.me["uid"];
            loc.speed = this.speed;
            this.conn.sendMsg(loc);
            cc.warn("send location msg->",loc);
        }else{
            // 执行动作
            let callback = cc.callFunc(function(){},this);
            if(target["uid"] == this.me["uid"]){
                callback = cc.callFunc(this.onAtkFinished, this);
            }
            let oldX = from.x;
            let oldY = from.y;
            let x:number = to.x;
            let y:number = to.y;
            let calX = x - oldX;
            let calY = y - oldY;
            cc.log("x->",x);
            cc.log("y->",y);
            let duration = Math.pow((calX *calX + calY * calY), 0.5) / xspeed;
            let mv = cc.moveTo(duration, cc.p(x, y));//.easing(cc.easeQuinticActionOut()); 
            // player move
            target.stopAllActions();
            target.runAction(cc.sequence(mv,callback));
        }
    }

    randomNextPos():cc.Vec2{
        let lx = cc.random0To1() * 1000;
        let ly = cc.random0To1() * 768;
        return new cc.Vec2(lx,ly);
    }
    
    generateUUID():string {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
}
