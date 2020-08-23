<template>
<div>
<div class="bubble-emoji">
 <div class="emoji-svg emoji--yay">
      <svg-icon icon-class="laughing" class="emoji__face"/>
</div>
 <div class="emoji-svg emoji--haha-svg">
      <svg-icon icon-class="happy" class="emoji--haha-svg"/>
</div>
<div class="emoji-svg emoji--love">
      <svg-icon icon-class="in-love" class="emoji__heart"/>
</div>
<div class="emoji-svg">
      <svg-icon icon-class="like" class="emoji__heart"/>
</div>

<div class="emoji-svg emoji--yay">
      <svg-icon icon-class="laughing" class="emoji__face"/>
</div>
 <div class="emoji-svg emoji--haha-svg">
      <svg-icon icon-class="like" class="emoji--haha-svg"/>
</div>
<div class="emoji-svg emoji--love">
      <svg-icon icon-class="ok" class="emoji__heart"/>
</div>
<div class="emoji-svg">
      <svg-icon icon-class="cool" class="emoji__heart"/>
</div>

<div class="emoji-svg emoji--yay">
      <svg-icon icon-class="laughing" class="emoji__face"/>
</div>
 <div class="emoji-svg emoji--haha-svg">
      <svg-icon icon-class="ok" class="emoji--haha-svg"/>
</div>
<div class="emoji-svg emoji--love">
      <svg-icon icon-class="in-love" class="emoji__heart"/>
</div>
<div class="emoji-svg">
      <svg-icon icon-class="cool" class="emoji__heart"/>
</div>


</div>
</div>
</template>
<script>
export default {
  name: "emoji",
  data() {
    return {
        list: []
    }
  },

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.bubble-emoji {
  margin: 0 auto;
  transform-style: preserve-3d;
  transform-origin: center center;
  
  .emoji-svg{
  left: 50%;
  position: absolute;
  opacity: .7;
  animation: move 9s infinite;
    .emoji__heart{
      background: unset;
    }
  }
}

@for $i from 1 through 50 {
  .emoji-svg:nth-child(#{$i}){
     $size: random(90)+px;
     height: $size;
     width: $size;
     animation-delay: -$i * .6s;
     /*transform: translate3d( -(random(1000) * 1px),  (random(1000) * 1px), (random(2000) * 1px));*/
     transform: translate3d( -(random(300) * 1px),  (random(300) * 1px), (random(2000) * 1px));
  }
 
}


@keyframes move {

  0% {
  transform: translateY(-30rem);
  opacity: 0;
  }
  10%, 90% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  transform: translateY(-40rem);
  }

  /*100% {
    transform: translate3d(0, 0, -300px);
  }*/
}

.emoji-svg{
    margin: 3px 6px;
    height: 3rem;
    width: 3rem;
    svg{
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    font-size: 3rem;
  }
}

.emoji--yay {
  &:after {
    content: '';
    animation: yay-reverse 1s linear infinite;
  }
  .emoji__face {
    position: relative;
    animation: yay 1s linear infinite alternate;
  }
}

.emoji--love {
  .emoji__heart {
    animation: heart-beat 1s linear infinite alternate;
    }
}    



.emoji--haha-svg {
    
      position: relative;
      animation: haha 3s linear infinite;
    
  
}


@keyframes haha {
  25% {transform: rotate(-5deg);}
  75% {transform: rotate(5deg);}
}

</style>