/* ---------- JS DE COMPRAS ---------- */

/*let arrProductos=["Tirabuzón", "Aceite de girasol", "Aceite de Oliva"];*/







let arrPrecios= document.querySelectorAll("#ale");







/*let arrValPrecios = [];
const arrCant = document.querySelectorAll("div input");
let arrBotones = document.querySelectorAll("div button");

/*for (i=0; i< arrPrecios.length; i++) {
    arrValPrecios.push(arrPrecios[i]);
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
        alert(arrPrecios.length);
})
/*for(i=0; i< arrBotones.length; i++) {
    let c=i;;
    arrBotones[i].addEventListener("click", ()=>{
        let palabraMostar;
            let palabra=arrProductos[c];
            palabraMostar=palabra;
        alert("es el boton del prodcuto: ");
        alert(palabraMostar);

    })
}
function comprar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecio[0];
}

/* ---------- JS DE CONTACTO ---------- */


/* ---------- JS DE INDEX ---------- */