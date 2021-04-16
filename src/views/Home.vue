<template>
  <div class="home">
    <homeLanding />

  </div>
</template>

<script>
// @ is an alias to /src
import homeLanding from '@/components/homeLanding.vue'

export default {
  name: 'Home',
  components: {
    homeLanding
  }
}
</script>
