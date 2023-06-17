<script setup>
const tab = ref("option-1");
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative">
      <img src="@/assets/imgs/u1052.jpg" alt="风采展示" />

      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl"
      >
        中国铁路上海局集团有限公司校园招聘
      </div>
    </div>

    <div class="grid grid-cols-[1fr_8fr] w-full">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="option-1">
          <v-icon start> mdi-account </v-icon>
          Option 1
        </v-tab>
        <v-tab value="option-2">
          <v-icon start> mdi-lock </v-icon>
          Option 2
        </v-tab>
        <v-tab value="option-3">
          <v-icon start> mdi-access-point </v-icon>
          Option 3
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text> 1 </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              2

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
                iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>
