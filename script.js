
let textInput = document.querySelector(".cajatexto");
let encryptBtn = document.querySelector(".Boton_Encriptar");
let decryptBtn = document.querySelector(".Boton_Desencriptar");
let img = document.querySelector(".Contenedor_Joven"); 
let msgCont = document.querySelector(".Contenedor_Desencriptar");
let result = document.querySelector(".Resultado");


encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;


function encrypt() {
  hideElements();
  let text = getText();
  result.textContent = encryptText(text);
}


function decrypt() {
  hideElements();
  let text = getText();
  result.textContent = decryptText(text);  
}


function hideElements() {
  img.classList.add("ocultar");
  msgCont.classList.add("ocultar");
}


function getText() {
  return textInput.value;
}


function encryptText(text) {
  let encrypted = "";

  for(let i=0; i<text.length; i++) {
    if(text[i] === "a") {
      encrypted += "ai";
    } else if(text[i] === "e") {
      encrypted += "enter";
    } else if(text[i] === "i") {
      encrypted += "imes";  
    } else if(text[i] === "o") {
      encrypted += "ober";
    } else if(text[i] === "u") {
      encrypted += "ufat";
    } else {
      encrypted += text[i];
    }
  }

  return encrypted;
}

 
function decryptText(text) {
  let decrypted = "";
  
  for(let i=0; i<text.length; i++) {
    if(text[i] === "a") {
      decrypted += "a";
      i++;
    } else if(text[i] === "e") {
      decrypted += "e";
      i += 4;
    } else if(text[i] === "i") {
      decrypted += "i";
      i += 3;
    } else if(text[i] === "o") {
      decrypted += "o";
      i += 3;
    } else if(text[i] === "u") {
      decrypted += "u";
      i += 3;
    } else {
      decrypted += text[i];
    }
  }
  
  return decrypted;
}

let copyBtn = document.querySelector(".boton-copiar");

copyBtn.addEventListener("click", () => {
  let text = result.textContent;
  navigator.clipboard.writeText(text);
})