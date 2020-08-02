<template>
<div>
    <div class="feature-page">
        <div class="banner-container">
            <div class="banner__container">
                <div class="fill banner__absolute-container" 
                  v-bind:style='bannerSettingStyle'
                ></div>
                <div class="shapes banner__absolute-container">
                    <div class="rect-2"></div>
                    <div class="half-circle-6"></div>
                    <div :style="halfCircle" class="half-circle-5"></div>
                    <div class="half-circle-4"></div>
                    <div :style="halfCircle" class="half-circle-3"></div>
                    <div class="rect-1"></div>
                    <div class="half-circle-2"></div>
                    <div class="half-circle-1"></div>
                </div>
                <div class="banner__clip"></div>
                <div class="item-background">
                    <img class="all-width-image" :src="backgroundImage" />
                </div>
            </div>
        </div>

        <div class="header-row">
            <div class="row">
                <div class="column utils--center-tablets">
                    <div class="row align-items-center justify-content-center flex-container">
                    <div class="col s12 m12 l12 text-center">
                        <h1 class="h1 title">{{title}}<br place="break" class="title-break" >{{subTitle}}</h1>
                        <hr class="hr-how" />
                    </div>
                    <div class="col s12 m2 l2">
                    </div>
                    <div class="col s12 m8 l8 text-right">
                        
                        <p class="p subtitle">{{description}}</p> 
                        
                    </div>
                    <div class="col s12 m l2">
                    </div>
                    <div class="col s12 text-right" v-bind:class="{'m6 l6': !c.row}" :key="index" v-for="(c,index) in checks">
                                <check :title="c.title" :icon="c.icon" :description="c.description"> </check>
                    </div>
                    </div>


                      <div class="row">
                            <div class="col s12 m3 l3" v-for="(c,index) in cards" :key="index">
                              <card :title="c.title" :icon="c.icon" :description="c.description" :icon-color="c.iconColor"
                                :collection="c.collection"
                              ></card>
                            </div>
                    </div>


                </div> <!--end utils-center-->


            </div> <!--end row-->
            

        </div>
    </div>
</div>

</template>
<script>
import Card from '../../components/Card';
import Check from '../../components/CheckLabel';

