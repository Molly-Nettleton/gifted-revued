<template>
  <div class="GiftCard col-3 pt-3" >

    <div class="card text-center" style="width: 18rem; height: 18rem;">
      <div v-if="gift.opened">
        <img :src="gift.url" class="card-img-top img" alt="...">
      </div>
      <div class="card-body">
        <div v-if="gift.opened">
          <h5 class="card-title">{{gift.tag}}</h5>
        </div>
        <div v-if="!gift.opened" class="text-center">
        <p class="card-text"><button @click="openGift()">open</button>
        </p></div>
      </div>
    </div>
    
  </div>
</template>


<script>
import { Gift } from "../models/Gift.js"
import { giftsService } from "../services/GiftsService.js"
import Pop from "../utils/Pop.js"

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props){
    return {
      async openGift() {
        try { 
          await giftsService.openGift(props.gift.id)
          Pop.success("Gift opened!")
        }
        catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.img{
  height: 200px;
  width: 200px
}
</style>