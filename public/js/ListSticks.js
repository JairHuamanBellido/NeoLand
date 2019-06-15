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
}
export default new ListSticks();