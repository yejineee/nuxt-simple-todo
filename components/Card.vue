<template>
  <li class="card-wrapper">
    <div class="card-summary">
      {{ todo.title }}
    </div>
    <div class="card-info">
      <button :class="cardStatusClass" @click="toggleStatus">
        {{ statusMsg }}
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from '@vue/composition-api'
import useStatus from '~/composables/useStatus';
interface Todo   {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export default defineComponent({
  props: {
    todo : {
      type: Object as PropType<Todo>,
      required: true,
    }
  },
  setup(props){
    const { todo } = toRefs(props);
    const { statusMsg, toggleStatus, cardStatusClass} = useStatus(todo.value.completed);

    return {
      statusMsg,
      cardStatusClass,
      toggleStatus,
    };
  },
})
</script>
