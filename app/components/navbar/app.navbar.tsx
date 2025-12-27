import Image from "next/image";

import LogoImage from "../../public/FWD_logo.webp";
import { Container, HeaderHidden, Header, HeadingBody, HeadingMenu, HeadingBodyUs, MenuTitle, BodyMenu, MenuTitleAbout} from "./navbarStyled";
import { Button } from "../button/app.button";
import { MenuIcon, SearchIcon } from "@/app/public/icons/icons";

function Navbar(){
    return( 
        <Container>
            <HeaderHidden>
                <MenuIcon/>
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
        </Container>
    )
}

export default Navbar;