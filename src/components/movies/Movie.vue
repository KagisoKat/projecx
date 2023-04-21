<template>
  <div class="flex">

    <div class="flex container mx-auto mt-20">
      <img
        src="@/assets/images/joker.jpg"
        style="height: 350px"
        class="hover:opacity-75"
      />
      <div class="ml-24">
        <h1 class="text-4xl font-bold">Joker</h1>
        <span class="text-gray-500"
          >82% | 2019-10-02 Crime, Thriller Drama</span
        >
        <p class="mt-5">
          During the 1980s, a failed standup comdeian is driven insane and turns
          to a life of crime and chaos in Gotham city while becoming an infamous
          psychopathic crime figure.
        </p>
        <div class="mt-3">
          <span><h3 class="text-lg font-bold">Featured cast</h3></span>

          <div class="flex">
            <div class="mt-5 flex flex-col mr-5">
              <span>Scot Silver</span>
              <span class="text-gray-500"> writer</span>
            </div>

            <div class="mt-5 flex flex-col">
              <span>Bruce Berman </span>
              <span class="text-gray-500">Executive producer</span>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <a href="#" class="rounded bg-red-700 px-3 py-3 inline-flex">
            <svg
              style="color: white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-play mt-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                fill="white"
              ></path>
            </svg>
            Play trailer
          </a>

          <a href="#" class="rounded bg-red-700 px-3 py-3 inline-flex ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart mt-1 mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
            Favourite
          </a>
        </div>
      </div>
    </div>
  </div>


  <Cast />
  <Images />
</template>

<script>

import Cast from './Cast.vue'
import Images from './Images.vue'
export default {
    components:{
        Cast,
        Images
    }
};
</script>