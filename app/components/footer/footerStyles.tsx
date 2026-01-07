'use client'
import styled, { keyframes } from "styled-components";

// reponsive
const device = {
  mobile: `(max-width: 576px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1024px)`,
};

interface BoxProps {
  columnOnMobile?: boolean;
  displayOnMobile?: boolean;
  $open?:boolean;
}

export const Wrapper = styled.footer`
    padding: 100px 0;
    background: #FEF9F4;

    @media ${device.laptop} {
        padding: 50px 0;
    }
`

export const Container = styled.section`
    width: 1288px;
    max-width: calc(100% - 48px);
    margin: 0 auto;
`

export const FooterTop = styled.div<BoxProps>`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    column-gap: 78px;

    @media ${device.laptop} {
        display: flex;
        flex-direction: ${({ columnOnMobile }) =>
            columnOnMobile ? "row" : "column"};
    }
`

// Social
export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;

    @media ${device.laptop} {
        flex-direction: row;
        margin-bottom: 20px;
        gap: 0;
    }
`

// Header social
export const FooterSocial = styled(FooterColumn)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

// Bottom Social Icon
export const FooterSocialIcon = styled.div`
    width: 190px;
    display: inline-flex;
    flex-direction: column;
    gap: 40px;
`

//  icon and title
export const FooterSocialIconHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

// Div Social Title Icon
export const FooterSocialIconItem = styled.div<BoxProps>`
    display: flex;
    column-gap: 20px;
    position: relative;
    
    &::before{
        content: '';
        position: absolute;
        top: -60%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }

    @media ${device.laptop} {
        display: ${({ displayOnMobile }) =>
            displayOnMobile ? "flex" : "none"};
    }
`

// Title
export const TitleHeadingIcon = styled.h3`
    color: #10375C;
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.5rem;
`

// Styled btn icon
export const FooterSocialBtn = styled.a`
    color: #FEF9F4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #10375C;
    border-radius: 50%;
    transition: 0.25s;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #10375C;
        box-shadow: 0px 3px 5px;
    }

    @media ${device.laptop} {
        width: 48px;
        height: 48px;
    }
`

// Styled btn icon call
export const FooterSocialBtnCall = styled(FooterSocialBtn)`
    width: 48px;
    height: 48px;
`

// Footer list
export const FooterList = styled.div<BoxProps>`
    display: flex;
    flex-direction: ${({ columnOnMobile }) =>
        columnOnMobile ? "row" : "column"};
    gap: 30px;

    @media ${device.laptop} {
        gap: 0px;
        cursor: pointer;
    }
`

export const DivTitleHeading = styled.div<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media ${device.laptop}{
        border-bottom: 1px solid #10375C;
    }
`

export const AnimationInput = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 100%;
    padding 0;
    margin: 0;
    cursor: pointer;
`

export const DivAnimation = styled.label<BoxProps>`
    position: relative;
    cursor: pointer;

    @media ${device.laptop} {
        display: inline-block;
        width: 16px;
        height: 16px;

        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            width: 14px;
            height: 2px;
            background: #10375C;
            transform: translateY(-50%);
            transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
                rotate 200ms ease-in-out, translate 200ms ease-in-out,
                background-color 200ms ease-in-out, transform 200ms ease-in-out;
        }

        &::before {
            content: "";
            position: absolute;
            right: 6px;
            top: 50%;
            width: 2px;
            height: 14px;
            background: #10375C;
            transform: translateY(-50%);
            transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
                rotate 200ms ease-in-out, translate 200ms ease-in-out,
                background-color 200ms ease-in-out, transform 200ms ease-in-out;
                
        }

        &:has(${AnimationInput}:checked)::before{
            transform: rotate(90deg);
            translate: 0 -7px;
        }

        &:has(${AnimationInput}:checked)::after{
            transform: rotate(90deg);
            translate: 0 -7px;
            opacity: 0;
            width: 0;
            pointer-events: none;
        }
    }
`

export const TitleHeading = styled.h3<BoxProps>`
    color: #10375C;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    user-select: none;

    &:hover{
        background-color: #10375C;
        color: #fff;
        opacity: 0,7;
    }

    @media ${device.laptop} {
        padding-left: 18px;

        &:hover{
            background: none;
            color: #10375C;
            opacity: 1;
        }

        &::before{
            content: "→";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.4rem;
            line-height: 3;
        }
    }
`

export const UlList = styled.ul<BoxProps>`
    padding-left: 0;
    margin: 0;

    @media ${device.laptop} {
        display: ${({ $open }) =>
            $open ? "block" : "none"};
    }
`

export const LiList = styled.li`
    margin-bottom: 10px;
    user-select: none;
`

export const TitleList = styled.span`
    color: #183028;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0;
    cursor: pointer;

    &:hover{
        color: #10375C;
        font-weight: 500;
    }

    @media ${device.laptop} {
        margin-left: 20px;
    }
`

// Bottom Copyright
export const FooterBottom = styled.div<BoxProps>`
`

export const FooterSocialIconItemOnLaptop = styled.div<BoxProps>`
    display: none;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 50px;
    position: relative;

    @media ${device.laptop} {
        display: ${({ displayOnMobile }) =>
            displayOnMobile ? "none" : "flex"};
    }
`

export const FooterBottomCopyright = styled.div<BoxProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
    position: relative;

    &::before{
        content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #10375C;
    }

    @media ${device.laptop} {
        display: ${({ displayOnMobile }) =>
            displayOnMobile ? "flex" : "block"};

        &::before{
            content: none;
        }
    }
`

export const FooterBottomTitle = styled.div<BoxProps>`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 15px;

    @media ${device.laptop} {
        &:last-child {
            position: relative;
            margin-bottom: 20px;
        }

        &:last-child::before {
            content: "";
            position: absolute;
            top: -10px;
            left: 0;
            width: 100%;
            height: 1px;
            background: #10375C;
        }
    }
`

export const TitleCopyrightBase = styled.span`
    color: #636566;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3rem;
    cursor: default;

    &:hover{
        color: #636566;
        font-weight: 300;
    }
`

export const TitleCopyright = styled(TitleCopyrightBase)`
    position: relative;

    &:hover {
        color: #10375C;
        font-weight: 400;
        cursor: pointer;
    }

    &::after {
        content: "|";
        position: absolute;
        right: -15%;
        top: 50%;
        transform: translateY(-50%);
        color: #636566;
        font-weight: 600;
    }

    &:last-child::after {
        content: none;
    }
`

