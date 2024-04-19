function calculoMedia(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value); 
    var nota4 = parseFloat(document.getElementById('nota4').value);
    var resultado = parseFloat((nota1 + nota2 + nota3 + nota4) /4);

    document.getElementById('txtresultado').setAttribute("value", resultado);
}

function Data(){
    now = new Date
    dataAtual = ("Hoje é " + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() )

    document.getElementById('dataAtual').setAttribute("value", dataAtual)
}

function Hora(){
    now = new Date
    const hora = ( "Agora são "  + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
    document.getElementById('HoraAtual').setAttribute("value", hora)
}