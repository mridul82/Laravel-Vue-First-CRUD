<template>
<carousel :items=1 :autoplay="true" >

    
 
        
    <!-- <div class="carousel-item-a intro-item bg-image">
      <img :src="require('../../../img/slide-1.jpg')" />
        <div class="overlay overlay-a"></div>
       
      </div>
      <div class="carousel-item-a intro-item bg-image">
      <img :src="require('../../../img/slide-2.jpg')" />
        <div class="overlay overlay-a"></div>

      </div> -->
      <div class="carousel-item-a intro-item bg-image" >
      <img :src="require('../../../img/slide-3.jpg')" />
        <div class="overlay overlay-a"></div>

      </div>

</carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    data() {
      return {
        imgs : [
          {
            id: 1,
            pic: '../../../img/slide-1.jpg'
          },
           {
            id: 2,
            pic: '../../../img/slide-2.jpg'
          },
           {
            id: 3,
            pic: '../../../img/slide-3.jpg'
          }

        ]
      }
    }
}
</script>

<style>

</style>
