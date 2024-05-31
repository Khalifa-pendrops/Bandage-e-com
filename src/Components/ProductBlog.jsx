import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch20,
  faChartArea,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import blogpic1 from "../images/blogpic1.svg"
import blogpic2 from "../images/blogpic2.svg";
import blogpic3 from "../images/blogpic3.svg";

export default function ProductBlog() {
  return (
    <div>
      <div className="blog-container">
        <div className="product-service-header">
          <h3 className="header-blue">Practice Advice</h3>
          <h2>Featured Posts</h2>
        </div>
        <div className="blog-posts">
          <div className="blog-article">
            <img src={blogpic1} alt="blog" />
            <div className="article-body">
              <div className="blog-links">
                <Link className="color-link2" to="/www.google.com/">
                  Google
                </Link>
                <Link className="color-link" to="/trending">
                  Trending
                </Link>
                <Link className="color-link" to="/new">
                  New
                </Link>
              </div>
              <h6>Loudest à la Madison #1 (L'integral)</h6>
              <p className="article-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="time-chart">
                <div className="time">
                  <FontAwesomeIcon
                    className="time-chart-icons"
                    icon={faStopwatch20}
                  />
                  <p>22 April 2021</p>
                </div>
                <div className="chart">
                  <FontAwesomeIcon
                    className="time-chart-icons2"
                    icon={faChartArea}
                  />
                  <p>10 comments</p>
                </div>
              </div>
              <div className="Learn-more-blog">
                <p>Learn More</p>
                <FontAwesomeIcon
                  className="time-chart-icons"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>

          <div className="blog-article">
            <img src={blogpic2} alt="blog" />
            <div className="article-body">
              <div className="blog-links">
                <Link className="color-link2" to="/www.google.com/">
                  Google
                </Link>
                <Link className="color-link" to="/trending">
                  Trending
                </Link>
                <Link className="color-link" to="/new">
                  New
                </Link>
              </div>
              <h6>Loudest à la Madison #1 (L'integral)</h6>
              <p className="article-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="time-chart">
                <div className="time">
                  <FontAwesomeIcon
                    className="time-chart-icons"
                    icon={faStopwatch20}
                  />
                  <p>22 April 2021</p>
                </div>
                <div className="chart">
                  <FontAwesomeIcon
                    className="time-chart-icons2"
                    icon={faChartArea}
                  />
                  <p>10 comments</p>
                </div>
              </div>
              <div className="Learn-more-blog">
                <p>Learn More</p>
                <FontAwesomeIcon
                  className="time-chart-icons"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>

          <div className="blog-article">
            <img src={blogpic3} alt="blog" />
            <div className="article-body">
              <div className="blog-links">
                <Link className="color-link2" to="/www.google.com/">
                  Google
                </Link>
                <Link className="color-link" to="/trending">
                  Trending
                </Link>
                <Link className="color-link" to="/new">
                  New
                </Link>
              </div>
              <h6>Loudest à la Madison #1 (L'integral)</h6>
              <p className="article-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="time-chart">
                <div className="time">
                  <FontAwesomeIcon
                    className="time-chart-icons"
                    icon={faStopwatch20}
                  />
                  <p>22 April 2021</p>
                </div>
                <div className="chart">
                  <FontAwesomeIcon
                    className="time-chart-icons2"
                    icon={faChartArea}
                  />
                  <p>10 comments</p>
                </div>
              </div>
              <div className="Learn-more-blog">
                <p>Learn More</p>
                <FontAwesomeIcon
                  className="time-chart-icons"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
