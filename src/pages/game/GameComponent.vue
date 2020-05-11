<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="game-wrapper-header px-5 pt-3 pb-3">
      <h4>{{ $t('game.header.userVictories') }} 0</h4>
      <v-spacer></v-spacer>
      <v-icon>reorder</v-icon>
    </div>
    <div class="game-wrapper">
      <v-divider></v-divider>
      <div class="game-wrapper-body pt-3">
        <div class="game-wrapper-body-labels px-5 pb-3">
          <div class="first-column">
            <span>{{ $t('game.body.level') }}</span>
            <v-icon small class="pl-1" color="info">star</v-icon>
            <v-icon small class="pl-1" color="info">star</v-icon>
            <v-icon small class="pl-1" color="info">star</v-icon>
            <v-icon small class="pl-1" color="info">star</v-icon>
            <v-icon small class="pl-1" color="info">star</v-icon>
          </div>
          <div>
            <span>{{ $t('game.body.cama') }} 1</span>
          </div>
          <div>
            <span>{{ $t('game.body.points') }} 3</span>
          </div>
        </div>
        <v-divider class="separator"></v-divider>
        <div class="game-wrapper-body-title pt-3">
          <h4 class="mytitle text-center">Invitado vs CPU</h4>
        </div>
        <div class="game-wrapper-body-content pt-4 pb-4">
          <img class="cards" src="./../../assets/cards/cincoDeBastos.png" />
        </div>
        <div class="user-actions pl-3">
          <v-btn small color="info" class="mr-4" dark>
            <v-icon small class="pr-1">emoji_people</v-icon>
            <span>{{ $t('game.body.envit') }}</span>
          </v-btn>
          <v-btn small color="info" class="mr-4" dark>
            <v-icon small class="pr-1">record_voice_over</v-icon>
            <span>{{ $t('game.body.truc') }}</span>
          </v-btn>
          <v-btn small color="info" class="mr-4" dark>
            <v-icon small class="pr-1">add</v-icon>
            <span>{{ $t('game.body.card') }}</span>
          </v-btn>
        </div>
        <div class="game-wrapper-body-footer px-5 pt-5">
          <span>{{ $t('game.footer.time') }} 15:32</span>
          <v-spacer></v-spacer>
          <span>{{ $t('game.footer.myPoints') }} 10</span>
        </div>
      </div>
    </div>
    <div class="footer-wrapper text-center align-center">
      <h5>{{ $t('game.footer.developedBy') }} Alberto Gonzàlez</h5>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "@/components/game/HeaderComponent";
export default {
  name: "GameComponent",
  components: {
    HeaderComponent
  }
};
</script>
<style scoped>
.separator {
  border: 0.5px solid #cccccc;
}
.game-wrapper {
  background-color: #ededed;
  height: calc(82vh - 75px);
  overflow: scroll;
}
.game-wrapper-header {
  align-items: center;
  background-color: #ffffff;
  color: #555555;
  display: flex;
  height: 8vh;
  font-size: 1em;
}
.game-wrapper-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.game-wrapper-body-labels {
  align-items: center;
  color: #555555;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: bolder;
  justify-content: space-between;
  width: 100%;
}
.game-wrapper-body-title {
  width: 100%;
}
.user-actions {
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;
}
.first-column {
  align-items: center;
  display: flex;
}
.game-wrapper-body-content {
  display: flex;
  justify-content: center;
  width: 100%;
}
.game-wrapper-body-footer {
  color: #555555;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
}
.cards {
  border-radius: 10px;
  height: 300px;
  width: 200px;
}
.footer-wrapper {
  align-items: center;
  background-color: #ffae19;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 10vh;
}
</style>
