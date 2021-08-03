<template>
  <Modal class='card-detail-modal'>
    <template #header>
      <button type="button" @click="closeHandler">닫기</button>
    </template>
    <form v-if="isEditMode" @submit="toggleEditMode">
      <input  v-model="updatedTitle" class='edit-title-input' />
    </form>
    <div v-else class='card__title' @click="toggleEditMode">{{updatedTitle}}</div>
    <template #footer>
      <button v-if="isEditMode" type='button' @click="toggleEditMode">저장</button>
      <button v-else type="button" @click="toggleEditMode">수정</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

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
  },
  setup(props){
    const updatedTitle = ref(props.title);
    const isEditMode = ref(false);
    const toggleEditMode = () => isEditMode.value = !isEditMode.value;
    return {
      updatedTitle,
      isEditMode,
      toggleEditMode,
    }
  }
})
</script>
