<script setup>
import InputError from "@/Components/ui/InputError.vue";
import PrimaryButton from "@/Components/ui/PrimaryButton.vue";
import TextInput from "@/Components/ui/TextInput.vue";
import { Head, useForm, Link } from "@inertiajs/vue3";

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <Head title="Mot de passe oublié" />
    <div class="min-h-screen bg-black text-white flex">
        <!-- Left side - Form -->
        <div class="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center">
            <div class="w-full max-w-md">
                <!-- Logo -->
                <div>
                    <img class="w-mx-auto" src="/assets/logoRF.png" alt="Logo" />
                </div>

                <div class="mt-12">
                    <h2 class="text-2xl font-bold mb-6 text-center">
                        Réinitialisation du mot de passe
                    </h2>

                    <div class="mb-6 text-gray-400">
                        Entrez votre adresse e-mail pour recevoir un lien de
                        réinitialisation.
                    </div>

                    <div
                        v-if="status"
                        class="mb-4 text-sm font-medium text-green-600"
                    >
                        {{ status }}
                    </div>

                    <form @submit.prevent="submit">
                        <TextInput
                            id="email"
                            type="email"
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-700 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="email"
                            placeholder="Email"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />

                        <PrimaryButton
                            class="mt-5 tracking-wide font-semibold bg-blue-600 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Envoyer le lien de réinitialisation
                        </PrimaryButton>
                    </form>

                    <div class="mt-6 text-center">
                        <Link
                            :href="route('login')"
                            class="text-sm text-gray-400 hover:text-white"
                        >
                            Retour à la page de connexion
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right side - Image -->
        <div class="hidden lg:block lg:w-1/2">
            <div 
                class="h-full w-full bg-cover bg-center bg-no-repeat"
                style="background-image: url('/assets/IMG_0783.JPG');"
            >
            </div>
        </div>
    </div>
</template>
