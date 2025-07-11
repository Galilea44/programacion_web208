let tareas = [];

function mostrarMenu(){
    return parseInt (prompt(
        "Opciones disponibles:\n "+
        "1. Agregar tarea \n"+
        "2. Ver todas las tareas\n"+
        "3. Marcar tarea como completada\n"+
        "4. Salir"+
        "Elige una opcion"
    ));

}
function agregarTarea(){
    let nombre =prompt("Introduce el nombre de la tarea: ");
    if(nombre){
        let tarea ={
            nombre:nombre,
            completado: false

        };
        tareas.push(tarea);

    }else{
        alert("El nombre de la tarea no puede estar vacio")
    }
}
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introducde el numero de la tarea completada"));
    if( numero > 0 && numero <= tareas.length){ //de donde a donde va la tarea
        tareas[numero-1].completado=true; //cambio el estado de la tarea
        alert('La tarea: ' )
    }
}

function iniciarPrograma(){
    let continuar=true;
        while(continuar){
            let opcion=mostrarMenu();
            switch(opcion){
                case 1:
                    agregarTarea();
                    break;
                case 2:
                    verTarea();
                    break
                case 3:
                    marcarTareaCompletada();
                    break        
                case 4:
                    alert("Saliendo del programa");
                    break
                default:
                    alert("Opcion no valida. Intenta de nuevo");    
            }
        }
    alert("Programa terminado");        
}
//Iniciar programa
