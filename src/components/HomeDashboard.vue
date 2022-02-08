<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <h1 class="display-3 font-weight-bold mt-4 mb-5">Clean Arch on Vue</h1>
            </v-col>

            <v-col class="mb-4">
                <v-stepper v-model="controlStepper" vertical>
                    <v-stepper-step :complete="controlStepper > 1" step="1">Etapa1</v-stepper-step>
                    <v-stepper-content step="1">
                        <pre>Etapa One</pre>
                        <v-btn color="primary" @click="controlStepper = 2">Avançar</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="controlStepper > 2" step="2">Etapa2</v-stepper-step>
                    <v-stepper-content step="2">
                        <pre>Step Dois</pre>
                        <v-btn color="primary" @click="controlStepper = 3">Avançar</v-btn>
                        <v-btn class="white--text ml-2 red" @click="controlStepper = 1">Voltar</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="controlStepper > 3" step="3">Etapa3</v-stepper-step>
                    <v-stepper-content step="3">
                        <pre>Step Three</pre>
                        <v-btn color="primary" @click="controlStepper = 4">Avançar</v-btn>
                        <v-btn class="white--text ml-2 red" @click="controlStepper = 2">Voltar</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="controlStepper > 4" step="4">Etapa4</v-stepper-step>
                    <v-stepper-content step="4">
                        <pre>Etapa Quatro</pre>
                        <v-btn color="primary" @click="controlStepper = 5">Avançar</v-btn>
                        <v-btn class="white--text ml-2 red" @click="controlStepper = 3">Voltar</v-btn>
                    </v-stepper-content>
                    <v-stepper-step :complete="controlStepper > 5" step="5">Etapa5</v-stepper-step>
                    <v-stepper-content step="5">
                        <pre>Five Step</pre>
                        <v-btn class="white--text ml-2 red" @click="controlStepper = 4">Voltar</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class HomeDashboard extends Vue {
    controlStepper = 1
}
</script>
