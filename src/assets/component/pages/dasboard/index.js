import React from "react";
import "./style.css" 
import CircleLogo from "../../../imgs/circleLogo.png"
import ContentBlk from "../../helper/contentBlk"
import Backg from "../../../imgs/background.png"
import { useNavigate } from "react-router-dom";
import TheButton from "../../helper/button";


function Dashboard() {
    const navigate = useNavigate();
    return (
        <div className="dashboard" style={{background: "url("+Backg+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12"> 
                        <button type="button" className="goback" onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
                        </button>
                    </div>
                    <ContentBlk classes={"col-lg-6 mb-3"}>
                        <h4>Wallet</h4>
                        <ul className="dlist">
                            <li>
                                <span>Wallet ID -</span>
                                <span>0xAE973B22d9764476041043C7d6eFdF20a5E6093F</span>
                            </li>
                            <li>
                                <span>Balance: </span>
                                <span>1,562,621.00 SMF</span>
                            </li>
                            <li>
                                <span>SMF 24H PNL: </span>
                                <span style={{color:"#198754"}}>+$1,245.00 / +89.00%</span>
                            </li>
                            <li>
                                <span>Total Wallet Balance: </span>
                                <span>$19,892.91</span>
                            </li>
                            <li>
                                <span>Total 24H PNL: </span>
                                <span style={{color:"#198754"}}>+$756.70 / +3.95%</span>
                            </li> 
                        </ul>
                        <div className="btns">
                            <TheButton classes={""} href={"#"} content={"Explorer"}/>
                            <TheButton classes={""} href={"#"} content={"Buy"}/>
                        </div>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-6 mb-3"}>
                        <div className="smf-data"> 
                            <h5><img src={CircleLogo} alt="" /> SMF Data: $0 <small className="badge bg-success">1%</small></h5>
                            <ul className="dlist">
                                <li>
                                    <span>24H VOL:</span>
                                    <span>$11,958,452</span>
                                </li>
                                <li>
                                    <span>Market Cap: </span>
                                    <span>$97,054,126</span>
                                </li>
                                <li>
                                    <span>Circulating Supply:</span>
                                    <span>$97,054,126</span>
                                </li>
                                <li>
                                    <span>Total Supply:</span>
                                    <span>$97,054,126</span>
                                </li> 
                            </ul>
                        </div>
                    </ContentBlk>  
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>AntiScamAI</h4>
                        <p>Maximise your Investment by Scanning any crypto project before to Invest</p>
                    </ContentBlk>  
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>WhalesTrackerAI</h4>
                        <p>Stay updated, get AI Insight and Prediction. Copy Transactions to profit from the Pump !</p>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>TradingBotAI</h4>
                        <p>Set traget profit, get insurance ratio. Shill while your wealth growing.</p>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>SmartDex</h4>
                        <p>Swap tokens at SmartDex with AI managed and optimised slipage.</p>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>Liquidity</h4>
                        <p>Add liquidity to SmartDapp and Profit from every swap fees.</p>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-4 mb-3"}>
                        <h4>SmartStake</h4>
                        <p>Our Dual Reward system designed to let you benefit from Tax USDT reflection even with your SMF staked.</p>
                    </ContentBlk> 
                    <ContentBlk classes={"col-lg-12"}>
                        <div className="help_center"> 
                            <h4>Support Center</h4>
                            <ul>
                                <li></li> 
                            </ul>
                        </div>
                    </ContentBlk> 
                </div>
            </div> 
        </div>
    )
}

export default Dashboard;