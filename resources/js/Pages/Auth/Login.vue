<script setup>
import InputError from "@/Components/ui/InputError.vue";
import PrimaryButton from "@/Components/ui/PrimaryButton.vue";
import TextInput from "@/Components/ui/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";


defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<script>
export default {
    data() {
        return {
            showPassword: false,
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>

<template>

    <Head title="Connexion" />
    <div class="min-h-screen bg-black text-white flex">
        <!-- Left side - Form -->
        <div class="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center">
            <div class="w-full max-w-md">
                <!-- Logo -->
                <div>
                    <img class="w-mx-auto" src="/assets/logoRF.png" alt="Logo" />
                </div>

                <div class="mt-12">


                    <!-- Login Form -->
                    <form @submit.prevent="submit">
                        <TextInput id="email" type="email"
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            v-model="form.email" required autofocus autocomplete="email" placeholder="Email" />
                        <InputError class="mt-2" :message="form.errors.email" />

                        <div class="relative mt-5">
                            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" id="password"
                                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                                required autocomplete="current-password" placeholder="Mot de passe" />
                            <button @click="togglePasswordVisibility" type="button"
                                class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </button>
                        </div>
                        <InputError class="mt-2" :message="form.errors.password" />

                        <PrimaryButton
                            class="mt-5 tracking-wide font-semibold bg-blue-600 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <span class="ml-3">Se connecter</span>
                        </PrimaryButton>

                        <div class="mt-6 text-center">
                            <Link v-if="canResetPassword" :href="route('password.request')"
                                class="text-sm text-gray-400 hover:text-white">
                            Mot de passe oublié ?
                            </Link>
                        </div>

                        <div class="mt-6 text-center">
                            <Link :href="route('register')" class="text-sm text-gray-400">
                            Vous n'avez pas de compte ?
                            <span class="text-blue-500 hover:text-blue-400">S'inscrire</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Right side - Image -->
        <div class="hidden lg:block lg:w-1/2">
            <div class="h-full w-full bg-cover bg-center bg-no-repeat"
                style="background-image: url('/assets/IMG_0745.png');">
            </div>
        </div>
    </div>
</template>
