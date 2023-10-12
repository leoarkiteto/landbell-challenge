<script lang="ts" setup>
  import { computed, ref, watchEffect } from "vue";

  interface Props {
    options: {
      value: string;
      text: string;
    }[];
    modelValue: string;
    label: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit("update:modelValue", val);
    },
  });
</script>

<template>
  <label for="inputItem">{{ label }}</label>
  <select
    v-model="value"
    class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
  >
    <option disabled value="">Select an option</option>
    <option v-for="item in options" :key="item.value" :value="item.value">
      {{ item.text }}
    </option>
  </select>
</template>
