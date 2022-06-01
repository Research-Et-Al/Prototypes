import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ImageCollage from "../../components/ImageCollage";
import CustomizedAccordions from "../../components/Accordian"
const Post = () => (
    <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Heading of the blog post
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <img
                src="https://source.unsplash.com/random"
                alt=""
                height={325}
                width={500}
            />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h5" component="h4" marginTop={3}>
                This paragraph aims to provide some short 
                description about this blog post before the paragraph
                element.
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </Typography>
        </Box>
        <Box marginBottom={5}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>
    </Container>
);

export default Post;