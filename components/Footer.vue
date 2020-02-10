<template>
<div>
  <div class="flex justify-between bg-gray-200">
    <div class="text-gray-700 text-center px-4 py-2 m-2">Created By <a href="https://FriendlyUser.github.io"> David Li </a> </div>
    <div class="text-gray-700 text-center px-4 py-2 m-2">2019</div>
    <div class="text-gray-700 text-center px-4 py-2 m-2">Created using saber</div>
  </div>  
  <div id="webchat" />
</div>
</template>

<style>
img.open-launcher {
  display: initial;
  vertical-align: initial;
}
#webchat > div > button > div > img {
  display: initial;
  vertical-align: initial;
}
</style>

<script>
export default {
   mounted() {
      let webchatScript = document.createElement('script')
      webchatScript.setAttribute('src', 'https://storage.googleapis.com/mrbot-cdn/webchat-latest.js')
      document.body.appendChild(webchatScript)
      webchatScript.onload = () => {
        let webChatData = document.createElement('script')
        webChatData.type = 'text/javascript'
        webChatData.text  = `WebChat.default.init({
            selector: "#webchat",
            initPayload: "/",
            customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
            socketUrl: "35.212.199.26",
            socketPath: "/socket.io/",
            title: "David Li",
            subtitle: "Talk to me now",
          })
        `
        document.body.appendChild(webChatData)
      }
  }
}
</script>