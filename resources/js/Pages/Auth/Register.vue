<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>
<script>
export default {
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        submit() {
            // Votre logique de soumission du formulaire ici
        },
    },
};
</script>

<template>
    <Head title="Inscription" />
    <div class="flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div
            class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
            <svg
                class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                viewBox="0 0 100 100"
                fill="currentColor"
                preserveAspectRatio="none slice"
            >
                <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>

            <img
                class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src="/assets/FontLogin.avif"
                alt=""
            />
        </div>

        <div
            class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div
                    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
                >
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            class="mx-auto h-10 w-auto"
                            src="/assets/logoRF.png"
                        />
                        <h2
                            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                        >
                            Créez votre compte.
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" @submit.prevent="submit">
                            <div>
                                <InputLabel for="name" value="Nom" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.name"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.name"
                                />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autocomplete="username"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    for="password"
                                    value="Mot de passe"
                                />
                                <div class="relative">
                                    <input
                                        :type="
                                            showPassword ? 'text' : 'password'
                                        "
                                        v-model="form.password"
                                        id="password"
                                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        autocomplete="new-password"
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
                                                :d="
                                                    showPassword
                                                        ? 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                                                        : 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                                                "
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
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    for="password_confirmation"
                                    value="Confirmez le mot de passe"
                                />
                                <div class="relative">
                                    <input
                                        :type="
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        "
                                        v-model="form.password_confirmation"
                                        id="password_confirmation"
                                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        autocomplete="new-password"
                                    />
                                    <button
                                        @click="toggleConfirmPasswordVisibility"
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
                                                :d="
                                                    showConfirmPassword
                                                        ? 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                                                        : 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                                                "
                                            />
                                            <path
                                                v-if="!showConfirmPassword"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password_confirmation"
                                />
                            </div>

                            <div>
                                <PrimaryButton
                                    class=""
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    S'inscrire
                                </PrimaryButton>
                            </div>
                        </form>

                        <Link
                            :href="route('login')"
                            class="font-semibold leading-6 text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:focus:ring-offset-gray-800"
                        >
                            Déjà inscrit ?
                            <a
                                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Connectez-vous ici.
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- 
<template>
    <Head title="Inscription" />
    <div class="flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div
            class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
            <svg
                class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                viewBox="0 0 100 100"
                fill="currentColor"
                preserveAspectRatio="none slice"
            >
                <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>

            <img
                class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src="/assets/FontLogin.avif"
                alt=""
            />
        </div>

        <div
            class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div
                    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
                >
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            class="mx-auto h-10 w-auto"
                            src="/assets/logoRF.png"
                        />
                        <h2
                            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
                        >
                            Créez votre compte.
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6" @submit.prevent="submit">
                            <div>
                                <InputLabel for="name" value="Nom" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.name"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.name"
                                />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autocomplete="username"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    for="password"
                                    value="Mot de passe"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    v-model="form.password"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    for="password_confirmation"
                                    value="Confirmez le mot de passe"
                                />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    class="mt-1 block w-full"
                                    v-model="form.password_confirmation"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password_confirmation"
                                />
                            </div>

                            <div>
                                <PrimaryButton
                                    class=""
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    S'inscrire
                                </PrimaryButton>
                            </div>
                        </form>

                        <Link
                            :href="route('login')"
                            class="font-semibold leading-6 text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:focus:ring-offset-gray-800"
                        >
                            Déjà inscrit ?
                            <a
                                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Connectez-vous ici.</a
                            >
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->
