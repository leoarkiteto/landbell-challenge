<script lang="ts" setup>
  import { onMounted, ref } from "vue";

  import FormDeck from "@/components/FormDeck.vue";
  import FormBuilder from "@/components/FormBuilder.vue";
  import { clearStorage, getStorage } from "@/utils/localData";

  interface Field {
    label: string;
    name: string;
    type: string;
  }

  const fieldToDeck = ref<Field[]>([]);

  onMounted(() => {
    if (getStorage("fields")) {
      fieldToDeck.value = getStorage("fields");
    }
  });

  function createDeck(data: Field) {
    fieldToDeck.value.push(data);
  }

  function clearDeck() {
    fieldToDeck.value = [];
    clearStorage("fields");
    clearStorage("fieldsData");
  }
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center gap-12 bg-gradient-to-r from-gray-500 to-blue-950 p-8 md:flex-row"
  >
    <FormDeck :fields="fieldToDeck" @clear="clearDeck" />
    <FormBuilder @add-field="createDeck" />
  </div>
</template>
