Vue.component('componente-productos', {
    data() {
        return {
            imgBajoPc: "imagenes/bajo_pc.jpg",
			imgBajoTablet: "imagenes/bajo_tablet.jpg",
			imgBajoCelular: "imagenes/bajo_celular.jpg",

			imgBateriaPc: "imagenes/bateria_pc.jpg",
			imgBateriaTablet: "imagenes/bateria_tablet.jpg",
			imgBateriaCelular: "imagenes/bateria_celular.jpg",

			imgGuitarraPc: "imagenes/guitarra_pc.jpg",
			imgGuitarraTablet: "imagenes/guitarra_tablet.jpg",
			imgGuitarraCelular: "imagenes/guitarra_celular.jpg",

			imgSaxoPc: "imagenes/saxo_pc.jpg",
			imgSaxoTablet: "imagenes/saxo_tablet.jpg",
			imgSaxoCelular: "imagenes/saxo_celular.jpg",

			imgGuitarraElectricaPc: "imagenes/guitarraElectrica_pc.jpg",
			imgGuitarraElectricaTablet: "imagenes/guitarraElectrica_tablet.jpg",
			imgGuitarraElectricaCelular: "imagenes/guitarraElectrica_celular.jpg",

			imgSintetizadorPc: "imagenes/sintetizador_pc.jpg",
			imgSintetizadorTablet: "imagenes/sintetizador_tablet.jpg",
            imgSintetizadorCelular: "imagenes/sintetizador_celular.jpg",
            
            filtroPrecioBajo: 23997,
            filtroPrecioBateria: 41086,
            filtroPrecioGuitarraAcustica: 22099,
            filtroPrecioSaxo: 50065,
            filtroPrecioGuitarraElectrica: 25060,
            filtroPrecioSintetizador: 42471,

            datosFor:["MUSINDI", "Calle falsa 123 - CABA", "Ciudad de Buenos Aires - Argentina",
			"Llamanos: 11 9999 9999", "Envianos un correo electrónico:", "instrumentos@Musindi.com.ar"],

        }
    },

    template:
            `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <main class="my-5 px-4 py-5">
                            <section class="row">
                                <div class="col-12 px-4">
                                    <h2 class="h1 text-center mb-5">Nuestra selección</h2>
                                    <div class="row">
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                            <figure class="d-flex justify-content-center">
                                                <picture>
                                                    <source media="(max-width: 599px)" :srcset="imgBajoCelular">
                                                    <source media="(max-width: 800px)" :srcset="imgBajoTablet">    
                                                    <img :src="imgBajoPc" alt="Bajo" title="Bajo" class="img-fluid imgradius mt-4" />
                                                </picture>
                                            </figure>
                                            <div class="card-body">
                                                <h3 class="card-title">Bajo EpiPhone</h3>
                                                <p class="stars">Estrellas</p>
                                                
                                                <div class="mb-2">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Funda">
                                                        <label class="form-check-label" for="inlineCheckbox1">Funda</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Soporte">
                                                        <label class="form-check-label" for="inlineCheckbox2">Soporte</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Amplificador">
                                                        <label class="form-check-label" for="inlineCheckbox3">Amplificador</label>
                                                    </div>
                                                </div>

                                                <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 29.997</small></p>
                                                <div class="d-flex justify-content-start mb-0">
                                                    <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioBajo | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                    <p class="card-text colorprecio mt-1">20% OFF</p>
                                                </div>
                                                <div class="d-flex justify-content-start">
                                                    <figure>
                                                        <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                    </figure>
                                                    <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                </div>

                                                <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                            </div>
                                        </article>
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                                <figure class="d-flex justify-content-center">
                                                    <picture>
                                                        <source media="(max-width: 599px)" :srcset="imgBateriaCelular">
                                                        <source media="(max-width: 800px)" :srcset="imgBateriaTablet">    
                                                        <img :src="imgBateriaPc" alt="Batería" title="Batería" class="img-fluid imgradius mt-4" />
                                                    </picture>
                                                </figure>
                                                <div class="card-body">
                                                    <h3 class="card-title">Batería Yamaha</h3>
                                                    <p class="stars">Estrellas</p>

                                                    <div class="mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Plantillo Ride">
                                                            <label class="form-check-label" for="inlineCheckbox4">Platillo Ride</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="Banqueta">
                                                            <label class="form-check-label" for="inlineCheckbox5">Banqueta</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="Palillos">
                                                            <label class="form-check-label" for="inlineCheckbox6">Palillos</label>
                                                        </div>
                                                    </div>

                                                    <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 63.210</small></p>
                                                    <div class="d-flex justify-content-start mb-0">
                                                        <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioBateria | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                        <p class="card-text colorprecio mt-1">35% OFF</p>
                                                    </div>
                                                    <div class="d-flex justify-content-start">
                                                        <figure>
                                                            <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                        </figure>
                                                        <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                    </div>
                                                    <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                    <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                                </div>
                                        </article>
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                                <figure class="d-flex justify-content-center">
                                                    <picture>
                                                        <source media="(max-width: 599px)" :srcset="imgGuitarraCelular">
                                                        <source media="(max-width: 800px)" :srcset="imgGuitarraTablet">    
                                                        <img :src="imgGuitarraPc" alt="Guitarra" title="Guitarra" class="img-fluid imgradius mt-4" />
                                                    </picture>
                                                </figure>
                                                <div class="card-body">
                                                    <h3 class="card-title">Guitarra Acústica</h3>
                                                    <p class="stars">Estrellas</p>

                                                    <form v-on:submit.prevent class="mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="Estuche">
                                                            <label class="form-check-label" for="inlineCheckbox7">Estuche</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="Correa y base">
                                                            <label class="form-check-label" for="inlineCheckbox8">Correa y base</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="Afinador">
                                                            <label class="form-check-label" for="inlineCheckbox9">Afinador</label>
                                                        </div>
                                                    </form>

                                                    <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 25.999</small></p>
                                                    <div class="d-flex justify-content-start mb-0">
                                                        <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioGuitarraAcustica | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                        <p class="card-text colorprecio mt-1">15% OFF</p>
                                                    </div>
                                                    <div class="d-flex justify-content-start">
                                                        <figure>
                                                            <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                        </figure>
                                                        <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                    </div>
                                                    <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                    <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                                </div>
                                        </article>
                            
                                        <div class="w-100 d-none d-md-block"></div>
                            
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                                <figure class="d-flex justify-content-center">
                                                    <picture>
                                                        <source media="(max-width: 599px)" :srcset="imgSaxoCelular">
                                                        <source media="(max-width: 800px)" :srcset="imgSaxoTablet">    
                                                        <img :src="imgSaxoPc" alt="Saxo" title="Saxo" class="img-fluid imgradius mt-4" />
                                                    </picture>
                                                </figure>
                                                <div class="card-body">
                                                    <h3 class="card-title">Saxo Parker</h3>
                                                    <p class="stars">Estrellas</p>

                                                    <form v-on:submit.prevent class="mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox10" value="Kit de limpieza">
                                                            <label class="form-check-label" for="inlineCheckbox10">Kit de limpieza</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox11" value="Lenguetas">
                                                            <label class="form-check-label" for="inlineCheckbox11">Lenguetas</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox12" value="Boquilla">
                                                            <label class="form-check-label" for="inlineCheckbox12">Boquilla</label>
                                                        </div>
                                                    </form>

                                                    <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 58.910</small></p>
                                                    <div class="d-flex justify-content-start mb-0">
                                                        <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioSaxo | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                        <p class="card-text colorprecio mt-1">15% OFF</p>
                                                    </div>
                                                    <div class="d-flex justify-content-start">
                                                        <figure>
                                                            <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                        </figure>
                                                        <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                    </div>
                                                    <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                    <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                                </div>
                                        </article>
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                                <figure class="d-flex justify-content-center">
                                                    <picture>
                                                        <source media="(max-width: 599px)" :srcset="imgGuitarraElectricaCelular">
                                                        <source media="(max-width: 800px)" :srcset="imgGuitarraElectricaTablet">    
                                                        <img :src="imgGuitarraElectricaPc" alt="Guitarra eléctrica" title="Guitarra eléctrica" class="img-fluid imgradius mt-4" />
                                                    </picture>
                                                </figure>
                                                <div class="card-body">
                                                    <h3 class="card-title">Guitarra Eléctrica</h3>
                                                    <p class="stars">Estrellas</p>

                                                    <form v-on:submit.prevent class="mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox13" value="Funda2">
                                                            <label class="form-check-label" for="inlineCheckbox13">Funda</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox14" value="Amplificador2">
                                                            <label class="form-check-label" for="inlineCheckbox14">Amplificador</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox15" value="Cables">
                                                            <label class="form-check-label" for="inlineCheckbox15">Cables y puas</label>
                                                        </div>
                                                    </form>

                                                    <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 30.072</small></p>
                                                    <div class="d-flex justify-content-start mb-0">
                                                        <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioGuitarraElectrica | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                        <p class="card-text colorprecio mt-1">16% OFF</p>
                                                    </div>
                                                    <div class="d-flex justify-content-start">
                                                        <figure>
                                                            <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                        </figure>
                                                        <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                    </div>
                                                    <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                    <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                                </div>
                                        </article>
                                        <article class="col-12 col-lg fondoblancoinstr px-3 mx-md-2 mt-3">
                                                <figure class="d-flex justify-content-center">
                                                    <picture>
                                                        <source media="(max-width: 599px)" :srcset="imgSintetizadorCelular">
                                                        <source media="(max-width: 800px)" :srcset="imgSintetizadorTablet">    
                                                        <img :src="imgSintetizadorPc" alt="Sintetizador" title="Sintetizador" class="img-fluid imgradius mt-4" />
                                                    </picture>
                                                </figure>
                                                <div class="card-body">
                                                    <h3 class="card-title">Sintetizador Novation</h3>
                                                    <p class="stars">Estrellas</p>

                                                    <form v-on:submit.prevent class="mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox16" value="Micrófono">
                                                            <label class="form-check-label" for="inlineCheckbox16">Micrófono</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox17" value="Cables2">
                                                            <label class="form-check-label" for="inlineCheckbox17">Cables</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox18" value="Funda3">
                                                            <label class="form-check-label" for="inlineCheckbox18">Funda y soporte</label>
                                                        </div>
                                                    </form>

                                                    <p class="card-text tachado mb-0 ml-2"><small class="text-muted">$ 83.277</small></p>
                                                    <div class="d-flex justify-content-start mb-0">
                                                        <p class="card-text tamañotxt ml-2 mr-4">$ {{ filtroPrecioSintetizador | number('0,0' , { thousandsSeparator: '.'}) }}</p>
                                                        <p class="card-text colorprecio mt-1">49% OFF</p>
                                                    </div>
                                                    <div class="d-flex justify-content-start">
                                                        <figure>
                                                            <img src="imagenes/deliverydos.svg" class="envio mr-4 ml-0" alt="delivery" />
                                                        </figure>
                                                        <p class="colorprecio mt-3">ENVÍO GRATIS</p>
                                                    </div>
                                                    <button type="button" class="btn colorboton w-100 mb-2" data-toggle="modal" data-target="#staticBackdrop">AGREGAR AL CARRITO</button>
                                                    <a href="#" class="btn btn-outline btnborde w-100 my-1">VER DETALLE</a>
                                                </div>
                                        </article>
                                    </div>
                                </div>
                            </section>
                        </main>
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
                    </div>
                </div>
            </div>`,
});

