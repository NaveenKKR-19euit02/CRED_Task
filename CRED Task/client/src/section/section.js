
import React from "react";
import './section.css'
import engineOil from '../images/Engine-oil-Change.png'
import oilfilter from '../images/oil-Filter-Change.png'
import airfilter from '../images/Air-Filter-Clean.png'
import clutch from '../images/Clutch-Adjustment.png'
import carburettor from '../images/Carburettor-Cleaning.png'
import brake from '../images/Brake-Cleaning.png'
import chain from '../images/Chain-Sprocket-Tightening-and-checking.png'
import spark from '../images/spark-plug.png'
import wash from '../images/bike-wash.png'


export function Section() {
    return (
        <div className="container-fluid backGround " id="section">
            <div><p className="text-center  heading">BIKE SERVICE?</p></div> 
             <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div><p className="text-center  text-light inclusion">INCLUSIONS:</p></div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="row justify- d-flex content-center text-white">
                <div className="col-4 text-center">
                    <img src={engineOil} alt="Engine Oil Change" className="img-fluid  engineoil" />
                    <p className="para-text-land">Engine Change</p>
                </div>
                <div className="col-4 text-center">
                    <img src={oilfilter} alt="Oil Filter Change" className="img-fluid" />
                    <p className="para-text-land">Oil Filter Change</p>
                </div>
                <div className="col-4 text-center">
                    <img src={airfilter} alt="Air Filter Cleaning" className="img-fluid" />
                    <p className="para-text-land">Air Filter Cleaning</p>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
         
            <div className="row justify-content-center text-white">
                <div className="col-4 text-center">
                    <img src={clutch} alt="Clutch Adjustment" className="img-fluid clutch" />
                    <p className="para-text-land">Clutch adjustment</p>
                </div>
                <div className="col-4 text-center">
                    <img src={carburettor} alt="Carburettor Cleaning" className="img-fluid" />
                    <p className="para-text-land">Carburettor Cleaning</p>
                </div>
                <div className="col-4 text-center">
                    <img src={brake} alt="Brake Cleaning" className="img-fluid" />
                    <p className="para-text-land">Brake Cleaning</p>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="row justify-content-center text-white">
                <div className="col-4 text-center">
                    <img src={chain} alt="Chain Sprocket Adjustment" className="img-fluid" />
                    <p className="para-text-land">Chain sprocket adjustment</p>
                </div>
                <div className="col-4 text-center">
                    <img src={spark} alt="Spark Plug Cleaning" className="img-fluid" />
                    <p className="para-text-land">Spark Plug Cleaning</p>
                </div>
                <div className="col-4 text-center">
                    <img src={wash} alt="Bike Wash and Polish" className="img-fluid" />
                    <p className="para-text-land">Bike Wash and Polish</p>
                </div>
            </div>
          
        </div>
    );
}

