<template>
  <div class="modal__background">
    <div class="modal__content">
      <header class="modal__content-header">
        <slot name="header"></slot>
      </header>
      <main  class="modal__content-main">
        <slot></slot>
      </main>
      <footer class="modal__content-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

})
</script>
