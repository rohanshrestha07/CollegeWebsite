import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
const { pathname } = useLocation();

// Automatically scrolls to top whenever pathname changes
useEffect(() => {
window.scrollTo(0, 0);
}, [pathname]);
}

export default ScrollToTop;