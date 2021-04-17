<template>
  <!-- control promotion part -->
  <base-button id="Btn" @click="addForm" class="addBtn" btn-name='+ Add' />
  <base-button id="Btn" @click="editForm" class="eandcBtn" btn-name='Edit' />
  <base-button id="Btn" @click="cancel" class="eandcBtn" btn-name='Cancel' />

  <!-- form insert promotion -->
  <div class="flex">
    <div class="promotion" v-if="isFormShow">
      <form class="ml-10 mt-5" @submit.prevent="submitForm">
        <div class="yourscandlesForm ml-10">
          <div class="text-2xl font-semibold ml-14" id = "headForm">
            <p>YoursCandles Promotions</p>
          </div>

          <div class="flex mt-5 text-gray-700" id="textForm">
              <div>
                 <label for="name">Name</label><br>
                 <input type="text" class="formPromotion" name="name" required v-model.trim="enterName"><br>
              </div>
              <div class="ml-3">
                 <label for="price">Price</label><br>
                 <input type="text" class="formPromotion" name="price" required v-model.trim="enterPrice"><br>
              </div>
          </div>

          <div class="mt-5 text-gray-700" id="textForm">
            <label class="mt-10" for="message">Details</label><br>
            <textarea name="message" class="formPromotion" rows="9" cols="51" required v-model.trim="enterDetail"></textarea>
          </div>
        </div>
        <base-button id="Btn" class="text-gray-200 font-medium w-2/3 ml-24 mt-5" btn-name='Submit' />
      </form> 
    </div>

    <!-- notes promotion ui -->
    <div v-for="data in dataPromotion" :key="data.id" @click="showPromotionData(data)">
      <head-note>
        <ul id="list" class="grid-row mr-5">
          <li><span class="font-semibold">{{data.name}}</span></li>
          <span class="float-right font-semibold -mt-6" @click="deletePromotion(data.id)">X</span>
        </ul>
      </head-note>

      <base-note>
        <ul id="list">
          <li><span>Price: {{data.price}} THB.</span></li>
          <span style="text-decoration:underline;" class="font-normal">Details</span>
          <li><span style="white-space: pre-wrap;">{{data.detail}}</span></li>
        </ul>
      </base-note>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/baseButton.vue';
import HeadNote from '../components/headNote.vue';

export default {
  name: 'promotion',
  components: { BaseButton, HeadNote },
  data(){
    return{
      isFormShow: false,
      enterName: '',
      enterPrice: '',
      enterDetail: '',
      dataPromotion: [],
      isEdit: false,
      editId:'',
      url: 'http://localhost:5000/dataPromotion'
    }
  },
  methods:{
    addForm(){
      this.isEdit = false;
      this.isFormShow = !this.isFormShow;
      this.enterName = '',
      this.enterPrice = '',
      this.enterDetail = ''
    },
    editForm(){
      this.isEdit = true;
    },
    cancel(){
      this.isFormShow = false;
      this.enterName = '',
      this.enterPrice = '',
      this.enterDetail = ''
    },
    submitForm(){
      if(this.enterName !== '' && this.enterPrice !== '' && this.enterDetail !== '') {

        if(this.isEdit){
          this.editPromotion({
            id: this.editId,
            name: this.enterName,
            price: this.enterPrice,
            detail: this.enterDetail
          })
          this.isFormShow = !this.isFormShow;
        }else{
          this.addNewPromotion({
          name: this.enterName,
          price: this.enterPrice,
          detail: this.enterDetail
          })
          this.isFormShow = !this.isFormShow;
        }
  
        this.enterName = ''
        this.enterPrice = ''
        this.enterDetail = ''
      }
    },
    async addNewPromotion(newData){
      try{
        const res = await fetch(this.url,{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body : JSON.stringify({
          name: newData.name,
          price: newData.price,
          detail: newData.detail
        })
      })
        const data = await res.json()
        this.dataPromotion=[...this.dataPromotion, data]
        // console.log(this.dataPromotion)
      } catch(error){
        console.log(`POST error: ${error}`)
      }
    },
    async fetchPromotion() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        return data
      } catch (error) {
        console.log(`GET error: ${error}`)
      }
    },
    async deletePromotion(deleteId){
      try{
        const res = await fetch(`${this.url}/${deleteId}`,{
          method: 'DELETE'
        })
        res.status === 200 ? (this.dataPromotion = this.dataPromotion.filter((data) => data.id !== deleteId)) : alert('Delete failed')
      }catch(error){
        console.log(`DELETE error: ${error}`)
      }
    },
    showPromotionData(oldData){
      try{
        if(this.isEdit){
          this.isFormShow = true;
          this.editId = oldData.id
          this.enterName = oldData.name
          this.enterPrice = oldData.price
          this.enterDetail = oldData.detail
        }
      }catch(error){
        console.log(`Show data error: ${error}`)
      }
    },
    async editPromotion(newDataEdit){
      try{
        const res = await fetch(`${this.url}/${newDataEdit.id}`,{
          method: 'PUT',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify({
            name: newDataEdit.name,
            price: newDataEdit.price,
            detail: newDataEdit.detail
          })
        })

        const data = await res.json()
        this.dataPromotion = this.dataPromotion.map((dataPro) => dataPro.id === newDataEdit.id ? {...dataPro, name: data.name, price: data.price, detail: data.detail} : dataPro )
        
        this.isEdit = false;
        this.editId = '',
        this.enterName = '',
        this.enterPrice = '',
        this.enterDetail = ''
      }catch(error){
        console.log(`EDIT error: ${error}`)
      }
    },
    async fetchEditPromotion() {
      try {
        const res = await fetch(`${this.DBUrl}/dataPromotion`);
        const data = await res.json();
        return data;
      }catch(err) {
        console.log(err);
      }
    }

  },

  async created(){
      this.dataPromotion = await this.fetchPromotion()
  }

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600;800&display=swap');

  #headForm{
    font-family: 'Poppins';
    color: #174974;
    text-decoration: underline;
  }

  #textForm{
    font-family: 'Poppins';
    
  }

  #Btn{
    background-color: #174974;
    font-family: 'Poppins';
  }

  #list{
    font-family: 'Poppins';
    font-weight: 200;
  }

</style>