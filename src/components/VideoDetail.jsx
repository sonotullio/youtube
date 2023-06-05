import {Box, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import React, {useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Link, useParams} from "react-router-dom";
import {CheckCircle} from "@mui/icons-material";
import {Videos} from "./index";

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI('videos/', {part:"snippet,statistics", id: id}).then((data) => {
            setVideoDetail(data?.items[0]);
        });

        fetchFromAPI('search/', {part:"snippet", relatedToVideoId: id, type: 'video'}).then((data) => {
            setRelatedVideos(data?.items);
        });
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer url={'https://www.youtube.com/watch?v=' + id} className="react-player" controls />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {videoDetail?.snippet?.title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" py={1} px={2} sx={{
                            color: '#fff'
                        }}>
                            <Link to={'/channel/' + videoDetail?.snippet?.channelId}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                                    {videoDetail?.snippet?.channelTitle}
                                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ sm: 1, md: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={relatedVideos} direction={'column'} />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail;