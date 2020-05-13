<template>
  <layout-default>
    <section-style>
      <h1>{{ msg }}</h1>
    </section-style>
  </layout-default>
</template>

<script>
import LayoutDefault from './../../layouts/Default'
import Section from './style'

export default {
  name: 'ContactPage',
  components: {
    LayoutDefault,
    'section-style': Section
  },
  data () {
    return {
      msg: 'Contact Page'
    }
  }
}
</script>
