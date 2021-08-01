<template>
  <li class="card-wrapper">
    <div class="card-summary">
      {{ todo.title }}
    </div>
    <div class="card-info">
      <button :class="['card-status', { done: todo.completed }]">
        {{ todo.completed }}
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

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
})
</script>
