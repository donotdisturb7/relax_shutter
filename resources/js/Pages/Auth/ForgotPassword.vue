<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, useForm } from "@inertiajs/vue3";

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
                src="/assets/IMG_0745.png"
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
                            Réinitialisation du mot de passe
                        </h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div
                            class="mb-4 text-sm text-gray-600 dark:text-gray-400"
                        >
                            Entrez votre adresse e-mail pour recevoir un lien de
                            réinitialisation.
                        </div>

                        <div
                            v-if="status"
                            class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
                        >
                            {{ status }}
                        </div>

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
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div>
                                <PrimaryButton
                                    class="w-full"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    Envoyer le lien de réinitialisation
                                </PrimaryButton>
                            </div>
                        </form>

                        <div class="mt-6 text-center">
                            <Link
                                :href="route('login')"
                                class="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Retour à la page de connexion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
