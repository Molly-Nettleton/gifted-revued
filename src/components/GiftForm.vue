<template>
        <div class="col-2 ps-3 pt-5">
        <h1>Gifted!</h1>
        <form @submit="handleSubmit">
          <h4>Url</h4>
          <input type="text" name="url" v-model="editable.url">
          <h4>Tag</h4>
          <input type="url" class="mb-3" name="tag" v-model="editable.tag"><br>
            <button type="submit" class="btn btn-dark text-success">Submit</button>
          
        </form>
      </div>
</template>


<script>
import { ref } from "vue";
import { giftsService } from "../services/GiftsService.js";

export default {
  setup() {
    const editable = ref({})
    
    return {
      editable,
      async handleSubmit() {
        try {await giftsService.addGift(editable.value)}
        catch (error) {
          Pop.error(error) }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>