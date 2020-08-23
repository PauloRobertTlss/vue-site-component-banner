<template>
<div>
    <div class="home-bubbles white">
        <div class="loopify">
            <div class="loopify__wrapper loopify__wrapper--horizontal" style="widht:1500px">
                <div class="loopify__content">
                    <div class="home-bubbles-group home-bubbles-group--couriers">
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                    </div>
                </div>
                <div class="loopify__content">
                    <div class="home-bubbles-group home-bubbles-group--couriers">

                        <div class="home-bubbles__icon">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                        <div class="home-bubbles__icon ">
                            <svg-icon icon-class="snowflake" class-name="card-panel-icon" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  components: {

  },
  methods: {
  
  },
  mounted(){
      
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.home-bubbles__wrapper{
    padding-top: 50px
}

@media only screen and (min-width:768px) {
    .home-bubbles__wrapper {
        padding-top: 100px
    }
}

@media only screen and (min-width:1025px) {
    .home-bubbles__wrapper{
        padding-top: 524px
    }
}

.bubbles__button {
    border-radius: 50px;
    padding: 0 15px;
    margin: 0 5px;
    background: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: dodgerblue;
    font-weight: 400;
    line-height: 27px;
    height: 27px;
    text-transform: none
}

@media only screen and (min-width:768px) {
    .bubbles__button{
        padding: 0 20px;
        line-height: 45px;
        height: 45px;
        font-size: 20px
    }
}

@media only screen and (min-width:1025px) {
    .bubbles__button {
        color: #fff
    }
}

.bubbles__button.button:after {
    content: none
}

.bubbles__button:active,
.bubbles__button:focus {
    -webkit-box-shadow: none;
    box-shadow: none
}

.bubbles__button:active:after,
.bubbles__button:focus:after {
    content: none
}

.bubbles__button--active {
    background: rgba(28, 87, 182, .65);
    color: #fff
}

.home-bubbles {
    width: 100%;
    height: 130px;
    margin-top: 40px;
    position: inherit;
    overflow: hidden;
}

@media only screen and (min-width:768px) {
    .home-bubbles {
        height: 150px
    }
}

@media only screen and (min-width:1025px) {
    .home-bubbles {
        height: 200px
    }
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
    margin: 10px;
    color: #03a9f4
}

.home-bubbles__icon svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    font-size:3rem;
    color: #03a9f4
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
        height: 90px;
        width: 90px
    }
}


.loopify{
    /*position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden*/
}

.loopify__wrapper {
    will-change: transform;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    display: block
}

.loopify__wrapper--horizontal{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
}

.loopify__wrapper--horizontal.loopify__content {
    display: inline-block
}
.loopify{
  --amount: 10;

}

$animationDuration: 60s;
$amount: 2;
$particleRadius: 4vmin;
.loopify {
 
  .loopify__wrapper--horizontal{
      .loopify__content{
        
      }
  -webkit-animation:slide 60s infinite;
  -moz-animation:slide 60s infinite;
  animation: slide 30s linear infinite;
  animation-timing-function: cubic-bezier(0.4, 0, 1, 0.8);
  animation-iteration-count: infinite;
    
  
  }
    
}
//fonte: https://codepen.io/Mamboleoo/pen/yjZrOB?page=4

@keyframes move {
    
}


@-webkit-keyframes slide{
    0%,100% {
        margin-left:-2000px;
    }

    12% {
        margin-left:0%;
    }

    24% {
        margin-left:-100%;
    }

    36% {
        margin-left:-100%;
    }

    48% {
        margin-left:-200%;
    }

    60% {
        margin-left:-200%;
    }

    72% {
        margin-left:-300%;
    }

    84% {
        margin-left:-300%;  
    }
}
@-moz-keyframes slide{
    0%,100% {
        margin-left:0%;
    }

    12% {
        margin-left:0%;
    }

    24% {
        margin-left:-100%;
    }

    36% {
        margin-left:-100%;
    }

    48% {
        margin-left:-200%;
    }

    60% {
        margin-left:-200%;
    }

    72% {
        margin-left:-300%;
    }

    84% {
        margin-left:-300%;  
    }
}
@keyframes slide{
  0%,100% {
    visibility: visible;
    -webkit-transform: translate3d(-200%, 0, 0);
    transform: translate3d(-200%, 0, 0);
  
  }
  
  60% {
        -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

</style>
