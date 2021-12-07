import axios from "axios";
                                                                                    //этот файл это наш DAL

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "fc086433-a3b2-4e29-b729-0bb49b9ccb7d"
    }

})
//аякс запросы
export const userAPI = {

    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            //вернули ответ в котором будет сидеть только дата
            .then(response => {
                return response.data;
            });
    },



    follow(userId)  {
        return instance.post(`follow/${userId}`)
    },


    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile (userId) {
        return   profileAPI.getProfile(userId)
    }

}
export const profileAPI = {

    getProfile (userId) {
        return  instance.get(`profile/`+ userId);
    },
    getStatus (userId) {
        return  instance.get(`profile/status/`+ userId);
    },
    updateStatus (status) {
        return  instance.put(`profile/status`, { status: status });
    }

}

export const getAuth = () => {
    return instance.get(`auth/me` )
        .then(response => {
            return response.data;
        });
};




