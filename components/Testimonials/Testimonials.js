import React, { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Carousel from 'react-slick';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from 'next-i18next';
import { useText, useHidden } from 'theme/common';
import imgApi from 'public/images/imgAPI';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'As a legal engineer tasked with maintaining relevant curriculum content, I found Web3Skills.com to be an invaluable resource. Their courses on Web3 technologies provide cutting-edge insights that are essential for preparing our students for the future of legal practice.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[6],
    title: 'Executive Manager',
    logo: '/images/logos/agency.png',
  },
  {
    text: 'Web3Skills.com offers comprehensive training on emerging technologies like blockchain and cryptography, which are increasingly relevant in the legal field. Their courses provide practical knowledge that enriches our curriculum and equips our students with the skills needed to thrive in the digital age.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[7],
    title: 'Executive Manager',
    logo: '/images/logos/architect.png',
  },
  {
    text: 'I have integrated Web3Skills.com into my course syllabus to ensure that my students stay ahead of the curve in understanding the legal implications of decentralized systems. The platform has a depth of content and engaging teaching methods making it an essential component of our curriculum.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[1],
    title: 'Executive Manager',
    logo: '/images/logos/cloud.png',
  },
  {
    text: 'Web3Skills.com has become a cornerstone of our legal technology program, offering specialized courses that explore the intersection of law and blockchain technology. The expertise provided by their instructors enhances student understanding of this complex subject matter.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[2],
    title: 'Executive Manager',
    logo: '/images/logos/starter.png',
  },
  {
    text: 'As a legal professional working in the insurance industry, efficient claim and evidence management are paramount. Web3Skills.com has revolutionized the way we handle claims by introducing decentralized storage solutions and smart contracts, streamlining our processes and improving transparency.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[3],
    title: 'Executive Manager',
    logo: '/images/logos/coin.png',
  },
  {
    text: 'Web3Skills.com has been instrumental in helping our legal team navigate the complexities of blockchain technology in insurance. Their courses on smart contracts and decentralized finance have empowered us to optimize our operations and provide better service to our clients.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[3],
    title: 'Executive Manager',
    logo: '/images/logos/fashion.png',
  },
  {
    text: 'I was skeptical at first about the relevance of Web3 technologies to the insurance industry, but Web3Skills.com proved me wrong. Their training programs not only helped me understand the potential applications of blockchain and decentralized systems in claims management but also provided practical tools to implement them effectively.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[9],
    title: 'Executive Manager',
    logo: '/images/logos/mobile.png',
  },
  {
    text: 'Web3Skills.com offers invaluable resources for legal professionals seeking to stay ahead in the ever-changing landscape of insurance law. Their courses provide actionable insights into leveraging blockchain technology for efficient claim processing and risk management.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[2],
    title: 'Executive Manager',
    logo: '/images/logos/profile.png',
  },
  {
    text: 'Implementing Web3 solutions from Web3Skills.com has significantly enhanced our claims processing efficiency and reduced costs for our insurance company. Their training programs have empowered our legal team to leverage blockchain technology effectively, resulting in faster resolutions and improved customer satisfaction.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[3],
    title: 'Executive Manager',
    logo: '/images/logos/saas.png',
  },
];

function Testimonials() {
  const slider = useRef(null);
  const { classes, cx } = useStyle();
  const { classes: hide } = useHidden();
  const { classes: text } = useText();
  const [currentSlide, setCurSlide] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: (curSlide) => {
      setCurSlide(curSlide);
    }
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={7} xs={12}>
            <div className={classes.sliderWrap}>
              {!isMobile && (
                <div className={classes.decoration}>
                  <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                    <defs>
                      <linearGradient x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%" id="linearGradient-1">
                        <stop stopColor={theme.palette.primary.dark} offset="0%" />
                        <stop stopColor={theme.palette.primary.main} offset="100%" />
                      </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
                      <path d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" id="Oval" fill="url(#linearGradient-1)" />
                    </g>
                  </svg>
                </div>
              )}
              <Typography variant="h3" align={isMobile ? 'center' : 'left'} className={cx(classes.title, text.title2)}>
                {t('saas-landing.testi_title')}
                <br />
                <strong>
                  {t('saas-landing.testi_titlestrong')}
                </strong>
              </Typography>
              <QuoteIcon className={classes.icon} />
              <div className={classes.carousel}>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={classes.item}>
                      <div className={classes.inner}>
                        <div className={classes.profile}>
                          <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                          <Typography variant="h6" className={classes.name}>
                            {item.name}
                            <span>
                              {item.title}
                            </span>
                          </Typography>
                        </div>
                        <Typography component="p" className={text.paragraph}>
                          {item.text}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12} className={hide.smDown}>
            {!isMobile && (
              <div className={classes.logoWrap}>
                {testiContent.map((item, index) => (
                  <div className={classes.figureBtn} key={index.toString()}>
                    <ButtonBase onClick={() => slider.current.slickGoTo(index)} className={currentSlide === index ? classes.active : ''}>
                      <img src={item.logo} alt={'logo' + index.toString()} key={index.toString()} />
                    </ButtonBase>
                  </div>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
