<script setup>
import { ref } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const isSubmitting = ref(false);
const showPassword = ref(false);

const submit = () => {
    isSubmitting.value = true;
    form.post(route("password.store"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
            isSubmitting.value = false;
        },
    });
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>

<template>
    <GuestLayout>
        <Head title="Réinitialisation du mot de passe" />

        <div
            class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        >
            <div
                class="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <div class="bg-indigo-600 text-white py-4 px-6">
                    <h2 class="text-2xl font-bold text-center">
                        Réinitialisation du mot de passe
                    </h2>
                </div>

                <form @submit.prevent="submit" class="space-y-6 p-6">
                    <div>
                        <InputLabel
                            for="email"
                            value="Email"
                            class="text-gray-700"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="relative">
                        <InputLabel
                            for="password"
                            value="Nouveau mot de passe"
                            class="text-gray-700"
                        />
                        <div class="relative">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                v-model="form.password"
                                id="password"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                                autocomplete="new-password"
                            />
                            <button
                                @click="togglePasswordVisibility('password')"
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
                            value="Confirmation du mot de passe"
                            class="text-gray-700"
                        />
                        <TextInput
                            id="password_confirmation"
                            :type="showPassword ? 'text' : 'password'"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="form.password_confirmation"
                            required
                            autocomplete="new-password"
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.password_confirmation"
                        />
                    </div>

                    <div class="flex justify-center">
                        <PrimaryButton
                            :class="{
                                'opacity-50 cursor-not-allowed': isSubmitting,
                            }"
                            :disabled="isSubmitting"
                            class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        >
                            {{
                                isSubmitting
                                    ? "Réinitialisation en cours..."
                                    : "Réinitialiser le mot de passe"
                            }}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
