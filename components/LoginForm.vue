<script setup>
import { useField, useForm } from "vee-validate";

const label1 = ref("账号登录");
const label2 = ref("短信验证码登录");
const activeTab = ref(null);
const tempCaptchaCode = ref(null);

const tabs = ref([label1.value, label2.value]);
const [loading, toggle] = useToggle();
const [bool1, toggle1] = useToggle();
const { ruleEmail, rulePassword, ruleRequired } = useFormRules();
const { remainSeconds, smsCode, phone, sent, isActive, doSendSMSCode } =
  useSmsCode();

const handleCaptchaUpdate = (v) => {
  tempCaptchaCode.value = v;
};

const { handleSubmit } = useForm();

const name = useField("name");
const email = useField("email");
const password = useField("password");

function validateCaptchaCode(v) {
  if (v !== tempCaptchaCode.value) {
    return "验证码不匹配";
  }
  return true;
}

const captchaCode = useField("captchaCode");

const doLogin = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="w-120">
    <v-sheet elevation="4" class="p-4">
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
            <v-form>
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
                class="my-2"
              ></v-text-field>

              <v-text-field
                v-model="password.value.value"
                :append-inner-icon="bool1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[ruleRequired, rulePassword]"
                :type="bool1 ? 'text' : 'password'"
                label="密码"
                hint="密码至少8位, 需要包含数字、大写字母、小写字母、特殊符号"
                persistent-hint
                counter
                clearable
                @click:append="toggle1()"
              ></v-text-field>

              <v-text-field
                v-model="captchaCode.value.value"
                class="my-2"
                clearable
                :rules="[ruleRequired, validateCaptchaCode]"
                label="验证码"
              >
                <template v-slot:append-inner>
                  <CustomCaptcha @update="handleCaptchaUpdate"></CustomCaptcha>
                </template>
              </v-text-field>
            </v-form>
          </v-container>
        </v-window-item>

        <v-window-item :value="label2">
          <v-container>
            <v-form>
              <v-text-field
                v-model="phone.value.value"
                :counter="11"
                clearable
                :rules="[ruleRequired]"
                label="手机号"
                hint="输入验证码后可发送短信验证码"
                persistent-hint
              >
                <template v-slot:append-inner>
                  <v-btn
                    size="small"
                    color="primary"
                    :disabled="!captchaCode.value.value || isActive"
                    @click="doSendSMSCode()"
                  >
                    {{ sent ? `${remainSeconds}s后重新发送` : "发送验证码" }}
                  </v-btn>
                </template>
              </v-text-field>

              <v-text-field
                v-model="captchaCode.value.value"
                clearable
                :rules="[ruleRequired, validateCaptchaCode]"
                label="验证码"
                class="my-2"
              >
                <template v-slot:append-inner>
                  <CustomCaptcha @update="handleCaptchaUpdate"></CustomCaptcha>
                </template>
              </v-text-field>

              <v-text-field
                v-model="smsCode.value.value"
                clearable
                :rules="[ruleRequired]"
                label="短信验证码"
              ></v-text-field>
            </v-form>
          </v-container>
        </v-window-item>
      </v-window>

      <div class="px-4">
        <v-btn color="primary" variant="flat" block @click="doLogin()">
          登录
        </v-btn>

        <div class="flex justify-between my-4">
          <v-btn size="small">忘记密码</v-btn>
          <v-btn size="small" @click="navigateTo('/register')">立即注册</v-btn>
        </div>
      </div>
    </v-sheet>
  </div>
</template>
