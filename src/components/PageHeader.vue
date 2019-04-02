<template>
    <header class="pageWidth">
        <h1>Curious</h1>
        <nav>
          <router-link to="/">Services</router-link>
          <a href="#">People</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PageHeader',
  props: {
  },

  data () {
    return {
      activeTab: 0
    }
  },
  created () {
  },
  destroyed () {
  },
  methods: {
    setActiveTab: function(tab) {
      this.activeTab = tab
    }
  },
  computed: {

  }
});
</script>
