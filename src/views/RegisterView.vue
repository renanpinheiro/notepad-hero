<script setup lang="ts">
import { ref } from 'vue';
import NGoogleButton from '../components/NGoogleButton.vue';
import NDiscordButton from '../components/NDiscordButton.vue';
import NInput from '../components/NInput.vue';
import useAuth from '../composables/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { signUpWithEmail } = useAuth();

const form = ref({
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
});

const handleRegister = async () => {
  await signUpWithEmail(form.value);

  router.push('/login');
};
</script>

<template>
  <div class="min-h-screen flex overflow-y-auto">
    <div class="hidden lg:block lg:w-1/2 relative">
      <img
        src="../assets/login.gif"
        alt="Dark Souls Pixel Art Animation"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute top-0 right-0 h-full w-96 bg-gradient-to-r from-transparent via-[#5865f2]/70 to-[#5865f2]"
      ></div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-white font-better_vcr">
            {{ $t('register.title') }}
          </h2>
          <p class="mt-2 text-sm text-gray-400">
            {{ $t('register.subtitle') }}
          </p>
        </div>

        <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
          <div class="rounded-md shadow-sm space-y-4 overflow-auto">
            <div>
              <NInput
                property="email"
                :label="$t('register.email')"
                type="email"
                :placeholder="$t('register.email')"
                :required="true"
                :modelValue="form.email"
                :customClass="'appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500'"
                :customStyle="'w-full'"
                :usePixelFont="true"
              />
            </div>
            <div>
              <NInput
                property="name"
                :label="$t('register.name')"
                type="text"
                :placeholder="$t('register.name')"
                :required="true"
                :modelValue="form.name"
                :customClass="'appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500'"
                :customStyle="'w-full'"
                :usePixelFont="true"
              />
            </div>
            <div>
              <label for="password" class="font-better_vcr">{{ $t('register.password') }}</label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                :placeholder="$t('register.password')"
              />
            </div>
            <div>
              <label for="confirm-password" class="font-better_vcr">{{
                $t('register.confirmPassword')
              }}</label>
              <input
                id="confirm-password"
                v-model="form.confirmPassword"
                type="password"
                required
                class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                :placeholder="$t('register.confirmPassword')"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="font-better_vcr group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {{ $t('register.signUp') }}
            </button>
          </div>

          <div class="flex flex-col gap-2 justify-center">
            <NGoogleButton />
            <NDiscordButton />
          </div>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-700"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="font-better_vcr px-2 bg-gray-900 text-gray-400">
                {{ $t('register.alreadyRegistered') }}
              </span>
            </div>
          </div>

          <div>
            <router-link
              to="/login"
              class="font-better_vcr group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {{ $t('register.signIn') }}
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
