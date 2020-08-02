<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App',
    metaInfo: {
      title: 'FLE REFRIGERAÇÃO - Reforma e Instalação de refrigeração HR Alicates Facas Fresa Broca',
      titleTemplate: '%s Home',
  		meta: [
      {name: 'description', content: 'onde deixar seu equipamento -10º? FLE refrigeração trás as melhores marcas e alta qualidade em seus serviços.'},
      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Home - Quem somos?'},
      {itemprop: 'description', content: 'onde deixar seu equipamento -10º? FLE refrigeração trás as melhores marcas e alta qualidade em seus serviços.'},
      {itemprop: 'image', content: 'https://www.flerefrigeracao.com.br/img/afiação-de-alicates.jpg'}

  		]	,
  		links: [
    	{rel: 'canonical', href: 'https://flerefrigeracao.com.br/#/'}
  		]
  	}
  }
</script>
