import { Box, Typography } from "@mui/material";
import Page from "../../components/page/Page";

export default function NotFound() {
    return (
        <Page>
            <Box className="flex flex-col justify-center items-center" sx={{ height: 'calc(100vh - 180px)' }}>
                <Box className="w-full flex flex-col justify-center items-center">
                    <Typography className="text-9xl my-0 font-extrabold tracking-widest">404</Typography>
                    <Box className="px-2 text-sm rounded rotate-12 absolute" sx={{
                        color: (theme) => theme.palette.primary.light,
                        backgroundColor: (theme) => theme.palette.primary.main
                    }}>
                        Page Not Found
                    </Box>
                </Box>
                <Typography className="text-xl my-2 text-center">
                    Sorry we couldn't find  this page
                </Typography>
                <Typography className="my-2 mb-6 text-center">
                    If you think this page should exist, please contact your system administrator
                </Typography>
            </Box>
        </Page>
    );
}
