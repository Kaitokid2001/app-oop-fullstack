'use client'
import styled from "styled-components";

export const Wrapper = styled.footer`
    padding: 100px 0;
    background: #FEF9F4;
`

export const Container = styled.section`
    width: 1288px;
    max-width: calc(100% - 48px);
    margin: 0 auto;
`

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    column-gap: 78px;
`

// Social
export const FooterColumn = styled.div`
    gap: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

// Header social
export const FooterSocial = styled.div`
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
export const FooterSocialIconItem = styled.div`
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
`

// Styled btn icon call
export const FooterSocialBtnCall = styled(FooterSocialBtn)`
    width: 48px;
    height: 48px;
`

// Footer list
export const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const TitleHeading = styled.h3`
    color: #10375C;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;

    &:hover{
        background: red;
    }
`

export const UlList = styled.ul`
`

export const LiList = styled.li`
    margin-bottom: 10px;
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
`