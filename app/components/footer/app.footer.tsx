'use client'
import Image from "next/image";
import { useState } from "react";

import LogoImage from "../../public/FWD_logo.webp"; 
import { 
    Container, 
    Wrapper, 
    FooterTop, 
    FooterColumn, 
    FooterSocial, 
    FooterSocialIcon, 
    FooterSocialIconHeading, 
    TitleHeadingIcon,
    FooterSocialIconItem , 
    FooterSocialBtn,
    FooterSocialBtnCall,
    FooterList,
    DivTitleHeading,
    DivAnimation,
    TitleHeading,
    UlList,
    LiList,
    TitleList,
    FooterBottom,
    FooterSocialIconItemOnLaptop,
    FooterBottomTitle,
    FooterBottomCopyright,
    TitleCopyrightBase,
    TitleCopyright,
} from "./footerStyles";

function Footer(){
    const [openProducts, setOpenProducts] = useState(false);
    const [openClaims, setOpenClaims] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);
    const [open, setOpen] = useState(false);

    return(
        <Wrapper>
            <Container>
                <FooterTop>     
                    <FooterColumn>
                        <FooterSocial>
                            <Image 
                                src={LogoImage} 
                                alt="NO IMG"
                                width={150}
                                height={50}/>
                            {/* <h1 >Visit website</h1> */}
                        </FooterSocial>
                        <FooterSocialIcon>
                                <FooterSocialIconHeading>
                                    <FooterSocialBtnCall>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 512 512" fill="currentcolor">
                                            <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"></path>
                                        </svg>
                                    </FooterSocialBtnCall>
                                    <TitleHeadingIcon>0902914017</TitleHeadingIcon>
                                </FooterSocialIconHeading>
                            <FooterSocialIconItem>
                                <FooterSocialBtn>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="currentcolor">
                                        <path d="M3.98981 11.9358V6.0302H5.76473L6 3.9517H3.98981L3.9928 2.91132C3.9928 2.3692 4.0477 2.07885 4.87783 2.07885H5.98755V0H4.21224C2.07977 0 1.32931 1.00825 1.32931 2.70405V3.95186H0V6.03055H1.32931V11.8521C1.84718 11.9489 2.38257 12 2.93075 12C3.28487 12 3.63863 11.9786 3.98981 11.9358Z" fill="currentColor"></path>
                                    </svg>
                                </FooterSocialBtn>
                                <FooterSocialBtn>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="currentcolor">
                                        <path d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z" fill="currentColor"></path>
                                    </svg>
                                </FooterSocialBtn>
                                <FooterSocialBtn>  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="currentcolor">
                                        <path d="M0 1.39394C0 0.989891 0.146401 0.656558 0.439189 0.393939C0.731978 0.131309 1.11262 0 1.58108 0C2.04119 0 2.41344 0.129285 2.69788 0.387879C2.99066 0.654545 3.13707 1.00201 3.13707 1.4303C3.13707 1.81818 2.99486 2.14141 2.71042 2.4C2.41764 2.66667 2.03282 2.8 1.55598 2.8H1.54344C1.08333 2.8 0.711072 2.66667 0.426641 2.4C0.142209 2.13333 0 1.79798 0 1.39394ZM0.163127 12V3.90303H2.94884V12H0.163127ZM4.49228 12H7.27799V7.47879C7.27799 7.19595 7.31146 6.97777 7.37838 6.82424C7.49549 6.54949 7.67326 6.31716 7.91168 6.12727C8.1501 5.93737 8.44916 5.84242 8.80888 5.84242C9.74582 5.84242 10.2143 6.45252 10.2143 7.67273V12H13V7.35758C13 6.16161 12.7072 5.25455 12.1216 4.63636C11.536 4.01818 10.7622 3.70909 9.80019 3.70909C8.72104 3.70909 7.88031 4.15758 7.27799 5.05455V5.07879H7.26544L7.27799 5.05455V3.90303H4.49228C4.509 4.16161 4.51737 4.96565 4.51737 6.31515C4.51737 7.66464 4.509 9.55959 4.49228 12Z" fill="currentColor"></path>
                                    </svg>
                                </FooterSocialBtn>
                                <FooterSocialBtn>  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 576 512" fill="currentcolor">
                                        <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"></path>  
                                    </svg>
                                </FooterSocialBtn>
                            </FooterSocialIconItem>
                        </FooterSocialIcon>
                    </FooterColumn>
                    <FooterList>
                        <DivTitleHeading
                            $open={openProducts}
                            onClick={() => setOpenProducts(!openProducts)}
                        >
                            <TitleHeading>Products</TitleHeading>
                            <DivAnimation $open={openProducts}/>
                        </DivTitleHeading>
                        <UlList $open={openProducts}>
                            <LiList><TitleList>Investments</TitleList></LiList>
                            <LiList><TitleList>Critical illness</TitleList></LiList>
                            <LiList><TitleList>Medical cover</TitleList></LiList>
                            <LiList><TitleList>Family protection</TitleList></LiList>
                            <LiList><TitleList>Accident & disability</TitleList></LiList>
                        </UlList>
                    </FooterList>
                    <FooterList $open={openClaims}>
                        <DivTitleHeading
                            $open={openClaims}
                                onClick={() => setOpenClaims(!openClaims)}
                        >
                            <TitleHeading>Claims</TitleHeading>
                            <DivAnimation $open={openClaims}/>
                        </DivTitleHeading>
                        <UlList $open={openClaims}>
                            <LiList><TitleList>Hospital cash allowance claims</TitleList></LiList>
                            <LiList><TitleList>Healthcare claims</TitleList></LiList>
                            <LiList><TitleList>Critical illness claims - Cancer claims</TitleList></LiList>
                            <LiList><TitleList>Accident claims</TitleList></LiList>
                            <LiList><TitleList>Total permanent disability claims</TitleList></LiList>
                            <LiList><TitleList>Loss of life claims</TitleList></LiList>
                        </UlList>
                    </FooterList>
                    <FooterList>
                        <DivTitleHeading
                            $open={openSupport}
                            onClick={() => setOpenSupport(!openSupport)}
                        >
                            <TitleHeading>Products</TitleHeading>
                            <DivAnimation $open={openSupport}/>
                        </DivTitleHeading>
                        <UlList $open={openSupport}>
                            <LiList><TitleList>Find a form</TitleList></LiList>
                            <LiList><TitleList>Pay premium</TitleList></LiList>
                            <LiList><TitleList>FWD Care - Recovery Program</TitleList></LiList>
                            <LiList><TitleList>FAQs</TitleList></LiList>
                            <LiList><TitleList>Call 0902914017</TitleList></LiList>
                            <LiList><TitleList>Online enquiries</TitleList></LiList>
                            <LiList><TitleList>Our offices</TitleList></LiList>
                            <LiList><TitleList>Investment-linked fund</TitleList></LiList>
                            <LiList><TitleList>Universal Life fund</TitleList></LiList>
                            <LiList><TitleList>Historical interest rates</TitleList></LiList>
                        </UlList>
                    </FooterList>
                    <FooterList>
                        <DivTitleHeading>
                            <TitleHeading>About us</TitleHeading> 
                        </DivTitleHeading>
                        <DivTitleHeading>
                            <TitleHeading>Join us</TitleHeading>
                        </DivTitleHeading>
                        <DivTitleHeading>
                            <TitleHeading>Press releases</TitleHeading>
                        </DivTitleHeading>
                        <DivTitleHeading>
                            <TitleHeading>FWD Speak Up</TitleHeading>
                        </DivTitleHeading>
                        <DivTitleHeading>
                            <TitleHeading>FWD Speak Up Hotline</TitleHeading>
                        </DivTitleHeading>
                    </FooterList>
                </FooterTop>
                <FooterBottom>
                    <FooterSocialIconItemOnLaptop>
                            <FooterSocialBtn>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="currentcolor">
                                    <path d="M3.98981 11.9358V6.0302H5.76473L6 3.9517H3.98981L3.9928 2.91132C3.9928 2.3692 4.0477 2.07885 4.87783 2.07885H5.98755V0H4.21224C2.07977 0 1.32931 1.00825 1.32931 2.70405V3.95186H0V6.03055H1.32931V11.8521C1.84718 11.9489 2.38257 12 2.93075 12C3.28487 12 3.63863 11.9786 3.98981 11.9358Z" fill="currentColor"></path>
                                </svg>
                            </FooterSocialBtn>
                            <FooterSocialBtn>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="currentcolor">
                                    <path d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z" fill="currentColor"></path>
                                </svg>
                            </FooterSocialBtn>
                            <FooterSocialBtn>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="currentcolor">
                                    <path d="M0 1.39394C0 0.989891 0.146401 0.656558 0.439189 0.393939C0.731978 0.131309 1.11262 0 1.58108 0C2.04119 0 2.41344 0.129285 2.69788 0.387879C2.99066 0.654545 3.13707 1.00201 3.13707 1.4303C3.13707 1.81818 2.99486 2.14141 2.71042 2.4C2.41764 2.66667 2.03282 2.8 1.55598 2.8H1.54344C1.08333 2.8 0.711072 2.66667 0.426641 2.4C0.142209 2.13333 0 1.79798 0 1.39394ZM0.163127 12V3.90303H2.94884V12H0.163127ZM4.49228 12H7.27799V7.47879C7.27799 7.19595 7.31146 6.97777 7.37838 6.82424C7.49549 6.54949 7.67326 6.31716 7.91168 6.12727C8.1501 5.93737 8.44916 5.84242 8.80888 5.84242C9.74582 5.84242 10.2143 6.45252 10.2143 7.67273V12H13V7.35758C13 6.16161 12.7072 5.25455 12.1216 4.63636C11.536 4.01818 10.7622 3.70909 9.80019 3.70909C8.72104 3.70909 7.88031 4.15758 7.27799 5.05455V5.07879H7.26544L7.27799 5.05455V3.90303H4.49228C4.509 4.16161 4.51737 4.96565 4.51737 6.31515C4.51737 7.66464 4.509 9.55959 4.49228 12Z" fill="currentColor"></path>
                                </svg>
                            </FooterSocialBtn>
                            <FooterSocialBtn>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 576 512" fill="currentcolor">
                                    <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"></path>  
                                </svg>
                            </FooterSocialBtn>
                    </FooterSocialIconItemOnLaptop>
                    <FooterBottomCopyright>
                        <FooterBottomTitle>
                            <TitleCopyright>Sitemap</TitleCopyright>
                            <TitleCopyright>Disclaimer</TitleCopyright>
                            <TitleCopyright>Privacy notice and online security</TitleCopyright>
                        </FooterBottomTitle>
                        <FooterBottomTitle>
                            <TitleCopyrightBase>2025 GDN. Copyright and All rights reserved.</TitleCopyrightBase>
                        </FooterBottomTitle>
                    </FooterBottomCopyright>
                </FooterBottom>
            </Container>
        </Wrapper>
    )
}

export default Footer;