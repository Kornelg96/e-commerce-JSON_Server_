import { css } from "styled-components";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tabletS: '830px',
  tablet: '915px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1500px',
  desktop: '2560px'
};


export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};