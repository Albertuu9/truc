<template>
  <div class="text-center">
    <v-dialog v-model="value" persistent>
      <v-card>
        <v-card-title class="headline modal-header" primary-title>
          <span>{{ $t('modalRegisterInfo.title') }}</span>
          <v-spacer></v-spacer>
          <v-btn dark icon>
            <v-icon @click="closeModal">close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
         <h5 class="titleModal pb-4 pt-4">{{ $t('modalRegisterInfo.header') }}</h5>
         <ul>
             <li class="pb-2">{{ $t('modalRegisterInfo.text1') }}</li>
             <li class="pb-2">{{ $t('modalRegisterInfo.text2') }}</li>
             <li class="pb-2">{{ $t('modalRegisterInfo.text3') }}</li>
             <li class="pb-2">{{ $t('modalRegisterInfo.text4') }}</li>
         </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ModalRegisterInfo",
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("input", false);
    }
  }
};
</script>