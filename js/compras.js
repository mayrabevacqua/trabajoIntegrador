let lista = document.getElementById("lista");

const productos=["Fideos Tirabuzon Matarazzo 500 Gr.", "Aceite de girasol Natura 1,5L.", "Aceite de oliva Cañuelas extra virgen 0,5L.", 
    "Azúcar común La Perla tipo A 1 Kg.", "Té en saquitos Taragüi x 50u", "Nescafé Dolca original 170 Gr.", "Mate cocido saquitos Unión x 50u", 
    "Galletitas Oreo original 354 Gr.", "Yerba mate Playadito suave con palo 1Kg.", "Salchichas Vienissima flow pack 6u", 
    "Gaseosa Coca Cola sabor original 2,25L.", "Harina de trigo 000 Favorita 1Kg."];
const stock = [10,5,5,5,5,4,5,5,5,5,5,5];
const precios = [1400,2600,9830,860,1259,3870,1825,3229,3840,1495,3100,980];
let total = 0; 

function pintarProductos(arrayProductos, arrayPrecios, arrayStock) {
    for (let i=0; i<arrayProductos.length; i++) {
        lista.innerHTML += `<li class="tamaño">
        <img class="foto" src="./css/imágenes/${i}.png" alt="producto"/>
        <p>${arrayProductos[i]}</p> 
        <p class="precio">Precio: $${arrayPrecios[i]}</p>
        <p>Stock: <span id="stock${i}">${arrayStock[i]}</span></p>
        <input class="entrada" type="number" id="entrada${i}" placeholder="Cant."></input>
        <button id="btn${i}">Agregar</button>
        </li>`
    }
    agregarEventos(); 
}

function agregarEventos() {
    for (let i = 0; i < productos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener('click', () => comprar(i));
    }
}

function comprar (index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    let stockDisponible = parseInt(stockHTML.innerText);
    const cantidad = parseInt(entradaHTML.value);
    const precio = precios[index];

    if (cantidad > 0 && cantidad <= stockDisponible) {
        total+= cantidad*precio;
        stockHTML.innerText = stockDisponible - cantidad;
        entradaHTML.value = "";
        document.getElementById("total").innerText = total;
        alert("Producto agregado");
    } else{
        alert("Cantidad no válida, revise que esté dentro de las cantidades disponibles de stock")
    }
}

pintarProductos(productos,precios,stock);