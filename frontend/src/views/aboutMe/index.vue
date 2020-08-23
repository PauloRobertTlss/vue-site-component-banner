<template>
    <div>

        <div class="feature-page">
            <banner :key="b.id" v-for="b in banners"
                    :title="b.title"
                    :description="b.description"
                    :cards="b.cards"
                    :fill-color-one="b.fillColorOne"
                    :fill-color-two="b.fillColorTwo"
                    :banner-width="b.bannerWidth"
                    :checks="b.checks"
            >
            </banner>

            <div class="header-row container">
                <div class="row">

                    <div class="col s12 m4 l4" :key="index" v-for="(t,index) in team">
                        <card-team :title="t.title" :sub-title="t.subTitle" :icon="t.icon"
                                   :description="t.description"></card-team>
                    </div>
                </div>
            </div>
            <slide-logos></slide-logos>
            <footer-custom></footer-custom>
        </div>
    </div>
</template>

<script>
    import SlideLogos from '../slideLogos';
    import Banner from '@/components/BannerContainer';
    import CardTeam from '@/components/CardTeam';
    import Emoji from '@/components/Emoji';
    import FooterCustom from '@/components/Footer/index';

    export default {
        name: 'abouteMe',
        data() {
            return {
                banners: [{
                    id: 9999,
                    fillColorOne: '#23bfff',
                    fillColorTwo: '#367edd',
                    bannerWidth: '48%',
                    title: 'SOBRE NÓS',
                    description: `Nós realmente apreciamos sua chegada na FLE REFRIGERAÇÃO! Nós valorizamos o seu negócio. Se esta é sua primeira visita, estamos ansiosos para estabelecer um relacionamento duradouro como sua fonte de parada única para afiação de ferramentas, equipamentos e acessórios.
         A FLE REFRIGERAÇÃO pertence e é operada pela família desde sua criação.`,
                    checks: [
                        {
                            icon: 'briefcase',
                            title: 'Já contratou antes',
                            description: 'gostaríamos de agradecer mais uma vez pelo seu patrocínio e preferência.',
                            row: true
                        },
                        {
                            icon: 'email',
                            title: 'Não hesite em enviar um e-mail ou ligar',
                            description: 'Antes, durante e depois da venda, estamos aqui para responder a todas e quaisquer perguntas.',
                            row: true
                        },
                        {
                            icon: 'like',
                            title: 'Nossos Clientes',
                            description: 'Um excelente e inabalável suporte ao cliente.',
                            row: true
                        },
                        {
                            icon: 'search-engine',
                            title: 'Fique de olho no nosso site',
                            description: 'Para obter as ferramentas mais recentes e promoções.',
                            row: true
                        }
                    ],
                    cards: []
                }],
                team: [
                    {
                        title: 'Luciano Silva',
                        subTitle: 'Mecânica e projetos',
                        icon: 'https://picpaymagebanks.s3.amazonaws.com/luciano_profile.jpeg',
                        description: 'Os muitos anos de habilidades e aptidão técnica de Luciano representa seu longo histórico de sucessos, levando as equipes e operações a gerar retornos sólidos e atingir metas e prazos. Ele é responsável pelo crescimento e proteção dos negócios existentes na FLE REFRIGERAÇÃO oferecendo excelencia a cada novo negócio.'
                    },
                    {
                        title: 'Felipe Araujo',
                        subTitle: 'Eletrônica e projetos',
                        icon: 'https://picpaymagebanks.s3.amazonaws.com/filipe_profile.jpeg',
                        description: 'Ele projetará, desenvolverá e testará todos os componentes e dispositivos do seu sistemas ou equipamentos. Projetos são seu diferencial e sempre buscando entender a demanda e qual problema nossos clientes realmente precisam resolver.'
                    },
                    {
                        title: 'Evely Araujo',
                        subTitle: 'Marketing e Qualidade',
                        icon: 'https://picpaymagebanks.s3.amazonaws.com/evely_profile.jpeg',
                        description: 'Ela estava ativamente engajada na qualidade e entrega de nossos serviços, é responsável por um portfólio de verticais importantes, incluindo o atendimento, marketing, suporte aos clientes. Outras funções na FLE REFRIGERAÇÃO incluem o planejamento estratégico e crescimento digital.'
                    },
                    {
                        title: 'Paulo Robert ',
                        subTitle: 'Developer Web',
                        icon: 'https://picpaymagebanks.s3.amazonaws.com/develop_pool_gray.jpeg',
                        description: 'Entusiasta da tecnologia, está no time para manter nossos canais de divulgação sempre atualizados e oferecer uma boa experiência aos nossos clientes.'
                    }
                ]
            }
        },
        components: {
            SlideLogos, Banner, Emoji, CardTeam, FooterCustom
        }

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .row {
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

    .header-row {
        position: relative;
        width: 100%;
        margin-top: 90px;
    }

    .site-header {
        ul a {
            color: #000 !important;
        }
    }


</style>
