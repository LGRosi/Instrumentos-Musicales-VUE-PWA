Vue.component('componente-como-comprar', {
    data() {
        return {
            ver: false,
            
            textoGris: "textogris",
			pPagoSeguro: "tamañotextogris",

            imgPedi: "imagenes/local.png",
			imgPaga: "imagenes/mano-tarjeta.png",
            imgRecibi: "imagenes/caja.png",
            
            datosFor:["MUSINDI", "Calle falsa 123 - CABA", "Ciudad de Buenos Aires - Argentina",
            "Llamanos: 11 9999 9999", "Envianos un correo electrónico:", "instrumentos@Musindi.com.ar"],
        }
    },

    template: 
            `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <section class="col-12 mt-5 pt-5">
                            <article class="row text-center">
                                <div class="col-12 px-5">
                                    <h2 class="h1">Cómo comprar</h2>
                                    <p class="mb-5 pb-4">Realizar una compra en Musindi es muy simple. Sólo seguí estos pasos:</p>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgPedi" alt="Pedido del producto" />
                                            </figure>
                                            <h3>Elegí</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Seleccioná los productos que quieras, agregalos al carrito o elegí la opción Comprar ahora.</p>
                                        </div>
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgPaga" alt="Pago con tarjeta" />
                                            </figure>
                                            <h3>Pagá</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Te llevaremos para que realices el pago de forma ágil y segura a través de pagos con débito, crédito y efectivo.</p>
                                        </div>
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgRecibi" alt="Recibí el producto">
                                            </figure>
                                            <h3>Recibí</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Elegí la forma de entrega que prefieras ¡y listo! tu pedido ya estará en camino.</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>



                        <section class="bg-light col-12 my-5 py-5">
                            <article class="row">
                                <h2 class="h4 m-auto pb-5 my-5">Preguntas frecuentes</h2>
                                <div class="col-md-10 px-2 mt-5 mb-5 m-auto">
                                    <p>¿Cómo realizo el pago si no tengo cuenta en Mercado Libre?</p>
                                    <p :class="[textoGris, pPagoSeguro]">¡Crear una cuenta es muy fácil! Al momento de comprar, te redirigiremos a Mercado Libre para que la crees. Sólo tenés que ingresar un e-mail, una clave y continuar con tu compra.</p>
                                </div>
                                <div class="col-md-10 px-2 mb-5 m-auto">
                                    <p>¿Dónde veo el costo de envío y el tiempo de entrega?</p>
                                    <p :class="[textoGris, pPagoSeguro]">En la página del producto que quieras comprar verás la opción de calcular cuándo llega, con la información sobre el costo de envío y el tiempo de entrega.</p>
                                </div>
                                <div class="col-md-10 px-2 mb-5 m-auto">
                                    <p>¿Puedo pagar en cuotas?</p>
                                    <p :class="[textoGris, pPagoSeguro]">Podrás ver en la página del producto si se puede pagar en cuotas y con qué medios. Si decidís comprarlo, antes de pagar podrás elegir la cantidad de cuotas y te informaremos el valor de cada una.</p>
                                </div>
                                <div class="col-md-10 px-2 m-auto">
                                    <p>¿Cómo puedo realizar cambios y devoluciones?</p>
                                    <p :class="[textoGris, pPagoSeguro]">Los cambios y devoluciones de productos se realizan a través de Mercado Libre. Podés hacerlo en tu computadora o en la aplicación desde la sección Mis Compras, seleccionando el producto y luego eligiendo la opción Devolver el producto. Te daremos una etiqueta de envío para que imprimas y pegues en el paquete para llevarlo al correo ¡y listo!</p>
                                </div>
                            </article>
                        </section>



        

                        <footer class="container-fluid fondofooter text-white">
                            <div class="row d-flex justify-content-around align-items-center">
                                <div class="col-lg-10 mt-5">
                                    <div class="row d-flex justify-content-center align-items-center">
                                        <div class="col-sm-8 col-md-6 pb-lg-4 pl-3">
                                            <p class="text pb-3">Información adicional de Musindi:</p>
                                            <p class="datos colorletras">Somos una empresa con 30 años de trayectoria. Nos orientamos a los apasionados de la música.</p>
                                            <p class="logofooter mb-5 mb-sm-1 ml-5">Musindi</p>
                                        </div>

                                        <div class=" col-sm-8 col-md-6 pl-3 pl-md-5">
                                            <p class="text pb-3">Información de la tienda:</p>
                                            <ul class="ulredes mb-5">
                                            <li v-for="datosFooter in datosFor">{{datosFooter}}</li>
                                            </ul>
                                            <div class="pb-5 mt-5 mt-sm-1">
                                                <ul class="ulredes d-flex flex-wrap flex-sm-nowrap">
                                                    <li class="my-1 px-3 px-sm-2"><a href="https://es-la.facebook.com/" target="_blank"><img class="redes" src="imagenes/facebook.png" alt="facebook"></a></li>
                                                    <li class="my-1 px-3 px-sm-2"><a href="https://twitter.com/login?lang=es" target="_blank"><img class="redes" src="imagenes/twitter.png" alt="twitter"></a></li>
                                                    <li class="my-1 px-3 px-sm-2"><a href="https://web.whatsapp.com/" target="_blank"><img class="redes" src="imagenes/whatsapp.png" alt="whatsapp"></a></li>
                                                    <li class="my-1 px-3 px-sm-2"><a href="https://www.youtube.com/" target="_blank"><img class="youtube" src="imagenes/youtube.png" alt="youtube"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="copy w-100 pt-2 colorletras" id="info">
                                    <p class="mx-5">© copyright 2020 Todos los Derechos Reservados | Musindi</p>
                                </div>
                            </div> 
                        </footer>
                        <div class="agregar-alerta efecto">
                            <button type="button" class="btn mensaje btnborde mx-3 my-3">Instalar Musindi</button>
                        </div>
                    </div>
                </div>
            </div>`,


           



})









