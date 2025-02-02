// pages/index.js
import React from 'react';

export default function Home() {
  return (
 <html lang="en" class="">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fuxia Lab</title>
    <meta name="description" content="Creamos contenido para tu negocio. FOTOS - VIDEOS - PACKS DE IMAGENES. Tenemos packs de contenido hechos a tu medida.">
    <link href="./output.css" rel="stylesheet">
</head>

<div id="errorModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="document.getElementById('errorModal').style.display='none'">&times;</span>
        <p id="errorText">Ha ocurrido un error al enviar el formulario.</p>
    </div>
</div>

<body>
    <header>
        <nav class="fuxiaNavBar flex-row">
            <div class="lex flex-col">
                <a href="https://fuxialab.com" class="flex center">
                    <img src="recursos/LogoFuxiaHorizontal.png" class="logo mr-3 h-6 sm:h-9" alt="FuxiaLab Logo" />                    
                </a>
                <div class="flex flex-row">
                    <button class="FuxiaButton">GalerIA</button>
                    <button class="FuxiaButton">LibrerIA</button>
                    <button class="FuxiaButton">Contactanos</button>
                </div>
            </div>
        </nav>
    </header>

    <div class="video-background">
        <video autoplay muted loop>
          <source src="recursos/20230826202943_RIFE_x2_slomo_x3.mp4" type="video/mp4">
          <!-- Otras fuentes de video (WebM, Ogg) si es necesario -->
        </video>
    </div>

    <div class="containerFuxiaHero">
        <div class="containerFuxiaH1 flex-col">
            <h1 class="FuxiaH1">IA Believers</h1>
            <h2 class="FuxiaH2" style="max-width:600px;width: 100%;"> <b>¡No es un truco publicitario!</b><br> Mezclamos nuestra creatividad con las nuevas tecnologías para llevar tu negocio al siguiente nivel.</h2>
            <p class="FuxiaSpecialText">GO FOR IT!</p>
        </div>
      </div>
    </div>

    <div class="containerFuxia flex-col center">
        <!--div><img src="recursos/sheepHero2.png" alt="Imagen de la oveja fucsia simbolo de la marca original" style="width:1920px;" /></div-->
        <p class="WhiteSpecialText button" style="text-align: center;margin-top: 64px;">Hits</p>
    </div>

    
    <div class="containerFuxiaCards flex-row center space">
                            <div>
                                <img class="fuxiaHitsImg " src="recursos/Captura de pantalla 2023-10-01 1411112719.png" alt="">
                            </div>
                            <div>
                                <img class="fuxiaHitsImg" src="recursos/Captura de pantalla 2023-10-01 142742.png" alt="">
                            </div>
                            <div>
                                <img class="fuxiaHitsImg" src="recursos/Captura de pantalla 2023-10-01 142824.png" alt="">
                            </div>
               

    </div>

    <div class="containerFuxia flex-col center" style="min-height: 120px;margin-top: 320px;">
        <p class="GradienteSpecialText" style="text-align: center; margin-top: -240px;">ACTIVA TU PLAN</p>
    </div>    

    <div class="containerFuxiaCards flex-row center" style="text-align: center; margin-top: -240px;">
                <div class="cardContainer">
                    <a href="https://api.whatsapp.com/send/?phone=5401138519899&text=Hola%21+vi+tu+anuncio+en+la+web+y+estoy+interesado+en+un+Starter+Pack" target="_blank" class="fuxiaCard">
                        <img class="cardImg" src="recursos/start.png" alt="Imagen de la oveja" />
                    </a>
                    <p class="mt-8"><b>¿Tienes una idea?</b> y no tienes tiempo o herramientas para explotarla</p>
                    <h1 class="cardH1">Starter Pack</h1>
                    <br>
                    <button class="gradientButton center">Ver más</button>
                </div>

                <div class="cardContainer ">
                    <a href="https://api.whatsapp.com/send/?phone=5401138519899&text=Hola%21+vi+tu+anuncio+en+la+web+y+estoy+interesado+en+ser+un+Digital+Star" target="_blank" class="fuxiaCard">
                        <img class="cardImg" src="recursos/star.png" alt="Imagen de la oveja" />
                       
                    </a>
                    <h1 class="cardH1">Digital Star</h1>
                    <p class="mt-8"> <b>¿Tu negocio no para de crecer?</b> Mezclamos nuestra creatividad con las nuevas tecnologías para llevar tu negocio al siguiente nivel.</p>
                    <br>
                    <button class="gradientButton">Ver más</button>
                </div>


                <div class="cardContainer">
                    <a href="https://api.whatsapp.com/send/?phone=5401138519899&text=Hola%21+vi+tu+anuncio+en+la+web+y+estoy+interesado+en+co+crear+un+proyecto+jun" target="_blank" class="fuxiaCard">
                        <img class="cardImg" src="recursos/cocrea.png" alt="Imagen de la oveja" />
                    </a>
                    <h1 class="cardH1">Co-creators</h1>
                    <p class=""><b>¿Eres un artista?</b> Armemos algo juntos</p> Mezclamos arte y nuevas tecnologías para crear experiencias inolvidables</p>
                    <br>
                    <button class="gradientButton">Ver más</button>
                </div>
            </div>
            </div>
        </section>
    </div>

        <div class="containerFuxia flex-row center">
                    <p class="FuxiaH2 center" style="font-size: 16px;max-width: 640px;text-align: center;margin-left: 30%;">*Todos nuestros paquetes incluyen instancias de coaching para encontrar juntos la mejor solución creativa para tu proyecto.</p>
        </div>

        <div class="containerFuxia flex-row start">

                <p class="quoteText">¡No es un truco publicitario! Mezclamos nuestra creatividad con las nuevas tecnologías para llevar tu negocio al siguiente nivel. Go for it</p>
                <p class="FuxiaSpecialText" style="margin-top:60px">GO FOR IT!</p>
        </div>

        <div class="containerFuxia flex-col start">
                    <h2 class="contactenosH1" style="text-align: left;margin-top: 64px;">Contactanos</h2>
                    <form action="#" class="fuxiaForm flex-row" style="min-width: 290px;width: 520px;margin-bottom: 64px;">
                            <div>
                                <label for="email" class="block required  text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="santiago@fuxialab.com" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 required text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Quiero mi coaching gratuito!"></textarea>
                            </div>
                            <button type="submit" style="margin-top: 16px;left: auto;" class="FuxiaButton">Reservar</button>
                        </form>
       </div>    

   <div class="footerFuxia flex-row">
    <br>
Footer
<br>
   </div>

</body>
</html>

);
}