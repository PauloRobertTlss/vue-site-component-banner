<template>
    <div>
    <nav id="main-nav">
            <div class="nav-wrapper container-fluid white lighten-3">
              <div class="site-header">
                <div class="row align-items-center">
                  <div class="col s1 m1">
             
                  </div>
                    <div class="col s2 md-6 text-center site-logo-wrap">
                      <router-link :to="{ path: '/' }" class="site-logo">A</router-link>
                    </div>
                    <div class="col s8 md-3 text-right menu-burger-wrap">
                      <ul class="right hide-on-med-and-up">
                            <li>
                                <hamburger id="nav-mobile" data-activates="slide-out" class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
                            </li>
                        </ul>
                        <ul class="left hide-on-med-and-down" v-bind:class="{'black-menu' : true}">
                              <li><router-link :to="{ path: '/' }">HOME</router-link></li>
                              <li><router-link :to="{ path: '/services' }">SERVIÇOS</router-link></li>
                              <li><router-link :to="{ path: '/about' }">QUEM SOMOS</router-link></li>
                                <li class="whats-app"><a itemprop="url" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp"><svg-icon icon-class="whatsapp" class-name="card-panel-icon" />11 96147-1070</a></li>
                                <li class="e-mail"><a href="mailto:fle.refrigeracao@hotmail.com" itemprop="email">
                                    <svg-icon icon-class="email" class-name="card-panel-icon "/>fle.refrigeracao@hotmail.com
                                </a></li>
                            <!--<li><router-link :to="{ path: '/contacts' }">CONTATOS</router-link></li>-->
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </nav>

    <div class="main-container">
    <menu-options ></menu-options>
    <app-main></app-main>

    </div>
    </div>
  
</template>
<script>
import AOS from 'aos';
import { AppMain,MenuOptions} from './components'
import Hamburger from '@/components/Hamburger'
import {
    jarallax,
    jarallaxElement,
    jarallaxVideo
} from 'jarallax';

export default {
  data: () => ({
      sidebar:{opened:false}
  }),
  name: 'layout',
  components: {
    'hamburger':Hamburger,
    'app-main':AppMain,
    'menu-options':MenuOptions
  },
  computed: {
    route() {
        return this.$route
    }
  },
  methods: {
    toggleSideBar() {
      this.sidebar.opened = true;
      console.log('click hamburgue')
    
    },
  },
  mounted(){


      //utilizado no Hamburgue Mobile
      console.log('route Loyou', this.$route.name);

      jarallaxVideo();
      jarallaxElement();
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
      });

      AOS.init({
        duration: 600
      });

      $(window).scroll(function() {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.site-header');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');  
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake'); 
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }

  }); 

  // navigation
  var OnePageNav = function() {
    var navToggler = $('.js-site-nav-toggle');
    $(".smoothscroll[href^='#'], #ftco-navbar ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
        
      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    });
    $("#ftco-navbar ul li a[href^='#']").on('click', function(e){
      if ( navToggler.is(':visible') ) {
        navToggler.click();
      }
    });

    // $('body').on('activate.bs.scrollspy', function () {
    //   console.log('nice');
    // })
  };
  OnePageNav();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.jarallax {
    position: relative;
    z-index: 0;
}
.jarallax > .jarallax-img {
    position: absolute;
    object-fit: cover;
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    font-family: 'object-fit: cover;';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#sidenav-overlay{
border-right: 1px;
 background-color: #0000000f;
}
nav {
  color: #000!important;
  height: 0rem!important;
}

.black-menu{
    li {
        a {
            color: #000 !important;
        }
        &.whats-app {
            svg {
                color: #2ab27b;
            }
        }
        &.e-mail {
            svg {
                color: #03a9f4;
            }
        }
    }
}
.brand-logo{
  color: red;  
}
.site-header {
  padding: 3em 0;
  position: absolute;
  top: 0;
  z-index: 900;
  width: 100%;
}

.site-header .site-logo {
  line-height: 0;
  padding: 2px 10px;
  border: 2px solid #e9d494;
  color: #e9d494 !important;
  font-size: 30px;
  font-weight: bold;
}

.site-header .social li {
  display: inline-block;
}

.site-header .social li a {
  color: #000;
  padding: 0 10px;
}

.site-header .heading {
  color: #03a9f4;
}

.site-header.scrolled {
  position: fixed;
  padding: 1em 30px;
  top: 0;
  background: #fff;
  -webkit-transition: .0s all ease;
  -o-transition: .0s all ease;
  transition: .0s all ease;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);

  ul a {
    color: #000!important;
  }
}

.site-header.scrolled .social {
  margin-top: 10px;
}

.site-header.scrolled .social li a {
  color: #000!important;
}

.site-header.scrolled .site-logo {
  line-height: 1.5;
  display: inline-block;
  position: relative;
  padding: 2px 10px;
  border: 2px solid #000;
  color: #fff;
  background: #000;
  font-size: 30px;
}

.site-header.scrolled .site-nav-toggle {
  top: -5px !important;
}

.site-header.awake {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
}

.site-header.sleep {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}

 

</style>
