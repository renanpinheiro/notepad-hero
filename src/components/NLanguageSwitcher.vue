<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import UnitedKingdomFlag from '../assets/flags/united_kingdom.svg'
import BrazilFlag from '../assets/flags/brazil.svg'
import SpainFlag from '../assets/flags/spain.svg'
import GermanyFlag from '../assets/flags/germany.svg'

const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false
  }
})

const { locale } = useI18n()

const languages = [
  { code: 'en', label: 'EN', flag: UnitedKingdomFlag },
  { code: 'pt', label: 'PT', flag: BrazilFlag },
  { code: 'es', label: 'ES', flag: SpainFlag },
  { code: 'de', label: 'DE', flag: GermanyFlag }
]

const toggleLanguage = () => {
  const currentIndex = languages.findIndex(lang => lang.code === locale.value)
  const nextIndex = (currentIndex + 1) % languages.length
  locale.value = languages[nextIndex].code
}

const getCurrentLanguage = () => {
  return languages.find(lang => lang.code === locale.value)
}
</script>

<template>
    <button 
    @click="toggleLanguage"
    class="bg-[#2F3136] px-4 py-2 rounded-full text-white font-better_vcr flex items-center gap-2"
    >
    <img 
    :src="getCurrentLanguage()?.flag" 
    :alt="getCurrentLanguage()?.code"
    class="w-6 h-6"
    />
    {{ props.isCollapsed ? '' : getCurrentLanguage()?.label }}
  </button>
</template>