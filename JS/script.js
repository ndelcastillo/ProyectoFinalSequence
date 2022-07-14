let savedContraseña = 'Perlas';
let ingresar = false;

// login

for (let i = 2; i >= 0; i--) {
    let userContraseña = prompt('Ingresa tu contraseña. Tenés ' + (i + 1) + ' intentos. ');
    if (userContraseña === savedContraseña) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos. ');
    }
}

if (ingresar) {
    let saldoCarritoO = 2500;
    let saldoCarrito = 2500;
    let descuentoOFF = 0.15;
    let saldoCarrito12Cuotas = 208;
    alert('Carrito a pagar: $' + saldoCarrito);
    let opcion = prompt('Elegí una opción de pago: \n1- Efectivo [15% de descuento] \n2- Tarjeta de Crédito \n3- Tarjeta de Débito \n4- Transferencia \nX para finalizar ');
    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                let descuento = saldoCarrito * descuentoOFF;
                saldoCarrito = saldoCarrito - descuento;
                alert('Carrito a pagar: $' + saldoCarrito);
                break;
            case '2':
                alert('Carrito a pagar: $' + saldoCarrito + ' o ' + '12 cuotas de $' + saldoCarrito12Cuotas);
                break;
            case '3':
                alert('Carrito a pagar: $' + saldoCarritoO);
                break;
            case '4':
                alert('Carrito a pagar: $' + saldoCarritoO);
                break;
            default:
                alert('Elegiste una opción incorrecta');
                break;
        }
        opcion = prompt('Elegí una opción de entrega: \n1- Con Envío \n2- Retiro en Local ');
        opcion = prompt('Finalizar compra: \nX para finalizar ');
    }

} else {
    alert('La contraseña no es correcta. Compruébela. ')
}
alert('Adiós');