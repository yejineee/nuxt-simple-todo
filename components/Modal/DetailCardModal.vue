<template>
  <Modal class='card-detail-modal'>
    <template #header>
      <button type="button" @click="closeHandler">닫기</button>
    </template>
    <div class='card__title'>{{title}}</div>
    <template #footer>
      <button type="button">수정</button>
    </template>
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
