<template>
<div>
    <div class="cover_1 overlay bg-slant-white bg-light white">
        <div class="img_bg jarallax" style="background-image: url(https://picpaymagebanks.s3.amazonaws.com/refregirated-truck-expanse.jpg);">
        <!--<div class="img_bg jarallax" >-->
            <div class="container">
                <div class="row align-items-center justify-content-center text-center flex-container">
                    <div class="col s12 m12 l12 mb-5" data-aos="fade-up">
                        <div class="heading mb-5 center-align">
                            <span>F</span>
                            <span>L</span>
                            <span>E</span>
                            <span>R</span>
                            <span>E</span>
                            <span>F</span>
                            <span>R</span>
                            <span>I</span>
                            <span>G</span>
                            <span>E</span>
                            <span>R</span>
                            <span>A</span>
                            <span>Ç</span>
                            <span>Ã</span>
                            <span>O</span>
                        </div>
                        <h4 class="sub-heading center-align">INSTALAÇÕES E PREVENTIVAS E PROJETOS</h4>
                    </div>
                </div>
            </div>  <!--end container-->          
        </div>
    </div>
    <!-- .cover_1 -->

    <div class="section" data-aos="fade-left">
        <div class="container">
            <div class="row section-heading justify-content-center">
                <div class="col-md-8 text-center">
                    <h2 class="heading mb-3 blue-grey-text ">Serviços com qualidade e confiança!</h2>
                    <p class="sub-heading mb-5"></p>
                </div>
            </div>
            <h4 class="title-hr text-center cyan-text text-lighten-1" data-aos="fade-right"> COMPRESSOR | EVAPORADOR | VENTILATORES | DIGITAL</h4>
            <hr class="hr-how"/>
            <div class="row">
                <card-service :key="service.id" v-for="service in cardServices" :title="service.title" :subTitle="service.subTitle" :description="service.description" :image="service.image"> </card-service>
            </div>

            <!-- end new card -->
            <hr class="hr-how" />
        </div>
    </div>
    <div class="section pb-3 white" id="section-about" data-aos="fade-up">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col s12 m12 l8 section-heading">
                    <h3 class="headin light-blue-text" itemprop="nome">FLE REFRIGERAÇÃO</h3>
                    <p>Nossos serviços são variados, mas todos trazem a mesma promessa de qualidade, dedicação e durabilidade. Licenciado e segurado, somos uma equipe experiente e dedicada que trás todo conhecimento adquirido ao longo destes anos, aliada as novas tecnológias e equipamentos de manutenção. <strong>Reforma e Instalação de refrigeração leves</strong>&nbsp;e pesadas.</p>
                    
                </div>
            </div>
        </div>
    </div>
  
  <panel-service></panel-service>
  <slide-logos></slide-logos>

