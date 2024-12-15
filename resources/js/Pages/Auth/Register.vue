<script setup>
import InputError from "@/Components/ui/InputError.vue";
import PrimaryButton from "@/Components/ui/PrimaryButton.vue";
import TextInput from "@/Components/ui/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ref } from 'vue';
import { PencilIcon } from '@heroicons/vue/24/solid';

const avatarPreview = ref(null);
const coverPreview = ref(null);
const avatarInput = ref(null);
const coverInput = ref(null);

const form = useForm({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: null,
    cover: null,
});

const onAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.avatar = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            avatarPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const onCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        form.cover = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            coverPreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const submit = () => {
    form.post(route("register"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            avatarPreview.value = null;
            coverPreview.value = null;
        },
    });
};
</script>

<script>
export default {
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
    },
};
</script>

<template>

    <Head title="Inscription" />
    <div class="min-h-screen bg-black text-white flex">
        <!-- Left side - Form -->
        <div class="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center">
            <div class="w-full max-w-md">
                <!-- Logo -->
                <div>
                    <img class="w-mx-auto" src="/assets/logoRF.png" alt="Logo" />
                </div>

                <div class="mt-12">
                    <form @submit.prevent="submit">
                        <div class="mb-8">
                            <div class="relative h-64 w-full rounded-lg mb-16 bg-gray-800">
                                <img :src="coverPreview || '/images/default-cover.jpg'"
                                    class="w-full h-full object-cover rounded-lg" />

                                <!-- Profile Picture -->
                                <div class="absolute -bottom-12 left-8">
                                    <div class="relative">
                                        <img :src="avatarPreview || '/images/default-avatar.png'"
                                            class="w-32 h-32 rounded-full border-4 border-black object-cover"
                                            alt="Profile picture" />

                                        <button type="button" @click="$refs.avatarInput.click()"
                                            class="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-300">
                                            <PencilIcon class="w-4 h-4" />
                                        </button>
                                        <input type="file" class="hidden" ref="avatarInput" accept="image/*"
                                            @change="onAvatarChange" />
                                    </div>
                                </div>


                                <button type="button" @click="$refs.coverInput.click()"
                                    class="absolute bottom-4 right-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300">
                                    Modifier la couverture
                                </button>
                                <input type="file" class="hidden" ref="coverInput" accept="image/*"
                                    @change="onCoverChange" />
                            </div>
                        </div>


                        <!-- Name -->
                        <TextInput id="name" type="text"
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            v-model="form.name" required placeholder="Nom" />
                        <InputError class="mt-2" :message="form.errors.name" />

                        <!-- Username -->
                        <TextInput id="username" type="text"
                            class="mt-5 w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            v-model="form.username" required placeholder="Nom d'utilisateur" />
                        <InputError class="mt-2" :message="form.errors.username" />

                        <!-- Email -->
                        <TextInput id="email" type="email"
                            class="mt-5 w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            v-model="form.email" required placeholder="Email" />
                        <InputError class="mt-2" :message="form.errors.email" />

                        <!-- Password -->
                        <div class="relative mt-5">
                            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" id="password"
                                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                                required placeholder="Mot de passe" />
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

                        <!-- Confirm Password -->
                        <div class="relative mt-5">
                            <input :type="showConfirmPassword ? 'text' : 'password'"
                                v-model="form.password_confirmation" id="password_confirmation"
                                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                                required placeholder="Confirmer le mot de passe" />
                            <button @click="toggleConfirmPasswordVisibility" type="button"
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
                        <InputError class="mt-2" :message="form.errors.password_confirmation" />

                        <!-- Submit Button -->
                        <PrimaryButton
                            class="mt-5 tracking-wide font-semibold bg-blue-600 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            S'inscrire
                        </PrimaryButton>


                        <div class="mt-6 text-center">
                            <Link :href="route('login')" class="text-sm text-gray-400">
                            Vous avez déjà un compte ?
                            <span class="text-blue-500 hover:text-blue-400">Se connecter</span>
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
