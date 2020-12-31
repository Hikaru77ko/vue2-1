<template>
  <div class="container is-fluid mt-6">
    <article class="message" style="border: solid 1px hsl(171, 100%, 41%);">
      <div class="message-header has-background-primary-light is-relative is-justify-content-center">
        <span class="tag is-info" style="position: absolute; top: 0; left: 0;">STEP3</span>
          <h5 class="has-text-grey-dark"><span class="icon"><i class="fas fa-file-alt"></i></span>ご相談内容をご記入ください</h5>
      </div>
<!-- 本文入力 -->
      <div class="message-body has-background-white" style="border-top: solid 1px hsl(171, 100%, 41%);">
        <p class="has-text-info pl-4 pb-2">-ご相談内容-</p>
        <textarea class="textarea" rows="15" v-model="$store.state.consultation"></textarea>
      </div>
    </article>
<!-- ボタンアイコン -->
    <div class="is-flex is-justify-content-center">
      <button class="button is-primary mr-4" @click="backQuestionnaire">前へ戻る<span class="icon pl-5 pr-3"><i class="fa fa-chevron-right fa-xs"></i></span></button>
      <button class="button is-primary ml-4">次へ進む<span class="icon pl-5 pr-3"><i class="fa fa-chevron-right fa-xs"></i></span></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backQuestionnaire() {
      this.$router.push("/Questionnaire");
    }
  }
}
</script>