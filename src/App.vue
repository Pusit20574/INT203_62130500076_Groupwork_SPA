<template>
  <nav id="nav" class="flex overflow-hidden w-screen bg-white leading-10">
    <!-- logo -->
    <a class="homeNav">YoursCandles</a>
    <!-- link -->
    <router-link to="/" class="firstRoute text-md">Home</router-link> 
    <router-link to="/promotion" class="secondRoute text-md">Promotions</router-link>
  </nav>
  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600;800&display=swap');

#nav{
  font-family: 'Poppins';
}

#nav a{
  font-family: 'Poppins';
  font-weight: 600;
}

a{
 color: #174974;
}

#nav a.router-link-exact-active {
  color: #42b983;
  /* #174974 */
} 

</style>