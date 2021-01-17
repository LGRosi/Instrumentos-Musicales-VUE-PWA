Vue.component('componente-index', {
    data() {
        return {
            ver: false,
            
            h2Slider1: "Guitarras eléctricas",
			h2Slider2: "Instrumentos internacionales",
			h2Slider3: "Equipos de sonido",

			pSlider1:"Nuestra mejor y más solicitada selección de guitarras.",
			pSlider2:"Los mejores instrumentos con la más alta calidad.",
			pSlider3:"Te ofrecemos las mejores marcas de audio reconocidas mundialmente.",

			imgSlider1Pc: "imagenes/slider1-pc.jpg",
			imgSlider1Tablet: "imagenes/slider1-tablet.jpg",
			imgSlider1Celular: "imagenes/slider1-celular.jpg",

			imgSlider2Pc: "imagenes/slider2-pc.jpg",
			imgSlider2Tablet: "imagenes/slider2-tablet.jpg",
			imgSlider2Celular: "imagenes/slider2-celular.jpg",

			imgSlider3Pc: "imagenes/slider3-pc.jpg",
			imgSlider3Tablet: "imagenes/slider3-tablet.jpg",
            imgSlider3Celular: "imagenes/slider3-celular.jpg",
            
            textoGris: "textogris",
			pPagoSeguro: "tamañotextogris",

            imgPagoSeguro: "imagenes/pago.png",
			imgEnvioGlobal: "imagenes/mundo.png",
            imgEntregaRapida: "imagenes/envio.png",
            
            imgBandaPc: "imagenes/banda_pc.jpg",
			imgBandaTablet: "imagenes/banda_tablet.jpg",
            imgBandaCelular: "imagenes/banda_celular.jpg",
            
            beneficios:["Tenemos instrumentos de la más alta calidad.", "Manejamos marcas mundialmente reconocidas.",
			"Contamos con repación y repuestos.", "Tenés un 35% de descuento en tu primera compra.",
            "Te proporcionamos envíos nacionales sin costo."],

            datosFor:["MUSINDI", "Calle falsa 123 - CABA", "Ciudad de Buenos Aires - Argentina",
            "Llamanos: 11 9999 9999", "Envianos un correo electrónico:", "instrumentos@Musindi.com.ar"],
            
            comentarios:[],
            nuevoComentario:'',
        }
    },

    template: 
            `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <section id="galeria" class="carousel slide" data-ride="carousel" data-interval = "4000">
                            <h2 v-show="ver">Banner música rock alternativo</h2>
                            <div class="row">
                                <ol class="carousel-indicators pb-4">
                                    <li data-target="#galeria" data-slide-to="0" class="active"></li>
                                    <li data-target="#galeria" data-slide-to="1"></li>
                                    <li data-target="#galeria" data-slide-to="2"></li>
                                </ol>
                        
                                <div class="carousel-inner">
                                    <figure class="carousel-item active">
                                        <picture>
                                            <source media="(max-width: 599px)" :srcset="imgSlider1Celular">
                                            <source media="(max-width: 800px)" :srcset="imgSlider1Tablet">    
                                            <img class="d-block w-100" :src="imgSlider1Pc" alt="música" />
                                        </picture>
                                        <div class="carousel-caption d-none d-md-block pt-2">
                                            <h2 v-html="h2Slider1"></h2>
                                            <p v-html="pSlider1"></p>
                                        </div>
                                    </figure>
                                    <figure class="carousel-item">
                                        <picture>
                                            <source media="(max-width: 599px)" :srcset="imgSlider2Celular">
                                            <source media="(max-width: 800px)" :srcset="imgSlider2Tablet"> 
                                            <img class="d-block w-100" :src="imgSlider2Pc" alt="música" />
                                        </picture>
                                        <div class="carousel-caption d-none d-md-block pt-2">
                                            <h2 v-html="h2Slider2"></h2>
                                            <p v-html="pSlider2"></p>
                                        </div>
                                    </figure>
                                    <figure class="carousel-item">
                                        <picture>
                                            <source media="(max-width: 599px)" :srcset="imgSlider3Celular">
                                            <source media="(max-width: 800px)" :srcset="imgSlider3Tablet"> 
                                            <img class="d-block w-100" :src="imgSlider3Pc" alt="música" />
                                        </picture>
                                        <div class="carousel-caption d-none d-md-block pt-2">
                                            <h2 v-html="h2Slider3"></h2>
                                            <p v-html="pSlider3"></p>
                                        </div>
                                    </figure>
                                </div>
                        
                                <a class="carousel-control-prev" href="#galeria" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Anterior</span>
                                </a>
                        
                                <a class="carousel-control-next" href="#galeria" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Siguiente</span>
                                </a>
                            </div>
                        </section>
                        
                        
                        <section class="mt-5 pt-5">
                            <article class="row text-center">
                                <div class="col-12 px-5">
                                    <h2 class="h1 mb-5 pb-5">Nuestros servicios</h2>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgPagoSeguro" alt="Pago seguro" />
                                            </figure>
                                            <h3>Pago Seguro</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Podes confíar en nosotros para realizar todas tus compras de forma segura.</p>
                                        </div>
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgEnvioGlobal" alt="envío global" />
                                            </figure>
                                            <h3>Envío Global</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Estamos enviando tus instrumentos a cualquier país del mundo en el que te encuentres.</p>
                                        </div>
                                        <div class="col-md-4">
                                            <figure>
                                                <img :src="imgEntregaRapida" alt="Entrega Rápida">
                                            </figure>
                                            <h3>Entrega Rápida</h3>
                                            <p :class="[textoGris, pPagoSeguro]">Te proporcionamos la mejor y más rápida entrega de todo el mundo.</p>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <button type="button" class="btn btnservicios mb-5">MÁS INFO ...</button>
                                    </div>
                                </div>
                            </article>
                        </section>
                        
                        <section class="py-5 mt-5 px-5">
                            <article class="row mt-2">
                                <div class="col-12">
                                    <h2 class="text-center h1 mt-5">¿Por qué elegirnos?</h2>
                                    <div class="row">
                                        <div class="col-md-6 d-flex justify-content-center">
                                            <figure>
                                                <picture>
                                                    <source media="(max-width: 599px)" :srcset="imgBandaCelular">
                                                    <source media="(max-width: 800px)" :srcset="imgBandaTablet">
                                                    <img :src="imgBandaPc" class="img-fluid" alt="Banda de música" />
                                                </picture>
                                            </figure>
                                        </div>

                                        <div class="col-md-6 mt-lg-5 pt-md-5">
                                            <h3 class="my-5 text-center text-md-start">Te ofrecemos excelencia:</h3>
                                            <div class="d-flex justify-content-center justify-content-lg-start ml-md-5 pl-md-5">
                                                <ul class="pl-3 pl-md-0">
                                                <li v-for="datosBeneficios in beneficios">{{datosBeneficios}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                        
                        <div>
                            <section class="bg-light pl-md-5">
                                <h2 class="text-center h1 mt-5 py-5">Comentarios</h2>
                                <div class="row d-flex justify-content-center px-5">
                                    <div class="col-md-6 testimonios px-2">
                                        <p class="ml-4 pr-sm-5">Excelente aplicación! Si estas buscando una app con todo lo necesario para crear música entonces descargate Musindi.</p>
                                        <div class="d-flex justify-content-start">
                                            <figure>
                                                <img src="imagenes/persona1.png" class="personas" alt="Persona" />
                                            </figure>
                                            <div class="mt-3">
                                                <p class="ml-3 pl-1 mb-0"><b>Camila</b></p>
                                                <p class="textogris ml-3 pl-1 mb-0">Músico profesional</p>
                                                <p class="stars ml-3">estrellas</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 testimonios px-2">
                                        <p class="ml-4 pr-sm-5">Una de las mejores app que probé. Su funcionalidad es espectacular! En minutos encontré mi instrumento favorito.</p>
                                        <div class="d-flex justify-content-start">
                                            <figure>
                                                <img src="imagenes/persona2.png" class="personas" alt="Persona" />
                                            </figure>
                                            <div class="mt-3">
                                                <p class="ml-3 pl-1 mb-0"><b>Alberto</b></p>
                                                <p class="textogris ml-3 pl-1 mb-0">Músico profesional</p>
                                                <p class="stars ml-3">estrellas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="my-5 w-75 m-auto">
                                    <p>Dejanos una breve opinión sobre Musindi:</p>
                                    <input type="text" class="form-control my-3 form" v-model="nuevoComentario" v-on:keyup.enter="agregarTarea">
                                    <button class="btn btn-primary btnservicios mb-5" @click="agregarTarea">Publicar</button>

                                    <div class="mt-3" v-for="(item, index) of comentarios">
                                        <div :class="['alert', item.estado ? 'alert-primary' : 'alert-white']" role="alert">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    {{item.nombre}}
                                                </div>
                                                <div>
                                                    <button class="btn btn-success btn-sm ml-2 mb-1" @click="editarTarea(index)">Favorito</button>
                                                    <button class="btn btn-danger btn-sm ml-2" @click="eliminar(index)">Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>



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


            methods: {
                agregarTarea: function () {
                    this.comentarios.push({
                        nombre: this.nuevoComentario,
                        estado: false,
                    });
                    this.nuevoComentario = '';
                    localStorage.setItem('los-comentarios', JSON.stringify(this.comentarios));
                    
                },

                editarTarea: function (index) {
                    this.comentarios[index].estado = true;
                    localStorage.getItem('los-comentarios', JSON.stringify(this.comentarios));

                },

                eliminar: function (index) {
                    this.comentarios.splice(index, 1);
                    localStorage.getItem('los-comentarios', JSON.stringify(this.comentarios));

                },

                created: function () {
                    let datosDB = JSON.parse(localStorage.getItem('los-comentarios'));
                    if (datosDB === null) {
                        this.comentarios = [];
                    } else {
                        this.comentarios = datosDB;
                    }                    
                }
            },



})























