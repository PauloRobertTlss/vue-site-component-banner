<template>
<div>
<div class="ftco-footer jarallax" style="background-image: url(img/sharpen-hair-cutting-scissors-the-best-hair.jpg);">
    <div class="container">

        <div class="row white-text">
            <div class="col m6 mb-5">
                <div class="footer-widget">
                  <div>
                    <h3 class="mb-4">SOBRE</h3>
                    <p>A FLE REFRIGERAÇÃO entrou no mercado nacional e desde uma pequena oficina artesã vem trazendo alta qualidade na afiação de equipamentos e ferramentas com grande eficiência, preço competitivo e tecnologia. Estamos expandindo com a mesma proposta de qualidade e entrega rápida.</p>
                    </div>
                    <h3 class="mb-4 white-text">ENDEREÇO</h3>
                    <time itemprop="openingHours" datetime="Tu,Su 09:00-17:30">Segunda a Sexta:<br>Aberto das 8:00 &mdash; 18:30 - Sábados até 13:00</time>
                    <address><svg-icon icon-class="maps-and-flags" class-name="card-panel-icon  white-text"/> &mdash;  Rua Fernando Ribeiro Marques, 261 - Chácara São João</address>
                </div>
            </div>
            
            <div class="col m4 mb-5" itemscope itemtype="http://schema.org/Person">
                <div class="footer-widget">
                    <div class="col mb-12">
                    <a href="mailto:contato@flerefrigeracao.com.br" itemprop="email">
                      <svg-icon icon-class="email" class-name="card-panel-icon orange-text"/>&mdash;fle.refrigeracao@hotmail.com
                    </a>
                    </div>
                    <div class="col mb-12">
                    <svg-icon icon-class="phone" class-name="card-panel-icon orange-text" /> &mdash;<span itemprop="telephone">(11) 96147-1070</span>/<span itemprop="telephone"> 96976-2426</span>
                    </div>
                        <div class="col mb-12">
                    <svg-icon icon-class="office-telephone" class-name="card-panel-icon orange-text" itemprop="telephone"/> &mdash;(11) 96976-2426
                        </div>
                    <hr>
                    <h3 class="mb-4 white-text">ACOMPANHE-NOS </h3>
                    <ul class="list-unstyled social">
                        <!--<li><a itemprop="url" href="https://www.facebook.com/Afiacttor-Afia%C3%A7%C3%A3o-de-ferramentas-288014901791643/?modal=admin_todo_tour" target="_blank"  rel="noopener"  title="conheça nossa pagina no facebook" ><svg-icon icon-class="facebook" class-name="card-panel-icon orange-text" /></a></li>-->
                        <li><a itemprop="url" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp"><svg-icon icon-class="whatsapp" class-name="card-panel-icon orange-text" /></a></li>
                        <li><a itemprop="url" title="Nosso endereço"  href="https://www.google.com/maps/place/Rua+Fernando+Ribeiro+Marques,+164-202+-+Ch%C3%A1cara+S%C3%A3o+Jo%C3%A3o,+S%C3%A3o+Paulo+-+SP,+05109-040/@-23.5059191,-46.763758,19z/data=!3m1!4b1!4m19!1m13!4m12!1m3!2m2!1d-46.763093!2d-23.5058385!1m6!1m2!1s0x94cefec343f5e271:0xabcda8ce3acf909a!2sRua+Fernando+Ribeiro+Marques,+164-202+-+Ch%C3%A1cara+S%C3%A3o+Jo%C3%A3o,+S%C3%A3o+Paulo+-+SP,+05109-040!2m2!1d-46.7632095!2d-23.5059191!3e0!3m4!1s0x94cefec343f5e271:0xabcda8ce3acf909a!8m2!3d-23.5059191!4d-46.7632095" target="_blank" rel="noopener" ><svg-icon icon-class="google-maps" class-name="card-panel-icon orange-text" title="Nosso endereço" /></a></li>
                    </ul>
                </div>

            </div>
            <div class="col m2">
                <div class="footer-widget">
                <h3 class="mb-4 white-text">SERVIÇOS</h3>
                    <p class="orange-text"><router-link :to="{ path: '/services' }">SERVIÇOS</router-link></p>
                    <p class="orange-text"><router-link :to="{ path: '/about' }">QUEM SOMOS</router-link></p>
                </div>
                <div class="footer-widget">
                    <h3 class="mb-4 white-text">EMPRESA</h3>
                    <p class="orange-text"><router-link :to="{ path: '/about' }">QUEM SOMOS</router-link></p>
                </div>
            </div>
        </div>
        <div class="row pt-5">
        <hr class="hr-how"/>
            <div class="col m12 left white-text ">
                <p>&copy; Copyright 2018. All Rights Reserved. FLE REFRIGERAÇÃO &amp;</p>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  name: "FooterCustom",
  data() {
    return {}
    },
  mounted() {
    
  },
  methods: {
   
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.ftco-footer-newsletter .form-group {
  position: relative;
}

.ftco-footer-newsletter .form-group .form-control {
  background: #fff;
  color: #000;
  border: none !important;
  border-radius: 0px;
  padding-right: 70px;
}

.ftco-footer-newsletter .form-group .button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 10px;
  border: none !important;
  background: none;
}

.ftco-footer-newsletter .form-group .button:active, .ftco-footer-newsletter .form-group .button:focus {
  outline: none;
}

.ftco-footer {
  background: #121212;
  padding: 3em 0;
  font-size: 15px;
  font-weight: 400;
  .card-panel-icon{
    font-size: 1.3rem;
  }
}

.ftco-footer .footer-widget {
    p{
    font-size: 14px;
    }    
    h3 {
    font-size: 20px;
  }
}

.ftco-footer .footer-widget .list-unstyled.social li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  .card-panel-icon{
    font-size: 2rem;
  }

}

.ftco-footer .footer-widget .list-unstyled.social li a {
  font-size: 24px;
  color: #fff;
}

footer:after {
  z-index: 1;
  background: #eef4f71c;
  content: "";
  -webkit-transform: rotate(-5deg) translateX(-50%);
  -ms-transform: rotate(-5deg) translateX(-50%);
  transform: rotate(-5deg) translateX(-50%);
  width: 120%;
  position: absolute;
  bottom: 0;
  height: 200px;
  left: 50%;
}


</style>