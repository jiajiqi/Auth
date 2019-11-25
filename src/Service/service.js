import React from 'react'

var ServiceCss = require("../Service/service.css")

export default class ServicePage extends React.Component{

    render(){
        return(
            <div className={ServiceCss.all}>
                <div className={ServiceCss.title}></div>
                <div className={ServiceCss.first}></div>
                <div className={ServiceCss.second}></div>
            </div>
        )
    }
}