<div class="container">
<div class="row">
  <h4 class="title-hr text-center brown-text text-lighten-1" data-aos="fade-right">ESPECIALIZADA E TEMOS OFERTAS</h4>
    <div class="col s12 m3">
      <div class="card small">
        <p class="ribbon">
          <span class="text"><strong class="bold">Mais Procurado</strong>&nbsp;:compressor SANDEN</span>
        </p>
        <div class="card-image rotate">
          <img src="https://picpaymagebanks.s3.amazonaws.com/vista-lateral-frontal.jpg" alt="manutenção de compressores ">
          <h3 class="card-title light-blue-text"></h3>
        </div>
        <div class="card-stacked">
        <div class="card-content grey-text">
          <small>compressor sanden | 134 | 404</small>
        </div>
        <div class="card-action">
          <a class="blue-grey-text text-darken-4 pulse" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp">
              SANDEN PARA 134 | 404<small class="grey-text">&nbsp;cada</small><svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text pulse" class="right"/></a>
            <a class="btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></a>
        </div>
      </div>
      </div>
    </div>
    <div class="col s12 m3">
      <div class="card small">
        <div class="card-image rotate">
          <img style="transform: rotate(-56deg);" class="responsive-img" src="https://picpaymagebanks.s3.amazonaws.com/ventiladorspal_2.jpg" alt="manutenção troca de ventiladores">
          <h3 class="card-title orange-text"></h3>
        </div>
        <div class="card-stacked">
        <div class="card-content grey-text">
          <small>Todas as marcas</small>
        </div>
        <div class="card-action">
          <a class="blue-grey-text text-darken-4" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp">SPAL | IMOBRAS | UNIVERSAL<small class="grey-text">&nbsp;cada</small><svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text" class="right"/></a>
        </div>
      </div>
      </div>
    </div>
    <div class="col s12 m3">
      <div class="card small">
        <div class="card-image rotate">
          <img class="responsive-img" src="https://picpaymagebanks.s3.amazonaws.com/fittings_2.jpg" alt="troca de mangueira e reparo de mangueira ">
        </div>
        <div class="card-stacked">
        <div class="card-content grey-text">
          <small></small>
        </div>
        <div class="card-action">
          <a class="blue-grey-text text-darken-4" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp">MANGUEIRA E CONEXÔES<small class="grey-text">&nbsp;</small><svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text" class="right"/></a>
        </div>
      </div>
      </div>
    </div>
    <div class="col s12 m3">
      <div class="card small">
        <div class="card-image rotate">
          <img src="https://picpaymagebanks.s3.amazonaws.com/darumgas_2.jpg" alt="manutenção X">
        </div>
        <div class="card-stacked">
        <div class="card-content grey-text">
          <small>gás 134 | 404</small>
        </div>
        <div class="card-action">
          <a class="blue-grey-text text-darken-4" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp">RECARGA E LIMPEZA NO SISTEMA<small class="grey-text">&nbsp;cada</small><svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text" class="right"/></a>

        </div>
      </div>
      </div>
    </div>
  </div>
  </div>

   <footer-custom></footer-custom>


</div>
</template>

<script>
import PanelService from '../panelService'
import SlideLogos from '../slideLogos';
import FooterCustom from '@/components/Footer/index';
import CardService from '@/components/CardService';


