<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { Vue3Lottie } from "vue3-lottie";

  import Widget from "@/components/Widget.vue";
  import ButtonItem from "@/components/ButtonItem.vue";
  import InputField from "@/components/InputField.vue";
  import SelectField from "@/components/SelectField.vue";
  import TextField from "@/components/TextField.vue";
  import { saveStorage, getStorage } from "@/utils/localData";
  import Empty from "@/data/animation_lnnaks1a.json";

  interface Field {
    label: string;
    name: string;
    type: string;
    options?: string[];
  }
  interface FieldProps {
    fields: Field[];
  }

  const props = defineProps<FieldProps>();
  defineEmits(["clear"]);

  const formData = ref<Record<string, string>>({});

  onMounted(() => {
    if (getStorage("fieldsData")) {
      formData.value = getStorage("fieldsData");
    }

    props.fields.forEach(item => {
      formData.value[item.name] = "";
    });
  });

  function submitDeck() {
    saveStorage("fields", props.fields);
    saveStorage("fieldsData", formData.value);

    console.log({ ...formData.value });
  }
</script>

<template>
  <Widget class="flex-[2]">
    <div
      v-if="!fields.length"
      class="flex h-full flex-col items-center justify-center gap-6"
    >
      <Vue3Lottie :animation-data="Empty" :height="300" :width="600" />
      <p class="w-fit rounded-xl bg-gray-300 px-6 py-4">No field added yet!!</p>
    </div>
    <form
      class="flex flex-1 flex-col justify-between"
      @submit.prevent="submitDeck"
    >
      <div class="flex flex-col gap-2">
        <template v-for="field in fields" :key="field.name">
          <SelectField
            v-if="field.type === 'select'"
            v-model="formData[field.name]"
            :label="field.label"
            :options="field.options"
          />

          <TextField
            v-else-if="field.type === 'textarea'"
            v-model="formData[field.name]"
            :label="field.label"
            :name-field="field.name"
          />

          <InputField
            v-else
            :key="field.name"
            v-model="formData[field.name]"
            :label="field.label"
            :name-field="field.name"
            :type="field.type"
          />
        </template>
      </div>

      <div class="flex justify-end gap-4">
        <ButtonItem @click="$emit('clear')">Clear Form</ButtonItem>
        <ButtonItem button-type="submit">Submit</ButtonItem>
      </div>
    </form>
  </Widget>
</template>

<style scoped></style>
