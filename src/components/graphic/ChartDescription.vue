<template>
    <b-row class="mt-5">  
        <b-col v-if="info.direita">
            <h2>{{ info.title }}</h2>
            <p v-for="paragraph in info.desc" :key="paragraph">
                {{paragraph}}
            </p>
        </b-col>

        <b-col>
        <b-embed class="frame" :class="class_css"
            type="iframe"
            :src="grf"
            frameborder="0"
            scrolling="no"
        ></b-embed>  
        </b-col>

        <b-col v-if="!info.direita">
            <h2>{{info.title}}</h2>
            <p v-for="paragraph in info.desc" :key="paragraph">
                {{paragraph}}
            </p>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        info:{
            required: true,
            type: Object,
        }
    },

    computed:{
        grf(){ return this.info.src },
        class_css(){
            
            if(this.info.direita){
                return 'shadow-right'
            } else {
                return 'shadow-left'
            }
            
        }
    },
}
</script>

<style scoped>
   .frame{
        min-width: 100%;
        height: 600px;
        border: 1px rgb(211, 210, 210) solid;
        border-radius: 8px;
        
    } 

    .shadow-right{
        -webkit-box-shadow: 5px 5px 25px -7px rgba(0,0,0,0.39); 
        box-shadow: 5px 5px 25px -7px rgba(0,0,0,0.39);
    }

    .shadow-left{
        -webkit-box-shadow: -5px 5px 25px -7px rgba(0,0,0,0.39); 
        box-shadow: -5px 5px 25px -7px rgba(0,0,0,0.39);
    }
</style>