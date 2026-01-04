'use client'
import styled from "styled-components";

// reponsive
const device = {
  mobile: `(max-width: 576px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1024px)`,
};

interface BoxProps {
  $open?:boolean;
}

export const Container = styled.header`
    width: 100%;
    display: flex;
    position: absolute;
`

//Header hidden
export const HeaderHidden = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

//Menu hidden

export const InputOpen = styled.input.attrs({ type: 'checkbox' })`
    width: 20px;
    height: 2px;
    padding 0;
    margin: 0;
    appearance: none;
    background-color: #333;
    border-radius: 9999px;
    outline: none;
    pointer-event: none;
    transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
        rotate 200ms ease-in-out, translate 200ms ease-in-out,
        background-color 200ms ease-in-out;
        
    &:checked{
        opacity: 0;
        width: 0;
        transform-origin: left center; 
    }
`

export const MenuHiddenOpen = styled.label<BoxProps>`
    display: none;
    cursor: pointer;

    @media ${device.laptop} {
        width: max-content;
        display: flex;
        flex-direction: column;
        gap: 3px;
        position: absolute;

        &::before {
            content:"";
            width: 15px;
            height: 2px;
            background-color: #333;
            border-radius: 9999px;
            transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
                rotate 200ms ease-in-out, translate 200ms ease-in-out,
                background-color 200ms ease-in-out;
            transform-origin: left center;
        }

        &::after{
            content:"";
            width: 10px;
            height: 2px;
            background-color: #333;
            border-radius: 9999px;
            transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
                rotate 200ms ease-in-out, translate 200ms ease-in-out,
                background-color 200ms ease-in-out;
            transform-origin: left center;
        }

        &:has(${InputOpen}:checked)::before{
            width: 20px;
            transform: rotate(45deg);
            translate: 0 -2px;
        }

        &:has(${InputOpen}:checked)::after {
            width: 20px;
            transform: rotate(-45deg);
            translate: 0 2px;
        }
    }
`

//sidebar
export const HiddenSidebar = styled.aside<BoxProps>`
    display: none;
    width: 100%;
    height: 100vh;
    background-color: #fff;

    @media ${device.laptop} {
        display: ${({ $open }) => ($open ? "block" : "none")};
    }
`



// HeaderMenu
export const Header = styled.div`
    flex: 1;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom-left-radius: 25px;
`

export const HeadingMenu = styled.div`
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media ${device.laptop} {
        padding: 0 0 0 10px;
        gap: 0;
    }
`
export const HeadingBody = styled.div<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media ${device.laptop} {
        display: ${({ $open }) =>
            $open ? "flex" : "none"};
    }
`

export const HeadingBodyUs = styled.div<BoxProps>`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    &::before{
        content: "|";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #dbdfe1; 
        font-weight: 600;
    }

    @media ${device.laptop} {
        display: ${({ $open }) =>
            $open ? "flex" : "none"};
    }
`
export const MenuTitle = styled.p`
    line-height: 1.25rem;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`

export const MenuTitleAbout = styled.p`
    color: #636566;
    text-align: center;
    line-height: 1.25rem;
    font-weight: bold;
    cursor: pointer;
`

// BodyMenu
export const BodyMenu = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media ${device.laptop} {
        gap: 10px;
    }
`

