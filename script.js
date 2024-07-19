/* ---------- JS DE COMPRAS ---------- */

arrProductos=["Tirabuzón", "Aceite de girasol", "Aceite de Oliva"];






let arrValPrecios = [];
let arrCant = document.querySelectorAll("div input");
let arrBotones = document.querySelectorAll("div button");
let arrSpanPrecios= document.querySelectorAll("#ale");
let arrPrecios= [];
let arrCantidad = []

for (i=0; i< arrSpanPrecios.length; i++) {
    arrPrecios[i]= parseInt (arrSpanPrecios[i].textContent);
}
for (i=0; i< arrCant.length ; i++){
    arrCantidad[i] = arrCant[i].value;
}
/*for(i=0; i< arrBotones.length; i++) {
    let c=i;;
    arrBotones[i].addEventListener("click", ()=>{
        alert("el precio del producto es: "+arrPrecios[c])
    })
}
function agregar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecio[0];
}

/*for(i=0 ; i < arrBotones.length ; i++){
    arrBotones[i].addEventListener("click", ()=>{
        let cantidad=document.querySelector("div input").value;
        cantidad=Number(cantidad);
        if(cantidad>0&&(arrCant[0]-cantidad)>0){
            comprar(cantidad);
        }else{
            alert("ingrese una cantidad mayor a cero o no hay stock")
        }
    })
    }*/
/*document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad=document.querySelector("div input").value;
    cantidad=Number(cantidad);
    if(cantidad>0&&(arrCant[0]-cantidad)>0){
        comprar(cantidad);
    }else{
        alert("ingrese una cantidad mayor a cero o no hay stock")
    }
})
/*__________PROBADOR DE ARRAYS__________*/
document.querySelector(".probarArray").addEventListener("click", ()=> {
        /*for (i=0; i<arrPrecios.length; i++) {
    
        }*/
        alert(arrCantidad.length);
        alert("La cantidad del producto 1 seleccionada es: "+ arrCantidad[0]);
})
/*

/* ---------- JS DE CONTACTO ---------- */


/* ---------- JS DE INDEX ---------- */