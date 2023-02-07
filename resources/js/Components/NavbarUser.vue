<template>
  <Disclosure as="nav" class="bg-white drop-shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-gray-400
              hover:bg-gray-700 hover:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex flex-1
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex flex-shrink-0 items-center mr-16">
            <img
              class="block h-12 w-auto lg:hidden"
              src="../../../public/Logo-ENT-Gelap.svg"
              alt="Logo ENT"
            />
            <img
              class="hidden h-12 w-auto lg:block"
              src="../../../public/Logo-ENT-Gelap.svg"
              alt="Logo ENT"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block mt-1">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'text-black '
                    : 'text-black hover:bg-white hover:text-black hover:font-bold',
                  'px-3 py-2 rounded-md text-sm font-semibold',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton class="flex">
                    <span
                      class="
                        py-2
                        rounded-md
                        text-sm
                        font-medium
                        hover:font-bold
                      "
                    ></span>
                    <ChevronDownIcon class="w-3 h-3 ml-1 mt-3" />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="
                      absolute
                      mt-2
                      w-48
                      origin-top-center
                      rounded-md
                      bg-white
                      py-1
                      shadow-lg
                      ring-1 ring-black ring-opacity-5
                      focus:outline-none
                    "
                  >
                    <MenuItem
                      v-slot="{ active }"
                      v-for="category in categories"
                      :key="category.name"
                    >
                      <a
                        :href="category.href"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >{{ category.name }}</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
        <Button
          class="
            bg-sky-900
            rounded-full
            px-6
            py-1
            font-medium
            hover:font-bold hover:bg-sky-300
            text-sm
            normal-case
            text-white
          "
          >Login</Button
        >
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
  
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
const navigation = [
  { name: "Article", href: "#article", current: false },
  { name: "Forum", href: "#forum", current: false },
  { name: "Video", href: "#video", current: false },
  { name: "About", href: "#about", current: false },
];
const categories = [
  { name: "Lifestyle", href: "#lifestyle" },
  { name: "Hiburan", href: "#hiburan" },
  { name: "Teknologi", href: "#teknologi" },
  { name: "Otomotif", href: "#otomotif" },
];
</script>
