<script setup lang="ts">
import { ref } from 'vue';
import NButton from './NButton.vue';
import NLanguageSwitcher from './NLanguageSwitcher.vue';
const isOpen = ref(false);
const isCollapsed = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div>
    <button 
      @click="toggleSidebar"
      class="lg:hidden fixed top-24 left-4 z-50 bg-[#2F3136] p-2 rounded-full"
    >
      <svg 
        class="w-6 h-6 text-white"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          v-if="!isOpen"
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path 
          v-else
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div 
      class="fixed top-0 left-0 h-full bg-[#2F3136] transition-all duration-300 z-40 pt-20"
      :class="[
        isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full',
        'lg:translate-x-0',
        isCollapsed ? 'lg:w-20' : 'lg:w-64'
      ]"
    >
      <button
        @click="toggleCollapse"
        class="hidden lg:block absolute -right-3 top-24 bg-[#2F3136] p-2 rounded-full"
      >
        <svg
          class="w-6 h-6 text-white transform transition-transform"
          :class="{ 'rotate-180': isCollapsed }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div class="p-4 flex flex-col gap-4 justify-between h-full">
        <div class="flex flex-col gap-2">
          <NButton 
            type="secondary" 
            :label="!isCollapsed ? $t('sidebar.home') : ''" 
            textAlign="left"
            @click="$router.push('/')"
          >
            <template #icon>
              <img class="w-6 h-6" src="../assets/note.svg" alt="Home" />
            </template>
          </NButton>  
          <NButton 
            type="secondary" 
            :label="!isCollapsed ? $t('sidebar.profile') : ''" 
            textAlign="left"
            @click="$router.push('/profile')"
          >
            <template #icon>
              <img class="w-6 h-6" src="../assets/helm.svg" alt="Profile" />
            </template>
          </NButton>

          <NButton 
            type="secondary" 
            :label="!isCollapsed ? $t('sidebar.categories') : ''" 
            textAlign="left"
            @click="$router.push('/categories')"
          >
            <template #icon>
              <img class="w-6 h-6" src="../assets/blue_scroll.svg" alt="About" />
            </template>
          </NButton>
        </div>

        <div class="mt-auto mb-4 flex justify-center">
          <NLanguageSwitcher :isCollapsed="isCollapsed" />
        </div>
      </div>
    </div>

    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
      @click="toggleSidebar"
    ></div>
  </div>
</template>