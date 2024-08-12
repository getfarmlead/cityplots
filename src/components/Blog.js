import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate(); 

  const [dataCollection, setDataCollection] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch(`https://cityplot.io/items/blogs/`)
      .then((response) => response.json())
      .then((data) => {
        setDataCollection(data.data);

        const matchingPost = data.data.find((post) => post.slug === slug);

        if (matchingPost) {
          setSelectedPost(matchingPost);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);

  const handleLearnMore = (postId) => {
    const selectedPost = dataCollection.find((post) => post.id === postId);

    if (selectedPost && selectedPost.slug) {
      navigate(`/blog/${selectedPost.slug}`);
      window.scrollTo(0, 0);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {selectedPost && (
        <Helmet>
          <title>{selectedPost.meta_title || "Default Title"}</title>
          <meta
            name="description"
            content={selectedPost.meta_description || "Default Description"}
          />
          <meta
            name="keywords"
            content={selectedPost.meta_keywords || "Default Keywords"}
          />
          <meta
            property="og:image"
            content={
              selectedPost.og_image
                ? `https://cityplot.io/assets/${selectedPost.og_image}`
                : "default-image-url"
            }
          />
        </Helmet>
      )}
      
      <div className="container-fluid" style={{ marginTop: "10%", paddingLeft: "4%", paddingRight: "4%" }}>
        <div className="newblog">
          {selectedPost ? (
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <Typography variant="h3" gutterBottom style={{ textAlign: "left", color: "white" }}>
                  {selectedPost.title}
                </Typography>
                <img
                  src={`https://cityplot.io/assets/${selectedPost.image}`}
                  className="blog-img"
                  alt={selectedPost.title}
                />
                <div className="content">
                  <Typography gutterBottom style={{ marginTop: "10px" }}>
                    {selectedPost["content"].blocks.map((item, index) =>
                      item.type === "header" ? (
                        <h2 key={index} style={{ fontWeight: "bold", fontSize: "28px" }}>
                          {item.data.text}
                        </h2>
                      ) : (
                        <p key={index} style={{ fontSize: "18px" }}>
                          {item.data.text}
                        </p>
                      )
                    )}
                  </Typography>
                </div>
              </Grid>

              {/* Right-hand side "Connect with Us" Form */}
              <Grid item xs={12} md={3} className="contact-us">
                <Typography style={{ color: "#61ff00" }}>
                  CONNECT WITH US
                </Typography>
                <div className="blog">
                  <TextField
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    style={{ marginBottom: "10px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                  />
                  <TextField
                    style={{ marginBottom: "10px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                  />
                  <TextField
                    style={{ marginBottom: "10px" }}
                    fullWidth
                    id="outlined-basic"
                    label="Comments"
                    variant="outlined"
                    multiline
                    rows={5}
                  />
                </div>
                <FormGroup>
                  <FormControlLabel
                    style={{ color: "white" }}
                    control={<Checkbox style={{ color: "white" }} />}
                    label="Get Update on Whatsapp"
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: "rgb(92 168 45)",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  Enquire Now
                </Button>
              </Grid>
            </Grid>
          ) : (
            <div>Loading...</div>
          )}
          <div className="row" style={{ rowGap: "50px" }}>
            <Typography variant="h3" gutterBottom style={{ color: "white", textAlign: "left" }}>
              Most Read Blogs
            </Typography>
            {dataCollection.map((post) => (
              <div className="col-sm-12 col-lg-4" key={post.id}>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={`https://cityplot.io/assets/${post.image}`}
                    title={post.title}
                  />
                  <CardContent sx={{ height: 220 }}>
                    <p style={{ textAlign: "left" }}>{formatDate(post.publish)}</p>
                    <Typography gutterBottom variant="h5" component="div" className="single_blog_heading">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="single_blog_description">
                      {`${post.description.slice(0, 150)}...`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleLearnMore(post.id)}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
