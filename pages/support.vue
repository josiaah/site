<template>
  <div class="flex flex-wrap items-center justify-center py-12 px-4">
    <div class="flex flex-col items-center mx-auto max-w-xl">
      <p class="text-center text-md leading-relaxed">
        Need a hand? we are here to help, contact us using the email below and
        our team will get back to you as soon as they can!
        <span class="font-bold">Please allow 3-5 Working days.</span>
      </p>
      <span class="text-center leading-tight tracking-tight mt-10"
        >Contact us using our support email: ​
        <span class="font-bold">support@bamgames.net</span>
      </span>
      <p class="text-center leading-tight tracking-tight mt-10">
        Reporting a bug? or looking for a faster response, contact us through
        using our discord server, this is an more effective way and our team
        will be able to respond quicker.
      </p>
      <a class="bg-blurple px-4 py-2 rounded mt-6 text-white font-semibold">
        <i class="fab fa-discord"></i>
        Get in touch Via Discord</a
      >
      <h1 class="text-center mt-8 mb-8 tracking-tight leading-tight text-2xl">
        Join Server You can also message the creators on twitter this may be an
        easier way to reach out directly!
      </h1>
      <div class="flex flex-row justify-between bg-gray-400 px-4 py-2 mb-10">
        <span class="text-indigo-600 text-xl mr-4">@ImpulsiveDev</span>
        <span class="text-indigo-600 text-xl">@Ahmedmohde_Dev </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-blurple {
  background: #7289da;
}
</style>
