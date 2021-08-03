<template>
  <Modal class='card-detail-modal'>
    <div class='card__title'>{{title}}</div>
    <button type="button" @click="closeHandler">닫기</button>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title:{
      type: String,
      required: true,
    },
    closeHandler:{
      type: Function,
      default(){
        return () => {};
      }
    }
  }
})
</script>
