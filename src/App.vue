<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vue Labs"
                    class="shrink mr-2"
                    contain
                    src="https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/64x64.png"
                    transition="scale-transition"
                    width="40"
                />

                <v-img
                    alt="That's Rock!"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="200"
                    src="./assets/Root Cool Vue Labs.svg"
                    width="400"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn href="#" target="_blank" text>
                <span class="mr-2">Here we go</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class App extends Vue {}
</script>
