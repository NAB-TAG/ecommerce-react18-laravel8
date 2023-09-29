class NumberFormater{
    constructor( number ){
        this.number = number;
    }

    even(){
        return this.number % 2 === 0;
    }

}

export default NumberFormater
