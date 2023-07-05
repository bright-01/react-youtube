import axios from "axios";

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://wwww.googleapis.com/youtube/v3',
            headers:{
                "Content-type": "application/json;charset=UTF8",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",


            },
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword) {
        return this.httpClient.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: keyword
            }
        }).then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id: item.id.videoWidth})))
    }

    async #mostPopular() {
        return this.httpClient.get('videos', {
            params: {
                part: 'snippet',
                maxResults: 25,

                chart: 'mostPopular'
            }
        }).then((res) => res.data.items);
    }
}