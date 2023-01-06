<template>
  <NavigationBar />
  <div
    class="form-container"
    data-tf-widget="gi3hGpQE"
    id="wrapper"
    data-tf-opacity="100"
    data-tf-inline-on-mobile
    data-tf-iframe-props="title=Lead Capture Form STP"
    data-tf-transitive-search-params
    data-tf-auto-focus
  ></div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
;(() => {
  if (window.localStorage) {
    // If there is no item as 'reload'
    // in localstorage then create one &
    // reload the page
    if (!localStorage.getItem('reload')) {
      localStorage['reload'] = true
      window.location.reload()
    } else {
      // If there exists a 'reload' item
      // then clear the 'reload' item in
      // local storage
      localStorage.removeItem('reload')
    }
  }
})()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  min-width: 100%;
  height: 600px;
}
</style>
