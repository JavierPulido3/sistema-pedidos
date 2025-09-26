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

