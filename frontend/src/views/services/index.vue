<template>
    <div class="page-container">
        <banner :key="b.id" v-for="b in banners"
                :title="b.title"
                :description="b.description"
                :cards="b.cards"
                :checks="b.checks"
                :fill-color-one="b.fillColorOne"
                :fill-color-two="b.fillColorTwo"
                :banner-width="b.bannerWidth"
                :background-image="b.backgroundImage"
        >
        </banner>

        <div class="row" >
            <div class="col s12 m4 l4" v-for="(c,index) in cardPlans" :key="index">
                <card-plan :title="c.title"
                           :sub-title="c.subTitle"
                           :description="c.description"
                           :icon="c.icon"
                           :text-color="c.textColor"
                           :icon-color="c.iconColor"
                           :card-color="c.cardColor"
                           :card-circle="c.cardCircle"
                           :card-circle-two="c.cardCircleTwo">
                </card-plan>
            </div>
            <div class="col s12 m4 l4 right">

            </div>
        </div>

        <banner :key="b.id" v-for="b in bannersPlan"
                :title="b.title"
                :description="b.description"
                :cards="b.cards"
                :fill-color-one="b.fillColorOne"
                :fill-color-two="b.fillColorTwo"
                :banner-width="b.bannerWidth"
                :checks="b.checks"
        >
        </banner>


        <banner :key="b.id" v-for="b in bannersSale"
                :title="b.title"
                :description="b.description"
                :cards="b.cards"
                :fill-color-one="b.fillColorOne"
                :fill-color-two="b.fillColorTwo"
                :banner-width="b.bannerWidth"
                :checks="b.checks"
        >
        </banner>

        <div class="container">
            <div class="row align-items-center justify-content-center text-center flex-container">
                <div class="col s12 m12 l12 mb-5" data-aos="fade-up">
                    <div class="heading mb-5 center-align">
                        <span>F</span>
                        <span>L</span>
                        <span>E</span>
                        <span>R</span>
                        <span>E</span>
                        <span>F</span>
                        <span>R</span>
                        <span>I</span>
                        <span>G</span>
                        <span>E</span>
                        <span>R</span>
                        <span>A</span>
                        <span>Ç</span>
                        <span>Ã</span>
                        <span>O</span>
                        <card-cup :title="cardCup.title" :icon="cardCup.icon" :description="cardCup.description" :icon-color="cardCup.iconColor"
                                  :collection="cardCup.collection" :animation="true"
                        ></card-cup>
                    </div>


                    <a class="here-whatsapp center-align green-text text-lighten-2" itemprop="url" rel="noopener" href="https://api.whatsapp.com/send?phone=5511961471070" target="_blank" title="continue no WhatsApp">CHAMAR NO WHATSAPP<svg-icon icon-class="whatsapp" class-name="card-panel-icon green-text" /></a>

                    <hr class="hr-how" />
                    <emoji class="heading mb-5 center-align"></emoji>
                </div>
            </div>
        </div>  <!--end container-->


        <slide-logos></slide-logos>

    </div>
</template>

<script>
    import SlideLogos from '../slideLogos';
    import Banner from '../../components/BannerContainer';
    import CardPlan from '../../components/CardPlan';
    import CardCup from '../../components/Card';
    import Emoji from '../../components/Emoji';

    export default {
        name: 'services',
        data(){
            return {
                cardCup:
                    {title:'Saia na frente',
                        icon:'cup',
                        description:'',
                        collection:[
                            'Equipe Especializada',
                            'Consultor Online'
                        ]
                },
                bannersSale:[
                    {
                        id:88,
                        fillColorOne:'#23bfff',
                        fillColorTwo:'#367edd',
                        bannerWidth:'48%',
                        title:'SEU ORÇAMENTO',
                        description:'.',
                        backgroundImage:null,
                        checks:[],
                        cards:[
                            {title:'Revisão no local',icon:'car-check',description:'',
                                collection:['Traga seu veículo','checklist de reparos']},
                            {title:'Nosso Orçamento',icon:'budget',description:'',
                                collection:['Checklist de peças','Marcas de Ferramenta','Urgência na Entrega']},
                            {title:'Fornecedores',icon:'route',description:'',
                                collection:['Melhores marcas','Fornecedores sem frete']
                            },
                            {title:'Desconto Parceiros',icon:'descendant-graphic',description:'',
                                collection:['Quantidade (%)','Prazo (%)','Complexidade (%)']
                            },
                            {title:'Novo card',
                                icon:'money',description:'',
                                collection:[
                                    'Quantidade (%)'

                                ]
                            }

                        ]
                    }
                ],
                bannersPlan:[

                ],
                banners: [{
                    id:1,
                    fillColorOne:'#23bfff',
                    fillColorTwo:'#367edd',
                    bannerWidth:'48%',
                    title:'PONTO DE PARADA EM SERVIÇOS DE REFRIGERAÇÃO',
                    description:'',
                    backgroundImage:'https://picpaymagebanks.s3.amazonaws.com/vista-lateral-frontal.jpg',
                    checks:[
                        {icon:'performance',title:'Performance',description:'Mantenha o pleno potência do equipamento.'},
                        {icon:'calendar',title:'Manutenção e programada',description:'Preventiva regularmente pode revelar possíveis problemas.'},
                        {icon:'excellence',title:'Melhores marcas e equipamentos',description:'Especilistas no seu equipamento.'},
                        {icon:'benefits',title:'Economizar dinheiro',description:'Prolongando a vida útil do equipamento.'},
                        {icon:'umbrella',title:'Segurança',description:'Precisão, rode sem preocupações.'},
                        {icon:'startup',title:'Prazos e Entregas',description:'Contruir um relacionamento com seus clientes para que eles se tornem clientes fiéis.'}
                    ],
                    cards:[
                        // {title:'Pés e Mãos',icon:'nail-file',description:'',
                        //   collection:['Manicure','Pedicure','Podologa']},
                    ]
                }
                ],
                cardPlans:[
                    // {title:'Startup',subTitle:'02 Pacotes',description:'10% DESCONTO',icon:'benefits',textColor:'#000',iconColor:'#23bfff',cardColor:'#fff',cardCircle:'#9e9e9e6b',cardCircleTwo:'#607d8b'},
                    // {title:'Brilhante',subTitle:'06 Pacotes',description:'15% DESCONTO',icon:'benefits',textColor:'#ff9800',iconColor:'#FF9800',cardColor:'#ffc1078a',cardCircle:'#fff',cardCircleTwo:'#fff'} ,
                    // {title:'platinum',subTitle:'10 Pacotes',description:'20% DESCONTO',icon:'benefits',textColor:'#9E9E9E',iconColor:'#9E9E9E',cardColor:'#000',cardCircle:'#fff',cardCircleTwo:'#fff'}
                ]

            }
        },
        components:{
            SlideLogos,Banner,CardPlan,Emoji,CardCup
        },
        mounted() {


        }

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    .nav {
        color: #000!important;
    }
    .here-whatsapp{
        font-size: 3rem!important;
    }

</style>
