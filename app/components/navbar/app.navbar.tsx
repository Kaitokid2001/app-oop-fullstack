'use client'
import Image from "next/image";
import { useState } from "react";

import LogoImage from "../../public/FWD_logo.webp";
import { Container, HeaderHidden, MenuHiddenOpen, InputOpen, HiddenSidebar, Header, HeadingBody, HeadingMenu, HeadingBodyUs, MenuTitle, BodyMenu, MenuTitleAbout} from "./navbarStyled";
import { Button } from "../button/app.button";
import { MenuIcon, SearchIcon } from "@/app/public/icons/icons";

function Navbar(){
    const [open, setOpen] = useState(false);

    return( 
        <Container>
            <HeaderHidden>
                <MenuHiddenOpen>
                    <InputOpen 
                        checked={open}
                        onChange={(e) => setOpen(e.target.checked)}
                    />
                </MenuHiddenOpen>
            </HeaderHidden>
            <Header>
                <HeadingMenu>
                    <Image 
                        src={LogoImage}
                        alt="NO IMG"
                        width={100}/>
                    <HeadingBody>
                        <MenuTitle>Products</MenuTitle>
                        <MenuTitle>Clams</MenuTitle>
                        <MenuTitle>Support</MenuTitle>
                    </HeadingBody>
                    <HeadingBodyUs>
                        <MenuTitleAbout>About us</MenuTitleAbout>
                        <MenuTitleAbout>Join us</MenuTitleAbout>
                    </HeadingBodyUs>           
                </HeadingMenu>
                <BodyMenu>
                    <Button>Register</Button>
                    <Button>Log in</Button>
                    <SearchIcon/>
                    <MenuTitle>vn</MenuTitle>
                </BodyMenu>
            </Header>
            <HiddenSidebar $open={open}>
                    <MenuTitle>Products</MenuTitle>
                    <MenuTitle>Clams</MenuTitle>
                    <MenuTitle>Support</MenuTitle>
                    <MenuTitleAbout>About us</MenuTitleAbout>
                    <MenuTitleAbout>Join us</MenuTitleAbout>
            </HiddenSidebar>
        </Container>
    )
}

export default Navbar;