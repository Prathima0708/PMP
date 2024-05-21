import React, { Suspense } from "react";

//Importing Section
// const TopBar = import("../CommonLayout/TopBar");
import TopBar from "../CommonLayout/TopBar";
import NavBar from "../CommonLayout/NavBar";
import Subscribe from "../CommonLayout/Subscribe";
import Footer from "../CommonLayout/Footer";
import StyleSwitcher from "../CommonLayout/StyleSwitcher";
import ScrolltoTop from "../../components/ScrolltoTop";
import { useEffect } from "react";
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
function handleScroll() {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Determine the scroll threshold for showing/hiding the button
  const scrollThreshold = 200; // Adjust this value as needed

  // Your scroll-related logic goes here
  if (scrollY > scrollThreshold) {
 // console.log('scroll')
  } else {
   //console.log('no scroll')
  }
  if (scrollY === 0) {
    // Scroll smoothly to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // You can add more logic based on the scroll position or behavior
}
const Layout = (props) => {
  useEffect(() => {
    const debouncedScrollHandler = debounce(handleScroll, 100); // Adjust the delay as needed
    window.addEventListener('scroll', debouncedScrollHandler);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []); // Empty dependency array to run the effect once on component mount
  useEffect(() => {
    // Apply smooth scrolling behavior to body and html elements
    document.body.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup function to remove the smooth scrolling behavior when unmounting
    return () => {
      document.body.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []); // Empty
  return (
    <React.Fragment>
      <Suspense>
        <div>
          <TopBar />
          <NavBar />
          <div className="main-content">
            <div className="page-content">{props.children}</div>
          </div>
          <Subscribe />
          <ScrolltoTop />
          <Footer />
          <StyleSwitcher />
        </div>
        <style>
          {
            `
            .main-content {
             
              scroll-behavior: smooth !important;
            }
            
            `
          }
        </style>
      </Suspense>
    </React.Fragment>
  );
};

export default Layout;
