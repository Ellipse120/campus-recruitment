<script setup>
const emit = defineEmits(["update"]);
const captchaLength = ref(5);
let captcha = ref([]);

const emitValue = (v) => {
  emit("update", v);
};

const createCaptcha = () => {
  let tempCaptcha = "";
  for (let i = 0; i < captchaLength.value; i++) {
    tempCaptcha += getRandomCharacter();
  }
  captcha.value = tempCaptcha.split("");
  emitValue(tempCaptcha);
};

const getRandomCharacter = () => {
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomNumber = Math.floor(Math.random() * 36);
  return symbols[randomNumber];
};

const getFontSize = () => {
  const fontVariations = [14, 16, 18, 20, 22];
  return fontVariations[Math.floor(Math.random() * 5)];
};

const getRotationAngle = () => {
  const rotationVariations = [5, 10, 20, 25, -5, -10, -20, -25];
  return rotationVariations[Math.floor(Math.random() * 8)];
};

createCaptcha();
</script>

<template>
  <v-btn
    color="primary"
    class="w-full rounded flex items-center justify-around bg-gray-100/90 h-48px"
    @click="createCaptcha()"
  >
    <div
      v-for="(c, i) in captcha"
      :key="i"
      :style="{
        fontWeight: 800,
        transform: 'rotate(' + getRotationAngle() + 'deg)',
      }"
      class="mx-1"
    >
      {{ c }}
    </div>
  </v-btn>
</template>
