import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "react-bootstrap";

function ViewResult(props){
    
    const {classes, info} = props;

    return (
        <div className={classes.main}>
            <div className={classes.headerPart}>
                <div className={classes.hotelName}>                
                    <Link to={{pathname:`/result/view`,query:{id:info.id, name:info.name}}}>
                        <h4 style={{fontSize: '1.3rem'}}>{info.name}</h4>
                    </Link>
                </div>
            </div>
            <div className={classes.contextPart}>
                <div className={classes.imageDiv}>
                    <img alt="Image" src={info.photoSource} className={classes.imgStyle}></img>
                </div>
                <div className={classes.descriptionDiv}>
                    
                        <BrowserView>
                        <p className={classes.descriptionText}>{info.longInfo.length > 450 ? info.longInfo.substring(0, 450) : info.longInfo}...</p>
                        </BrowserView>
                        <MobileView>
                        <p className={classes.descriptionText}>{info.longInfo.length > 150 ? info.longInfo.substring(0, 150) : info.longInfo}...</p>
                        </MobileView>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Button  style={{backgroundColor: '#3b8053', borderColor: 'transparent'}}>
                    <Link
                    style={{textDecoration: 'none', color: 'white'}}
                    to={{
                        pathname: `/result/view`,
                        query: {
                            id:info.id, name:info.name
                        },
                    }}
                    >
                Դիտել
                    </Link>
                </Button>
            </div>
        </div>
    );


}

export default withStyles(styles)(ViewResult);
