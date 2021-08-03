<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <Card :todo=todo />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data(){
    return {
      todos : []
    }
  },
  async fetch(){
    this.todos = await this.$axios.$get('/todos');
  }
})
</script>
