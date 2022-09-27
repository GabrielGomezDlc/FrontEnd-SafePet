
<template>
  <link href='https://fonts.googleapis.com/css?family=IBM Plex Sans' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div class="container">

  <div id="Appointments">
    <h1 class="container-title">Appointments</h1>
    <div v-for="appo in appointments" :key="appo.id">
      <div class="card-apo">
        <div class="info">
          <h1>Appointment #{{appo.id}}</h1>
          <h2> Vet. {{appo.veterinarian}}</h2>
          <h2 class="date"> Date: {{appo.date}} </h2>
        </div>
      </div>
    </div>
  </div>

    <div class="most-purchased-products">
      <h1 class="container-title">Most purchased products</h1>
      <div v-for="product in most_purchased_products" :key="product.id">
        <div class="card">
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


  </div>

<div class="container">

  <div id="veterinarians-near-you">
    <h1 class="container-title">Veterinarians near you</h1>
    <div v-for="vet in veterinarians_near_you" :key="vet.id">
      <div class="card">
        <div class="product">
          <h1>{{vet.name}}</h1>
          <h2 style="font-weight: lighter"> Score: {{vet.score}} <i class="fa-solid fa-star" ></i></h2>
        </div>
        <div class="images-vet">
          <img :src="vet.image" :alt="vet.name" />
        </div>
      </div>
    </div>
  </div>

  <div class="maps-location">
    <iframe src="https://www.google.com/maps/d/embed?mid=1Kab6RTglf8Rj1X6cjxp2TUMDq2l7EpI&hl=es&ehbc=2E312F" width="550" height="350"></iframe>
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

.card {
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

.card-apo {
  display: grid;
  font-family: 'Lato', sans-serif;
  position: relative;
  width: 410px;
  height: 90px;
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

.images-vet img{
  margin-top:10px;
  margin-left: 50px;
  display: inline-block;
  position: relative;
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: 50%;

}

.product {
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 55%;
}

.info {
  position: absolute;
  top: 10%;
  left: 5%;
}

.info h2{
font-weight: lighter;
}

.date{
  position: absolute;
  top: 20px;
  margin-left: 200px;
  width:500px

}

.container{
  display:flex;
  margin-top: 10px;
  margin-left: 50px;
}
.container-title{
  font-size: 30px;
}
.most-purchased-products{
  margin-left: 200px;
}

.maps-location{
  margin-left: 100px;
}
@media (max-width: 768px)  {
  .container {
    display: grid;
  }
  .most-purchased-products{
    margin-left: 10px;
  }
  .maps-location{
    margin-top: 15px;
    margin-left: 10px;

  }
  .maps-location iframe{
    width: 410px;

  }
}
</style>
