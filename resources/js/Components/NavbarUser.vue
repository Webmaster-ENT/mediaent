<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
          <div class="ml-1 flex flex-shrink-0 items-center">
            <a href="/">
              <img
                class="block h-9 mr-4 w-auto lg:hidden"
                src="../../../public/pens1.png"
                alt="Logo pens"
              />
            </a>
            <a href="/">
              <img
                class="block h-12 w-auto lg:hidden"
                src="../../../public/Logo-ENT-Gelap.svg"
                alt="Logo ENT"
              />
            </a>
          </div>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <a href="/">
              <img
                class="hidden h-9 mr-4 w-auto lg:block"
                src="../../../public/pens1.png"
                alt="Logo PENS"
              />
            </a>
            <a href="/">
              <img
                class="hidden h-12 w-auto lg:block"
                src="../../../public/Logo-ENT-Gelap.svg"
                alt="Logo ENT"
              />
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block mt-1">
            <div class="flex">
              <Link
                key="article"
                :href="route('all-article.allarticle')"
                class="pl-3 py-2 rounded-md text-sm font-medium hover:font-bold"
                >Article</Link
              >
              <div class="relative">
                <Dropdown align="left" width="48">
                  <template #trigger>
                    <span class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out sm:hidden"
                      >
                        <UserIcon class="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        class="items-center justify-center mt-3 mr-7 font-medium hover:font-black text-sm normal-case transition duration-150 ease-in-out hidden sm:inline-flex"
                      >
                        <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
                      </button>
                    </span>
                  </template>

                  <template #content>
                    <DropdownLink :href="route('category.show', 1)" as="button">
                      Lifestyle
                    </DropdownLink>
                    <DropdownLink :href="route('category.show', 2)" as="button">
                      Hiburan
                    </DropdownLink>
                    <DropdownLink :href="route('category.show', 3)" as="button">
                      Teknologi
                    </DropdownLink>
                    <DropdownLink :href="route('category.show', 4)" as="button">
                      Explore
                    </DropdownLink>
                  </template>
                </Dropdown>
              </div>
              <Link
                key="forum"
                :href="route('all-forum.allforum')"
                class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                >Forum</Link
              >
              <Link
                key="video"
                :href="route('all-video.allvideo')"
                class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                >Video</Link
              >
              <a
                href="https://online.fliphtml5.com/jrzcd/ciqi/"
                class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                target="__blank"
                >CoreMagz</a
              >
              <Link
                key="about"
                :href="route('about.about')"
                class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                >About</Link
              >
            </div>
          </div>
        </div>

        <div v-if="$page.props.auth.user != null" class="flex">
          <div
            v-show="
              $page.props.auth.user.name === 'Superadmin' ||
              $page.props.auth.user.name === 'maya' ||
              $page.props.auth.user.name === 'arman' ||
              $page.props.auth.user.name === 'erina' ||
              $page.props.auth.user.name === 'harun'
            "
          >
            <Link
              class="bg-sky-900 rounded-full px-4 py-1 my-auto font-medium hover:font-bold hover:bg-yellow-700 text-sm normal-case text-white"
              href="/dashboard"
              >Dashboard</Link
            >
          </div>

          <div class="relative">
            <Dropdown align="right" width="48">
              <template #trigger>
                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center bg-sky-300 rounded-full px-4 py-1 mr-4 ml-2 my-auto font-semibold hover:font-bold hover:bg-yellow-700 text-xs normal-case text-sky-900 hover:text-white transition duration-150 ease-in-out sm:hidden"
                  >
                    <span class="flex justify-between items-center capitalize">
                      {{ $page.props.auth.user.name.split(" ")[0] }}
                    </span>
                    <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
                  </button>
                  <button
                    type="button"
                    class="ml-4 items-center justify-center bg-sky-300 rounded-full px-4 py-1 my-auto font-medium hover:font-bold hover:bg-yellow-700 text-sm normal-case text-sky-900 hover:text-white transition duration-150 ease-in-out hidden sm:inline-flex"
                  >
                    <span class="flex justify-between items-center capitalize">
                      {{ $page.props.auth.user.name.split(" ")[0] }}
                    </span>
                    <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
                  </button>
                </span>
              </template>

              <template #content>
                <DropdownLink :href="route('logout')" method="post" as="button">
                  {{ lang().label.logout }}
                </DropdownLink>
              </template>
            </Dropdown>
          </div>
        </div>
        <div v-else>
          <Link
            class="bg-sky-900 rounded-full px-4 py-1 mr-3 my-auto font-medium hover:font-bold hover:bg-yellow-700 text-sm normal-case text-white"
            href="/login"
            >Login</Link
          >
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <div class="text-center mx-10">
          <div class="flex">
            <DisclosureButton
              key="article"
              as="a"
              :href="route('all-article.allarticle')"
              class="pl-7 py-2 rounded-md text-sm font-medium hover:font-bold"
              >Article</DisclosureButton
            >
            <div class="relative">
              <Dropdown align="left" width="48">
                <template #trigger>
                  <span class="inline-flex rounded-md">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center mt-3 mr-7 font-medium hover:font-bold text-sm normal-case hover:text-white transition duration-150 ease-in-out sm:hidden"
                    >
                      <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
                      <!-- <UserIcon class="h-4 w-4" /> -->
                    </button>
                    <button
                      type="button"
                      class="items-center justify-center mt-3 mr-7 font-medium hover:font-black text-sm normal-case transition duration-150 ease-in-out hidden sm:inline-flex"
                    >
                      <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
                    </button>
                  </span>
                </template>

                <template #content>
                  <DropdownLink :href="route('category.show', 1)" as="button">
                    Lifestyle
                  </DropdownLink>
                  <DropdownLink :href="route('category.show', 2)" as="button">
                    Hiburan
                  </DropdownLink>
                  <DropdownLink :href="route('category.show', 3)" as="button">
                    Teknologi
                  </DropdownLink>
                  <DropdownLink :href="route('category.show', 4)" as="button">
                    Explore
                  </DropdownLink>
                </template>
              </Dropdown>
            </div>

            <DisclosureButton
              key="forum"
              as="a"
              :href="route('all-forum.allforum')"
              class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
              >Forum</DisclosureButton
            >

            <DisclosureButton
              key="video"
              as="a"
              :href="route('all-video.allvideo')"
              class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
              >Video</DisclosureButton
            >
          </div>
        </div>
        <div class="text-center">
          <DisclosureButton
            key="coremagz"
            as="a"
            href="https://online.fliphtml5.com/jrzcd/ciqi/"
            class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
            >CoreMagz</DisclosureButton
          >
          <DisclosureButton
            key="about"
            as="a"
            :href="route('about.about')"
            class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
            >About</DisclosureButton
          >
        </div>
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
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon, UserIcon } from "@heroicons/vue/24/solid";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
</script>
