<template>
  <layout-error>
    <section-style>
      <h2>{{ title }}</h2>
      <a-empty :description="false" />
      <p>{{ msg }}</p>
    </section-style>
  </layout-error>
</template>

<script>
import LayoutError from './../../layouts/Error'
import Section from './style'

export default {
  name: 'NotFoundPage',
  components: {
    LayoutError,
    'section-style': Section
  },
  data () {
    return {
      title: '404',
      msg: 'Page not found'
    }
  }
}
</script>
