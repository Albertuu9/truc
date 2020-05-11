<template>
  <div class="text-center">
    <v-dialog v-model="value" persistent width="500">
      <v-card>
        <v-card-title class="headline modal-header" primary-title>
          <span>{{ $t('modalLanguage.title') }}</span>
          <v-spacer></v-spacer>
          <v-btn dark icon>
            <v-icon @click="closeModal">close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="mt-4">
          <h3>{{ $t('modalLanguage.header') }}</h3>
          <v-select
          prepend-icon="translate"
          class="mt-4"
          :items="languages"
          item-text="name"
          item-value="code"
          v-model="language"
          dense
        ></v-select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="changeLanguage" text>{{ $t('modalGeneric.accept') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { i18n } from '@/translate/i18n'
export default {
  name: "ModalLanguage",
  data() {
    return {
      languages: [
        {
          id: 1,
          name: 'Castellano',
          code: 'es'
        },
        {
          id: 2,
          name: 'Valencià',
          code: 'va'
        }
      ],
      language: localStorage.getItem('language') ? localStorage.getItem('language') : 'es'
    };
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
    },
    changeLanguage(){
      i18n.locale = this.language
      localStorage.setItem('language',this.language);
      this.closeModal();
    }
  }
};
</script>