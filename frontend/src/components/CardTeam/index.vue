<template>
<div>

  <div class="ftco-38 text-center">
    <div class="ftco-38-img">
        <div class="ftco-38-header">
            <img :src="icon" alt="" class="circle esponsive-img">
            <h3 class="ftco-38-heading">{{title}}</h3>
            <p class="ftco-38-subheading">{{subTitle}}</p>
        </div>
        <div class="ftco-38-body text-left">
            <p>{{description}}</p>
            <p>
                <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
                <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
                <a href="#" class="p-2"><span class="fa fa-instagram"></span></a>
            </p>
        </div>
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
      default: 'BASIC'
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
  
.ftco-38 .ftco-38-header .ftco-38-heading {
  /*display: inline-block;*/
  font-size: 30px;
  color: #000;
  margin: 0;
  font-weight: 300;
  margin-bottom: 10px;
}

@media (max-width: 991.98px) {
  .ftco-38 .ftco-38-header .ftco-38-heading {
    font-size: 24px;
  }
}

.ftco-38 .ftco-38-header .ftco-38-subheading {
  color: #b3b3b3;
  margin: 0 0 20px 0;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media (max-width: 991.98px) {
  .ftco-38 .ftco-38-header .ftco-38-subheading {
    font-size: 18px;
  }
}

.ftco-38 .ftco-38-header img {
  width: 90px;
  border-radius: 50%;
  margin-bottom: 40px;
}

img {
    vertical-align: middle;
    border-style: none;
    &:before{
    z-index: 1;
    background: #eee;
    content: "";
    transform: rotate(-5deg) translateX(-50%);
    width: 120%;
    position: absolute;
    bottom: 0;
    height: 90px;
    left: 50%;
    }
}

</style>