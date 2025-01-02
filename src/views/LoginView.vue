<script setup lang="ts">
import { ref } from 'vue';
import NGoogleButton from '../components/NGoogleButton.vue';
import NDiscordButton from '../components/NDiscordButton.vue';
import NDialog from '../components/NDialog.vue';
import NButton from '../components/NButton.vue';
import useAuth from '../composables/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const { signInWithEmail } = useAuth();

const warningDialog = ref(true);

const form = ref({
  email: '',
  password: '',
});

const handleLogin = async () => {
  await signInWithEmail(form.value);

  router.push('/');
};
</script>

<template>
  <NDialog :isOpen="warningDialog" title="Notepad Hero" size="md" @close="warningDialog = false">
    <b>Aviso:</b> Este é um projeto experimental e ainda não está pronto para uso em produção.
    <br />
    <br />
    <b
      >Embora seja possível criar sua conta, os dados salvos podem ser perdidos e a aplicação pode
      ser interrompida sem aviso prévio.</b
    >
  </NDialog>
  <div class="min-h-screen flex">
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
            {{ $t('login.title') }}
          </h2>
          <p class="mt-2 text-sm text-gray-400">
            {{ $t('login.subtitle') }}
          </p>
        </div>

        <div class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm space-y-4">
            <div>
              <label for="email" class="font-better_vcr">{{ $t('login.email') }}</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                :placeholder="$t('login.email')"
              />
            </div>
            <div>
              <label for="password" class="font-better_vcr">{{ $t('login.password') }}</label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                :placeholder="$t('login.password')"
              />
            </div>
          </div>

          <div class="flex justify-center">
            <button class="font-better_vcr text-sm text-gray-400 hover:text-gray-300">
              {{ $t('login.forgotPassword') }}
            </button>
          </div>

          <div>
            <NButton
              :label="$t('login.signIn')"
              @click="handleLogin"
              textAlign="center"
              customClass="w-full bg-purple-600 hover:bg-purple-700"
              type="primary"
            >
              <template #icon>
                <img class="w-6 h-6" src="../assets/golden_key.svg" alt="Login" />
              </template>
            </NButton>
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
              <span class="font-better_vcr px-2 bg-gray-900 text-gray-400">{{
                $t('login.notRegistered')
              }}</span>
            </div>
          </div>

          <div>
            <router-link
              to="/register"
              class="font-better_vcr group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {{ $t('login.signUp') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
