<template>
  <section-style>
    <a-layout class="layout">
      <a-layout-header>
        <div class="logo">
          <h2>{{ title }}</h2>
        </div>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div class="content">
          <slot/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        learn vue ©2020 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </section-style>
</template>

<script>
import Section from './style'

export default {
  name: 'LayoutError',
  components: {
    'section-style': Section
  },
  data () {
    return {
      title: 'Learn vue'
    }
  }
}
</script>
