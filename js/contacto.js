document.addEventListener("DOMContentLoaded", () => {
    
    let nombre = document.querySelector('input[type="text"][placeholder="Nombre"]');
    let apellido = document.querySelector('input[type="text"][placeholder="Apellido"]');
    let email = document.querySelector('input[type="email"][placeholder="Email"]');
    let codArea = document.querySelector('input[type="tel"][placeholder="Cod. Area (sin 0)"]');
    let celular = document.querySelector('input[type="tel"][placeholder="Cel (sin 15)"]');
    let consulta = document.querySelector('input[type="text"][placeholder="Ingrese su consulta"]');
    let btnEnviar = document.querySelector('button');

    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault(); 

        let informacion = [
            nombre.value.trim(), 
            apellido.value.trim(), 
            email.value.trim(), 
            codArea.value.trim(), 
            celular.value.trim(), 
            consulta.value.trim()
        ];

        console.log(`Información del formulario:`);
        console.log(`Nombre: ${informacion[0]}`);
        console.log(`Apellido: ${informacion[1]}`);
        console.log(`Email: ${informacion[2]}`);
        console.log(`Cod. Area: ${informacion[3]}`);
        console.log(`Celular: ${informacion[4]}`);
        console.log(`Consulta: ${informacion[5]}`);

        let blob = new Blob([informacion.join("\n")], { type: "text/plain;charset=utf-8" });

        saveAs(blob, "contacto.txt");
    });
});
