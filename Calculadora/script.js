let n1, n2, operacio;

function  suma(){
n1 = parseFloat(document.getElementById("pantalla").value)
operacio = "+"
document.getElementById("pantalla").value = " "
document.getElementById("pantalla").focus();
}
function resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = " "
    document.getElementById("pantalla").focus();}
    
function multiplicar(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "*"
    document.getElementById("pantalla").value = " "
    document.getElementById("pantalla").focus();}

function dividir(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "/"
    document.getElementById("pantalla").value = " "
    document.getElementById("pantalla").focus();}
        
function arrel(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.sqrt(n1)
    document.getElementById("pantalla").focus();}

function log(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.log10(n1)
    document.getElementById("pantalla").focus();}

function logn(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.log(n1)
    document.getElementById("pantalla").focus();}

function tan(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.tan(n1)
    document.getElementById("pantalla").focus();}

function sin(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.sin(n1)
    document.getElementById("pantalla").focus();}

function cos(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.cos(n1)
    document.getElementById("pantalla").focus();}

function elevar(){
n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.pow(n1)
    document.getElementById("pantalla").focus();}

function pi(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = Math.PI(n1)
    document.getElementById("pantalla").focus();}

function obreparentesis(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"("
    document.getElementById("pantalla").focus();}

function tancaparentesis(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+")"
    document.getElementById("pantalla").focus();}


function uno(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"1"
    document.getElementById("pantalla").focus();}


function dos(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"2"
    document.getElementById("pantalla").focus();}

function tres(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"3"
    document.getElementById("pantalla").focus();}

function cuatro(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"4"
    document.getElementById("pantalla").focus();}
    
function cinco(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"5"
    document.getElementById("pantalla").focus();}

function seis(){

    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"6"
    document.getElementById("pantalla").focus()

function siete(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"1"
    document.getElementById("pantalla").focus();}
    
function ocho(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"2"
    document.getElementById("pantalla").focus();}
    
function nueve(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"3"
    document.getElementById("pantalla").focus();}
    
function cero(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"4"
    document.getElementById("pantalla").focus();}
}


function calcula(){
    let resultat;
    n2 = parseFloat(document.getElementById("pantalla").value)
    if(operacio=="+"){
    resultat = n1+n2}

    if(operacio=="-"){
    resultat = n1-n2}

    if(operacio=="*"){
    resultat = n1*n2}

    if(operacio=="/"){
    resultat = n1/n2}

    if(operacio=="/"){
    resultat = n1/n2}
        









    
document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
    
}