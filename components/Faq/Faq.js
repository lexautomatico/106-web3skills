import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import ParallaxMedium from '../Parallax/Medium';
import illustration from 'public/images/saas/faq.png';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Can you provide an overview of Web3Skills.com and its mission? ',
    a: 'Web3Skills.com is dedicated to providing comprehensive training on Web3 technologies, focusing on p2p computing, public blockchains, and cryptographic systems. Our mission is to empower businesses to leverage these cutting-edge technologies effectively for their computing needs. '
  },
  {
    q: 'What inspired you to create Web3Skills.com?',
    a: 'As a legal professional with a passion for technology, I recognized the transformative potential of Web3 technologies in reshaping traditional business models. I founded Web3Skills.com to bridge the gap between legal expertise and technical proficiency in the Web3 space, enabling businesses to navigate this new paradigm confidently. '
  },
  {
    q: 'How does Web3Skills.com differentiate itself from other web3 training platforms?',
    a: 'Unlike many other platforms, Web3Skills.com offers a unique blend of legal insight and technical expertise. Our courses not only cover the technical aspects of Web3 technologies but also provide guidance on regulatory compliance and legal implications, which is crucial for businesses operating in this space. '
  },
  {
    q: 'What are the core components of your training curriculum? ',
    a: 'Our training curriculum covers a wide range of topics, including decentralized networks, smart contracts, tokenomics, cryptography, and decentralized storage solutions. Each course is designed to provide both theoretical knowledge and hands-on experience, ensuring that participants are well-equipped to implement Web3 solutions in real-world scenarios. '
  },
  {
    q: 'How do you ensure that your training material stays up-to-date with the rapidly evolving landscape of Web3 technologies?',
    a: 'We continuously monitor developments in the Web3 space and update our training material accordingly. Additionally, we encourage feedback from our participants to identify areas for improvement and incorporate the latest industry best practices into our curriculum. '
  },
  {
    q: 'Can you share some success stories of businesses that have benefited from your training programs?  ',
    a: 'We have had numerous success stories from businesses across various industries, ranging from startups to multinational corporations. For example, one of our clients, a fintech startup, was able to streamline their operations and reduce costs by implementing decentralized finance (DeFi) solutions after completing our training program. '
  },
  {
    q: 'How do you support participants after they have completed your training courses?',
    a: 'Our support does not end with the completion of the course. We offer ongoing assistance through community forums, webinars, and one-on-one consultations to help participants overcome any challenges they may encounter while implementing Web3 solutions in their respective organizations. '
  },
  {
    q: 'What role do you see Web3 technologies playing in the future of business computing?',
    a: 'Web3 technologies have the potential to revolutionize the way businesses operate by enabling trustless interactions, enhancing security, and reducing dependency on centralized intermediaries. In the future, we anticipate widespread adoption of these technologies across various sectors, leading to increased efficiency and transparency in business processes. '
  },
  {
    q: 'How do you ensure that your training programs cater to participants with varying levels of technical expertise?',
    a: 'We offer a range of courses tailored to different skill levels, from beginner to advanced. Our introductory courses provide a solid foundation for those new to Web3 technologies, while our advanced courses delve into more complex topics for experienced professionals. Additionally, our instructors are available to provide personalized guidance and support as needed. '
  },
  {
    q: 'What are your future plans for Web3Skills.com?',
    a: 'We are constantly evolving to meet the changing needs of the market. In the future, we plan to expand our course offerings to cover emerging technologies and industry trends in the Web3 space. Additionally, we are exploring opportunities to collaborate with industry partners and academic institutions to further enhance our training programs and reach a wider audience. '
  },
];

function Faq() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title align={isMobile ? 'center' : 'left'}>
              <strong>
                FAQ
              </strong>
            </Title>
            <Typography className={cx(classes.text, text.subtitle2)} align={isMobile ? 'center' : 'left'} component="p">
              {t('saas-landing.faq_subtitle')}
            </Typography>
            {!isMobile && (
              <div className={classes.illustration}>
                <ParallaxMedium />
                <img src={illustration} alt="illustration" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
