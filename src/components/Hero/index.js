import { Grid } from '@material-ui/core';
import React from 'react';

// CSS
import "./style.css";

function Hero(props) {
    return (
        <div className="col-12 hero-container">
            <div style={{ backgroundImage: `linear-gradient(180deg, rgba(33, 150, 243, 0.5) 0%, rgba(33, 150, 243, 0.15) 73.26%), url(${props.background})` }} className="hero-background col-12"></div>
            <div className="col-12 hero">
                <Grid container className="content-container">
                    <Grid item xs={12} sm={7} md={8} lg={8} className="left-side text-light">
                        <div className="title-container">
                            <div className="mb-3 logo">
                                <img src={props.logo} alt={props.appName} />
                            </div>
                            <div className="">
                                <div className="mb-2 deskripsi">
                                    <h5>
                                        {props.deskripsi}
                                    </h5>
                                </div>
                                <div className="mb-2 title">
                                    <h1>
                                        {props.title}
                                    </h1>
                                </div>
                            </div>
                            
                        </div>
                        
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} lg={4} className="right-side">
                        {props.children}
                    </Grid>
                </Grid>
            </div>
        </div>
        
    );
}

export default Hero;