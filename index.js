function btnEncode(){
    event.preventDefault();
    const offset = parseInt(document.getElementById("eKey").value);
    const str = (document.getElementById("eMsg").value);
    const outCode = window.cipher.encode(offset, str);
    document.getElementById("outCode").innerHTML = `<p> Sua mensagem: ${outCode}</p>`
  }

function btnDecode(){
    event.preventDefault();
    const offset = parseInt(document.getElementById("dKey").value);
    const str = (document.getElementById("dMsg").value);
    const outDecode = window.cipher.decode(offset, str);
    document.getElementById("outDecode").innerHTML = `<p> O que elas dizem: ${outDecode}</p>`
}