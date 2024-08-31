import React from 'react';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';

const feature = {
  basic: [
    'Self-guided',
    'Basic Web3Skills',
    'Basic Web3 3D WorkSpaces'
  ],
  best: [
    'Token Gated Content',
    'Web3 3D Workspaces',
    'Onboard to Web3',
    'Advanced Demonstrations',
  ],
  pro: [
    'Token Gated Content',
    'Web3 3D Workspaces',
    'Onboard to Web3',
    'Advanced Demonstrations',
    'Custom Web3 Profiles'
  ],
  enterprise: [
    'Token Gated Content',
    'Web3 3D Workspaces',
    'Onboard to Web3',
    'Advanced Demonstrations',
    'Custom Web3 Profiles',
    `Custom ENS Domains`
  ],
};

function PricingPlan() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg
          fill="#cccccc"
        >
          <use xlinkHref="/images/saas/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Title align="center">
            <strong>
              {t('saas-landing.pricing_title')}
            </strong>
          </Title>
        </div>
        <Typography className={cx(classes.subtitle, text.subtitle2)} display="block" align="center">
          {t('saas-landing.pricing_subtitle')}
        </Typography>
        <div className={classes.pricingWrap}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={200}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Basic"
                price={0}
                featureList={feature.basic}
                desc="Web3Skills are presented by Web3 Legal Engineering."
                type="basic"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={400}
            duration={0.4}
            className={classes.pop}
          >
            <div className={classes.item}>
              <PricingCard
                title="Best Value: All"
                subtype="one time"
                price={7}
                featureList={feature.best}
                desc="Web3Skills are presented by Web3 Legal Engineering."
                type="value"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={600}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="All + Profile"
                subtype="one time"
                price={23}
                featureList={feature.pro}
                desc="Web3Skills are presented by Web3 Legal Engineering."
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={800}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="All + Profiles + Domain"
                subtype="one time"
                price={39}
                featureList={feature.enterprise}
                desc=" Web3Skills are presented by Web3 Legal Engineering. "
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default PricingPlan;
