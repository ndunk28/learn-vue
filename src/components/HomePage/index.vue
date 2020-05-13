<template>
  <layout-default>
    <section-style>
      <h1>{{ msg }}</h1>
      <p>{{ desc }}</p>
    </section-style>
  </layout-default>
</template>

<script>
import LayoutDefault from './../../layouts/Default'
import Section from './style'

export default {
  name: 'HomePage',
  components: {
    LayoutDefault,
    'section-style': Section
  },
  data () {
    return {
      msg: 'Homepage',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac tempus massa. Donec sed nisl molestie, maximus risus id, sollicitudin lacus. Nam tempor dui nec augue porta congue. Integer consequat fermentum tortor, eget volutpat velit convallis at. Sed ac quam lacus. Duis in condimentum dui. Sed pharetra nulla eget dui dictum, quis aliquam odio blandit. Maecenas posuere mauris non nisl aliquam pretium a vitae dolor. Donec quam ante, mattis nec nulla sit amet, rhoncus laoreet urna. Aenean id porttitor velit. Ut gravida quis erat at convallis.'
    }
  }
}
</script>
