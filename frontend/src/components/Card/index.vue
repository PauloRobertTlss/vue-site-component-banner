<template>
<div>
<div class="card-panel feature-icon text-center">
                    <div class="card-panel-icon-wrapper icon-analysis" :style="iconAnimated">
                        <svg-icon :icon-class="icon" :style="formatIcon" />
                    </div>
                    <div class="media-body">
                        <h5>{{title}}</h5>
                        <p>{{description}}</p>
                        <div class="row">
                          <ul class="col s12 m12 l12 collection">
                            <li class="collection-item" :key="index" v-for="(item,index) in collection">{{item}}</li>
                          </ul>  
                        </div>
                    </div>
                </div>
</div>
</template>
<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'benefits'
    },
    iconColor: {
      type: String,
      default: '#23bfff'
    },
    collection: {
      type: Array,
      default: []
    },
    animation:{
        type:Boolean,
        default: false
    }
  },
  data() {
    return {
      formatIcon:{
        color: this.iconColor,
        float: 'left',
        fontSize: '48px'
      },
      iconAnimated:{
       animation: this.animation ? `yay 6s linear infinite` : `unset`
         
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .collection {
    border: none; 
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

@keyframes haha {
  25% {transform: rotate(-5deg);}
  75% {transform: rotate(5deg);}
}

</style>