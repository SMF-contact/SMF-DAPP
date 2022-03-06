import React from "react";
import "./style.css"
import Logo from "../../imgs/logo.png"
import CircleLogo from "../../imgs/circleLogo.png"
import TheButton from "../helper/button";

function Header() {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-wrp">
                            <a className="header-logo" href="#"><img src={Logo} alt="" /></a>
                            <ul>
                                <li><TheButton classes={""} href={"#"} content={"Dashboard"}/></li>
                                <li><TheButton classes={""} href={"#"} content={"SmartDex"}/></li>
                                <li><TheButton classes={""} href={"#"} content={"SmartStake"}/></li>
                                <li><TheButton classes={""} href={"#"} content={"AntiScamAI"}/></li> 
                                <li><TheButton classes={""} href={"#"} content={"Whales AI"}/></li>
                                <li><TheButton classes={""} href={"#"} content={"TradingBotAI"}/></li>
                            </ul>
                            <div className="connectWallet">
                                <TheButton classes={"cnctWlt"} href={"#"} content={<><img src={CircleLogo} alt="" /> Connect Wallet</>}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;