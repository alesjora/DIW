{
    window.addEventListener("load", init);
    let contexto;
    

    function init() {
        contexto = cargarContextoCanvas('micanvas');
        if (contexto) {
            crearCara();
        }
    }

    function crearCara() {
        //Crea el rectangulo exterior
        contexto.fillStyle = colorAleatorio();
        contexto.fillRect(20, 20, 300, 300);

        //Dibujando cara
        contexto.beginPath();
        contexto.arc(170,165,100,0,Math.PI*2,false);
        contexto.fillStyle = "yellow";
        contexto.fill();
        contexto.closePath();
    
        //Ojo izquierdo
        contexto.beginPath();
        contexto.moveTo(140,120);
        contexto.arc(130,120,10,0,Math.PI*2,true);
        contexto.fillStyle = "red";
        contexto.fill();
        contexto.closePath();  


        //Ojo derecho
        contexto.beginPath();
        contexto.moveTo(210,120);
        contexto.arc(200,120,10,0,Math.PI*2,true);  
        contexto.fillStyle = "red";
        contexto.fill();
        contexto.closePath();  

        //Dibujando cara
        contexto.beginPath();
        contexto.moveTo(135,170);
        contexto.arc(170,170,35,0,Math.PI,false);
        contexto.fillStyle = "red";
        contexto.fill();
        contexto.closePath();

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