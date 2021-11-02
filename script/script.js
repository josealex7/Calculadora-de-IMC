const seleccionarMan = () => {
    const botones = document.querySelector('#contenedor-icon');
    const items = document.createElement('div');
    botones.innerHTML = '';
    items.innerHTML = `
        <button id="boton-hombre">      
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M86,48.52281c-7.58864,0 -13.76,6.17136 -13.76,13.76c0,7.58864 6.17136,13.76 13.76,13.76c7.58864,0 13.76,-6.17136 13.76,-13.76c0,-7.58864 -6.17136,-13.76 -13.76,-13.76zM86,79.12c-6.77075,0 -12.45294,4.06613 -14.77453,9.7086c-0.06511,0.15823 -0.16873,0.29618 -0.22844,0.45687l-15.4061,30.50313c-1.28312,2.5456 -0.26122,5.65063 2.28438,6.93375c0.74648,0.3784 1.53365,0.55765 2.31797,0.55765c1.88512,0 3.70762,-1.03275 4.61578,-2.83531l7.41078,-14.68719l0.02015,19.0275v33.755c0,3.32304 2.69696,6.02 6.02,6.02c3.32304,0 6.02,-2.69696 6.02,-6.02v-35.69c0,-0.94944 0.77056,-1.72 1.72,-1.72c0.94944,0 1.72,0.77056 1.72,1.72v35.69c0,3.32304 2.69352,6.02 6.02,6.02c3.32304,0 6.02,-2.69696 6.02,-6.02v-52.80265l7.43094,14.70734c0.90816,1.79568 2.72394,2.83531 4.60906,2.83531c0.78432,0 1.57821,-0.17598 2.32469,-0.55094c2.54216,-1.28312 3.56422,-4.39159 2.27766,-6.93375l-15.36578,-30.40235c-2.15774,-5.94511 -8.03453,-10.27297 -15.03656,-10.27297z"></path></g></g></svg>
        </button>
        <button id="boton-mujer">
            <img src="https://img.icons8.com/ios-filled/37/000000/standing-woman.png" />
        </button>
                `;
    botones.appendChild(items);
    personaSeleccion = 1;
}

const seleccionarWomen = () => {
    const botones = document.querySelector('#contenedor-icon');
    const items = document.createElement('div');
    botones.innerHTML = '';
    items.innerHTML = `
        <button id="boton-hombre">      
        <img src="https://img.icons8.com/ios-filled/50/000000/body-type-short.png" />        </button>
        <button id="boton-mujer">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9b59b6"><path d="M87.3975,6.88c-10.40062,0 -18.92,8.51938 -18.92,18.92c0,10.40063 8.51938,18.92 18.92,18.92c10.40063,0 18.92,-8.51937 18.92,-18.92c0,-10.40062 -8.51937,-18.92 -18.92,-18.92zM87.72,48.2675c-21.07,0 -29.76406,16.93125 -31.7125,24.08c0,0 -6.9875,25.12813 -6.9875,25.4775c-2.32469,6.04688 2.59344,13.19563 8.6,14.0825l11.7175,-38.27c0.02688,-0.09406 0.06719,-0.24187 0.1075,-0.3225c0.28219,-0.56437 0.83313,-0.9675 1.505,-0.9675c0.95406,0 1.72,0.76594 1.72,1.72c0,0.13438 -0.08062,0.29563 -0.1075,0.43l-13.8675,44.505c-0.34937,1.03469 -0.06719,2.08281 0.43,3.1175c0.68531,1.03469 1.63938,1.72 3.01,1.72h51.17c1.37063,0 2.32469,-0.68531 3.01,-1.72c0.49719,-1.03469 0.77938,-2.08281 0.43,-3.1175l-13.8675,-44.505c-0.02687,-0.13437 -0.1075,-0.29562 -0.1075,-0.43c0,-0.95406 0.76594,-1.72 1.72,-1.72c0.67188,0 1.22281,0.40313 1.505,0.9675c0.04031,0.08063 0.08063,0.22844 0.1075,0.3225l11.7175,38.27c6.00656,-0.88687 10.92469,-8.03562 8.6,-14.0825c0,-0.34937 -6.9875,-25.4775 -6.9875,-25.4775c-1.94844,-7.14875 -10.6425,-24.08 -31.7125,-24.08zM72.24,127.28v30.96c0,3.78938 3.09063,6.88 6.88,6.88c3.78938,0 6.88,-3.09062 6.88,-6.88v-30.96zM89.44,127.28v30.96c0,3.78938 3.09063,6.88 6.88,6.88c3.78938,0 6.88,-3.09062 6.88,-6.88v-30.96z"></path></g></g></svg>
        </button>
                `;
    botones.appendChild(items);
    personaSeleccion = 2;
}

