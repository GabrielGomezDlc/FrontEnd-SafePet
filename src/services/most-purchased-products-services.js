import axios from 'axios'

export class MostPurchasedProductsServices {


    getMostPurchasedProducts=()=>{
        return axios.get("http://localhost:3000/most_purchased_products")
    }


}
