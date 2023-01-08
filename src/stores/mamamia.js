import { defineStore } from "pinia"
import axios from "axios"

export const mamamiaBoss = defineStore({
    id: "namaMamamia",
    state: () => ({
        namaMamamia: false
    }),
    getters: {
        isLoggedIn: (state) => state.namaMamamia !== false,
        getUser: (state) => state.namaMamamia
    },
    actions: {
        async fetchUser() {
            try {
                const { data }= await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('typ_token') + ' ' + localStorage.getItem('acc_token')
 
                    }
                })
                this.namaMamamia = data
                console.log(data)
            } catch (error) {
                this.namaMamamia = false
            }
        }
    }
})