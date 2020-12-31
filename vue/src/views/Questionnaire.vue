<template>
  <div class="container is-fluid mt-6">
    <article class="message" style="border: solid 1px hsl(171, 100%, 41%);">
      <div class="message-header has-background-primary-light is-relative is-justify-content-center">
        <span class="tag is-info" style="position: absolute; top: 0; left: 0;">STEP2</span>
          <h5 class="has-text-grey-dark"><span class="icon"><i class="fas fa-chalkboard-teacher"></i></span>以下にお答えください</h5>
      </div>
<!-- 本文内容 -->
      <div class="message-body has-background-white" style="border-top: solid 1px hsl(171, 100%, 41%);">
        <div>
          <p class="has-text-info pl-4 pb-4">現在、生命保険に加入されてますか？</p>
          <div class="pl-6">
            <input type="radio" id="insurance-yes" value="はい" name="insuranceAnswer-answer" v-model="$store.state.question.insuranceAnswer" @click="show = true">
            <label for="insurance-yes" class="pr-2">はい</label>
            <input type="radio" id="insurance-no" value="いいえ" name="insuranceAnswer-answer" v-model="$store.state.question.insuranceAnswer" @click="show = true">
            <label for="insurance-no">いいえ</label>
          </div>
        </div>
        <transition name="fade">
        <div v-if="show">
          <p class="has-text-info pl-4 pb-4 pt-4">現在入院中ですか。または、最近３ヶ月以内に医師の診療・検査の結果、入院・手術を勧められた事はありますか？</p>
          <div class="pl-6">
            <input type="radio" id="hospitalization-yes" value="はい" name="hospitalization-answer" v-model="$store.state.question.hospitalizationAnswer" @click="showNext = true">
            <label for="hospitalization-yes" class="pr-2">はい</label>
            <input type="radio" id="hospitalization-no" value="いいえ" name="hospitalization-answer" v-model="$store.state.question.hospitalizationAnswer" @click="showNext = true">
            <label for="hospitalization-no">いいえ</label>
          </div>
        </div>
        </transition>
        <transition name="fade">
        <div v-if="showNext">
          <p class="has-text-info pl-4 pb-4 pt-4">過去５年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <div class="pl-6">
            <input type="radio" id="surgery-yes" value="はい" name="surgery-answer" v-model="$store.state.question.surgeryAnswer">
            <label for="surgery-yes" class="pr-2">はい</label>
            <input type="radio" id="surgery-no" value="いいえ" name="surgery-answer" v-model="$store.state.question.surgeryAnswer">
          <label for="surgery-no">いいえ</label>
          </div>
        </div>
        </transition>
      </div>
    </article>
<!-- ボタンアイコン -->
    <div class="is-flex is-justify-content-center">
        <button class="button is-primary mr-4" @click="backInformation">前へ戻る<span class="icon pl-5 pr-3">
          <i class="fa fa-chevron-right fa-xs"></i> 
        </span></button>
        <button class="button is-primary ml-4" @click="nextConsultation">次へ進む<span class="icon pl-5 pr-3">
          <i class="fa fa-chevron-right fa-xs"></i> 
        </span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showNext: false
    };
  },
  methods: {
    backInformation() {
      this.$router.push("/");
    },
    nextConsultation() {
      this.$router.push("/Consultation");
    },
  }
}
</script>

<style>
  .fade-enter {
      opacity: 0;
  }
  .fade-enter-active {
      transition: opacity 0.5s;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave {
      opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>