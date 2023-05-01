/*
 *VARIABLES 
 */
 const body = document.querySelector("body");
 const containerRightInput = document.querySelector(".containerRightTxtA");
 const containerRightBtns = document.querySelector(".divRigthBottom");
 const inputRight = document.querySelector(".txtAreaR");
 
 const inputLeft = document.querySelector("#txtal");
 
 const btnEncrip = document.querySelector(".btnA");

 const btnDesEncrip = document.querySelector(".btnB");

 const btnCopy = document.querySelector(".btnC");

 const legendInstruccion = document.querySelector("legend");

 const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

/*
 *FUNCIONES
 */
function onLoad() {
    containerRightInput.classList.add("noDisplay");
}
function swithcingNoDisplay() {
    containerRightInput.classList.remove("noDisplay");
    containerRightBtns.classList.add("noDisplay");

}
function encriptar() {
    legendInstruccion.classList.remove("noalert");
    let textNative = inputLeft.value;
    
    let flag = true;

    if(sinAcento(textNative)){
        swithcingNoDisplay();

        let result = "";
        let encryption = "";

        
        for (const obj in reglas) {
            textNative = textNative.replaceAll(obj,reglas[obj]);
            
            result = textNative;        
        }

        inputRight.value = result;
    }
    else{
        legendInstruccion.classList.add("alert");
        

        setTimeout(() => {
            legendInstruccion.classList.replace("alert","noalert");
        }, 1000);
    }
}

function desencriptar() {
    legendInstruccion.classList.remove("noalert");
    let textNative = inputLeft.value;
    
    let flag;

    if(sinAcento(textNative)){
        swithcingNoDisplay();

        let result = "";
        let encryption = "";

        
        for (const obj in reglas) {
            textNative = textNative.replaceAll(reglas[obj],obj);
            
            result = textNative;        
        }

        inputRight.value = result;
    }else{
        legendInstruccion.classList.add("alert");
        

        setTimeout(() => {
            legendInstruccion.classList.replace("alert","noalert");
        }, 1000);
    }
}

function copiar() {
    const getInput = document.querySelector(".txtAreaR");
    getInput.select();
    getInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(getInput.value);

    document.querySelector("#txtal").value="";
}

function sinAcento(frase) {
    const regex = /[\u00C0-\u00FFÁ-ýÿ\W]+/;

    if (frase.match(/[áéíóúÁÉÍÓÚ]/)) {
        return false;
      }
    
      // Verifica si la cadena tiene letras mayúsculas
      if (frase.match(/[A-Z]/)) {
        return false;
      }
    
      // Verifica si la cadena tiene caracteres especiales
      if (frase.match(/[^a-zA-Z0-9\s]/)) {
        return false;
      }
    return true;
}
/**
 * more
 */
containerRightInput.onLoad = onLoad();
btnEncrip.onclick = encriptar;

btnDesEncrip.onclick = desencriptar;

btnCopy.onclick = copiar;
