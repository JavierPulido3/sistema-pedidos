const menuProductos= [
    {
      "idProducto": 1,
      "nombre": "Hamburguesa Clásica",
      "precio": 12000.00,
      "categoria": "hamburguesa"
    },
    {
      "idProducto": 2,
      "nombre": "Coca-Cola",
      "precio": 3500.00,
      "categoria": "bebida"
    },
    {
      "idProducto": 3,
      "nombre": "Brownie de Chocolate",
      "precio": 5000.00,
      "categoria": "postre"
    },
    {
      "idProducto": 4,
      "nombre": "Pizza Margarita",
      "precio": 25000.00,
      "categoria": "hamburguesa"
    },
    {
      "idProducto": 5,
      "nombre": "Jugo de Naranja",
      "precio": 4000.00,
      "categoria": "bebida"
    }
  ]


let agregarProducto= function(nombre= "HotDog", precio= 8000.00, categoria= "Perro Caliente"){ menuProductos.push({ idProducto: menuProductos.length+1, nombre: nombre, precio: precio, categoria: categoria })}
agregarProducto()

function listarProductos() {menuProductos.forEach((menuProductos)=>{
    console.log(menuProductos)
})}
listarProductos()

let pedidos = []
let crearPedidos = function(nombreCliente,items,total,estado){
    pedidos.push({idPedido: pedidos.length+1,nombreCliente:nombreCliente,items:items,total:total,estado:estado})
    return pedidos
}
crearPedidos("Maria","Coca-Cola",3500.00,"pendiente")
crearPedidos("Juan", "Hamburguesa Clasica", 12000.00, "entregado")
crearPedidos("Ana", "Jugo de naranja", 4000.00, "pendiente")

console.log(pedidos)

function estados(pedidos){
    const estado_conteo= {
      pendiente: 0,
      entregado: 0
    };
    pedidos.forEach((pedido) => {
      if (pedido.estado in estado_conteo) {
        estado_conteo[pedido.estado]++;
      } else {
        console.log(`estado desconocido: ${pedido.estado}`);
      }
    });
  
    console.log(`pendiente: ${estado_conteo.pendiente}`);
    console.log(`entregado: ${estado_conteo.entregado}`)
  }
  
  function calcular_ventas(pedidos) {
    const total = pedidos
      .filter((pedido) => pedido.estado === "entregado")
      .reduce((suma, pedido) => suma + pedido.total, 0);
  
    console.log(`Total ventas (los entregados): $${total}`)
  }
  
  estados(pedidos)
  calcular_ventas(pedidos)

