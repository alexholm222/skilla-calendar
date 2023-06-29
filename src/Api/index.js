import axios from 'axios'

const instanceWithToken = axios.create({
    withCredentials: false,
    baseURL: `https://api.skilla.ru/`
})

instanceWithToken.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    return config
})




//Запросы Graph

export const getRevenueGraph = (type) => {
    return instanceWithToken.post(`skilla/getRevenueGraph?type=${type}`)
}

export const getLkCommissionGraph = () => {
    return instanceWithToken.post(`skilla/lkCommissionGraph`)
}

export const getLkWorkersGraph = () => {
    return instanceWithToken.post(`skilla/lkWorkersGraph`)
}




//Запросы Calendar

export const getLkCalendarCats = () => {
    return instanceWithToken.post(`skilla/lkGetCalendarCats`)

}

export const getLkCalendarSchedule = (month, type) => {
    return instanceWithToken.post(`skilla/lkGetCalendarSchedule?month=${month}&type=${type}`)
}



export const getLkCalendarEvent = (id) => {
    return instanceWithToken.post(`skilla/lkGetCalendarEvent?id=${id}`)
}













