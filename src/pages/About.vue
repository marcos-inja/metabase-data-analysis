<template>
    <b-container class="tent d-flex align-items-center">
        {{tamanho}}
        <h1 class="mb-4">Sobre o projeto</h1>
        <div class="img_mold">
            <img src="../assets/logo_nav.png" width="100%">
        </div>
        <div class="size_content">
            <h3 class="mt-4" style="text-align: center">{{title}}</h3>
            <p v-for="paragraph in paragraphs" :key="paragraph" >{{paragraph}}</p>
            <hr>
            <h3>Repositórios que compõem este projeto no github</h3>
            <p>Repositório do site: <a href="https://github.com/marcos-inja/metabase-data-analysis">github.com/marcos-inja/metabase-data-analysis</a></p>
            <p>Repositório do coletor: <a href="https://github.com/marcos-inja/visualizacao-de-dados">github.com/marcos-inja/visualizacao-de-dados</a></p>
            <p>Meu perfil do github: <a href="https://github.com/marcos-inja">github.com/marcos-inja</a></p>
        </div>
        
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            title: "MyAnimeList análise de dados com Metabase",
            paragraphs: [
                "Esse projeto foi feito no intuito de desafiar minhas habilidades de programação, ver o que eu (um programador back-end) conseguia fazer em 7 dias, e esse é o resultado. Para fazer este site foi usado o framework Vue.js e o framework Bootstrap, o metabase foi usado para construir os gráficos de analise dos dados." ,
                'A coleta de dados foi feita por um bot que eu construí utilizando a linguagem de programação Python, utilizando as tecnologias Selenium e BS4, os dados brutos são salvos no MongoDB e depois são "higienizados" para serem salvos em um banco de dados relacional, o que foi usado neste projeto foi o Postgres.',
                "A analise dos dados coletados foi feita usando o Metabase, que é um ótimo software para BI (business intelligence), os gráficos são construídos lá e depois são exibidos no site por meio de um iframe no html, os gráficos são atualizados automaticamente, quando a alguma alteração na base de dados.",
                "Os dados utilizados para as analises dos dados disponibilizadas aqui, foram pegos do site myanimelist.org, que é um site de informações sobre animes e mangás, lá cada usuário pode fazer a sua propria lista com os animes que assistiu/vai assistir, dar notas aos animes, seguir a pagina de um anime, seguir amigos, basicamente uma rede social focada no publico Otaku. Dados pegos apenas para fins educativos."
            ],
            
        }
    },
}
</script>

<style scoped>
    .img_mold {
        width: 300px;
        height: 300px;
        padding: 50px;
        border-radius: 50%;
        background: rgb(73, 73, 73);
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 4px 4px 7px 3px rgba(0,0,0,0.3); 
        box-shadow: 4px 4px 7px 3px rgba(0,0,0,0.3);
    }

    .tent {
        flex-direction: column;
    }

    .img_size {
        width: 64px;
    }

    .size_content{
        width: 60%;
    }
    @media only screen and (max-width: 720px){
        .img_mold{
            width: 200px;
            height: 200px;
        }
        .size_content{
            width: 90%;
        }
    }
</style>