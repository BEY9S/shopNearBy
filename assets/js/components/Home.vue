<template>
  <div class="container">
    <div class="row">
      <div v-for="i in 4" class="col-sm-6 col-md-3">
        <div class="thumbnail">
          <img src="http://lorempixel.com/242/200" />
          <div class="caption">
            <p><a href="#" class="btn btn-danger" role="button">Dislike</a> <a href="#" class="btn btn-success" role="button">Like</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('home component mounted!');
    }
  }
</script>