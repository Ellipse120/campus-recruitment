<script setup>
</script>

<template>
  <div class="flex justify-center flex-col">
    <div class="text-center text-3xl">注册账号</div>
    <div class="text-center">
      注册重要提示：请填写个人真实有效信息，注册成功后，所填写注册信息在填报个人基本信息时不能修改。请仔细核实，确保信息的准确性。
    </div>
    <form @submit="onSubmit" class="flex flex-col gap-2">
      <span class="p-float-label self-center">
        <InputText
          id="value"
          v-model="value"
          type="text"
          :class="{ 'p-invalid': errorMessage }"
          aria-describedby="text-error"
        />
        <label for="value">Name - Surname</label>
      </span>
      <small class="p-error" id="text-error">{{
        errorMessage || "&nbsp;"
      }}</small>
      <Button class="self-center" type="submit" label="Submit" />
    </form>
  </div>
</template>