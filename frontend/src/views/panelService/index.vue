<template>
<div class="section white services-section" data-aos="fade-up">
    <div class="container">
        <div class="row section-heading justify-content-center mb-5">

        </div>
        <div class="row">
            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-calendar">
                        <svg-icon icon-class="stopclock" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Prazo em 1ª lugar</h4>
                        <p>Pensando no seu alto volume de atendimento. Temos uma cadeia de fornedores sempre atentos.</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-analysis">
                        <svg-icon icon-class="benefits" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Beneficios</h4>
                        <p>A preventiva programada pode revelar possíveis problemas, não fique na mão, economize dinheiro e prolonge a vida útil do seu equipamento.</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-route">
                        <svg-icon icon-class="route" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Próximo de você</h4>
                        <p>Próximo CEAGESP - 10 MINUTOS</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-ecology">
                        <svg-icon icon-class="ecology" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Ecológico</h4>
                        <p>Prolongue ao máximo a vida útil de seus equipamentos e ferramentas, não desperdice. Isso significa menos impacto ambiental e mais saúde à todos.</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-loyalty">
                        <svg-icon icon-class="loyalty" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Clientes</h4>
                        <p>Nosso empenho é garanti a melhor experiência aos nossos clientes.</p>
                    </div>
                </div>
            </div>

            <div class="col s12 m4 l4" data-aos="fade-up">
                <div class="card-panel plans feature-icon text-center">
                    <div class="card-panel-icon-wrapper plans icon-value">
                        <svg-icon icon-class="value" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body-value">
                        <h4>Plano Fidelidade </h4>
                        <p>Seja nosso novo parceiro e ganhe descontos em preventivas.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>
</div>

</template>

<script>

export default {
  components: {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  

@media (min-width: 992px) {
  .media figure.horizontal {
    width: 150px;
  }
}

.media h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.media .post-meta {
  font-size: 9px;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.media > a {
  width: 40%;
}

@media (max-width: 767.98px) {
  .media > a {
    width: 100%;
    margin-bottom: 30px;
  }
}

.media.media-bg-white {
  -webkit-box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
}

.media.media-bg-white svg-icon {
  margin-bottom: 0;
}

.media.media-bg-white .media-body {
  padding: 20px;
  background: #fff;
}

.feature-icon svg {
    /*text-align: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    margin-bottom: 30px;*/
}

  .card-panel {
    height: 20rem;
    cursor: pointer;
    //font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
        .media-body-value{
            color: #ff9800a1;
            transition: 1s;
        }
        .media-body{
            color: #36a3f7;
            transition: 1s;
        }  
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         //background: #40c9c6;
      }
      .icon-analysis{
        color: #36a3f7;
      }
      .icon-ecology {
        color: #36a3f7;
      }
      .icon-calendar {
        color: #36a3f7;
      }
      .icon-route {
        color: #36a3f7
      }
      .icon-loyalty{
        color: #36a3f7
      }
      .icon-value{
         backface-visibility: visible !important;

      -webkit-animation: flipInY 0.9s both;
      -o-animation: flipInY 0.9s both;
          animation: flipInY 0.9s both;
       color: #ff9800a1
      }

    }
    .icon-calendar {
      color: #40c9c6;
    }
    .icon-route {
      color: #40c9c6;
    }
    .icon-ecology {
      color: #40c9c6;
    }
    .icon-analysis{
        color: #40c9c6;
    }
    .icon-loyalty{
        color: #40c9c6;
    }
    .icon-value {
      color: #ff9800a1
    }
    .card-panel-icon-wrapper {
      text-align: center;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      margin-bottom: 30px;
      padding: 16px;
      transition: all 0.38s ease-out;
      svg{
        height: 100px;
        width: 100px;
        display: inline-block;
        position: relative;
    
      }
      
    }
    .icon-message {
      color: #f4516c;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }

  //efects hove
  //fonte: https://codepen.io/nxworld/pen/ZYNOBZ

  .card-panel.plans::before {

  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
  background: -webkit-linear-gradient(left, rgba(75,35,59,0.12) .3%, rgba(75,55,55,.3) 100%)!important;
  background: linear-gradient(to right, rgba(255,235,59,0.12) .3%, rgba(255,255,255,.3) 100%)!important;

}
  .card-panel::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
      background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
  

}
.card-panel:hover::before {
  -webkit-animation: shine 1s;
  animation: shine 1s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}


@keyframes flipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transition-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    -webkit-transform: perspective(400px);
  }
}


@-webkit-keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  100% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}


</style>
