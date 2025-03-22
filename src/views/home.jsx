import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8.jsx'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
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
        <meta property="og:title" content="Ornate Substantial Shark" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Contact</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our office furniture store
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Learn more about our company and values
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Get in touch with us for inquiries or support
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Shop Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
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
              Sleek Conference Tables for Meetings
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
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$199</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$299</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$399</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Shop Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$1999</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Shop Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$2999</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Shop Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$3999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Ergonomic design</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Adjustable height</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Durable materials</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Sleek modern design</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Storage compartments</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Easy assembly</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Executive style</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Luxurious finish</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Spacious desk area</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
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
              1234 Elm Street, Suite 100, City, State, Zip Code
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              5678 Oak Avenue, Showroom Floor, City, State, Zip Code
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">About</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Link 5</span>
          </Fragment>
        }
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
