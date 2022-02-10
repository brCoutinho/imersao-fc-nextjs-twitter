import { NextPage } from "next";
import useSWR from "swr";
import http from "../utils/http";
import { Tweet } from "../utils/models";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {

    const {data: tweets} = useSWR<Tweet[]>('tweets', fetcher);

    return <div>
        <h1>Tweets</h1>
        Listar os tweets
    </div>;
};

export default TweetsPage;