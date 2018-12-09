{
    window.addEventListener("load", init);
    let contexto;
    
    function init() {
        contexto = cargarContextoCanvas('micanvas');
        if (contexto) {
            crearDegradado();
        }
    }

    function crearDegradado(){
        //Creo rectángulo contenedor
        contexto.strokeStyle = "black";
        contexto.strokeRect(0,0,200,300);

        //Creamos los gradiantes
        let lineGrad = contexto.createLinearGradient(200,30,200,300);
        lineGrad.addColorStop(0,"#14263E");
        lineGrad.addColorStop(0.05,"#2B3D53");
        lineGrad.addColorStop(0.15,"#2B3D53");
        lineGrad.addColorStop(0.30,"#455766");
        lineGrad.addColorStop(0.40,"#7B7A6F");
        lineGrad.addColorStop(0.85,"#C08D35");
        lineGrad.addColorStop(0.85,"#000000");
        contexto.fillStyle = lineGrad;
        contexto.fillRect(0,0,200,300);

        //Creamos los bordes
        contexto.strokeStyle = "orange";
        contexto.lineWidth = 5;
        contexto.strokeRect(2,2,198,298);
        

        //Creamos la luna
        contexto.beginPath();
        contexto.arc(100,120,20,0,Math.PI*2,false);
        contexto.fillStyle = "rgba(209,197,198,0.20)";
        contexto.fill();
        contexto.closePath();
        contexto.beginPath();
        contexto.arc(100,120,20,Math.PI * 0.3,Math.PI * 0.9,false);
        contexto.fillStyle = "#F4E6E4";
        contexto.fill();
        contexto.closePath();

        //Creamos el texto
        contexto.font = "bold 1.5em sans-serif";
        contexto.fillStyle = 'black';
        contexto.textAlign = "center";
        contexto.font = "bold 10px Verdana";
        contexto.fillText("Ocaso con luna menguante visible", 95, 320);
        

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