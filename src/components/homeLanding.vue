<template>
  <div class="homeLanding">
    <div class="flex ml-24 mt-16">
      <div class="-mt-2">
        <p id='head' class="text-3xl text-gray-700 font-medium mt-24 ml-28">YoursCandles Promotions</p>
        &nbsp;
        <hr class="ml-28 border-opacity-60 border-t-2" />
        &nbsp;
        <div id = 'content'>
          <p class="text-md text-gray-700 font-medium leading-3 ml-28">This Single Page Application contains</p>
          <p class="text-md text-gray-700 font-medium leading-3 mt-4 ml-28">promotions of Scented Candles</p>
          <p class="text-md text-gray-700 font-medium leading-3 mt-4 ml-28">in YoursCandles shop.</p>
            <div class="flex">
            <img src="@/images/instagram.png" class="w-8 mt-10 ml-28">
            <a class="mt-11 ml-4 text-gray-700" href="https://www.instagram.com/yourscandles/">yourscandles</a>
            <img src="@/images/line.png" class="w-8 mt-10 ml-16">
            <a class="mt-11 ml-4 text-gray-700" href="https://line.me/R/ti/p/%40886xdomy">@886xdomy</a>
            </div>
        </div>
      </div>
      <img src="@/images/logo.png" class="w-1/3 -mt-10 ml-36">
    </div>
  </div>
</template>

<script>

export default {
  name: "homeLanding",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600;800&display=swap');

  #content{
    font-family: 'Poppins';
  }

  #head{
    font-family: 'Poppins';
    font-weight: 600;
    color: #174974;
  }

</style>