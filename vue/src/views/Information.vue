<template>
  <div class="container is-fluid mt-6">
    <article class="message" style="border: solid 1px hsl(171, 100%, 41%);">
      <div class="message-header has-background-primary-light is-relative is-justify-content-center">
        <span class="tag is-info" style="position: absolute; top: 0; left: 0;">STEP1</span>
          <h5 class="has-text-grey-dark"><span class="icon"><i class="fas fa-address-card"></i></span>お客様の情報を入力して下さい</h5>
      </div>
<!-- 本文内容 -->
      <div class="message-body has-background-white" style="border-top: solid 1px hsl(171, 100%, 41%);">
        <p class="has-text-info pl-4">-性別-</p>
        <div class="pt-4">
          <input type="radio" id="man" value="男性" name="gender" v-model="$store.state.gender">
          <label for="man" class="pr-2">男性</label>
          <input type="radio" id="woman" value="女性" name="gender" v-model="$store.state.gender">
          <label for="woman">女性</label>
        </div>
        <p class="has-text-info pl-4 pt-5 pb-3">-生年月日-</p>
        <div>
          <div class="select mr-1" style="vertical-align: baseline;">
            <select type ="number" v-model="$store.state.birthday.year">
              <option v-for="year in years" :key="year">
                {{ year }}
              </option>
            </select>
          </div>年
          <div class="select ml-3 mr-1">
            <select type ="number" v-model="$store.state.birthday.month">
              <option v-for="month in months" :key="month">
                {{ month }}
              </option>
            </select>
          </div>月
          <div class="select ml-3 mr-1">
            <select type ="number" v-model="$store.state.birthday.day">
              <option v-for="date in dates" :key="date">
                {{ date }}
              </option>
            </select>
          </div>日
        </div>
      </div>
    </article>
<!-- ボタンアイコン -->
    <div class="is-flex is-justify-content-center">
      <button  class="button is-primary" @click="nextQuestionnaire">次へ進む<span class="icon pl-5 pr-3">
          <i class="fa fa-chevron-right fa-xs"></i> 
        </span></button>
    </div>
  </div>
</template>

<script>
import definition from '@/static/definition.js'
export default {
  data() {
    return {
      years: definition.years,
      months: definition.months,
      dates: definition.dates,
    }
  },
  methods: {
    nextQuestionnaire() {
      this.$router.push("/Questionnaire");
    },
  }
}
</script>