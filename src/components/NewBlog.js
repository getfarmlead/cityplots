import React, { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, Pagination } from "@mui/material";
import flower from "../../src/images/blog/Comp 1_1.gif";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewBlog() {
  const [selectedPostId, setSelectedPostId] = useState(1);
  const [dataCollection, setDataCollection] = useState([]);
  const [originalDataCollection, setOriginalDataCollection] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [topReadBlogs, setTopReadBlogs] = useState([]);
  const [value, setValue] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (categoryId) => {
    console.log(categoryId, "62####");
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setDataCollection(originalDataCollection);
    } else {
      const filteredPosts =
        categoryId.length > 0
          ? originalDataCollection.filter((post) =>
              categoryId.includes(post.category_id)
            )
          : originalDataCollection;

      setDataCollection(filteredPosts);
    }
  };

  const itemsPerPage = 9;
  const sortedPosts = [...dataCollection].sort((a, b) => b.id - a.id);
  console.log(selectedCategory, "79##########");
  console.log(typeof selectedCategory, "80##########");
  console.log(selectedCategory, "81##########");
  console.log(sortedPosts, "83####");
  const filteredPosts =
    selectedCategory > 0 && typeof selectedCategory != "string"
      ? sortedPosts.filter((post) => selectedCategory === post.category_id)
      : sortedPosts.slice(0, 2);

  console.log(filteredPosts, "filteredPosts");

  const filterAllPosts = selectedCategory > 0 ? filteredPosts : sortedPosts;
  console.log(filterAllPosts, "filterAllPosts");

  const totalPages = Math.ceil(filterAllPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPosts = filterAllPosts.slice(startIndex, endIndex);
  const handlePageChange = (event, value) => {
    window.scrollTo(0, 0);
    setCurrentPage(value);
  };

  const handleOnBlogChange = useCallback(async () => {
    fetch("https://cityplot.io/items/category/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data, "categoryyyyyyyyyy");
        setCategoryList(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    handleOnBlogChange();
    fetch("https://cityplot.io/items/blogs/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data, "*****************");
        setDataCollection(data.data);
        setOriginalDataCollection(data.data);
        const sortedBlogs = data.data.sort((a, b) => b.readCount - a.readCount);
        const top3Blogs = sortedBlogs.slice(0, 3);
        setTopReadBlogs(top3Blogs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div>
      <div class="overlay-container">
        <img
          src={flower}
          style={{ height: "100%", objectFit: "cover", marginTop: "2%" }}
          alt="flower"
        />
        <div className="overlay-text">
          <CustomTabPanel value={value} index={0}>
            <Typography variant="h2">Blogs</Typography>
            <Typography variant="body1">
              “Owning a home is a keystone of wealth, both financial affluence
              and emotional security.”
            </Typography>
            <Typography variant="body1">– Suze Orman</Typography>
          </CustomTabPanel>

          {categoryList.map((data, index) => (
            <CustomTabPanel key={index + 1} value={value} index={index + 1}>
              <Typography variant="h2">{data.category_name}</Typography>
              <Typography variant="body1">
                “Owning a home is a keystone of wealth, both financial affluence
                and emotional security.”
              </Typography>
              <Typography variant="body1">– Suze Orman</Typography>
            </CustomTabPanel>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(40 75 18)", padding: "10px" }}>
        <div style={{ display: "inline-block" }}>
          <Box sx={{ width: "100%" }} className="tab-haeding">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Blogs"
                {...a11yProps(0)}
                onClick={() => handleCategoryChange("all")}
              />
              {categoryList.map((item, index) => (
                <Tab
                  key={index + 1}
                  label={item.category_name ? item.category_name : ""}
                  {...a11yProps(index + 1)}
                  onClick={() => handleCategoryChange(item.id)}
                />
              ))}
            </Tabs>
          </Box>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ paddingLeft: "4%", paddingRight: "4%" }}
      >
        <div className="newblog">
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              {filteredPosts.map((post) => {
                return (
                  <Card fullWidth key={post.id} style={{ marginTop: "5%" }}>
                    <CardMedia
                      sx={{ height: 350 }}
                      image={`https://cityplot.io/assets/${post.image}`}
                      title="green iguana"
                    />
                    <CardContent>
                      <p style={{ textAlign: "left" }}>
                        {formatDate(post.publish)}
                      </p>

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ textAlign: "left" }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ textAlign: "left" }}
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/blog/${post.id}`}>Read more</Link>
                    </CardActions>
                  </Card>
                );
              })}
              <br />
            </Grid>
            <Grid item xs={12} md={3} className="contact-us">
              <Typography style={{ color: "#61ff00", marginTop: "5%" }}>
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
                  style={{
                    color: "white",
                  }}
                  control={
                    <Checkbox
                      style={{
                        color: "white",
                      }}
                    />
                  }
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

              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: "white",
                  textAlign: "left",
                  marginTop: "20px",
                }}
              >
                MOST READ BLOGS
              </Typography>
              {topReadBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  gutterBottom
                  href={`/blog/${blog.id}`}
                  underline="hover"
                  style={{
                    color: "#61ff00",
                    textAlign: "left",
                    marginTop: "10px",
                    display: "block",
                  }}
                >
                  {blog.title}
                </Link>
              ))}
            </Grid>
          </Grid>
          <div className="row" style={{ rowGap: "50px" }}>
            <Typography
              variant="h3"
              gutterBottom
              style={{ color: "white", textAlign: "left" }}
            >
              Other Blogs
            </Typography>
            {currentPosts.map((post) => (
              <div className="col-sm-12 col-lg-4" key={post.id}>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={`https://cityplot.io/assets/${post.image}`}
                    title={post.title}
                  />

                  {/* <img src={post.image} width={120} height={120} /> */}
                  <CardContent sx={{ height: 220 }}>
                    <p style={{ textAlign: "left" }}>
                      {formatDate(post.publish)}
                    </p>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="single_blog_heading"
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="single_blog_description"
                    >
                      {`${post.description.slice(0, 150)}...`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`/blog/${post.id}`}>Read more</Link>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>

          <div className="page">
            <Pagination
              count={totalPages}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              color="primary"
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
