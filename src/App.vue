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
                />

                <v-img
                    alt="That's Rock!"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="200"
                    src="./assets/Root Cool Vue Labs.svg"
                />

                <v-spacer></v-spacer>

                <v-btn href="" target="_blank" text>
                    <span class="mr-2">Here we go</span>
                    <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "App",

    data: () => ({
        //
    }),
})
</script>
