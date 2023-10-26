//CALZADOS
const productos = [
    //hombres
    {
        id:"campera-01",
        titulo:"Campera LARS",
        imagen: "../assets/media/images productos/1.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:29000
    },
    {
        id:"campera-02",
        titulo:"Campera FIELD",
        imagen: "../assets/media/images productos/2.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:24000
    },
    {
        id:"campera-03",
        titulo:"Campera ESSENTIAL",
        imagen: "../assets/media/images productos/3.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:35000
    },
    {
        id:"campera-04",
        titulo:"Campera BEN",
        imagen: "../assets/media/images productos/4.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:33000
    },
    {
        id:"campera-05",
        titulo:"Campera DRAKE",
        imagen: "../assets/media/images productos/5.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:20000
    },
    {
        id:"campera-06",
        titulo:"Campera FARGUS",
        imagen: "../assets/media/images productos/6.jpg",
        categoria: {
            nombre: "Campera Hombres",
            id:"hombres"
        },
        precio:22000
    },
//fin hombre
//mujeres
{
    id:"campera-01",
    titulo:"Campera ANE",
    imagen: "../assets/media/images productos/1m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:45000
},
{
    id:"campera-02",
    titulo:"Campera AVA",
    imagen: "../assets/media/images productos/2m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:35000
},
{
    id:"campera-03",
    titulo:"Campera KELLY",
    imagen: "../assets/media/images productos/3m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:33000
},
{
    id:"campera-04",
    titulo:"Campera NEBULA",
    imagen: "../assets/media/images productos/4m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:31000
},
{
    id:"campera-05",
    titulo:"Campera AGNES",
    imagen: "../assets/media/images productos/5m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:29000
},
{
    id:"campera-06",
    titulo:"Campera KILIAN",
    imagen: "../assets/media/images productos/6m.jpg",
    categoria: {
        nombre: "Campera Mujeres",
        id:"mujeres"
    },
    precio:28000
},
//fin mujeres
//niños
{
    id:"campera-01",
    titulo:"Campera VINCE",
    imagen: "../assets/media/images productos/1n.jpg",
    categoria: {
        nombre: "Campera Niños",
        id:"niños"
    },
    precio:24000
},
{
    id:"campera-02",
    titulo:"Campera FRANZ",
    imagen: "../assets/media/images productos/2n.jpg",
    categoria: {
        nombre: "Campera Niños",
        id:"niños"
    },
    precio:30000
},
{
    id:"campera-03",
    titulo:"Campera MAITENA TEENS",
    imagen: "../assets/media/images productos/3n.jpg",
    categoria: {
        nombre: "Campera Niños",
        id:"niños"
    },
    precio:23000
},
{
    id:"campera-04",
    titulo:"Campera VALLEY",
    imagen: "../assets/media/images productos/4n.jpg",
    categoria: {
        nombre: "Campera Niños",
        id:"niños"
    },
    precio:35000
},
//fin de niños
//campig
{
    id:"camping-01",
    titulo:"Carpa DARUMA 5P",
    imagen: "../assets/media/images productos/1c.jpg",
    categoria: {
        nombre: "Camping",
        id:"camping"
    },
    precio:78000
},
{
    id:"camping-02",
    titulo:"Carpa ATUEL AUTO-ARMABLE",
    imagen: "../assets/media/images productos/2c.jpg",
    categoria: {
        nombre: "Camping",
        id:"camping"
    },
    precio:87000
},
{
    id:"camping-03",
    titulo:"Carpa ATUEL AUTO-ARMABLE",
    imagen: "../assets/media/images productos/3c.jpg",
    categoria: {
        nombre: "Camping",
        id:"camping"
    },
    precio: 96377
},
{
    id:"camping-04",
    titulo:"Carpa GHARA 4P",
    imagen: "../assets/media/images productos/4c.jpg",
    categoria: {
        nombre: "Camping",
        id:"camping"
    },
    precio:136527
},
//fin de camping
//esqui y snow
{
    id:"esqui snowboard-01",
    titulo:"Fijaciones Snowboard Burton",
    imagen: "../assets/media/images productos/1es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:97000
},
{
    id:"esqui snowboard-02",
    titulo:"Fijaciones Snowboard Mission",
    imagen: "../assets/media/images productos/2es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:92000
},
{
    id:"esquisnowboard-03",
    titulo:"Fijaciones Mujer Snowboard",
    imagen: "../assets/media/images productos/3es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:11000
},
{
    id:"esquisnowboard-04",
    titulo:"Casco Niños/as Ski Anon ",
    imagen: "../assets/media/images productos/4es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:12000
},
{
    id:"esquisnowboard-05",
    titulo:"Antiparras Mujer Anon Tempest",
    imagen: "../assets/media/images productos/5es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:20000
},
{
    id:"esquisnowboard-06",
    titulo:"Botas VECTOR Hombre",
    imagen: "../assets/media/images productos/6es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:67490
},
{
    id:"esquisnowboard-07",
    titulo:"Botas VECTOR Unisex",
    imagen: "../assets/media/images productos/7es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:18900
},
{
    id:"esquisnowboard-08",
    titulo:"Botas Snowboard Mujer Burton",
    imagen: "../assets/media/images productos/8es.jpg",
    categoria: {
        nombre: "Esqui Snowboard",
        id:"esquisnowboard"
    },
    precio:78490
},
//fin de esqui y snow

];

