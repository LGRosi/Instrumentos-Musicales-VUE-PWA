Vue.component('componente-contacto', {
    data() {
        return {
            imgAsidePc: "imagenes/imgAside_pc.jpg",
			imgAsideTablet: "imagenes/imgAside_tablet.jpg",
            imgAsideCelular: "imagenes/imgAside_celular.jpg",

            datosFor:["MUSINDI", "Calle falsa 123 - CABA", "Ciudad de Buenos Aires - Argentina",
			"Llamanos: 11 9999 9999", "Envianos un correo electrónico:", "instrumentos@Musindi.com.ar"],
        }
    },

    template: 
            `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <section class="pt-5 my-5 px-4">
                            <div class="row">
                                <form class="col-md-6 my-3 pr-lg-5 colorletraslabel" action="#">
                                    <h2 class="h1">Bienvenido a Musindi!</h2>
                            
                                    <div class="form-group">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control form2" id="nombre" placeholder="Nombre..." required>
                                    </div>
                            
                                    <div class="form-group">
                                        <label for="apellido">Apellido</label>
                                        <input type="text" class="form-control form2" id="apellido" placeholder="Apellido..." required>
                                    </div>
                            
                                    <div class="form-group">
                                        <label for="mail">Email</label>
                                        <input type="email" class="form-control form2" id="mail" placeholder="ejemplo@email.com" required>
                                    </div>
                            
                                    <div class="form-group">
                                        <label for="comentario">Mensaje</label>
                                        <textarea id="comentario" class="form-control form" cols="40" rows="3" placeholder="Dejanos tu comentario..." required></textarea>
                                    </div>

                                    <div class="custom-control custom-checkbox mb-4">
                                        <input type="checkbox" class="custom-control-input" id="algo">
                                        <label class="custom-control-label lainfo" for="algo">Deseo recibir promociones a mi correo</label>
                                    </div>
                            
                                    <div>
                                        <input type="submit" value="ENVIAR" class="form2 col-12 col-md-5 btnservicios"  data-toggle="modal" data-target="#alert">
                                    </div>

                                </form>

                                <aside class="col-md-6 fondoaside mt-4">
                                    <h2 class="mt-2">Eventos musicales</h2>
                                    <figure>
                                        <picture>
                                            <source media="(max-width: 599px)" :srcset="imgAsideCelular">
                                            <source media="(max-width: 800px)" :srcset="imgAsideTablet">    
                                            <img :src="imgAsidePc" alt="Festival" title="Festival" class="img-fluid radiusimgaside mt-3 w-100"  />
                                        </picture>
                                    </figure>
                                    <h3 class="mt-4 mb-3">Día Internacional de la Música</h3>
                                    <p>
                                        <strong>El Día Internacional de la Música se celebra el 1 de octubre</strong>,
                                        fecha establecida por la UNESCO en 1975.
                                        Es una oportunidad que se nos presenta para honrar a todos los músicos
                                        y los estilos que disfrutan y comparten todas las personas, en el sentido
                                        de unir y compartir un mismo sentimiento.
                                    </p>
                                </aside>
                            </div>
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
                    </div>
                </div>
            </div>`,
});