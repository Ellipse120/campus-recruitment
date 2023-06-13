<script setup>
const videoRef = ref(null);

const { playing, currentTime, duration, volume } = useMediaControls(videoRef, {
  src: "/assets/intro-480p.mp4",
});
const currentYear = ref(useDateFormat(new Date(), "YYYY"));

const flowList = ref([
  {
    img: "/assets/imgs/flow1.png",
    name: "1、网上报名",
  },
  {
    img: "/assets/imgs/flow2.png",
    name: "2、审核筛选",
  },
  {
    img: "/assets/imgs/flow3.png",
    name: "3、现场确认和面试",
  },
  {
    img: "/assets/imgs/flow4.png",
    name: "4、笔试考核",
  },
  {
    img: "/assets/imgs/flow5.png",
    name: "5、复试考核",
  },
  {
    img: "/assets/imgs/flow6.png",
    name: "6、公示录用",
  },
]);
</script>

<template>
  <div class="">
    <div class="relative">
      <video ref="videoRef" class="w-full" controls />

      <div
        class="absolute top-40% left-45% bg-blue-400 text-white px-16 py-4 rounded-3xl"
      >
        点击投递简历
      </div>
    </div>

    <div class="text-center bg-blue-100 p-4">
      <div class="text-right text-4xl text-red-300">{{ currentYear }}</div>

      <div class="my-4 text-primary text-3xl">招聘流程</div>

      <div class="grid grid-cols-6 gap-12 place-items-center">
        <div
          class="p-8"
          v-for="(flowItem, index) in flowList"
          :key="`flow${index}`"
        >
          <img class="w-full" :src="flowItem.img" :alt="flowItem.name" />

          <div class="mt-4">{{ flowItem.name }}</div>
        </div>
      </div>
    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum
      accusantium qui dignissimos omnis aut, deserunt, blanditiis minima modi et
      odio ratione dolore, placeat adipisci quibusdam corrupti dolorum ad quia?
    </div>
  </div>
</template>