export default {
  name: 'home',
  components:{
    PanelService,
    SlideLogos,
    FooterCustom,
      CardService
  },
    data() {
      return {
          cardServices: [
              {
                  id:'service-01',
                  title: 'COMPRESSORES',
                  subTitle: 'INSTALAÇÕES | TROCA',
                  description: 'de toda a linha e marcas',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/vista-lateral-frontal.jpg',
                  fade: 'fade-right'
              },
              {
                  id:'service-02',
                  title: 'EVAPORADORES',
                  subTitle: 'INSTALAÇÃO | TROCA | REFORMA',
                  description: 'Mantenha o pleno potêncial de equipamentos. não fique na mão e prolonge a vida de seu equipamento',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/refregirated-truck.jpg',
                  fade: 'fade-up'
              },
              {
                  id:'service-03',
                  title: 'ELÉTRICA E DIGITAL',
                  subTitle: 'INSTALAÇÂO | PREVENTIVA | REFORMA',
                  description: 'Vamos projetará, desenvolver e testa todos os componentes e dispositivos do seu sistemas ou equipamentos.',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/digital.jpg',
                  fade: 'fade-left'
              },
              {
                  id:'service-04',
                  title: 'VENTILADORES',
                  subTitle: 'INSTALAÇÕES | TROCA',
                  description: 'de toda a linha e marcas.',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/ventiladorspal_2.jpg',
                  fade: 'fade-right'
              },
              {
                  id:'service-05',
                  title: 'MANGUEIRAS E CONEXÕES',
                  subTitle: 'INSTALAÇÃO | TROCA | LIMPEZA DE SISTEMA',
                  description: 'Cortes e furos são imprevisiveis estamos aqui para ajuda-los.',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/fittings_2.jpg',
                  fade: 'fade-up'
              },
              {
                  id:'service-06',
                  title: 'GÁS',
                  subTitle: 'RECARGA | LIMPEZA DO SISTEMA | 134a | 404',
                  description: 'Limpeza de sistema | 134 | 404',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/darumgas_2.jpg',
                  fade: 'fade-left'
              },{
                  id:'service-07',
                  title: 'GÁS',
                  subTitle: 'RECARGA | LIMPEZA DO SISTEMA | 134a | 404',
                  description: 'Limpeza de sistema | 134 | 404',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/darumgas_2.jpg',
                  fade: 'fade-left'
              },{
                  id:'service-08',
                  title: 'GÁS',
                  subTitle: 'RECARGA | LIMPEZA DO SISTEMA | 134a | 404',
                  description: 'Limpeza de sistema | 134 | 404',
                  image: 'https://picpaymagebanks.s3.amazonaws.com/darumgas_2.jpg',
                  fade: 'fade-left'
              },
          ]
      }
    },
  mounted(){
    
    
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  section{
    padding-top: 0!important;
  }

  .nav {
      color: #000!important;
  }

 .flex-container{
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */

}

.inner-element{
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
}

.bg-slant-white {
  position: relative;
}

.bg-slant-white:after {
  z-index: 1;
  background: #fff;
  content: "";
  -webkit-transform: rotate(-5deg) translateX(-50%);
  -ms-transform: rotate(-5deg) translateX(-50%);
  transform: rotate(-5deg) translateX(-50%);
  width: 120%;
  position: absolute;
  bottom: 0;
  /*height: 200px;*/
  left: 50%;
}

.bg-slant-white.bg-light:after {
  background: #f8f9fa;
}

.cover_1 {
  position: relative;
  overflow: hidden;
  top: -2rem;
}

.cover_1.overlay:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background: #000;
  opacity: .2;
}

.cover_1 .lead {
  color: #18ace7ad;
  font-size: 18px;
}

.cover_1 .img_bg {
  background-repeat: no-repeat;
  background-size: cover !important;
  background-position: center center;
}

.cover_1 .img_bg, .cover_1 .img_bg > .container > .row {
  min-height: 600px;
  height: 66vh;
}

.cover_1.cover_sm .img_bg, .cover_1.cover_sm .img_bg > .container > .row {
  min-height: 600px;
  height: 80vh;
}

.cover_1 .sub-heading {
  color: #00bcd4 !important;
  font-size: 1.8rem;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 736.98px) {
  .cover_1 {
  .heading{
    font-size: .9rem;
  }
  .sub-heading {
    font-size: 1rem;
    }
  }

    .card-image.mg {
        min-height: 6rem;
        /* transform: translate3d(0%, -10%, 0); */
        transform: scale(.5);
    }

    .card-content{
        padding: .6rem!important;

        .card-title {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;

        }

    }
}

  @media (max-width: 333.98px) {
      .card-content{
          padding: .6rem!important;

          .card-title {
              font-size: 1rem;
          }

          p {
              font-size: .8rem;

          }

      }
  }

.cover_1 {

.heading {
  letter-spacing: .3rem;
  font-size: 1rem;
  /*line-height: 1.5rem;*/
  span{
    background:rgba(34, 168, 231, 0.35) -webkit-gradient(linear, left top, right top, from(rgba(95, 125, 139, 0.35)), to(rgb(21, 197, 226)), color-stop(0.5, #ffffffe0)) 0 0 no-repeat;
    -webkit-background-size: 125px;
    color: #673ab705;
    -webkit-background-clip: text;
    -webkit-animation-name: Gradient;
    -webkit-animation-duration: 12s;
    -webkit-animation-iteration-count: infinite;
  
    }
  }
}





@media (min-width: 768px) {
  .cover_1 .heading {
    font-size: 4rem;
    font-weight: 300;
    line-height: 1.2;
    word-spacing: 1rem;
  }
  .item-description {
  position: absolute;
  top: 50%;
  right: 0;
  width: 50%;
  padding-right: 4%;
  line-height: 1.8;
  }

}

.cover_1 a {
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}

.cover_1 a:hover {
  color: #fff;
  border-bottom: none;
}

.title-hr {
    text-transform: uppercase;
    line-height: 1.5;
    font-size: 20px;
    margin-bottom: 30px;
}
.hr-how {
//  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  border: 0;
  height: 1px;
  margin-bottom: 33px;
  margin-top: 33px;
  overflow: visible;
  text-align: center;
background: rgba(0,0,0,0.35) -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.35)), to(rgba(0,0,0,0.1)), color-stop(0.3, #fff)) 0 0 no-repeat;
   -webkit-background-size: 400px;
    //color: #673ab705;
    //-webkit-background-clip: text;
    -webkit-animation-name: Gradient;
    -webkit-animation-duration: 12s;
    -webkit-animation-iteration-count: infinite;
 

  
}
.hr-how:after {
  background: white;
  content: "";
  display: inline-block;
  font: "BodoniXT" !important;
  font-size: 0.9em;
  padding: 0 0.6em;
  position: relative;
  top: -0.7em;
}


.section-heading h2 {
  font-size: 3rem;
  font: "BodoniXT" !important;
  text-transform: uppercase;
}

@media (max-width: 991.98px) {
  .section-heading h2 {
    font-size: 1rem;
  }

.item-description {
  position: absolute;
  top: 5%;
  right: 0;
  width: 50%;
  padding-right: 4%;
  line-height: 1.8;
  }


}

.section-heading .sub-heading {
  font-size: 20px;
  font: "BodoniXT" !important;
   text-transform: uppercase;
}

.section-heading .small-sub-heading {
  font-size: 14px;
  color: #ff7a5c;
}

.pb-3 {
    padding-bottom: 1rem!important;
}


//fonte:https://codepen.io/RileyAdair/pen/ZvyYzr


//animação click
@keyframes tear-drop-click {
  10%, 30%, 50% {transform: translate3d(0%, 10%, 1px) scale(0.6);opacity:0}
  20%, 40% {transform: scale(0.8); top: 45%;opacity:0}
  60%, 80% {transform: scale(1); top: 50%;opacity:1}
  70% {transform: scale(1.2); top: 50%;opacity:0;}
  90% {transform: scale(1.1); top: 50%;opacity:1;}

}



//animação title fonte:https://codepen.io/P1N2O/pen/pyBNzX

@keyframes blinkingText{
    0% {
    background-position: 0% 50%;
    opacity:0;
    transform: translate3d(-100%, 0, 1px);

  }
  50% {
    opacity:1;
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
    transform: translate3d(0, 0, 1px);
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

//Animação para Imagens

$animationDuration: 30s;
$amount: 7; //quantity img
$particleRadius: 7vmin;

.vertical-part {
  //overflow: hidden;
  //display: inline-block;

}

.vertical-part b {
  display: inline-block;
  transform: translateY(100%);
}

.item-header .vertical-part b {
  transition: .5s;
}

.item-description .vertical-part b {
  transition: .21s;
}

.item.active .item-header .vertical-part b {
  transform: translateY(0);
}

.ribbon{
 position: absolute;
    display: block;
    margin: -10px;
    text-align: center;
    z-index: 107;
    top: 12px;
}
.text{
  display:inline-block;
  padding:0.5em 1em;
  min-width:14em;
  line-height:1.2em;
  background: #FFD72A;
  position:relative;
}
.ribbon:after,.ribbon:before,
.text:before,.text:after,
.bold:before{
  content:'';
  position:absolute;
  border-style:solid;
}
.ribbon:before{
  top:0.3em; left:0.2em;
  width:100%; height:100%;
  border:none;
  background:#EBECED;
  z-index:-2;
}
.text:before{
  bottom:100%; left:0;
  border-width: .5em .7em 0 0;
  border-color: transparent #FC9544 transparent transparent;
}
.text:after{
  top:100%; right:0;
  border-width: .5em 2em 0 0;
  border-color: #FC9544 transparent transparent transparent;
}
.ribbon:after, .bold:before{
  top:0.5em;
  right:-2em;
  border-width: 1.1em 1em 1.1em 3em;
  border-color: #FECC30 transparent #FECC30 #FECC30;
  z-index:-1;
}
.bold:before{
  border-color: #EBECED transparent #EBECED #EBECED;
  top:0.7em;
  right:-2.3em;
}

</style>
