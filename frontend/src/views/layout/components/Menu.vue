<template>
<div>
        <ul id="slide-out" class="side-nav left">
                              <li><router-link :to="{ path: '/' }">HOME</router-link></li>
                              <li><router-link :to="{ path: '/services' }">SERVIÇOS</router-link></li>
                              <li><router-link :to="{ path: '/about' }">QUEM SOMOS</router-link></li>
                              <li class="pull-l2"><a itemprop="url" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp"><svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text" />11 96147-1070</a></li>
                            <!--<li><router-link :to="{ path: '/contacts' }">CONTATOS</router-link></li>-->
                              
        </ul>
</div>
</template>
<script>
    export default {
        name: 'MenuOptions',
        data: () => ({
            
        }),

        mounted() {
            //utilizado no Hamburgue Mobile
            console.log('route Menu layout', this.$route.name);
            $('#nav-mobile').sideNav();
        }
    }
</script>
<style></style>