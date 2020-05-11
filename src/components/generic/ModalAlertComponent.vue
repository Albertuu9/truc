<template>
  <div class="text-center">
    <v-dialog v-model="value" persistent width="500">
      <v-card>
        <v-card-title class="headline modal-header" primary-title>
					<v-icon dark class="pr-2">info</v-icon>
          <span>{{ title }}</span>
          <v-spacer></v-spacer>
          <v-btn dark icon>
            <v-icon @click="closeModal">close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4 text-center align-center">
          <span class="messageAlert">{{ message }}</span>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn v-if="!notCancelButton" color="secondary" @click="closeModal" small text>{{ $t('modalGeneric.cancel') }}</v-btn>
          <v-btn
            color="primary"
            @click="eventAcceptButton"
            small
            text
          >{{ $t('modalGeneric.accept') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ModalAlertComponent",
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
		},
		notCancelButton: {
			type: Boolean,
			required: false
		}
  },
  methods: {
    closeModal() {
      this.$emit("input", false);
    },
    eventAcceptButton() {
      this.$emit("genericEvent");
    }
  }
};
</script>
<style scoped>
.messageAlert{
	font-size: 16px;
}
</style>