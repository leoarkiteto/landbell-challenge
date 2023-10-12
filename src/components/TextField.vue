<script lang="ts" setup>
  interface Props {
    label: string;
    modelValue: string;
    nameField: string;
  }

  defineEmits(["update:modelValue"]);
  defineProps<Props>();
</script>

<template>
  <label for="inputItem">{{ label }}</label
  ><textarea
    id="inputItem"
    :name="nameField"
    :value="modelValue"
    class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
    @input="$emit('update:modelValue', $event.target?.value)"
  ></textarea>
</template>
