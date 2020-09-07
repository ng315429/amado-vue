<template>
  <div class="login">
    <h1 class="login__title">로그인</h1>
    <div class="login__input-wrapper">
      <a-form :form="form" @submit.prevent="onSubmitLogin">
        <a-form-item class="login__input-wrapper__item">
          <a-input
            placeholder="아이디"
            v-decorator="['userId', userIdRules]"
            allow-clear
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>

        <a-form-item class="login__input-wrapper__item">
          <a-input-password
            v-decorator="['userPassword', userPasswordRules]"
            placeholder="비밀번호"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>

        <a-button type="primary" html-type="submit" block>로그인</a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: '',
      userIdRules: {
        rules: [{ required: true, message: '아이디를 입력해주세요.' }],
      },
      userPasswordRules: {
        rules: [{ required: true, message: '비밀번호를 입려해주세요.' }],
      },
    };
  },
  methods: {
    onSubmitLogin() {
      this.form.validateFields((err, fieldsValue) => {
        if (!err) {
          const { userId, userPassword } = fieldsValue;
          console.log(userId, userPassword);
          this.$EventBus.$emit('show-spin', true);
          setTimeout(() => {
            this.$EventBus.$emit('show-spin', false);
            this.$router.push('/');
          }, 2000);
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
};
</script>

<style lang="scss">
.login {
  &__title {
    font-size: 2.5rem;
  }
  &__input-wrapper {
    margin: 20px 0 0 0;
    &__item {
      margin: 10px 0;
    }
  }
}
</style>
