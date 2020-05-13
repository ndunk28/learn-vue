<template>
  <section-style>
    <a-layout class="layout">
      <a-layout-header>
        <div class="logo">
          <h2>{{ title }}</h2>
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/contact">Contact</router-link>
          </a-menu-item>
        </a-menu>
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
  name: 'LayoutDefault',
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
