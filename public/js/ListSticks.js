class ListSticks{

    constructor(){
        this.arrList = [];
    }


    
    agregarStick = (Stick)=>{
        this.arrList.push(Stick);
    }

    pintarSticks(){
        this.arrList.forEach(obj=>{
            obj.pintar();
        })
    }
}
export default new  ListSticks();