<template>
  <div class="container">
    <br />
    <br />
    <div class="footer">
      <div>
        Created by David Li
      </div>
      <div>
        Used to display latex docs
      </div>
      <div> 
         Made with saber
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  box-sizing: border-box;
  position: relative;
  padding-bottom: 1em; /* Height of footer */
  min-height: 100%;
}
.footer {
  position: relative;
  bottom: 0;
  width: 97.5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

p {
  flex-wrap: wrap;
  text-align: right;
}

</style>