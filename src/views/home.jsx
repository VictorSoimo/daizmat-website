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
            <span className="home-text109"><a href="tel:+254788066666">Call Us</a></span>
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
            <span className="home-text124"><a href = "https://wa.me/254788066666?text=Hi, I am interested in your funriture. I saw them on your website">Shop Now</a></span>
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
      
      {/* <Steps2
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
      ></Steps2> */}
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Elegant and modern Furniture with good after sale support service.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              My back stopped paining after i started using their ergonomic seats. Highly recommend.
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
            <span className="home-text198">Rift Valley Sports Club</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jeskim Cyber</span>
          </Fragment>
        }
      
        author1Position={
          <Fragment>
            <span className="home-text202">Accountant, Rift Valley Sports Club</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">HR Manager, Jeskim Cyber</span>
          </Fragment>
        }
       
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Call or Whatsap or SMS us at: <a href="tel:+254788066666">0788066666</a>
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
