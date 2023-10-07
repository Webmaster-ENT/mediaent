<script setup>
import {
  ClipboardDocumentListIcon,
  PlayIcon,
  HomeIcon,
  UserIcon,
  CheckBadgeIcon,
  KeyIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/solid";
import { Link } from "@inertiajs/inertia-vue3";
</script>
<template>
  <div class="text-gray-300 pt-5 pb-20">
    <div class="flex justify-center">
      <div
        class="rounded-full flex items-center justify-center bg-primary text-gray-300 w-24 h-24 text-4xl uppercase"
      >
        {{
          $page.props.auth.user.name
            .match(/(^\S\S?|\b\S)?/g)
            .join("")
            .match(/(^\S|\S$)?/g)
            .join("")
        }}
      </div>
    </div>
    <div class="text-center py-3 px-4 border-b border-gray-700">
      <span class="flex items-center justify-center">
        <p class="truncate text-md">{{ $page.props.auth.user.name }}</p>
        <div>
          <CheckBadgeIcon
            class="ml-[2px] w-4 h-4"
            v-show="$page.props.auth.user.email_verified_at"
          />
        </div>
      </span>
      <span class="block text-sm font-medium truncate">{{
        $page.props.auth.user.roles[0].name
      }}</span>
    </div>
    <ul class="space-y-2 my-4">
      <li
        class="bg-gray-700 text-white rounded-lg hover:bg-primary"
        :class="{ 'bg-primary': route().current('dashboard') }"
      >
        <Link :href="route('dashboard')" class="flex items-center py-2 px-4">
          <HomeIcon class="w-6 h-5" />
          <span class="ml-3">Dashboard</span>
        </Link>
      </li>
      <!-- user -->
      <li class="py-2">
        <p>Site</p>
      </li>
      <li
        class="bg-gray-700 text-white rounded-lg hover:bg-primary"
        :class="{ 'bg-primary': route().current('article.index') }"
      >
        <Link
          :href="route('article.index')"
          class="flex items-center py-2 px-4"
        >
          <ClipboardDocumentListIcon class="w-6 h-5" />
          <span class="ml-3">Article</span>
        </Link>
      </li>
      <li
        class="bg-gray-700 text-white rounded-lg hover:bg-primary"
        :class="{ 'bg-primary': route().current('forum.index') }"
      >
        <Link :href="route('forum.index')" class="flex items-center py-2 px-4">
          <ChatBubbleBottomCenterTextIcon class="w-6 h-5" />
          <span class="ml-3">Forum</span>
        </Link>
      </li>
      <li
        class="bg-gray-700 text-white rounded-lg hover:bg-primary"
        :class="{ 'bg-primary': route().current('video.index') }"
      >
        <Link :href="route('video.index')" class="flex items-center py-2 px-4">
          <PlayIcon class="w-6 h-5" />
          <span class="ml-3">Video</span>
        </Link>
      </li>
      <!-- user -->
      <!-- <li v-show="can(['read user'])" class="py-2">
                <p>{{ lang().label.data }}</p>
            </li>
            <li
                v-show="can(['read user'])"
                class="bg-primary text-white rounded-lg hover:bg-primary"
                :class="{ 'bg-gray-700': !route().current('user.index') }"
            >
                <Link
                    :href="route('user.index')"
                    class="flex items-center py-2 px-4"
                >
                    <UserIcon class="w-6 h-5" />
                    <span class="ml-3">{{ lang().label.user }}</span>
                </Link>
            </li>
            <li v-show="can(['read role', 'read permission'])" class="py-2">
                <p>{{ lang().label.access }}</p>
            </li>
            <li
                v-show="can(['read role'])"
                class="bg-primary text-white rounded-lg hover:bg-primary"
                :class="{ 'bg-gray-700': !route().current('role.index') }"
            >
                <Link
                    :href="route('role.index')"
                    class="flex items-center py-2 px-4"
                >
                    <KeyIcon class="w-6 h-5" />
                    <span class="ml-3">{{ lang().label.role }}</span>
                </Link>
            </li>
            <li
                v-show="can(['read permission'])"
                class="bg-primary text-white rounded-lg hover:bg-primary"
                :class="{ 'bg-gray-700': !route().current('permission.index') }"
            >
                <Link
                    :href="route('permission.index')"
                    class="flex items-center py-2 px-4"
                >
                    <ShieldCheckIcon class="w-6 h-5" />
                    <span class="ml-3">{{ lang().label.permission }}</span>
                </Link>
            </li> -->
    </ul>
  </div>
</template>
