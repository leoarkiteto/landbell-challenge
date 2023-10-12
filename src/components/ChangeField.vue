<script lang="ts" setup>
  interface Props {
    type: "checkbox" | "radio";
    label: string;
    modelValue: boolean;
  }

  defineEmits(["update:modelValue"]);
  defineProps<Props>();
</script>

<template>
  <label for="inputItem">{{ label }}</label
  ><input
    id="inputItem"
    :checked="modelValue"
    :type="type"
    class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
    @change="$emit('update:modelValue', $event.target?.value)"
  />
</template>
