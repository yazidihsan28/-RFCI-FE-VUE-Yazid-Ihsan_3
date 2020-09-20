<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ getCountData.length }}</div>
      Users
    </div>
    <div class="wrapper">
      <div v-for="user in lists" :key="user.id" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
// import { SET_DATA } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },  
  computed:  { 
    ...mapGetters(['lists','getCountData']),
    // users() {
    //   return this.$store.getters.lists;
    // }, 
    // count() {
    //   return this.$store.getters.getCountData;
    // },
},
  mounted() {
      this.$store.dispatch('getDatas');
  },
  // methods: {
  //   setData(data) {
  //     this.$store.dispatch("setData", data);
  //   },
  // },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
  
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
 
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
  
}
.wrapper .body-card{ 
  width: 100%; 
}
.wrapper-card{
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
}
.card  { 

  display:inline-flex;
  flex-wrap: wrap;
  width: 50%; 

}
.body-card{
  list-style-type:none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1); 
  border-radius: 5px;
  margin: 2rem 2em 0 0;
  justify-content: space-between;
  padding: 1rem ;
  padding-top: 2rem;
  background-color: white;
}
.title{
  color: #646464;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 10pt;

}
.name{
  font-weight: bolder;
}
.email{
  font-weight: 600;
}
.phone{
  font-weight: 600;
}
.website{
  color: #83dd8b;
}
</style>
