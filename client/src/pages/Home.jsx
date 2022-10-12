import React from "react";
import "../style/home.css";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import NewRelease from "../components/NewRelease";
import MailList from "../components/MailList";
import Footer from "../components/Footer";


export default function Home() {


    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <h1 className="homeTitle">Featured Properties</h1>
          <Featured />
          <h1 className="homeTitle">New Released</h1>
          <NewRelease />    
   
          <MailList />
          <Footer />
        </div>
        
  
      </div>
    );
  }
  