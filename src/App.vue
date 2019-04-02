<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <section id="top">
      <PageHeader></PageHeader>
      <div class="intro pageWidth">
        <h2>
        We’re a group of experienced consultants &amp; coaches helping business leaders overcome <a href="#">brand</a>, <a href="#">marketing</a>, and <a href="#">product</a> challenges.
        </h2>
        <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
      </div>
      <div class="cta pageWidth">
        <a href="#">Growing your business starts with a chat</a>
      </div>
    </section>
    <section id="main">
      <div class="pageWidth">
        <h3>Discover your best opportunities for growth.</h3>
        <div class="col3">
          <div class="col">
            <h4><span>Curious Helps</span> Define Brands</h4>
            <p>Does your brand represent your unique value to your customers?</p>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Brand Review</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Build Marketing</h4>
            <p>Are you reaching the right audience, at the right time, with the right goals?</p>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Marketing Audit</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Create Products</h4>
            <p>Do your products/services meet expectations and create delight?</p>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Design Sprint</strong> could teach you.</a></p>
          </div>
        </div>
      </div>
    </section>
    
    <team></team>
    <contact></contact>
    <!-- <section id="bottom">
      <footer class="pageWidth">
        <div class="address">

        </div>
        <nav>
          <router-link to="/">Services</router-link>
          <a href="#">People</a>
          <a href="#">Contact Us</a>
        </nav>
      </footer>
    </section> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Team from '@/components/team.vue';
import Contact from '@/components/contact.vue';
import PageHeader from '@/components/PageHeader.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Team, Contact, PageHeader,
  },
});
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  @import "@/scss/style.scss";
</style>
