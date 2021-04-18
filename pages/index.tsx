import {useEffect} from "react";
import axios, {AxiosResponse} from "axios";
import {instanceOf} from "prop-types";

type Post = {
    id: number
}

export default function Home() {

    useEffect(() => {
        console.log('useEffect');
        getRecords();
    }, []);

    async function getRecords() {
        const res:  AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');

        console.log(typeof res.data[0]);
        console.log(res.data[0]);
    }

    return (
        <div>
            Home
        </div>
    );

};