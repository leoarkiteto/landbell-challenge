<script lang="ts" setup>
  import { ref, watch } from "vue";
  import PlusBoxOutline from "vue-material-design-icons/PlusBoxOutline.vue";

  import Widget from "@/components/Widget.vue";
  import InputField from "@/components/InputField.vue";
  import ButtonItem from "@/components/ButtonItem.vue";
  import SelectField from "@/components/SelectField.vue";

  import data from "@/data/fields.json";
  import MultiInputField from "@/components/MultiInputField.vue";

  interface OptList {
    value: string;
    text: string;
  }

  const emit = defineEmits(["addField"]);

  const valueBuilder = ref("");
  const textBuilder = ref("");
  const labelBuilder = ref("");
  const fieldNameBuilder = ref("");
  const typeBuilder = ref("");
  const optList = ref<OptList[]>([]);

  function sendFields() {
    if (!typeBuilder.value) {
      return;
    }

    const newField = {
      label: labelBuilder.value,
      name: fieldNameBuilder.value,
      type: typeBuilder.value,
      options: optList.value,
    };

    if (!newField.name || !newField.label) {
      return;
    }

    emit("addField", newField);

    typeBuilder.value = "";
    labelBuilder.value = "";
    fieldNameBuilder.value = "";
    optList.value = [];
  }

  function createOptions() {
    if (!valueBuilder.value || !textBuilder.value) {
      return;
    }

    optList.value.push({ value: valueBuilder.value, text: textBuilder.value });

    valueBuilder.value = "";
    textBuilder.value = "";
  }
</script>

<template>
  <Widget class="flex-1 justify-between">
    <div class="flex flex-col gap-3">
      <SelectField
        v-model="typeBuilder"
        :options="data"
        default-text="Choose a input"
        label="Inputs:"
      />

      <hr class="my-4" />

      <div v-show="!!typeBuilder" class="flex flex-col gap-2">
        <InputField v-model="labelBuilder" label="Label" type="text" />

        <InputField v-model="fieldNameBuilder" label="Field Name" type="text" />
      </div>

      <div v-show="typeBuilder === 'select'" class="flex flex-col gap-2">
        <MultiInputField
          v-model:text="textBuilder"
          v-model:value="valueBuilder"
          label="Options"
          type="text"
        />
        <button
          class="w-fit cursor-pointer text-sm text-gray-400 underline hover:text-green-500 hover:underline"
          type="button"
          @click="createOptions"
        >
          Add option
        </button>

        <div class="flex h-[300px] flex-col gap-2 overflow-y-auto">
          <MultiInputField
            v-for="el in optList"
            :key="el.value"
            v-model:text="el.text"
            v-model:value="el.value"
            disabled
            type="text"
          />
        </div>
      </div>
    </div>

    <ButtonItem @click="sendFields">
      <PlusBoxOutline />
      Add field
    </ButtonItem>
  </Widget>
</template>
