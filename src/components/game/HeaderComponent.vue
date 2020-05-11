<template>
    <div>
        <ModalAlertComponent v-model="modalExitGame" :title="modalExitGameData.title" :message="modalExitGameData.message" @genericEvent="goHome"></ModalAlertComponent>
        <div class="header-wrapper">
            <div>
                <span>{{ $t('game.header.guest') }}</span>
                <img width="50" src="./../../assets/no-photo.png" @click="openModalExitGame" />
            </div>
        </div>
    </div>
</template>
<script>
import ModalAlertComponent from '@/components/generic/ModalAlertComponent';
export default {
    name: 'Game-HeaderComponent',
    components:{
        ModalAlertComponent
    },
    data(){
        return{
            modalExitGame: false,
            modalExitGameData: {
                title: this.$t('game.header.alert'),
                message: this.$t('game.header.message')
            }
        }
    },
    methods:{
        openModalExitGame(){
            this.modalExitGame = true;
        },
        goHome(){
            this.$router.push('/');
        }
    }
}
</script>