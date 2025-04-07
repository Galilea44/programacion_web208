let inventario= [];
//Función para menu
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones dsponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar producto\n"+
        "3. Buscar producto por nombre\n"+
        "4. Salir\n"+
        "Elije una opcion"
    ));
}
//agregar un producto al arreglo
function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto:");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto:"));
    let precio = parseInt(prompt("Introcuce el precio del producto:"));

    if(cantidad > 0 && precio > 0){
        let producto ={
            nombre: nombre,
            cantidad: cantidad, //atributo-valor que tendra (es la variable)
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregardo");
    }else{
        alert("La cantidad y precio deben ser numeros positivos");
    }
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("No hay productos");
    }else{
        let mensaje = "Productos en inventario \n";
        for( let i=0; i<inventario.length; i++){
            mensaje +=  `Producto: ${i+1}\n`+
                        `Nombre: ${inventario[i].nombre}\n`+
                        `Cantidad: ${inventario[i].cantidad}\n`+
                        `Precio: ${inventario[i].precio}\n`+
                        "---------------------------------\n"
                        ;

        }
        alert(mensaje); //mostramos todos los productos que se encuentran en el inventario
    }
}

function buscarProducto() {
    let search = prompt("¿Que producto desea buscar?");
    let encontrado = false; // Checamos si el producto está en el inventario
    for (let i = 0; i < inventario.length; i++) {
        // toLoweCase -> Convierte a minusculas
        if (inventario[i].nombre.toLowerCase() === search.toLowerCase()) {
            alert(`El producto se encuentra en el inventario:\n` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: ${inventario[i].precio}`);
            encontrado = true;
            break; 
        }
    }
    if (!encontrado) {
        alert("El producto no se ha encontrado");
    }
}

function iniciarPrograma(){
    let continuar= true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                 mostrarProducto();
                 break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa...")
                continuar= false;
                break;
            default:
                alert("Opcion no valida. Intente de nuevo");                
        }
    }
    alert("Programa terminado")
}

iniciarPrograma();

//verificar/validar que se agrego el producto
console.log("----------------------Inventario---------------------")
console.log(inventario);


