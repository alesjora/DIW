{
    window.addEventListener("load", init);
    let contexto;
    let x = 300;
    let y = 200;
    let maximo = false;

    function init() {
        contexto = cargarContextoCanvas('micanvas');
        if (contexto) {
            setInterval(crearRectangulo,100);
        }
    }

    function crearRectangulo() {
        if(!maximo){
            contexto.fillStyle = colorAleatorio();
            contexto.fillRect(0, 0, x, y);
            x += 50;
            y +=50;
            if(x==700 && y==600)
                maximo = true;
        }else{
            contexto.fillStyle = colorAleatorio();
            contexto.fillRect(0, 0, x, y);
            x -= 50;
            y -=50;
            console.log(x,y);
            if(x==100 && y==0)
                maximo = false;
        }
        
    }

    function colorAleatorio() {
        return "rgb(" + getAleatorio(0, 255) + "," + getAleatorio(0, 255) + "," + getAleatorio(0, 255) + ")";
    }

    function getAleatorio(inferior, superior) {
        numPosib = superior - inferior;
        aleatorio = Math.random() * numPosib;
        aleatorio = Math.floor(aleatorio);
        return parseInt(inferior) + aleatorio;
    }

    function cargarContextoCanvas(id) {
        let elemento = document.getElementById(id);
        if (elemento && elemento.getContext) {
            let contexto = elemento.getContext('2d');
            if (contexto)
                return contexto;
        }
        return false;
    }
}