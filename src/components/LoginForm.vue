<template>
  <!-- ref="loginForm"设定验证表单的表单名 -->
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="120px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="输入密码"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit_btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？<a href="">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import {useRouter} from "vue-router";
import axios from "../http";


export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },



  setup(props: any) {
    //   可以用ctx表示当前实例this
    // 不知道ctx的类型可以使用注释忽略类型检测
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    const router = useRouter();


    //   触发登录方法
    const handleLogin = (formName: string) => {
      // console.log(formName);
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          // alert("submit!");
          ctx.$axios.post("/api/v1/auth/login", props.loginUser).then((res: any) => {
            console.log(res.data);

            // 登录成功，存储token到local Storage
            const { token } = res.data;
            localStorage.setItem("msToken", token);

            // 登录成功路由跳转到首页
            router.push("/");

            
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };


    return { handleLogin };
  },
};
</script>

<style scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #ccc;
}
.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>