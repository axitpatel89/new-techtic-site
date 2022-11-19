import React, {useEffect, useRef, useState} from "react";
import { Layout } from 'antd';
import './layout.css';
import { Header } from "./header";
import { Footer } from "./footer";

export const SiteLayout = ({children}: any) => {
    const layoutref = useRef(null)
    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    const handleScroll = () => {
        const leftDiv = layoutref.current;
        if(leftDiv){
            if(0 - leftDiv.getBoundingClientRect().top > 0) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
    }
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);
    return(
        <Layout ref={layoutref}>
            <div className="upper-sec">
            <Header bottomShadow={shadow} showNav={show}/>
            <Layout.Content>{children}</Layout.Content>
            </div>
            <Footer />
        </Layout>
    )
};