<script setup>
definePageMeta({
  name: "首页",
});

const currentYear = ref(useDateFormat(new Date(), "YYYY"));

const flowList = ref([
  {
    img: "/assets/imgs/flow1.png",
    name: "网上报名",
  },
  {
    img: "/assets/imgs/flow2.png",
    name: "审核筛选",
  },
  {
    img: "/assets/imgs/flow3.png",
    name: "现场确认和面试",
  },
  {
    img: "/assets/imgs/flow4.png",
    name: "笔试考核",
  },
  {
    img: "/assets/imgs/flow5.png",
    name: "复试考核",
  },
  {
    img: "/assets/imgs/flow6.png",
    name: "公示录用",
  },
]);
</script>

<template>
  <div class="">
    <div class="text-center bg-blue-100/40 p-4 mt-16 relative">
      <div
        class="absolute right-8 -top-16 text-right text-9xl text-red-300/20 font-extrabold"
      >
        {{ currentYear }}
      </div>

      <LabelWithLine class="my-4 text-primary" title="招聘流程" />

      <div class="grid grid-cols-6 <md:grid-cols-3 place-items-center">
        <div
          class="relative"
          v-for="(flowItem, index) in flowList"
          :key="`flow${index}`"
        >
          <div class="flex flex-col items-center justify-between">
            <img
              class="w-40 <lg:w-24"
              :src="flowItem.img"
              :alt="flowItem.name"
            />

            <div class="mt-4">
              {{ `${index + 1}、${flowItem.name}` }}
            </div>
          </div>

          <img
            v-if="index !== 5"
            class="absolute left-38 top-12 w-14 h-14 ml-12 <xl:hidden"
            :class="{ 'ml-8': index === 5 }"
            src="/assets/imgs/flow-direction.png"
            alt="right"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <div>
        <img src="/assets/imgs/u43.webp" alt="train" class="w-full" />
      </div>

      <div>
        <div>
          <TitleWithShadow
            title="公司简介"
            title-class="font-extrabold text-black text-2xl"
          />

          <div class="mt-8 whitespace-pre-wrap tracking-wide">
            中国铁路上海局集团有限公司的前身上海铁路局成立于1949年8月1日。2017年11月19日，中国铁路上海局集团有限公司挂牌成立。
            中国铁路上海局集团有限公司地处我国经济发达、人口稠密、美丽富饶的长江中下游地区，是我国铁路总公司下属的特大型运输企业，承担着上海、江苏、浙江、安徽三省一市的铁路运输和建设管理任务，管辖铁路营业里程长过1万公里，资产总量突破1万亿元，是全国铁路资产规模最大的集团公司。
            上铁人肩负当好“交通强国、铁路先行”排头兵的责任和使命，坚持“示范引领、走在前列”发展定位，把握“强基达标、提质增效”工作主题，弘扬“安全优质、兴路强国”新时期铁路精神和“创新实干、精益卓越”上铁精神，在追梦的道路上挥洒汗水、砥砺前行。铁别是近年来，集团公司紧紧抓住难得的发展机遇，路网建设和技术装备现代化水平实现了大跨越，运输安全保持了总体稳定，服务质量和经营效益大幅提升，企业改革不断深化，管理水平明显提高，职工队伍整体素质有力提升，职工生产生活条件显著改善，党建思想政治工作持续加强，高铁大局、客运大局、经营大局、建设大局特征更加明显、地位更加显著，谱写了东部铁路现代化建设的华丽篇章。先后荣获全国“五一”劳动奖章、质量效益型先进企业等称号，在全国铁路首家获得5A级物流资质。
            进入新时代、适应新体制、展示新作为。上铁牢固树立创新、协调、绿色、开放、共享的发展理念，向着建设全路先进的现代运输企业目标奋勇前进，努力为社会大众创造美好生活新时空，为决胜全面建成小康社会、助推区域经济社会发展做出更大贡献。
          </div>

          <div class="flex items-center gap-4 my-8">
            <div class="underline underline-offset-8 underline-primary">
              中国铁路上海局有限公司概括
            </div>
            <div>
              <NuxtLink to="/about"> 各系统单位介绍 </NuxtLink>
            </div>
          </div>

          <Button label="更多" outlined class="px-12 mt-4" />
        </div>
      </div>
    </div>

    <div>
      <Button label="primevue" icon="pi pi-check" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum
      accusantium qui dignissimos omnis aut, deserunt, blanditiis minima modi et
      odio ratione dolore, placeat adipisci quibusdam corrupti dolorum ad quia?
    </div>
  </div>
</template>
