import axios from 'axios'

export class AppointmentsServices {


    getAppointments=()=>{
        return axios.get("http://localhost:3000/appointments")
    }


}
