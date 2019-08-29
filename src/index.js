function btnEncode() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("eKey").value);
  let str = (document.getElementById("eMsg").value);
  let outCode = window.cipher.encode(offset, str);
  document.getElementById("outCode").innerHTML = `<p> Sua mensagem: ${outCode}</p>`;
}
document.getElementById("send").addEventListener("click", btnEncode);

function btnDecode() {
  event.preventDefault();
  let offset = parseInt(document.getElementById("dKey").value);
  let str = (document.getElementById("dMsg").value);
  let outDecode = window.cipher.decode(offset, str);
  document.getElementById("outDecode").innerHTML = `<p> O que elas dizem: ${outDecode}</p>`;
}
document.getElementById("send-emsg").addEventListener("click", btnDecode);
