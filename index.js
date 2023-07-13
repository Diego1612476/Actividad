function generarCotizacion() {
    const ci = document.getElementById('ci').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const precio = document.getElementById('precio').value;

    let descuento = 0;
    if (vehiculo === 'fiesta') {
        descuento = 0.05;
    } else if (vehiculo === 'focus') {
        descuento = 0.1;
    }

    const precioFinal = precio(precio * descuento);

    const cotizacion = {
        ci: ci,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        precioFinal: precioFinal
    };

    console.log(cotizacion); 
    }

    function generarePagos() {
    const nombreEmpleado = document.getElementById('nombreEmpleado').value;
    const cargoEmpleado = document.getElementById('cargoEmpleado').value;
    const sueldoBase = document.getElementById('sueldoBase').value;
    const horasExtras = document.getElementById('horasExtras').value;

    const sueldoRecibir = parseFloat(sueldoBase) + (parseFloat(horasExtras) * 10);

    const rolDePagos = {
        nombreEmpleado: nombreEmpleado,
        cargoEmpleado: cargoEmpleado,
        sueldoRecibir: sueldoRecibir
    };

    console.log(rolDePagos); 
    }
