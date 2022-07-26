<script setup>
/****************************************
 *              IMPORTS                 *
 * **************************************/
// PINIA
import useExempleStore from '@/stores/ExempleStore.js'
// Components
import PresentationTemplate from "@/components/PresentationTemplate.vue";
import PresentationStore from "@/components/PresentationStore.vue";
import DocTemplate from '@/components/DocTemplate.vue';
import ConfigIde from '@/components/ConfigIde.vue';

// Récupération du Store
const exempleStore = useExempleStore();
</script>

<template>
  <div>
    <PresentationTemplate />
    <DocTemplate />
    <ConfigIde />
    <PresentationStore :exempleStore="exempleStore" />
  </div>
</template>

<style scoped></style>