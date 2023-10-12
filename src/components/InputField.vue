<script lang="ts" setup>
  interface Props {
    type: string;
    label: string;
    modelValue: string | string[];
    nameField?: string;
  }

  defineEmits(["update:modelValue"]);
  defineProps<Props>();
</script>

<template>
  <div class="flex flex-col">
    <label for="inputItem">{{ label }}</label
    ><input
      id="inputItem"
      :name="nameField"
      :type="type"
      :value="modelValue"
      class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>
