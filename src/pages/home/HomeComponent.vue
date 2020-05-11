<template>
    <div>
        <ModalLanguageComponent v-model="openModalLanguage"></ModalLanguageComponent>
        <ModalRulesComponent v-model="openModalRules"></ModalRulesComponent>
        <ModalRegisterInfoComponent v-model="openModalRegisterInfo"></ModalRegisterInfoComponent>
        <ModalAlertComponent v-model="openNotOptionSelected" :title="modalNotOptionSelectedData.title" :message="modalNotOptionSelectedData.message" :notCancelButton="true" @genericEvent="closeModalNotOptionSelected"></ModalAlertComponent>
        <div class="header-wrapper">
            <div>
                <img class="logo" src="./../../assets/logo.png"/>
                <v-icon large dark @click="openModals('languages')">translate</v-icon>
            </div>
        </div>
        <div class="body-wrapper pt-2 mt-4">
            <div class="header-body-wrapper">
                <div>
                <h4 class="mytitle">{{ $t('home.title') }}</h4>
                </div>
                <div class="subtitle">
                    <h5>{{ $t('home.subtitle') }}</h5>
                </div>
            </div>
            <div id="play-card" class="wrapper-play separator-header-body" @click="checkGameWrapper('play-card')">
                <div class="section-img-game-card">
                    <img class="mt-3" src="./../../assets/gamepad.png">
                </div>
                <div class="section-text-game-card">
                    <div class="content-text-game-card">
                        <h4 class="card-mytitle">{{ $t('home.titleNewGame') }}</h4>
                        <h5 class="subtitle-play-card mt-2">{{ $t('home.descriptionNewGame') }}</h5>
                    </div>
                </div>
            </div>
            <div class="my-4">
                <h5>{{ $t('home.anotherOptionGame') }}</h5>
            </div>
            <div id="register-card" @click="checkGameWrapper('register-card')" class="wrapper-play">
                <div class="section-img-game-register-card">
                    <img class="mt-3" src="./../../assets/key.png">
                </div>
                <div class="section-text-game-card">
                    <div class="content-text-game-card">
                        <h4 class="card-mytitle">{{ $t('home.titleRegisterGame') }}</h4>
                        <h5 class="subtitle-play-card mt-2 mb-1">{{ $t('home.descriptionRegisterGame') }}</h5>
                        <v-icon class="float-right" small @click="openModals('registerInfo')">info</v-icon>
                    </div>
                </div>
            </div>
            <div class="main-button pt-5" @click="goToSelectedPath">
                <img src="./../../assets/play.png">
            </div>
            <div class="footer subtitle pt-5 pb-2">
               <h5 @click="openModals('rules')">{{ $t('home.rules') }}</h5>
            </div>
        </div>
    </div>
</template>
<script>
import ModalLanguageComponent from '@/components/home/ModalLanguageComponent';
import ModalRulesComponent from '@/components/home/ModalRulesComponent';
import ModalRegisterInfoComponent from '@/components/home/ModalRegisterInfoComponent'
import ModalAlertComponent from '@/components/generic/ModalAlertComponent';
export default {
    name: 'Home',
    components:{
        ModalLanguageComponent,
        ModalRulesComponent,
        ModalRegisterInfoComponent,
        ModalAlertComponent
    },
    data(){
        return{
            cardSelected: '',
            openModalLanguage: false,
            openModalRules: false,
            openModalRegisterInfo: false,
            openNotOptionSelected: false,
            modalNotOptionSelectedData: {
                title: this.$t('modalNotOptionSelected.title'),
                message: this.$t('modalNotOptionSelected.message')
            }
        }
    },
    methods:{
        checkGameWrapper(id){
            this.cardSelected = id;
            document.getElementById(this.cardSelected).style.backgroundColor = '#eaeaea';
            document.getElementById(this.cardSelected).style.borderRadius = '20px';
            if(this.cardSelected === 'register-card'){
               document.getElementById('play-card').style.backgroundColor = 'inherit';
               document.getElementsByClassName('section-text-game-card')[0].style.color = 'inherit';
            } else {
               document.getElementById('register-card').style.backgroundColor = 'inherit';
               document.getElementsByClassName('section-text-game-card')[0].style.color = 'inherit';
            }
        },
        goToSelectedPath(){
            switch(this.cardSelected){
                case 'play-card':
                    this.$router.push('game');
                break;
                default: 
                    // abrimos una modal para indicar que seleccionen alguna opción
                    this.openModals('notOptionSelected');
            }
        },
        openModals(value){
            switch(value){
                case 'languages':
                    this.openModalLanguage = true;
                break;
                case 'rules':
                    this.openModalRules = true;
                break;
                case 'registerInfo':
                    this.openModalRegisterInfo = true;
                break;
                case 'notOptionSelected':
                    this.openNotOptionSelected = true;
                break;
            }
        },
        closeModalNotOptionSelected(){
            this.openNotOptionSelected = false;
        }
    }
}
</script>
<style scoped>
.body-wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.header-body-wrapper{
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.subtitle{
    color: #888888;
    text-align: center;
}
.separator-header-body{
    margin-top: 50px;
}
.wrapper-play{
    display: flex;
    height: 140px;
    width: 95%;
}
.subtitle-play-card {
    font-size: 12px;
    color: #888888;
}
.section-text-game-card{
    align-items: center; 
    border-top-right-radius: 20px; 
    border-bottom-right-radius: 20px; 
    border-top: .5px solid #eaeaea; 
    border-bottom: .5px solid #eaeaea; 
    border-right: .5px solid #eaeaea;
    display: flex; 
    justify-content: center; 
    width: 65%; 
}
.content-text-game-card{
    text-align: center; 
    width: 90%;
}
.section-img-game-card{
    background-image: linear-gradient(to bottom right, #c79081, #dfa579);
    border-top-left-radius: 20px; 
    border-bottom-left-radius: 20px; 
    width: 35%; 
}
.section-img-game-register-card{
    background-image: linear-gradient(to bottom right, #96deda, #50c9c3);
    border-top-left-radius: 20px; 
    border-bottom-left-radius: 20px; 
    width: 35%; 
}
.section-img-game-card img, .section-img-game-register-card img{
    width: 130px;
}
.card-mytitle{
    color: #555555;
    font-size: 20px;
}
.caption-text{
    font-size: 10px;
}
.main-button img{
    width: 100px;
    height: 100px;
}
.separator-body-button{
    margin-top: 50px;
}
.logo{
    width: 140px;
    height: 50px
}
.footer{
    width: 100%;
}
</style>