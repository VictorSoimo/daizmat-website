import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8.jsx'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Daizmat Furniture & Interiors</title>
        <meta property="og:title" content="Daizmat Furniture & Interiors" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="Contacts-text100">Contacts</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text101">About</span>
          </Fragment>
        }
       
        action1={
          <Fragment>
            <span className="home-text108">Visit Us</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Call Us</span>
          </Fragment>
        }
        
      ></Navbar8>
      <Hero17
        
        content1={
          <Fragment>
            <span className="home-text116">
              Elevate your workspace with our premium office furniture designed
              for comfort and style.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Discover Our Modern Office Furniture Collection
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Modern Office Furniture</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Functional Meeting Spaces</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Comfortable Seating</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Explore our collection of modern office furniture designed for
              functionality and style.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Sleek Conference Tables for Meetings.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Ergonomic Office Chairs for Comfort
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Shop Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our collection of modern and stylish office furniture to
              elevate your workspace.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Upgrade Your Office Space</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Elegant Designs</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Quality Craftsmanship</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Customizable Options</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Explore our collection of office furniture featuring elegant and
              modern designs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Experience the quality craftsmanship of our furniture pieces that
              are built to last.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Personalize your workspace with our customizable furniture options
              tailored to your needs.
            </span>
          </Fragment>
        }
      ></Features25>
      
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Explore Our Collection</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">
              Experience Quality Craftsmanship
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">
              Contact Us for Custom Solutions
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              Stay Updated with Our Newsletter
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Browse through our wide range of office furniture products,
              including desks, chairs, storage solutions, and more.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Our furniture is expertly crafted with attention to detail and
              quality materials to ensure durability and style.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Need custom furniture solutions for your office space? Contact us
              today to discuss your requirements.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Subscribe to our newsletter to receive updates on new product
              launches, promotions, and design trends.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Read what our customers have to say about our office furniture
              products and services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">HR Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">COO, Business123</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Office Manager, Startup456</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Call or Whatsap or SMS us at: 0726523678.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Main Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Showroom</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Government road, Nakuru CBD
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Whitehouse, Next to Shell petrol station
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
