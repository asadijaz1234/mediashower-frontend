import { styled } from '@mui/material/styles';

import {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSectionProps,
  HeroText,
  HeroTitle,
} from '~/components/hero';

import heroImage from '~/assets/images/subscription-page/subscription-hero.png';

//Interfaces
export interface SubscriptionHeroSectionProps extends HeroSectionProps {}

//Styles
export const SubscriptionHeroSectionStyles = styled(HeroSection)(
  ({ theme }) => {
    const bgColor = '#e9c38a';

    return {
      backgroundColor: bgColor,
      'div.test': {
        display: 'none',
      },
      '& .MuiContainer-root': {
        '&::after': {
          gridColumn: '1 / -1',
          backgroundImage: `linear-gradient(to left, ${bgColor}, transparent 8% 45%, ${bgColor} 55%)`,
        },

        '& .HeroContent-root': {
          gridRow: '1 / -1',
          gridColumn: '1 / 2',
          justifySelf: 'end',
          transform: 'translateX(-8px)',
        },

        '& .HeroImage-root': {
          objectFit: 'contain',
          objectPosition: 'calc(100% + 36px) bottom',
          gridRow: '1 / -1',
          gridColumn: '1 / -1',
        },
      },

      [theme.breakpoints.down('xl')]: {
        '& .MuiContainer-root': {
          '& .HeroContent-root': {
            justifySelf: 'start',
            transform: 'none',
          },

          '& .HeroImage-root': {
            objectPosition: 'calc(100% + 100px) bottom',
          },
        },
      },

      [theme.breakpoints.down('lg')]: {
        '& .MuiContainer-root': {
          '&::after': {
            gridColumn: '1 / -1',
            backgroundImage: `linear-gradient(to left, ${bgColor}, transparent 5% 45%, ${bgColor} 55%)`,
          },

          '& .HeroImage-root': {
            objectPosition: '100% bottom',
          },
        },
      },

      [theme.breakpoints.down('md')]: {
        '& .MuiContainer-root': {
          '&::after': {
            gridRow: '2 / -1',
            backgroundImage: `linear-gradient(to bottom, ${bgColor}, transparent 5%), linear-gradient(to right, ${bgColor}, transparent 5% 95%, ${bgColor})`,
          },

          '& .HeroContent-root': {
            gridRow: '1 / 2',
            grodColumn: '1 / -1',
          },

          '& .HeroImage-root': {
            gridRow: '2 / -1',
            gridColumn: '1 / -1',
            objectFit: 'cover',
          },
        },
      },

      [theme.breakpoints.down('sm')]: {
        '& .MuiContainer-root': {
          '& .HeroImage-root': {
            objectPosition: 'calc(50% - 124px) bottom',
          },
        },
      },
    };
  }
);

//Component
export const SubscriptionHeroSection = (
  props: SubscriptionHeroSectionProps
) => {
  return (
    <SubscriptionHeroSectionStyles
      {...props}
      ContainerProps={{ maxWidth: 'xxl' }}
    >
      <HeroContent>
        <HeroTitle gutterBottom>
          The Better Way <br />
          to Get Marketing Done.
        </HeroTitle>
        <HeroText>
          All plans come with our powerful AI Marketing Assistant. Add on
          monthly credits to hire our award-winning human creative team.
        </HeroText>
      </HeroContent>
      <HeroImage src={heroImage} quality={95} />
      <div className="test"></div>
    </SubscriptionHeroSectionStyles>
  );
};
