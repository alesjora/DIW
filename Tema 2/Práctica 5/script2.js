{
    window.addEventListener("load", init);
    let contexto;
    let image = new Image();
    image.src = "iss.jpg"
    

    function init() {
        contexto = cargarContextoCanvas('micanvas');
        if (contexto) {
            recortarImagen();
        }
    }

    function recortarImagen(){
        //Muestra la imagen original
        contexto.drawImage(image,0,0);
        //Muestra las imagenés recortadas
        contexto.drawImage(image,90,130,200,200,0,310,150,100);
        contexto.drawImage(image,90,130,200,200,115,310,150,100);
        contexto.drawImage(image,90,130,200,200,230,310,150,100);
        contexto.drawImage(image,100,200,200,200,0,395,115,100);
        contexto.drawImage(image,100,200,200,200,115,395,115,100);
        contexto.drawImage(image,100,200,200,200,230,395,150,100);

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