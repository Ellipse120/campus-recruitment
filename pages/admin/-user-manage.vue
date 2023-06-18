<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";

const selected = ref([]);
const [dialog, toggle] = useToggle();
const [dialogDelete, toggleDelete] = useToggle();
const headers = ref([
  { title: "序号", key: "index" },
  { title: "姓名", key: "name" },
  { title: "性别", key: "calories" },
  { title: "身份证号", key: "fat" },
  { title: "申请岗位", key: "carbs" },
  { title: "联系方式", key: "protein" },
  { title: "操作", key: "actions" },
]);
const desserts = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
});
const defaultItem = ref({
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
});

const formTitle = computed(() => {
  return editedIndex.value === -1 ? "添加" : "编辑";
});

const initialize = () => {
  desserts.value = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
    },
  ];
};

const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  toggle();
};

const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  toggleDelete();
};

const deleteItemConfirm = () => {
  desserts.value.splice(editedIndex.value, 1);
  toggleDelete();
};

const close = () => {
  toggle();
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
};

const closeDelete = () => {
  toggleDelete();
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
};

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
};

const add = () => {
  toggle();
  editedIndex.value = -1;
};

const batchDelete = () => {
  toggle(false);
  desserts.value = [];
};
</script>

<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      item-value="name"
      show-select
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>用户管理</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-2"
            :disabled="!selected.length"
            color="red"
            variant="flat"
            dark
            @click="batchDelete()"
          >
            批量删除
          </v-btn>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                variant="flat"
                dark
                @click="add()"
                v-bind="props"
              >
                添加
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="姓名"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="性别"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="身份证号"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="申请岗位"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="联系方式"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close()"> 取消 </v-btn>
                <v-btn color="blue-darken-1" @click="save()"> 保存 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6 !flex items-center justify-between">
                <div>提醒</div>
                <v-icon size="small" @click="closeDelete()"> mdi-close </v-icon>
              </v-card-title>
              <div class="p-4">确认删除吗？</div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="closeDelete()">取消</v-btn>
                <v-btn color="blue" @click="deleteItemConfirm()">确定</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.index="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon color="primary" class="me-2" @click="editItem(item.raw)">
          mdi-pencil
        </v-icon>
        <v-icon color="red" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize()"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
