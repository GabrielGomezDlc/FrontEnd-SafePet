
<template>
  <link href='https://fonts.googleapis.com/css?family=IBM Plex Sans' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div class="most-purchased-products">
  <h1>Most Purchased Products</h1>
<div v-for="product in most_purchased_products" :key="product.id">
  <div class="container">
    <div class="product">
      <h1>{{product.name}}</h1>
      <p>{{product.description}}</p>
      <h2>S/. {{product.price}}</h2>
    </div>
    <div class="images">
      <img :src="product.image" :alt="product.name" />
    </div>
  </div>
</div>
  </div>

  <div class="veterinarians-near-you">
    <h1>Veterinarias near you</h1>
    <div v-for="vet in veterinarians_near_you" :key="vet.id">
      <div class="container">
        <div class="product">
          <h1>{{vet.name}}</h1>
          <h2> Score: {{vet.score}} <i class="fa-solid fa-star"></i></h2>
        </div>
        <div class="images">
          <img :src="vet.image" :alt="vet.name" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { AppointmentsServices } from "@/services/appointments-services";
import { MostPurchasedProductsServices } from "@/services/most-purchased-products-services";
import { VeterinariansNearYouServices } from "@/services/veterinarians-near-you-services";

export default {
  name: "HomePetOwners",
  data(){
    return {
      appointments:null,
      most_purchased_products: null,
      veterinarians_near_you: null

    }
  },
  created(){
    new AppointmentsServices().getAppointments().then(response => {
      this.appointments=response.data
    })
    new MostPurchasedProductsServices().getMostPurchasedProducts().then(response => {
      this.most_purchased_products=response.data
    })
    new VeterinariansNearYouServices().getVeterinariansNearYou().then(response => {
      this.veterinarians_near_you=response.data
    })

  }
}
</script>

<style scoped>

*{
  font-family: 'IBM Plex Sans',sans-serif;
  font-size: 22px;
}

.container {
  display: grid;
  font-family: 'Lato', sans-serif;
  position: relative;
  width: 410px;
  height: 130px;
  background: #fdfdfe;
  box-shadow: 5px 5px 15px #7e7c7c;
  border-radius: 10px;
  margin-bottom: 20px;
}

p {
  font-size: 15px;
  color: #676767;
}

h1 {
  font-size: 20px;
  margin-top: 3px;
}

h2 {
  font-size: 20px;
  margin-top: 1px;
}

img {
margin-top:5px;
  width: 125px;
margin-left: 50px;
}


.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 55%;
}


</style>
