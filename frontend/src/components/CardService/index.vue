<template>
    <div>
        <div class="col s12 m3 l3 xl3" :data-aos="{fade}">
            <div class="card z-depth-4">
                <div class="card-image md waves-effect waves-block waves-light">
                    <svg-icon icon-class="one-finger-click" class-name="card-panel-icon"/>
                    <img class="activator " alt="manutenção e instalações"
                         :src="image">
                </div>
                <div class="card-content  grey lighten-4">
                    <span class="card-title activator light-blue-text"><strong>{{title}}</strong></span>
                    <p><a class="blue-grey-text" href="#"><strong>-</strong>&nbsp;{{subTitle}}</a></p>
                </div>
                <div class="card-reveal grey lighten-5">
                    <span class="card-title light-blue-text ">{{title}}<i
                            class="material-icons right">close</i></span>
                    <p><strong>Venha e faça um orçamento</strong>&nbsp; {{description}} nbsp;</p>
                    <router-link :to="{ path: '/services' }" class="btn white blue-grey-text">SERVIÇOS</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "cardService",
        props: {
            title: {
                type: String,
                default: 'title'
            },
            subTitle: {
                type: String,
                default: 'title'
            },
            description: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: 'benefits'
            },
            fade: {
                type: String,
                default: 'fade-right'
            },

        }
    };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .card{
        transition: all 1s;

        .card-image.rotate{
            img{
                transform: rotate(66deg);
            }
        }
        .card-image.md{
            height: 12rem;
        }
        .card-image.sm{
            height: 9rem;
        }

        .card-image{
            img {
                transform: translate3d(0%,-10%,0);
            }

            .card-panel-icon{
                z-index: 1002;
                position: absolute;
                font-size: 2rem;
                //transform: translate3d(-10%,-10%,0);
                color: #9e9e9ea8;
                //-webkit-background-clip: text;
                -webkit-animation-name: tear-drop-click; //haha-mouth;
                -webkit-animation-duration: 9s;
                -webkit-animation-iteration-count: infinite;
            }

        }
        .card-content{
            padding: .6rem!important;

            .card-title {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;

            }

        }

        .card-reveal{
            opacity:0;

            .list-emojs{
                margin: 0;
                width: 300px;
                max-width: 100%;
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .emoji{
                    width: 3rem!important;
                    height: 3rem!important;
                    div{
                        width: calc(50% - 20px);
                        height: calc(50% - 20px);
                        &:after{
                            //left: calc(50% - 20px);
                            //top: calc(50% - 20px);
                            width: 2rem;
                            height: 3rem;
                        }
                    }
                }
            }
        }
        .card-action{
            svg{
                width: 1.3em!important;
                height: 1.3em!important;
            }
        }

        &:hover {
            &:after {

                opacity:0;
            }
            transform: skewX(0deg);
            .card-reveal{
                p{transform: skewX(0deg);}
                -webkit-animation-duration: .75s;
                animation-duration: .75s;
                display: block;
                opacity:1;
                transform: translateY(-100%)!important;
                -webkit-animation-name: slideInUp;
                animation-name: slideInUp;
            }
        }
    }
</style>