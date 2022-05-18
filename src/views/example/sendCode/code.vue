<template>
  <div style="width: 500px; margin: 20px">
    <el-form :model="myForm" :rules="rules" ref="myForm">
      <el-form-item prop="mobile">
        <el-input v-model="myForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-input
          @keyup.enter.native="submitForm"
          v-model="myForm.code"
          placeholder="请输入验证码"
        >
          <el-button
            v-if="sendStatus === 'before'"
            slot="append"
            @click="getCode"
          >
            获取验证码
          </el-button>
          <el-button
            v-if="sendStatus === 'loading'"
            slot="append"
            :disabled="true"
            :loading="true"
          >
            获取验证码
          </el-button>
          <el-button
            v-if="sendStatus === 'after'"
            slot="append"
            :disabled="true"
          >
            {{ second }}秒后获取
          </el-button>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button style="width: 100%" type="danger" @click="submitForm">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validate_mobile = (rule, value, callback) => {
      let reg = /^[1]([3-9])[0-9]{9}$/;
      if (!value) {
        callback("请输入手机号");
      } else if (!reg.test(value)) {
        callback("请输入正确的手机号");
      } else {
        callback();
      }
    };
    return {
      rules: {
        mobile: [
          { required: true, validator: validate_mobile, trigger: "blur" },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      myForm: {
        mobile: "",
        code: "",
      },

      sendStatus: "before", // before(发送验证码之前) | loading(请求发送验证码接口) | after(发送完成)
      second: 59, // 倒计时间
    };
  },
  methods: {
    //methods

    //倒计时
    startTimer() {
      let result = setInterval(() => {
        this.second--;
        if (this.second < 0) {
          clearInterval(result);
          this.sendStatus = "before";
          this.second = 59;
        }
      }, 1000);
    },

    //获取验证码
    getCode() {
      if (this.sendStatus !== "before") {
        return;
      }
      this.$refs.myForm.validateField("mobile", (err) => {
        if (!err) {
          //api接口封装请求
          this.sendStatus = "loading";
          console.log("请求接口发送验证码");
          setTimeout(() => {
            // success
            this.sendStatus = "after";
            this.startTimer();

            // fail
            // this.sendStatus = 'before'
          }, 2000);
        }
      });
    },

    //提交
    submitForm() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          console.log("提交");
        }
      });
    },
  },
};
</script>