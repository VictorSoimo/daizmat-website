import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import image1 from '../assets/website/image 1.jpg'
import image2 from '../assets/website/img-2.jpg'
import image3 from '../assets/website/benefits.jpg'
import image4 from '../assets/website/img-3.jpeg'
import image5 from '../assets/website/img-4.jpg'
import image6 from '../assets/website/img-6.jpg'
import image7 from '../assets/website/img-7.jpg'
import image8 from '../assets/website/tbl-1.jpg'
import image9 from '../assets/website/tbl-2.jpg'
import image10 from '../assets/website/tbl-3.jpg'
import image11 from '../assets/website/shop.jpg'
import image12 from '../assets/website/shop2.jpg'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  Discover Our Modern Office Furniture Collection
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text5">
                  Elevate your workspace with our premium office furniture
                  designed for comfort and style.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6"><a href = "https://wa.me?254788066666?text=Hi, I am interested in your funriture. I saw them on your website">Shop Now</a></span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text8">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image2Alt: 'Ergonomic Chair',
  image7Alt: 'Workspace Dividers',
  image8Src: image10,
  content1: undefined,
  image2Src: image2,
  image10Src:image9,
  image9Alt: 'Collaborative Workstations',
  image8Alt: 'Executive Desk',
  image4Alt: 'Storage Cabinet',
  image4Src: image3,
  image5Alt: 'Reception Desk',
  image11Src: image7,
  image12Alt: 'Office Accessories',
  image7Src:image11,
  image1Src: image1,
  image12Src:image12,
  action1: undefined,
  image9Src: image8,
  image11Alt: 'Standing Desk',
  image6Alt: 'Conference Room Chairs',
  heading1: undefined,
  image3Src:image4,
  image5Src:image5,
  image1Alt: 'Office Desk',
  image3Alt: 'Meeting Table',
  action2: undefined,
  image6Src: image6,
  image10Alt: 'Office Lounge Furniture',
}

Hero17.propTypes = {
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Src: PropTypes.string,
  content1: PropTypes.element,
  image2Src: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image1Src: PropTypes.string,
  image12Src: PropTypes.string,
  action1: PropTypes.element,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  action2: PropTypes.element,
  image6Src: PropTypes.string,
  image10Alt: PropTypes.string,
}

export default Hero17
