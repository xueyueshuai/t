<template>
  <div>
    <el-form :model="myForm" :rules="rules" ref="myForm">
      <el-form-item prop="mobile">
        <el-input v-model="myForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          @keyup.enter.native="submitForm('myForm')"
          v-model="myForm.code"
          placeholder="请输入验证码"
        >
          <el-button v-if="canSend" slot="append" @click="getCode">
            获取验证码
          </el-button>
          <el-button v-else slot="append" :disabled="true">
            {{ second }}秒后获取
          </el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="danger"
          @click="submitForm('myForm')"
        >
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

      canSend: true, //是否可以发送验证码
      second: 59, //倒计时间
    };
  },
  methods: {
    //methods

    //倒计时
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        if (this.second < 0) {
          clearInterval(result);
          this.canSend = true;
          this.second = 59;
        }
      }, 1000);
    },

    //获取验证码
    getCode() {
      if (this.canSend === false) {
        return;
      }

      if (this.myForm.mobile == "") {
        this.$message.error("请输入手机号");
        return;
      }

      //api接口封装请求
      this.apiIng = true;
      setTimeout(() => {
          
        this.apiIng = false;
      }, 2000);
    },
    //提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("提交");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>