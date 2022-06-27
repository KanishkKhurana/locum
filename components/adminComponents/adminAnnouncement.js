import React from "react";

export default function AdminAnnouncement() {
  return (
    <div class="px-5 mb-5">
    <div class="h-1  md:inline hidden">
    <div id="default-carousel" class="relative" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div class="overflow-hidden relative h-56  rounded-lg sm:h-24 xl:h-32 2xl:h-96">
        {/* <!-- Item 1 --> */}
        <div
          class="hidden duration-700 ease-in-out bg-gradient-to-r from-cyan-500 to-blue-500"
          data-carousel-item
        >
          <span class="absolute text-yellow-200 top-7 left-40 text-[1.5rem] font-semibold text-white -translate-x-1/2 -translate-y-1/2  dark:text-gray-800">
            Announcement
          </span>
          <span class="absolute top-14 left-1/2 font-semibold text-[1rem] text-white -translate-x-1/2 -translate-y-1/2  dark:text-gray-800">
            New features coming to admin panel soon
          </span>
        </div>
        {/* <!-- Item 2 --> */}
        <div
          class="hidden duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          data-carousel-item
        >
          <span class="absolute text-yellow-200 top-7 left-40 text-[1.5rem] font-semibold text-white -translate-x-1/2 -translate-y-1/2  dark:text-gray-800">
            Announcement
          </span>
          <span class="absolute top-14 left-1/2 font-semibold text-[1rem] text-white -translate-x-1/2 -translate-y-1/2  dark:text-gray-800">
            enchancements after beta version releases
          </span>
        </div>
        {/* <!-- Item 3 --> */}
        <div
          class="hidden duration-700 ease-in-out bg-gradient-to-r from-green-400 to-blue-500"
          data-carousel-item
        >
          <span class="absolute text-yellow-200 top-7 left-40 text-[1.5rem] font-semibold text-white -translate-x-1/2 -translate-y-1/2  dark:text-gray-800">
            Announcement
          </span>
          <span class="absolute top-14 left-1/2 font-semibold text-[1rem] text-white -translate-x-1/2 -translate-y-1/2 dark:text-gray-800">
            let us know if anything needs improvements
          </span>
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div class="flex  absolute bottom-3 left-1/2 z-30 space-x-3 -translate-x-1/2 ">
        <button
          type="button"
          class="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
    </div>
    </div>
  );
}
