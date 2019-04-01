<template>
    <section id="contact">
      <div class="pageWidth col2">
        <div class="col form">
            <input type="text" name="" id="" placeholder="My name is">
            <input type="email" name="" id="" placeholder="My email address is">
            <input type="text" name="" id="" placeholder="I represent (organization)">
            <select name="" id=""></select>
            <textarea name="" id="" cols="30" rows="10" placeholder="My message is"></textarea>
        </div>
        <div class="col">
          <h3>Advisor, partner or cheerleader,  Curious can help.</h3>
          <p>We understand the complexities of growing and innovating a business. The good news is that you don’t have to go it alone. We’d love to help! But before we can do that, we need to know a bit more about you and your challenges.</p>
          <p>Please fill out this quick form and we’ll get back to you as soon as possible.</p>
          <p><a href="#">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a></p>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'contact',
  props: {
    msg: String,
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
