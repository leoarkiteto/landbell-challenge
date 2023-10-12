<script lang="ts" setup>
  interface Props {
    buttonType?: "submit" | "reset" | "button";
  }

  withDefaults(defineProps<Props>(), {
    buttonType: "button",
  });
</script>

<template>
  <div
    class="group flex w-fit cursor-pointer justify-center gap-1 rounded-md bg-green-500 px-4 py-2 text-white"
  >
    <button :type="buttonType" class="flex gap-2 group-hover:underline">
      <slot />
    </button>
  </div>
</template>
