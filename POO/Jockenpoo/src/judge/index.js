class judge{
    constructor(opt1,opt2){
        this.opt1 = opt1
        this opt2 = opt2
    }

    call(){
        const sortOpt = Math.floor(Math.random() * 3 - 0)
        return this._opt[sortOpt].id
    }

    set opt(option){
        this._opt = option
    }

    get opt(){
        return this._opt
    }

}

module.exports = judge