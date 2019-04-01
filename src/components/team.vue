<template>
  <section id="people">
    <div class="teamTop">
        <div class="pageWidth">
            <div class="leftSide">
                <h3>Innovation &amp; growth aren’t solitary activities.</h3>
                <p>We’re a small team with big experience across many diciplines and technologies.</p>
            </div>
            <div class="rightSide">
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/sherwin.png`)})`}" @click="setActiveTab(0)" v-bind:class="{ active: activeTab === 0 }"></div>
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/maya.png`)})`}" @click="setActiveTab(1)" v-bind:class="{ active: activeTab === 1 }"></div>
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/bryce.png`)})`}" @click="setActiveTab(2)" v-bind:class="{ active: activeTab === 2 }"></div>
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/paul.png`)})`}" @click="setActiveTab(3)" v-bind:class="{ active: activeTab === 3 }"></div>
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/sherwin.png`)})`}" @click="setActiveTab(4)" v-bind:class="{ active: activeTab === 4 }"></div>
                <div class="pic" :style="{backgroundImage: `url(${require(`@/assets/jason.png`)})`}" @click="setActiveTab(5)" v-bind:class="{ active: activeTab === 5 }"></div>
            </div>
        </div>
    </div>
    <div class="teamBottom">
        <div class="pageWidth" v-if="activeTab === 0">
            <div class="leftSide">
                <h4><span>Brand Consultant</span> Sherwin Schwartzrock</h4>
                <p>Sherwin understands how brand strategy and imagery become powerful tools in a visually-engaged marketplace. His 20+ career in advertising and design has afforded him the opportunity to touch dozens of Fortune 100 companies as well as small to medium brands that needed to support business objectives.</p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Sherwin might ask:</div>
                <ul class="questionList">
                    <li>Are you uniquely positioned in your marketplace?</li>
                    <li>Could your company be more unique, memorable and valuable?</li>
                    <li>Can you capture your unique value proposition in one sentence?</li>
                    <li>Does what your customers’ say, and what you say about your company align?</li>
                    <li>Do your employees embody your organizations’s values and personality?</li>
                </ul>
            </div>
        </div>

        <div class="pageWidth" v-if="activeTab === 1">
            <div class="leftSide">
                <h4><span>Marketing Consultant</span> Maya Khaira</h4>
                <p>Maya leads the development and execution of all strategic digital marketing campaigns at Curious. She has a unique and valuable capacity to tap both sides of her brain with creative content development as well as managing the minute details of production and client services.</p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Maya might ask:</div>
                <ul class="questionList">
                    <li>Are you leveraging paid social platforms for marketing?</li>
                    <li>How targeted are your campaigns? Are the right people engaging?</li>
                    <li>How are you targeting your audience?</li>
                    <li>How often are you changing your messaging and creative?</li>
                    <li>Are you leveraging A/B tests and are you aware what drove the results and why?</li>
                    <li>What do users find when they search for your company?</li>
                    <li>Is your marketing relevant to your potential customers and does it provide value?</li>
                    <li>Does your marketing voice match the way your audience speaks?</li>
                </ul>
            </div>
        </div>

        <div class="pageWidth" v-if="activeTab === 2">
            <div class="leftSide">
                <h4><span>Product Consultant</span> Bryce Howitson</h4>
                <p>Bryce has over 15 years of experience creating products that people want to use. He helps organizations of all sizes prototype, and test their ideas. And being a Google certified Design Sprint Master helps ensure real problems are both identified and solved efficiently. </p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Bryce might ask:</div>
                <ul class="questionList">
                    <li>Who is your audience and what do they need?</li>
                    <li>What revenue generation models exist and what’s best for your company?</li>
                    <li>How might available technology platforms improve your product?</li>
                    <li>What can we prototype with minimal investment?</li>
                    <li>How do we quantify a "good" product experience?</li>
                    <li>What can we test and how does that process work?</li>
                    <li>Who can build our product idea and what will it cost?</li>
                    <li>What is our product story and does it resonate with the right people?</li>
                </ul>
            </div>
        </div>

        <div class="pageWidth" v-if="activeTab === 3">
            <div class="leftSide">
                <h4><span>Brand Consultant</span> Paul Gardner</h4>
                <p>Paul’s 13-year career has deep experience in retail and brand design for Fortune 100 companies as well as start-ups. He is passionate about capturing the emotion and personality of his clients in every point of contact for the customer. For Paul, every detail is important in developing authentic and valuable brands.</p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Paul might ask:</div>
                <ul class="questionList">
                    <li>At every point of contact (online, in-store, advertising, customer service), do customers get the same experience?</li>
                    <li>Is your corporate identity future proof?</li>
                    <li>Have you ever noticed your customers being confused when interacting with your services?</li>
                    <li>Look at ALL of your brochures, catalogs, social media, advertising, and website… do they look like they come from the same place?</li>
                    <li>Does your company “feel” like the company you want it to be?</li>
                </ul>
            </div>
        </div>

        <div class="pageWidth" v-if="activeTab === 4">
           <div class="leftSide">
                <h4><span>Technololgy Consultant</span> Eric Brusven</h4>
                <p>With degrees in both design and digital development, Eric is a rare talent that can create and build just about anything digitally. In his nearly decade of work experience, he has a superhero talent for asking the most practical and relevant questions to identify the core purpose and solution to any communications problem. Eric is a robot.</p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Eric might ask:</div>
                <ul class="questionList">
                    <li>Who told you could do that?</li>
                    <li>Why did you think that would work?</li>
                    <li>Why did you think these plugins would solve your problems?</li>
                    <li>Don’t you currently pay someone to do this?</li>
                    <li>Where does your website live?</li>
                    <li>What’s for lunch?</li>
                </ul>
            </div>
        </div>

        <div class="pageWidth" v-if="activeTab === 5">
            <div class="leftSide">
                <h4><span>Marketing Consultant</span> Jason Rysavy</h4>
                <p>A marketing strategist and tactician for more than 20 years, Jason thrives when helping teams leverage targeted marketing best practices to grow their B2B or B2C businesses. He also lives with a hawk. So there’s that.</p>
            </div>
            <div class="rightSide">
                <div class="questions">Questions Jason might ask:</div>
                <ul class="questionList">
                    <li>What are the goals of your marketing?</li>
                    <li>Are your sales and marketing teams learning from each other? Are they talking to each other?</li>
                    <li>Are you generating the right leads?</li>
                    <li>How will the market become aware of your business?</li>
                    <li>How aware of your company are your potential customers?</li>
                    <li>Are you marketing to the right customers?</li>
                    <li>In a perfect scenario, what would marketing achieve for your business?</li>
                    <li>What does your ideal client look like?</li>
                    <li>How are you measuring your marketing?</li>
                    <li>How likely are clients to recommend your company to a friend?</li>
                    <li>Do competitors do a better job of explaining your products or services?</li>
                    <li>What would convince your current customers to switch to a competitor?</li>
                    <li>What, if anything, would make your customers stop doing business with you?</li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'team',
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
