import React from 'react';
import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

function Videos(props) {
    const {keyword} = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], async () => {
            const youtube = new Youtube();
            return youtube.search(keyword);
        });
    return (
        <>
            Videos {keyword ? `🔍${keyword}` : '🔥'}
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong </p>}
            {videos &&
                <ul>
                    {
                        videos.map(video => <VideoCard key={video.id} video={video}/>)
                    }
                </ul>
            }
        </>
    );
}

export default Videos;