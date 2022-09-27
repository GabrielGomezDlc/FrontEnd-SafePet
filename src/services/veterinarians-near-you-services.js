import axios from 'axios'

export class VeterinariansNearYouServices {


    getVeterinariansNearYou=()=>{
        return axios.get("http://localhost:3000/veterinarians_near_you")
    }


}
