<template>
  <section class="py-12 px-4 text-center items-center bg mb-10">
    <div class="w-full max-w-2xl mx-auto py-10">
      <h2
        class="capitalize text-gray-800 text-5xl mt-2 mb-2 leading-tight tracking-tight font-medium font-heading"
      >
        Explore new opportunities!
      </h2>
      <p
        class="mb-8 text-gray-700 tracking-relaxed font-semibold leading-relaxed"
      >
        Here at BamGames the community is safe for everyone, no need to worry
        about cyber bullying on our watch. We are reinventing the way people
        play Roblox for future generations.
      </p>
      <div class="text-center">
        <a
          class="uppercase inline-block mb-2 py-4 px-8 mr-6 leading-none text-white bg-green-500 hover:bg-green-600 font-semibold rounded shadow"
          href="https://www.roblox.com/groups/7324717/B-A-M-Games"
          >Join the group!</a
        ><a
          class="uppercase inline-block sm:mt-4 mt-0 py-4 px-8 mr-6 leading-none text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded shadow"
          href="/partners"
        >
          View our partners
        </a>
      </div>
      <div class="mt-20">
        <div
          class="flex flex-wrap items-center justify-center md:flex-row flex-col"
        >
          <h1
            class="capitalize text-4xl font-bold shadow-md text-red-600 hover:text-red-700 tracking-tight leading-tight"
          >
            Our Achievement Statistics!
          </h1>
        </div>
        <div class="max-w-xl px-4 py-4 mx-auto">
          <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
            <div
              class="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded"
            >
              <div>
                <p class="text-3xl font-semibold text-center text-gray-800">
                  8,912,021
                </p>
                <p
                  class="text-lg text-center font-medium text-gray-800 hover:text-gray-700"
                >
                  Game Plays
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
            >
              <div>
                <p class="text-3xl font-semibold text-center text-gray-800">
                  {{ group.memberCount + two.memberCount }}
                </p>
                <p
                  class="text-lg text-center font-medium text-gray-800 hover:text-gray-700"
                >
                  Group Members
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
            >
              <div>
                <p class="text-3xl font-semibold text-center text-gray-800">
                  12,840,31
                </p>
                <p
                  class="text-lg text-center tracking-tight leading-tight font-medium text-gray-800 hover:text-gray-700"
                >
                  Youtube Views
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const group = await $http.$get(
      `https://groups.roblox.com/v1/groups/7324717`
    );
    const two = await $http.$get(`https://groups.roblox.com/v1/groups/5243967`);
    return { group, two };
  },
};
</script>

<style scoped>
.bg {
  background-image: url("~assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 768px) and (max-width: 991px) {
  .bg {
    background-image: none;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .bg {
    background-image: none;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .bg {
    background-image: none;
  }
}
</style>
