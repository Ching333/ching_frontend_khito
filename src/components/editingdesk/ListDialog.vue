<template lang="pug">
 
  v-card
    v-card-title.justify-center 編輯清單
    v-card-text 
      v-text 清單名稱
      v-row
        v-text-field(required outlined color="#4d89a5" ) {{list.name}}
      v-text 隱私設定
      v-row
        v-select( :items="['公開','私人']" required outlined color="#4d89a5") 
      v-text 清單描述
      v-row
        v-textarea(counter="60" outlined color="#4d89a5"  )
      v-row
        v-btn.btn.cancel( @click="$emit('close')" ) 取消
        v-btn.btn.save( @click="$emit('save')"  ) 儲存
          
</template>

<script>
export default {
  props:{
    list:{type: Object},
  }
}
</script>

<style lang="sass" scoped>
  *
    // outline: 1px solid red
  span
    margin: auto
  .btn
    box-shadow: none
    width: 45%
    margin: 0 auto
  .cancel
    color: #7e7e7e
  .save
    background-color: #4d89a5 !important
    color: #ffffff
</style>
