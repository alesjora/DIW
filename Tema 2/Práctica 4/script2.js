{
    window.addEventListener("load", init);
    let contexto;


    function init() {
        contexto = cargarContextoCanvas('micanvas');
        if (contexto) {
            crearRectangulo();
        }
    }

    function crearRectangulo() {
        //Primer rectangulo
        contexto.fillStyle = colorAleatorio();
        contexto.strokeRect(20, 30, 200, 100);

        //Segundo rectangulo
        contexto.fillStyle = colorAleatorio();
        contexto.strokeRect(50, 60, 200, 100);

        //Primera línea
        contexto.beginPath();
        contexto.moveTo(20,30);
        contexto.lineTo(50,60);
        contexto.stroke();
        contexto.closePath();

        //Segunda línea
        contexto.beginPath();
        contexto.moveTo(20,130);
        contexto.lineTo(50,160);
        contexto.stroke();
        contexto.closePath();

        //Tercera línea
        contexto.beginPath();
        contexto.moveTo(220,30);
        contexto.lineTo(250,60);
        contexto.stroke();
        contexto.closePath();

        //Cuarta línea
        contexto.beginPath();
        contexto.moveTo(220,130);
        contexto.lineTo(250,160);
        contexto.stroke();
        contexto.closePath();
    }

    function colorAleatorio() {
        return "rgba(" + getAleatorio(0, 255) + "," + getAleatorio(0, 255) + "," + getAleatorio(0, 255) + ",0.1)";
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