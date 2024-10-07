<script setup>

import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
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
    <div class="relative flex flex-col lg:flex-row min-h-screen">
        <!-- Partie formulaire de connexion -->
        <div class="relative flex flex-col items-center justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:max-w-screen-xl lg:justify-start lg:w-5/12 z-10 bg-white ounded-lg p-8">
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div class="flex min-h-full flex-1 flex-col justify-center">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                        <img class="mx-auto h-10 w-auto" src="/assets/logoRF.png" />
                        <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Accédez à votre compte
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" @submit.prevent="submit">
                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autofocus
                                    autocomplete="email"
                                />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div class="mt-2">
                                <InputLabel for="password" value="Password" />
                                <div class="relative">
                                    <input
                                        :type="showPassword ? 'text' : 'password'"
                                        v-model="form.password"
                                        id="password"
                                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Entrez votre mot de passe"
                                        required
                                        autocomplete="current-password"
                                    />
                                    <button
                                        @click="togglePasswordVisibility"
                                        type="button"
                                        class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-5 h-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                :d="showPassword
                                                    ? 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                                                    : 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'"
                                            />
                                            <path
                                                v-if="!showPassword"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>

                            <Link
                                v-if="canResetPassword"
                                :href="route('password.request')"
                                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Mot de passe oublié ?
                            </Link>

                            <div>
                                <PrimaryButton
                                    class=""
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    Se connecter
                                </PrimaryButton>
                            </div>
                        </form>

                        <Link
                            :href="route('register')"
                            class="font-semibold leading-6 text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:focus:ring-offset-gray-800"
                        >
                            Vous n'avez pas de compte
                            <a class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">S'inscrire</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Partie image -->
        <div class="relative hidden lg:block lg:w-7/12 lg:max-w-full z-0">
            <svg
                class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                viewBox="0 0 100 100"
                fill="currentColor"
                preserveAspectRatio="none slice"
            >
                <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>
            <img
                class="object-cover w-full h-screen rounded-lg lg:rounded-none lg:shadow-none"
                src="/assets/IMG_0745.png"
                alt=""
            />
        </div>
    </div>
</template>