const obtenerInput = () => {
    edad = Number(document.getElementById('edad').value);
    peso = Number(document.getElementById('peso').value);
    altura = Number(document.getElementById('altura').value);

    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || edad == 0 || peso == 0 || altura == 0) {
        alert('Debe llenar todos los campos')
    } else if (personaSeleccion == 0) {
        alert('Debe seleccionar un sexo')
    } else {
        calcularIMC();
        mostrarResultado();
        barraDinamica();

        if (personaSeleccion == 1) {
            pesoIdealHombre();
        } else {
            pesoIdealMujer();
        }
    }
}

const calcularIMC = () => {
    resultado = (peso / (Math.pow(altura, 2))).toFixed(2);
}

const mostrarResultado = () => {
    const botones = document.querySelector('#div-resultado');
    const items = document.createElement('div');
    botones.innerHTML = '';
    items.innerHTML = `
        <div>
            <label for="resultado">${resultado}</label>
        </div>
                `;
    botones.appendChild(items);
}

const barraDinamica = () => {
    let porcentaje = 57;
    for (let i = 40; i > 0; i--) {
        if (resultado < i && porcentaje > -55) {
            porcentaje -= 3;
        }
    }
    boton_barra.style.marginLeft = porcentaje + "%";
}

const pesoIdealHombre = () => {
    pesoIdealMin = 45;
    pesoIdealMax = 50;
    let AlterAltura = altura * 100;
    for (let i = 140; i < AlterAltura; i++) {
        pesoIdealMin += 0.67;
        pesoIdealMax += 0.67;
    }
    pesoIdealMin = pesoIdealMin.toFixed(0);
    pesoIdealMax = pesoIdealMax.toFixed(0);
    pesoIdeal();
}

const pesoIdealMujer = () => {
    pesoIdealMin = 44;
    pesoIdealMax = 49;
    let AlterAltura = altura * 100;
    for (let i = 140; i < AlterAltura; i++) {
        pesoIdealMin += 0.4;
        pesoIdealMax += 0.4;
    }
    pesoIdealMin = pesoIdealMin.toFixed(0);
    pesoIdealMax = pesoIdealMax.toFixed(0);
    pesoIdeal();
}

const pesoIdeal = () => {
    const botones = document.querySelector('#peso-ideal');
    const items = document.createElement('div');
    botones.innerHTML = '';
    items.innerHTML = `<label for="">Peso Ideal: ${pesoIdealMin} - ${pesoIdealMax} (KG)</label>`;
    botones.appendChild(items);
}

let personaSeleccion = 0,
    edad = 0,
    peso = 0,
    Altura = 0.0,
    resultado = 0,
    pesoIdealMin = 0,
    pesoIdealMax = 0;



let boton_mujer = document.getElementById('boton-mujer');
boton_mujer.addEventListener('click', seleccionarWomen, true);

let boton_hombre = document.getElementById('boton-hombre');
boton_hombre.addEventListener('click', seleccionarMan, true);

let calcula_imc = document.getElementById('boton');
calcula_imc.addEventListener('click', obtenerInput, true);

let boton_barra = document.getElementById('imagen-barra');