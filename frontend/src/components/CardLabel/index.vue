<template>
<div>
<div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-route">
                        <svg-icon icon-class="route" class-name="card-panel-icon" />
                    </div>
                    <div class="media-body">
                        <h4>Coleta Agendada</h4>
                        <p>Consulte o dia para a sua região</p>
                    </div>
    </div>
</div>
</template>
<script>
export default {
  name: "cardLabel",
  props: {
    title: {
      type: String,
      default: 'BASIC'
    },
    subTitle: {
      type: String,
      default: 'Plano'
    },
    description: {
      type: String,
      default: '5% desconto'
    },
    icon: {
      type: String,
      default: 'benefits'
    },
    iconColor: {
      type: String,
      default: '#23bfff'
    },
    textColor:{
      type: String,
      default: '#000'
    },
    cardColor:{
      type: String,
      default: '#f8fdf8'
    },
    cardCircle:{
      type: String,
      default: '#9e9e9e'
    },
    cardCircleTwo:{
      type: String,
      default: '#eee'
    }


  },
  data() {
    return {
      formatIcon:{
        color: this.iconColor,
        float: 'left',
        fontSize: '48px'
      },
      formatText:{
        color: this.textColor
      },
      formatNumbers:{
        color: this.textColor,
        fontSize:'.9rem'
      },
      formatCard:{
        background: this.cardColor,
        boxShadow: `-2px 2px 0px 0px ${this.cardColor},-10px 10px 40px 0px #607d8b`,

      },
      formatCircle:{
        background: this.cardCircle,
        opacity: 0.3

      },
      formatCircleTwo:{
        background: this.cardCircleTwo,
        opacity: 0.3

      }

    }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  
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
    height: 24rem;
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


</style>