const contenedorProductos = document.querySelector("#contenedor-productos");/*trae todos los productos */
const botonesCategorias = document.querySelectorAll(".boton-categoria");/*trae todos los botones de categoria */
const tituloPrincipal = document.querySelector("#titulo-principal");/*trae los titulos de cada categoria */
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero")


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML ="";/*cuando se ejecute el contenedor va a vaciar */

    productosElegidos.forEach(producto =>{/*ojo productosElegidos escribir bien sino no seleccionara , antes estaba escrito productos solo */

        const div = document.createElement("div");/*contenedor de cada producto*/
        div.classList.add("producto");/*`acento grave*/
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>  
        `;

        contenedorProductos.append(div); /*mustra todo el catalogo */

    })
    actualizarBotonesAgregar()/**al llamar esta funcion no hara que se vacie lo que seleccione ya que la funcion cargar productos vacia al seleccionar otra categoria */
}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active")); /* hace que seleccione uno y al otro deja de ser seleccionado */

        e.currentTarget.classList.add("active");/*ojo no utilizar .target tomara la funcion pero no seleccionara nada, no se agraga al boton */

        if(e.currentTarget.id != "todos") {   /*para cargar todos los productos */
           const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);/*TRAERA LOS NOMBRES DE CADA CATEGORIA */
           tituloPrincipal.innerText = productoCategoria.categoria.nombre;

           const productosBoton = productos.filter(producto => producto.categoria.id=== e.currentTarget.id)/*trae el id de ese html*/
           cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);
        }



    })
}) /* sobrea al seleccionar alguna categoria */

//buscar
function buscarProductos() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.titulo.toLowerCase().includes(searchTerm)
    );

    if (productosFiltrados.length > 0) {
        tituloPrincipal.innerText = "Resultados de la búsqueda";
        cargarProductos(productosFiltrados);
    } else {
        tituloPrincipal.innerText = "No se encontraron resultados";
        contenedorProductos.innerHTML = "";
    }
}

// ...

function actualizarBotonesAgregar() { /**para cargar productos */
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agragarAlCarrito);
    })
    
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
//const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));//ESTO TRAIGO CUANDO TERMINO EL CARRITO.JS

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];

}


function agragarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgrgado = productos.find(producto => producto.id === idBoton );

    if(productosEnCarrito.some(producto => producto.id === idBoton)){ //ojo sirve para repetir la compra de un producto y a la vez suma el precio ojoooo el const index
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgrgado.cantidad = 1; /**agrega la cantidad del producto elegido  */
        const index = productosEnCarrito.push(productoAgrgado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));//almacenamiento local vamos a recurar la informacion para la pagina de carrito muy importante

};

function actualizarNumero(){ //actualiza el numero del carrito
    let nuevoNumero = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);//sumar el acumulador y que arranque desde cero
    numero.innerHTML = nuevoNumero;
}
