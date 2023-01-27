import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import "swiper/css/navigation";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";
import stories from "../stories";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", md: "90%" },
  maxWidth: { md: 1200 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

export default function Article() {
  const { article_id } = useParams();

  const thisArticle = stories.find((article) => article.id == article_id);

  const storiesImage = stories.map((image) => {
    return (
      <SwiperSlide>
        <img className="swiper--img" src={image.url} alt="" />
      </SwiperSlide>
    );
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: 3, pt: 0 }}>
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{ fontSize: 40, fontWeight: 400, mb: 5, mt: 5 }}
      >
        {thisArticle.header}
      </Typography>
      <Grid sx={{ pb: 5, maxWidth: 1200, margin: "auto" }}>
        <Grid item xs={12} align={"center"} mb={5}>
          <img
            className="About--img"
            src="https://images.unsplash.com/photo-1665925246453-e7aeb96b3744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </Grid>
        <Grid sx={{ flexDirection: "column", maxWidth: 1200 }} item xs={12}>
          <Typography component="h4" variant="h4" align="left" mb={2}>
            Yellowstone
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <Typography component="h4" variant="h4" align="left" mb={2}>
            Aftermath
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </Typography>
          <Typography
            component="p"
            variant="p"
            align="left"
            mb={2}
            sx={{ fontSize: 21 }}
          >
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Typography>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Swiper
                navigation={true}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
              >
                {storiesImage}
              </Swiper>
            </Box>
          </Modal>
          <div onClick={handleOpen} className="swiper-wrap">
            <Swiper
              navigation={true}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
            >
              {storiesImage}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
