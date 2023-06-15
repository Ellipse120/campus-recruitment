<script setup>
import { useField, useForm } from "vee-validate";

const label1 = ref("账号登录");
const label2 = ref("短信验证码登录");
const activeTab = ref(null);
const tabs = ref([label1.value, label2.value]);
const captchaImg = ref(null);
const [loading, toggle] = useToggle();
const [bool1, toggle1] = useToggle();
const { ruleEmail, rulePassword, ruleRequired } = useFormRules();

const { handleSubmit } = useForm();
const name = useField("name");
const captchaCode = useField("captchaCode");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const doSendSMSCode = () => {};

const doRefreshCaptchaImg = () => {};

const doValidCaptcha = () => {};

const doLogin = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <form class="w-120">
      <v-card>
        <v-tabs
          v-model="activeTab"
          color="deep-purple-accent-4"
          align-tabs="center"
        >
          <v-tab v-for="t in tabs" :value="t" :key="t">{{ t }}</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <v-window-item :value="label1">
            <v-container fluid>
              <form @submit.prevent="submit">
                <v-text-field
                  v-model="name.value.value"
                  :counter="10"
                  clearable
                  :rules="[ruleRequired]"
                  label="手机号/身份证号"
                ></v-text-field>

                <v-text-field
                  v-model="email.value.value"
                  :rules="[ruleEmail]"
                  clearable
                  label="电子邮箱"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="bool1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[ruleRequired, rulePassword]"
                  :type="bool1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="密码"
                  hint="密码至少8位, 至少包含一个大写英文字母、一个小写英文字母、一个数字和一个特殊字符"
                  counter
                  clearable
                  @click:append="toggle1()"
                ></v-text-field>

                <v-text-field
                  v-model="captchaCode.value.value"
                  :rules="[ruleRequired]"
                  clearable
                  label="验证码"
                >
                  <template v-slot:append>
                    <CustomCaptcha
                      class="w-20"
                      :input-val="captchaCode.value.value"
                    ></CustomCaptcha>
                  </template>
                </v-text-field>

                <v-select
                  v-model="select.value.value"
                  :items="items"
                  :rules="[ruleRequired]"
                  label="Select"
                ></v-select>

                <v-checkbox
                  v-model="checkbox.value.value"
                  :rules="[ruleRequired]"
                  value="1"
                  label="Option"
                  type="checkbox"
                ></v-checkbox>
              </form>
            </v-container>
          </v-window-item>

          <v-window-item :value="label2">
            <v-container>todo</v-container>
          </v-window-item>
        </v-window>

        <v-btn color="primary" block rounded="xs" size="x-large"> 登录 </v-btn>
      </v-card>
    </form>
  </div>
</template>
