<template >

  <section class="container-fluid ">
    <div class="row bg-success">
      <div class="col-3">
        
      <GiftForm />

      </div>   
    <div class="row">
    <GiftCard  v-for="g in gifts" :gift="g" />
    </div>
    </div>
  </section>
  
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js';
import { logger } from "../utils/Logger.js";
import GiftForm from "../components/GiftForm.vue";


export default {
    setup() {
        async function getGifts() {
            try {
                await giftsService.getGifts();
            }
            catch (error) {
                logger.error("[GettingGifts]", error);
                console.error("[GettingGifts]", error);
                Pop.error(error);
            }
        }
        getGifts();
        return {
            gifts: computed(() => AppState.gifts)
        };
    },
    components: { GiftForm }
}

</script>

<style scoped lang="scss">

</style>
