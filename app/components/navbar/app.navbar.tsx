'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

import LogoImage from "../../public/FWD_logo.webp";
import { Container, HeaderHidden, MenuHiddenOpen, InputOpen, HiddenSidebar, Header, HeadingBody, HeadingMenu, HeadingBodyUs, MenuTitle, BodyMenu, MenuTitleAbout} from "./navbarStyled";
import { Button } from "../button/app.button";
import { MenuIcon, SearchIcon } from "@/app/public/icons/icons";

function Navbar(){
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // scroll xuống
                setShowHeader(false);
            } else {
                // scroll lên
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return(
        <>
            <Container $show={showHeader}>
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
                        <HiddenSidebar $open={open}>
                            <HeadingBody>
                                <MenuTitle>Products</MenuTitle>
                                <MenuTitle>Clams</MenuTitle>
                                <MenuTitle>Support</MenuTitle>
                            </HeadingBody>
                            <HeadingBodyUs>
                                <MenuTitleAbout>About us</MenuTitleAbout>
                                <MenuTitleAbout>Join us</MenuTitleAbout>
                            </HeadingBodyUs> 
                        </HiddenSidebar>          
                    </HeadingMenu>
                    <BodyMenu>
                        <Button>Register</Button>
                        <Button>Log in</Button>
                        <SearchIcon/>
                        <MenuTitle>vn</MenuTitle>
                    </BodyMenu>
                </Header> 
            </Container>
        </>
    )
}

export default Navbar;