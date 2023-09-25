
class Slider
{
    constructor(slides) {
        this.slides = document.getElementsByClassName(slides);
        this.actualSlide = 0;
    }

    // Deslizar todos los slides a la izquierda
    moveLeft(){
        if( this.actualSlide <= 0 ){

            this.actualSlide = this.slides.length - 1;

            for (let i = 0; i < this.slides.length; i++) {
                let slide = this.slides[i];
                slide.style.transition = 'transform 1s ease';
                slide.style.transform = `translateX(-${ this.actualSlide }00%)`;
            }

        } else {
            this.actualSlide = this.actualSlide - 1;

            for (let i = 0; i < this.slides.length; i++) {
                let slide = this.slides[i];
                slide.style.transition = 'transform 1s ease';
                slide.style.transform = `translateX(-${ this.actualSlide }00%)`;
            }
        }

    }


    // Deslizar todos los slides a la derecha
    moveRight(){
        if ( this.actualSlide >= (this.slides.length - 1) ) {
            this.actualSlide = 0;
        }else {

            this.actualSlide = this.actualSlide + 1;
        }

        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            slide.style.transition = 'transform 1s ease';
            slide.style.transform = `translateX(-${ this.actualSlide }00%)`;
        }

    }

    // Una transicion cada 5 segundos
    transition( direction ){
        if (direction == 'right') {
            setInterval(()=> this.moveRight(), 5000)
        }
        else if( direction == 'left' ){
            setInterval(()=> this.moveLeft(), 5000)
        }
    }
}

export default Slider
