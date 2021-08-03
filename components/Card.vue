<template>
  <div>
    <DetailCardModal 
      v-if="isOpenDetailModal" 
      :title="todo.title" 
      :closeHandler="toggleDetailModal"
    />
    <li class="card-wrapper" @click="toggleDetailModal">
      <div class="card-summary">
        {{ todo.title }}
      </div>
      <div class="card-info">
        <button :class="cardStatusClass" @click.stop="toggleStatus">
          {{ statusMsg }}
        </button>
      </div>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from '@vue/composition-api'
import useStatus from '~/composables/useStatus';
import DetailCardModal from './Modal/DetailCardModal.vue';
interface Todo   {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export default defineComponent({
  components: { DetailCardModal },
  props: {
    todo : {
      type: Object as PropType<Todo>,
      required: true,
    }
  },
  setup(props){
    const isOpenDetailModal = ref(false);
    const toggleDetailModal = () => isOpenDetailModal.value = !isOpenDetailModal.value;
    const { todo } = toRefs(props);
    const { statusMsg, toggleStatus, cardStatusClass} = useStatus(todo.value.completed);

    return {
      statusMsg,
      cardStatusClass,
      toggleStatus,
      isOpenDetailModal,
      toggleDetailModal
    };
  },
})
</script>
