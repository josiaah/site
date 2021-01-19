<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-no-shrink mr-6">
      <a href="/">
      <img src="~/assets/img/ga.png" class="w-20 h-20" />
      </a>
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-xl sm:flex-grow">
        <a
          href="/groups"
          class="no-underline montserrat font-medium text-gray-800 block mt-4 sm:inline-block sm:mt-0 mr-4"
        >
          Groups
        </a>
        <a
          href="/support"
          class="no-underline montserrat font-medium text-gray-800 block mt-4 sm:inline-block sm:mt-0 mr-4"
        >
          Support
        </a>
        <a
          href="/partner"
          class="no-underline montserrat font-medium text-gray-800 block mt-4 sm:inline-block sm:mt-0 mr-4"
        >
          Partnerships
        </a>
        <a
          href="/jobs"
          class="no-underline montserrat font-medium text-gray-800 block mt-4 sm:inline-block sm:mt-0 mr-4"
        >
          Jobs
        </a>
      </div>
      <div>
        <a
          href="https://www.roblox.com/groups/7324717/B-A-M-Games"
          class="uppercase text-white no-underline inline-block font-bold text-md px-6 py-4 leading-none bg-green-500 hover:bg-green-600 rounded mt-4 sm:mt-0"
          >Join the Group!</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle: function () {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
</style>