export default {
  name: "banner-container",
  components:{
    Card,Check
  },
  props:{
    title: {
      type: String,
      default: 'Titulo'
    },
    subTitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: 'detalhes'
    },
    cards: {
      type: Array,
      default: []
    },
    checks: {
      type: Array,
      default: []
    },
    fillColorOne:{
      type: String,
      default: '#23bfff'
    },
    fillColorTwo:{
      type: String,
      default: '#367edd'
    },
    bannerWidth:{
      type: String,
      default: '48%'
    },
    backgroundImage:{
         type: String,
        default: null
    }
  },
  data() {
    return {
      bannerSettingStyle:{
          background: `linear-gradient(170deg, ${this.fillColorOne} 10%, ${this.fillColorTwo} 19%)`,
          width:this.bannerWidth,
          opacity:'0.12'
        },
        halfCircle:{
            background: `linear-gradient(-45deg,${this.fillColorOne},${this.fillColorTwo})`
        }
      }
    },
  mounted() {
    
  },
  methods: {
   
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 
@media only screen and (min-width: 768px){
.feature-page .section {
    padding: 100px 0;
}
}
.feature-page .section--grey {
    background: #fafafa;
}

.feature-page .section {
    padding: 70px 0;
}

.banner-container {
    position: absolute;
    width: 100%;
    height: 5rem;
    
    &::selection {
        background: #4d70b0;
        color: #000;
    
    }

}

@media only screen and (max-width: 1024px) and (min-width: 768px){
.feature-page .account {
    background: linear-gradient(170deg,#23bfff 10%,#367edd);
}
}   
.feature-page .account {
    background: linear-gradient(175deg,#23bfff 10%,#367edd);
}

@media only screen and (min-width: 1025px){
.banner__container {
    width: 8845.71429px;
    height: 8845.71429px;
}
}
.banner__container {
    position: absolute;
    height: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 1628px;
    height: 1550px;
}
.fill{
 //   background: linear-gradient(170deg,#23bfff 10%,#367edd 19%);
}

.banner__absolute-container {
    height: 100%;
    width: 49%;
    position: absolute;
    &.one{
      width: 47%!important;  
    }
    &.two{
      width: 49%!important;  
    }
    &.tree{
      width: 51%!important;  
    }

}
@media only screen and (min-width: 1025px){
.banner__container .banner__clip {
    border-top: 1290px solid #0000;
    border-bottom: 7555.71429px solid #fff;
    border-left: 139980px solid #fff solid #fff;
}}

.banner__container .banner__clip {
    border-top: 75100px solid #0000;
    border-bottom: 431px solid #fff;
    border-left: 109980px solid #fff;
}
.banner__clip {
    position: absolute;
}

.half-circle-1 {
    background: linear-gradient(30deg,#23bfff,#367edd);
    opacity: .23;
    -webkit-box-shadow: #1550b0 0 50px 300px;
    box-shadow: 0 50px 300px #1550b0;
    left: 49.92641%;
    top: -1.77984%;
    width: 3.40142%;
    height: 6.80284%;
}
.half-circle-5 {
    background: linear-gradient(30deg,#367edd,#23bfff);
    opacity: .32;
    -webkit-box-shadow: #2365cf -35.35px 35.35px 300px;
    box-shadow: -35.35px 35.35px 300px #2365cf;
    position: absolute;
    left: 89%;
    top: 1%;
    width: 30vh;
    height: 30vh;
    /* border-radius: 25rem; */
    //-webkit-transform-origin: left top;
    //transform-origin: left top;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.half-circle-3 {
    background: linear-gradient(-45deg,#3fec9e,#1e66dc);
    opacity: .23;
    -webkit-box-shadow: #2065da 0 50px 300px;
    box-shadow: 0 50px 300px #2065da;
    position: absolute;
    left: 140%;
    top: 1%;
    width: 36vh;
    height: 36vh;
    //border-radius: 0 9999px 9999px 0;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scaleX(-1) rotate(75deg);
    transform: scaleX(-1) rotate(75deg);;
}

@media only screen and (min-width: 1025px){
.header-row {
    position: absolute;
    margin-top: 150px;
  }
  .banner__absolute-container{
    width:60%;
}
}
.row{
    &:after {
        clear: both;
    }
    .row:after, .row:before {
    content: "";
    display: table;
}

    &:before {
    content: "";
    display: table;
}
}
.header-row{
    position: static;
    width: 100%;
    margin-top: 90px;
    &:selection{
    background: #4d70b0;
    color: #223843a8;
    }
}
.title{
    color: #223843a8;
}

@media only screen and (min-width: 768px){
.h1 {
    font-size: 2.125rem;
    line-height: 3.8125rem;
 }
}

@media only screen and (min-width: 120px){
    .h1 {
        font-size: 2.125rem;
        line-height: 3.8125rem;
    }
    .here-whatsapp figure.horizontal {
        font-size: 1.2rem!important;
    }
}

.h1 {
    font-size: 2.125rem;
    line-height: 3.8125rem;
}


.feature-page .column {
    padding: 0 30px;
}
@media only screen and (min-width: 768px){
.banner__absolute-container{
    width:60%;
}
.column, .columns {
    padding: 0 30px;
}
}
.column, .columns {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    font-size: 16px;
    font-size: 1rem;
    margin: 0;
    vertical-align: top;
    width: 100%;
    position: relative;
    padding: 0 20px;
}

.feature-page .header-section{
    max-width: 60%;
}
@media only screen and (min-width: 768px){
.feature-page section {
    max-width: 80%;
}}

@media only screen and (min-width: 1025px){
.feature-page .account{
    background-image: url(/_nuxt/img/circles-top.c05d74d.svg),url(/_nuxt/img/circles-bottom.7705249.svg),linear-gradient(140deg,#23bfff 10%,#367edd);
    background-position: 0 0,100% 100%,50%;
    background-repeat: no-repeat;
}
}
.feature-page .account {
    background: linear-gradient(175deg,#23bfff 10%,#367edd);
}

.play-button{
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border: none;
    outline: none;
    background-color: #00000080;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJod…QtMi4yMzQuMDY1IDAgLjEyOS4wMDMuMTkyLjAwN3oiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 25%;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    will-change: opacity;
    cursor: pointer;
}

.all-width-image {
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
}
.item-background {
   width: 36%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 10;
    position: absolute;
    right: 0;
    top: 44%;
    img{
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    }
}
</style>