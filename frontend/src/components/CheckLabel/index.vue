<template>
<div>
    <div class="valign-wrapper">
                <div class="home-bubbles-group home-bubbles-group--couriers">
                 <div class="home-bubbles__icon ">
                   <svg-icon :icon-class="icon" class-name="card-panel-icon" />
                  </div>
                </div>
               <h1 class="indigo-text text-darken-4">{{title}}</br><small>{{description}}</small></h1>
        </div>
    </div>
</template>
<script>
export default {
  name: "checkLabel",
  props: {
    row: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'BASIC'
    },
    description: {
      type: String,
      default: '5% desconto'
    },
    icon: {
      type: String,
      default: 'performance'
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
h1 {
    font-size: 1.125rem;
    line-height: 1.8125rem;
}
.home-bubbles-group {
    display: inline-block;
    white-space: nowrap;
}

.home-bubbles__icon {
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 200px;
    position: relative;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, .19);
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, .19);
    display: inline-block;
    margin: 10px
}

.home-bubbles__icon svg {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    font-size:3rem;
}

@media only screen and (min-width:768px) {
    .home-bubbles__icon {
        margin: 10px 25px;
        height: 60px;
        width: 60px
    }
}

@media only screen and (min-width:1025px) {
    .home-bubbles__icon{
        margin: 10px 40px;
        height: 60px;
        width: 60px
    }
}


  p {
  text-align: center;
  margin: 20px 0 60px;
  font-size: 1.25em;
  &.success {
    color: #73AF55;
  }
  &.error {
    color: #D06079;
  }
}


</style>