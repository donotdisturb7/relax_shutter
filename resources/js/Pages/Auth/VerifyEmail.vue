<script setup>
import { computed } from "vue";
import PrimaryButton from "@/Components/ui/PrimaryButton.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route("verification.send"));
};

const verificationLinkSent = computed(
    () => props.status === "verification-link-sent"
);
</script>

<template>
    <Head title="Vérification d'email" />
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
            
            </svg>
            <!-- Modifié ici pour masquer l'image sur les petits écrans -->
            <img
                class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full lg:block hidden"
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
                            Vérification de l'email
                        </h2>
                    </div>
                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div
                            class="mb-4 text-sm text-gray-600 dark:text-gray-400"
                        >
                            Merci de vous inscrire ! Veuillez vérifier votre
                            adresse e-mail en cliquant sur le lien envoyé. Si
                            vous ne l'avez pas reçu, nous pouvons vous en
                            renvoyer un.
                        </div>
                        <div
                            v-if="verificationLinkSent"
                            class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
                        >
                            Un nouveau lien de vérification a été envoyé à
                            l'adresse e-mail que vous avez fournie lors de
                            l'inscription.
                        </div>
                        <form @submit.prevent="submit">
                            <div class="mt-4 flex items-center justify-between">
                                <PrimaryButton
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    Renvoyer l'email de vérification
                                </PrimaryButton>
                            </div>
                            <Link
                                :href="route('logout')"
                                method="post"
                                as="button"
                                class="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                Déconnexion
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
