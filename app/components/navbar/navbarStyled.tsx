'use client'
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    position: absolute;
`

//Header hidden
export const HeaderHidden = styled.div`
    width: 100px;
    height: 75px;
    // display: {props => props.theme.main};
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
`
export const HeadingBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const HeadingBodyUs = styled.div`
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
`

