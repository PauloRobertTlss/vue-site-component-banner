<template>
<div>
<div class="card-container">
  <div class="card" :style="formatCard" >
    <h1 :style="formatText"><svg-icon :icon-class="icon" :style="formatIcon" /></i>{{title}}</h1>
    <h1 :style="formatNumbers">2334 5467 8756 0932 1284</h1>
    <h3 :style="formatText">{{subTitle}}</h3>
    <h3 :style="formatText">{{description}}</h3>
    <div class="circle-card" :style="formatCircle"></div>
    <div class="circle-card" :style="formatCircleTwo"></div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: "cardPlan",
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
  
.card-container {
  position: inherit;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 12rem;
  height: 12rem;
  .card {
    position: inherit;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 200px;
    padding: 20px;
    overflow: hidden;
    /*background: #252525;*/
    border-radius: 10px;
    /*box-shadow: -2px 2px 0px 0px #202020,-10px 10px 40px 0px rgba(0, 0, 0, 0.3);*/
    transform: translate(0px, 0px) rotateX(30deg) rotateZ(-20deg);
    z-index: 2;
    transition: all 1s;
    &:hover {
      transform: translate(0px, -20px) rotateX(10deg) rotateZ(-20deg);;
      box-shadow: -2px 1px 0px 0px #202020,
                  -40px 40px 40px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    h1 {
      //color: crimson;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
      &:nth-of-type(2) {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }
    }
    h3 {
      color: crimson;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      &:nth-of-type(2) {
        font-size: 14px;
        font-weight: 400;
      }
    }
    i {
      margin-right: 5px;
      color: crimson;
    }
    .circle-card {
      position: absolute;
      margin: auto;
      top: 10%;
      bottom: 0;
      right: -50%;
      width: 300px;
      height: 300px;
      /*border-radius: 50%;*/
      transform: rotate(-45deg);
      /*background: #202020;*/
      z-index: -2;
      &:nth-of-type(2) {
        width: 100px;
        height: 100px;
        top: 90%;
        right: -20%;
        z-index: -1;
        //background: crimson;
      }
    }
  }
}

@media only screen and (max-width: 780px) {

  .card-container {
    .card {
      width: 250px;
      height: 150px;
      animation: hvr 5s infinite ease-in-out;
      transition: none;
      h1 {
        font-size: 18px;
        &:nth-of-type(2) {
          font-size: 14px;
        }
      }
      h3 {
        font-size: 12px;
        &:nth-of-type(2) {
          font-size: 10px;
        }
      }
      .circle {
        right: -70%;
      }
    }
  }

  @keyframes hvr {
    0% {
      box-shadow: -2px 2px 0px 0px #202020,
                  -10px 10px 40px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px, 0px) rotateX(30deg) rotateZ(-20deg);
    }
    50% {
      transform: translate(0px, -20px) rotateX(30deg) rotateZ(-20deg);;
      box-shadow: -2px 1px 0px 0px #202020,
                  -40px 40px 40px 0 rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: -2px 2px 0px 0px #202020,
                  -10px 10px 40px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px, 0px) rotateX(30deg) rotateZ(-20deg);
    }
  }
}



</style>