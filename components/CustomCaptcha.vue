<script setup>
defineProps({
  inputVal: null,
});

defineExpose({
  valid: false,
});

const captchaLength = ref(5);
let captcha = ref([]);

const createCaptcha = () => {
  let tempCaptcha = "";
  for (let i = 0; i < captchaLength.value; i++) {
    tempCaptcha += getRandomCharacter();
  }
  captcha.value = tempCaptcha.split("");
};

const getRandomCharacter = () => {
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomNumber = Math.floor(Math.random() * 36);
  return symbols[randomNumber];
};

const getFontSize = () => {
  const fontVariations = [14, 18, 20, 24, 28];
  return fontVariations[Math.floor(Math.random() * 5)];
};

const getRotationAngle = () => {
  const rotationVariations = [5, 10, 20, 25, -5, -10, -20, -25];
  return rotationVariations[Math.floor(Math.random() * 8)];
};

createCaptcha();
</script>

<template>
  <div
    class="w-full rounded flex items-center justify-around bg-gray-200 h-48px"
    @click="createCaptcha()"
  >
    <div
      v-for="(c, i) in captcha"
      :key="i"
      :style="{
        fontSize: getFontSize() + 'px',
        fontWeight: 800,
        transform: 'rotate(' + getRotationAngle() + 'deg)',
      }"
      class="mx-1"
    >
      {{ c }}
    </div>
  </div>
</template>
