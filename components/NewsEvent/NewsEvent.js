import React, { useRef } from 'react';
import Carousel from 'react-slick';
import NewsCard from '../Cards/News';
import imgAPI from 'public/images/imgAPI';
import useStyle from './news-event-style';

const newsContent = [
  {
    text: 'Decentralized Finance (DeFi) Dominates Traditional Banking: The Rise of Web3 Banking.',
    img: imgAPI.photo[28],
    type: 'caption_news',
  },
  {
    text: 'Healthcare on the Blockchain: Web3 Revolutionizes Medical Records and Patient Data Management.',
    img: imgAPI.photo[22],
    type: 'caption_news',
  },
  {
    text: 'Smart Cities Powered by Web3: Decentralized Systems Enhance Urban Infrastructure.',
    img: imgAPI.photo[24],
    type: 'caption_event',
  },
  {
    text: 'Supply Chain Transparency Through Web3: Blockchain Traceability Redefines Product Lifecycle Management.',
    img: imgAPI.photo[26],
    type: 'caption_event',
  },
  {
    text: 'Web3 in Education: Decentralized Learning Platforms Transform Traditional Teaching Methods.',
    img: imgAPI.photo[27],
    type: 'caption_news',
  },
  {
    text: 'Decentralized Autonomous Organizations (DAOs) Disrupt Corporate Governance: Web3 and the Future of Business.',
    img: imgAPI.photo[28],
    type: 'caption_news',
  },
  {
    text: 'Web3 and Renewable Energy: Blockchain Solutions Revolutionize Energy Trading and Distribution.',
    img: imgAPI.photo[22],
    type: 'caption_news',
  },
  {
    text: 'Web3 in Government: Blockchain Voting Systems and Transparent Governance Models.',
    img: imgAPI.photo[24],
    type: 'caption_event',
  },
  {
    text: 'NFTs (Non-Fungible Tokens) Revolutionize Digital Ownership: Web3 and the Future of Intellectual Property',
    img: imgAPI.photo[25],
    type: 'caption_news',
  },
  {
    text: 'Web3 and Decentralized Identity: Blockchain-Based Solutions Transform Identity Verification and Authentication',
    img: imgAPI.photo[26],
    type: 'caption_event',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function NewsEvent() {
  const slider = useRef(null);
  const { classes } = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {newsContent.map((item, index) => (
            <div key={index.toString()}>
              <div className={classes.item}>
                <NewsCard
                  img={item.img}
                  text={item.text}
                  type={item.type}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default NewsEvent;
