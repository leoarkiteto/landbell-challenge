<script lang="ts" setup>
  interface Props {
    type: "text" | "password" | "number" | "color" | "date";
    text: string;
    label?: string;
    value: string;
    nameField?: string;
  }

  defineEmits(["update:text", "update:value"]);
  defineProps<Props>();
</script>

<template>
  <label>{{ label }}</label>
  <div class="flex flex-col gap-3 md:flex-row">
    <input
      :name="nameField"
      :type="type"
      :value="text"
      class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
      placeholder="Text"
      v-bind="$attrs"
      @input="$emit('update:text', $event.target?.value)"
    />
    <input
      :name="nameField"
      :type="type"
      :value="value"
      class="rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
      placeholder="Value"
      v-bind="$attrs"
      @input="$emit('update:value', $event.target?.value)"
    />
  </div>
</template>
