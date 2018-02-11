<template>
  <div class="window-controls">
    <a href="#" @click="windowMinimize">Minimize</a>
    <a href="#" @click="windowRestore" v-if="maximized">Restore</a>
    <a href="#" @click="windowMaximize" v-else>Maximize</a>
    <a href="#" @click="windowClose">Close</a>
  </div>
</template>

<script>
module.exports = {
  name: 'window-controls',
  data: function () {
    return {
      maximized: false
    };
  },
  methods: {
    windowMinimize: function () {
      nw.Window.get().minimize();
    },
    windowRestore: function () {
      nw.Window.get().restore();
    },
    windowMaximize: function () {
      nw.Window.get().maximize();
    },
    windowClose: function () {
      nw.Window.get().close();
    }
  },
  created: function () {
    nw.Window.get().on('maximize', () => {
      this.maximized = true;
    });
    nw.Window.get().on('restore', () => {
      this.maximized = false;
    });
  }
};
</script>
