import React from "react";
import logo from "/public/locumlogo.png";
import Image from "next/image";

export default function footer() {
  return (
    <div class="flex justify-center">
      <footer class=" shadow-md p-5 w-screen bg-gradient-to-t from-sky-200 px-7 rounded-md shadow-3xl md:pt-6 md:pt-8 dark:bg-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 "
          >
            <Image
              src={logo}
              class="mr-2 pr-2 h-6 sm:h-9"
              alt="Locum Logo"
              width="75vw"
              height="75vh"
            />
            <span class="self-center ml-1 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Locum
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" class="hover:underline">
            Locum™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
