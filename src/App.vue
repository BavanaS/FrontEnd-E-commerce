<template>
  <div>
    <HeadSection :name="'name'" @message="show"> </HeadSection>

    <div class="b">
      <Filter> </Filter>
      <router-view> </router-view>
      
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style  scoped>

.b {
  width:100%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(179, 213, 223);
}

</style>
