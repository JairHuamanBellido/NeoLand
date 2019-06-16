class ListSticks {

    constructor() {
        this.arrList = [];
    }



    agregarStick = (Stick) => {
        this.arrList.push(Stick);
    }

    pintarSticks() {
        this.arrList.forEach(obj => {
            obj.pintar();
        })
    }

    removeSitck = (Stick) => {
        this.arrList = this.arrList.filter(obj => obj !== Stick);
    }

    automaticRemove = (time,stick)=>{
        setTimeout(() => {
            this.removeSitck(stick);
        }, time);        
    }
}
export default new ListSticks();