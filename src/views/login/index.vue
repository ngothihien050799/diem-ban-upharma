<template>
  <div class="login">
    <img class="login-logo" src="@/assets/logo.webp" alt="Logo Upharma" />
    <h1 class="login-title">Điểm bán Upharma</h1>

    <div class="login-form">
      <div class="login-form-item">
        <div class="fa-solid fa-circle-user icon"></div>
        <div class="form-item-input">
          <input
            v-model="input.username"
            class="input"
            type="text"
            placeholder="Số điện thoại"
            name="Số điện thoại"
            autofocus
          />
        </div>
      </div>
      <div class="login-form-item">
        <div class="fa-solid fa-key icon"></div>
        <div class="form-item-input">
          <input
            v-model="input.password"
            class="input"
            type="password"
            placeholder="Mật khẩu"
            name="Mật khẩu"
            required
          />
        </div>
      </div>

      <div>
        <button @click="handleLogin" class="login-form-submit">
          ĐĂNG NHẬP
        </button>
      </div>
      <div class="login-form-lotpassword">
        <span class="lotpassword"
          >Quên mật khẩu?<a class="getpassword" href=""> Lấy mật khẩu</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/api/user";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.ValidatePhoneNumber(this.input.username);
      if (this.ValidatePhoneNumber(this.input.username)) {
        // if (
        //   this.input.username == this.username &&
        //   this.input.password == this.password
        // ) {
        //   //   alert("Đăng nhập thành công");
        //   this.$router.push("/thong-ke");
        // } else {
        //   alert("Tài khoản hoặc mật khẩu không chính xác!");
        // }
        const req = {
          UserName: this.input.username,
          Password: this.input.password,
        };
        userLogin(req).then((res) => {
          if (res.RespCode == 0) {
            this.$router.push("/thong-ke");
            Cookies.set("Token", res.Token, { expires: 365 }); // Lưu token vào trong Cookies
            Cookies.set("UserName", res.UserInfo.UserName, { expires: 365 }); // Lưu username vào trong Cookies
            Cookies.set("EmployeeCode", res.UserInfo.EmployeeCode, { expires: 365 }); // Lưu  vào trong Cookies
          } else {
            ElNotification({
              title: "Xảy ra lỗi",
              message: res.RespText,
              type: "error",
            });
          }
        });
      } else {
        ElNotification({
          title: "Xảy ra lỗi",
          message: "Tài khoản không hợp lệ",
          type: "error",
        });
      }
    },
    ValidatePhoneNumber(phone) {
      return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
    },
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: url("@/assets/backgroundLogin.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;

  &-logo {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    filter: drop-shadow(15px -3px 4px rgba(0, 0, 0, 0.2));
    border-radius: 20px;
    margin-bottom: 20px;
  }

  &-title {
    font-family: "Dancing Script", cursive;
    font-weight: 500;
    font-size: 50px;
    line-height: 50px;
    color: #fff;
    margin-bottom: 50px;
  }

  &-form {
    width: 460px;
    background: rgba(155, 172, 141, 0.432);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    font-family: "Roboto", sans-serif;
    .icon {
      height: 25px;
      color: #cfd7d0;
    }
    &-item {
      max-width: 400px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding-bottom: 10px;
      align-items: center;

      .input {
        width: 350px;
        height: 35px;
        background: rgba(175, 205, 161, 0.39);
        border: none;
        border-bottom: 1px solid #cfd7d0;
        font-size: 18px;
        color: #fff;
        margin-left: 15px;
        padding-left: 5px;
      }
    }
    &-submit {
      width: 120px;
      height: 40px;
      background: linear-gradient(180deg, #9fe318 0%, #0d5c15 100%);
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: 600;
      font-size: 15px;
      margin-top: 15px;
      &:active {
        // box-shadow: 0 2px rgb(6, 104, 19);
        transform: translateY(2px);
      }
    }
    &-lotpassword {
      font-size: 14px;
      margin-top: 10px;
      .lotpassword {
        color: #fff;
        .getpassword {
          color: #db490f;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 450px) {
  .login {
    background: url("@/assets/Login13Pro.png") no-repeat !important;
    background-size: cover !important;
    &-logo {
      width: 100px !important;
      height: 100px !important;
      margin-top: 100px !important;
    }
    &-title {
      font-size: 35px !important;
    }
    &-form {
      background: none !important;
      .input {
        width: 300px !important;
        font-size: 15px !important;
      }
      &-lotpassword {
        text-align: center !important;
      }
    }
  }
}
</style>
