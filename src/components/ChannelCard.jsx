import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            widht: { xs: '356px', md: '320px' },
            height: '326px',
            m: 'auto',
            mt: marginTop || '0px',
        }}>
            <Link to={'/channel/' + channelDetail?.id?.channelId}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard;