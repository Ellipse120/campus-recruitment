<script setup>
</script>

<template>
  <div class="flex items-center justify-center">
    <form class="w-160">
      <div class="text-center font-black text-2xl mb-2">注册账号</div>
      <div class="text-red-600 mb-4">
        注册重要提示：请填写个人真实有效信息，注册成功后，所填写注册信息在填报个人基本信息时不能修改。请仔细核实，确保注册信息的准确性。
      </div>
      <v-divider :thickness="2" class="border-opacity-100 mb-4" />
      <v-text-field label="姓名" hint="请采用身份证姓名" />
      <v-text-field label="身份证号" hint="请填写有效的身份证号" />
      <v-text-field label="手机号" hint="用于登录和接收短信提醒" />
      <v-text-field label="验证码">
        <template v-slot:append>
          <CustomCaptcha class="w-20"></CustomCaptcha>
        </template>
      </v-text-field>
      <v-text-field label="手机号验证码"></v-text-field>
      <v-text-field label="密码" hint="10-20位字符，须由大小写字母、数字、特殊字符组成" />
      <v-text-field label="确认密码" hint="请再次输入密码进行确认" />
      <v-text-field label="电子邮件" hint="请输入正确的电子邮件用于接收通知" />
      <v-checkbox>
        <template v-slot:label>
          <div>
            阅读并接受
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <a v-bind="props" class="text-blue" target="_blank" href="https://vuetifyjs.com">
                  《隐私政策》
                </a>
              </template>
              点击查看详情
            </v-tooltip>
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <a v-bind="props" class="text-blue" target="_blank" href="https://vuetifyjs.com">
                  《高校毕业生求职承诺书》
                </a>
              </template>
              点击查看详情
            </v-tooltip>
          </div>
        </template>
      </v-checkbox>
      <v-btn class="w-full text-white mb-2" size="large" color="primary">注册</v-btn>
      <div class="text-center mb-5">
        <a class="text-gray-400" target="_blank" href="https://vuetifyjs.com">已有账号登录</a>
      </div>
    </form>
  </div>
</template>