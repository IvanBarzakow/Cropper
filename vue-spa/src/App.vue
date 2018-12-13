<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }">
          {{post.id}}. {{post.title}}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        posts: null,
        endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },
    created() {
      this.getAllPosts();
    },
    methods: {
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  main {
    border-top: 1px solid darkgrey;
  }
  .sidebar {
    width: 300px;
    border-right: 1px solid darkgrey;
    padding: 20px 10px;
    float: left;
    a {
      color: #b2b2b2;
      display: block;
      font-weight: 500;
      text-decoration: none;
      text-align: left;
      margin-bottom: 10px;
    }
  }
.content {

  margin-left: 322px;
}
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
