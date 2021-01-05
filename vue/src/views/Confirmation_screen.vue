<template>
     <div class="container is-fluid mt-6">
    <article class="message" style="border: solid 1px hsl(171, 100%, 41%);">
      <div class="message-header has-background-primary-light is-relative is-justify-content-center">
        <span class="tag is-info" style="position: absolute; top: 0; left: 0;">STEP4</span>
          <h5 class="has-text-grey-dark"><span class="icon"><i class="fas fa-file-alt"></i></span>以下の内容をご確認ください</h5>
      </div>
<!-- 本文入力 -->
      <div class="message-body has-background-white" style="border-top: solid 1px hsl(171, 100%, 41%);">
        <p class="has-text-info pl-4 pb-2">-性別-</p>
        <p class="pl-6">{{ getGender }}</p>
        <p class="has-text-info pl-4 pt-2 pb-2">-生年月日-</p>
        <p class="pl-6">{{ getBirthdayYear }}{{ getBirthdayMonth }}月{{ getBirthdayDay }}日</p>
        <p class="has-text-info pl-4 pt-2 pb-2">-現在、生命保険に加入されてますか-</p>
        <p class="pl-6">{{ getInsuranceAnswer }}</p>
        <p class="has-text-info pl-4 pt-2 pb-2">-現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</p>
        <p class="pl-6">{{ getHospitalizationAnswer}}</p>
        <p class="has-text-info pl-4 pt-2 pb-2">-過去５年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
        <p class="pl-6">{{ getSurgeryAnswer }}</p>
        <p class="has-text-info pl-4 pt-2 pb-2">-ご相談内容-</p>
        <p class="pl-6">{{ getConsultation }}</p>
      </div>
    </article>
<!-- ボタンアイコン -->
    <div class="is-flex is-justify-content-center">
      <button class="button is-primary mr-4" @click="backConsultation">前へ戻る<span class="icon pl-5 pr-3"><i class="fa fa-chevron-right fa-xs"></i></span></button>
      <button class="button is-primary ml-4">送信<span class="icon pl-5 pr-3"><i class="fa fa-chevron-right fa-xs"></i></span></button>
    </div>
  </div>
</template>
<script>    
export default {
    computed: {
        getGender() {
            return this.$store.getters.getGender;
        },
        getBirthdayYear() {
            return this.$store.getters.getBirthdayYear;
        },
        getBirthdayMonth() {
            return this.$store.getters.getBirthdayMonth;
        },
        getBirthdayDay() {
            return this.$store.getters.getBirthdayDay;
        },
        getInsuranceAnswer() {
            return this.$store.getters.getInsuranceAnswer;
        },
        getHospitalizationAnswer() {
            return this.$store.getters.getHospitalizationAnswer;
        },
        getSurgeryAnswer() {
            return this.$store.getters.getSurgeryAnswer;
        },
        getConsultation() {
            return this.$store.getters.getConsultation;
        }
    },
    methods: {
        backConsultation() {
            this.$router.push("/Consultation");
        },
    }
}
</script>