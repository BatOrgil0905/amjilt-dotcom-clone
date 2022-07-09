import React from "react";
import "../App.css";
import { MenuLogo } from "./MenuLogo";
import { Phone } from "./BackgroundImages";
import { TextFirst } from "./RandomText";
import Menu from "./Menu";

const Header = () => {
    return(
        <header>
            <div className="main-image px-2 lg:px-14">
                <div className="flex items-center !justify-between">
                    <div>
                        <MenuLogo />
                    </div>
                    <div className="flex items-end justify-end">
                        <Menu />
                    </div>
                </div>

                <div className="flex items-center justify-center mt-16 gap-8 lg:gap-16">
                    <div>
                        <Phone />
                    </div>
                    <div className="flex flex-col">
                        <TextFirst />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;