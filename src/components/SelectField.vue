<script lang="ts" setup>
  import { ref, watch, watchEffect } from "vue";

  const emit = defineEmits(["update:modelValue"]);
  const { modelValue, options, defaultText, label } = defineProps([
    "modelValue",
    "options",
    "defaultText",
    "label",
  ]);

  const selectedValue = ref(modelValue);

  watchEffect(() => {
    console.log(selectedValue.value);
    emit("update:modelValue", selectedValue.value);
  });
</script>

<template>
  <label for="inputItem">{{ label }}</label>
  <select
    v-model="selectedValue"
    class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
  >
    <option disabled value="">{{ defaultText }}</option>
    <option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.text }}
    </option>
  </select>
</template>
