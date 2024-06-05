import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar2/Navbar/Navbar";
import Footer from './Components/Footer/Fotter';
import ModalExample from "./Components/Modal/Modal";
import './App.css';

import '../src/Components/HomePages/Home/Home.css'
import RemainPage from "./Components/DevelopmentsPages/RemainPage/RemainPage";
// Lazy-loaded components
const Home = lazy(() => import("./Components/HomePages/Home/Home"));
const About = lazy(() => import("./Components/AboutUspages/About/About"));
const ServicesMain = lazy(() => import("./Components/ServicesPages/ServicesMain/Services"));
const SEO = lazy(() => import("./Components/ServicesPages/SEO/SEO"));
const SEM = lazy(() => import("./Components/ServicesPages/SEM/SEM"));
const SocialMediaOpt = lazy(() => import("./Components/ServicesPages/Social-Media-optimization/SocialMediaOptimization"));
const ECommmerce = lazy(() => import("./Components/ServicesPages/E-Commerce/E-commerce"));
const Portfolio = lazy(() => import("./Components/PortFoliPages/Portfolio/Portfolio"));
const Career = lazy(() => import("./Components/AboutUspages/CareerPages/Career"));
const Development = lazy(() => import("./Components/DevelopmentsPages/Development"));
const DeatilP1 = lazy(() => import("./Components/PortFoliPages/DetailPage1/DeatilP1"));
const Contact = lazy(() => import("./Components/ContactUsPages/ContactPage/Contact"));
const BlogMain = lazy(() => import("./Components/BlogPages/Blog/Blog"));
const FirstBlog = lazy(() => import("./Components/BlogPages/SubBlog/FirstBlogpage/FirstBlog"));
const SecondBlog = lazy(() => import("./Components/BlogPages/SubBlog/SeceondBlog/SecondBlog"));
const ThirdBlog = lazy(() => import("./Components/BlogPages/SubBlog/ThirdBlog/ThirdBlog"));
const FourthBlog = lazy(() => import("./Components/BlogPages/SubBlog/FouthBlog/FourthBlog"));
const FifthBlog = lazy(() => import("./Components/BlogPages/SubBlog/FifthBlog/FifthBlog"));
const SocialMedia = lazy(() => import("./Components/ServicesPages/SocialMedia/SocialMedia"));
const Laraveldevlopment = lazy(() => import("./Components/DevelopmentsPages/Laraveldevelopment/Laraveldevlopment"));
const Clients = lazy(() => import("./Components/ContactUsPages/OurClientsPage/Clients/Clients"));
const Shopify = lazy(() => import("./Components/DevelopmentsPages/Shopify/Shopify"));
const WoCommerce = lazy(() => import("./Components/DevelopmentsPages/wo_Commerce/WO_Commerce"));
const CodeIgniter = lazy(() => import("./Components/DevelopmentsPages/Codeigniter/CodeIgniter"));
const Php = lazy(() => import("./Components/DevelopmentsPages/PhpDevelopment/Php"));
const HtmlPage = lazy(() => import("./Components/DevelopmentsPages/HtmlDevelopment/Htmlpage"));
const RubyRails = lazy(() => import("./Components/DevelopmentsPages/RubyRails/RubyRails"));
const UI = lazy(() => import("./Components/ServicesPages/UiDesign/UI"));
const Email = lazy(() => import("./Components/ServicesPages/Email-Marketing/Email"));
const SocialMediaMarketing = lazy(() => import("./Components/ServicesPages/SM-Marketing/SocalMedIaMarketing"));
const Android = lazy(() => import("./Components/ServicesPages/Android/Android"));
const IOS = lazy(() => import("./Components/ServicesPages/IosDeveloper/IOS"));
const SixthBlog = lazy(() => import("./Components/BlogPages/SubBlog/SixthBlog/SixthBlog"));
const OpenKart = lazy(() => import("./Components/DevelopmentsPages/OpenKart/OpenKart"));
const DeatilP2 = lazy(() => import("./Components/PortFoliPages/DetailPage2/DetailPage2"));
const DeatilP3 = lazy(() => import("./Components/PortFoliPages/DetailPage3/DetailPage3"));
const DeatilP4 = lazy(() => import("./Components/PortFoliPages/DetailPage4/DetailPage4"));
const DeatilP5 = lazy(() => import("./Components/PortFoliPages/DetailPage5/DetailPage5"));
const DeatilP6 = lazy(() => import("./Components/PortFoliPages/DetailPage6/DetailPage6"));
const DeatilP7 = lazy(() => import("./Components/PortFoliPages/DetailPage7/DetailPage7"));
const DeatilP8 = lazy(() => import("./Components/PortFoliPages/DetailPage8/DetailPage8"));
const DeatilP9 = lazy(() => import("./Components/PortFoliPages/DetailPage9/DetailPage9"));
const Ses=lazy(()=>import("./Components/ServicesPages/SES/Ses"))

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Razobyte</title>
        <meta name="description" content="This is my Inital page" />
        <meta name="keywords" content="Home page content" />
      </Helmet>
      <Navbar />
      <ModalExample/>
      <Container fluid className="noscroll">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/about-us" element={<About />} />
            <Route path="/services" element={<ServicesMain />} />
            <Route path="/services/digital-marketing/seo-search-engine-optimization" element={<SEO />} />
            <Route path="/services/digital-marketing/sem-seacrh-engine-marketing" element={<SEM />} />
            <Route path="services/digital-marketing/smo/social-media-optimization" element={<SocialMediaOpt />} />
            <Route path="/services/development/ecommerce-website-development" element={<ECommmerce />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about/career" element={<Career />} />
            <Route path="/services/development/website-dvelopment" element={<Development />} />
            <Route path="/detailP1/:id" element={<DeatilP1 />} />
            <Route path="/detailP2/:id" element={<DeatilP2 />} />
            <Route path="/detailP3/:id" element={<DeatilP3 />} />
            <Route path="/detailP4/:id" element={<DeatilP4 />} />
            <Route path="/detailP5/:id" element={<DeatilP5 />} />
            <Route path="/detailP6/:id" element={<DeatilP6 />} />
            <Route path="/detailP7/:id" element={<DeatilP7 />} />
            <Route path="/detailP8/:id" element={<DeatilP8 />} />
            <Route path="/detailP9/:id" element={<DeatilP9 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogmain" element={<BlogMain />} />
            <Route path="/firstBlog" element={<FirstBlog />} />
            <Route path="/secondBlog" element={<SecondBlog />} />
            <Route path="/thirdBlog" element={<ThirdBlog />} />
            <Route path="/fourthBlog" element={<FourthBlog />} />
            <Route path="/fifthBlog" element={<FifthBlog />} />
            <Route path="/services/" element={<SocialMedia />} />
            <Route path="/services/laravel" element={<Laraveldevlopment />} />
            <Route path="/about/our-clients" element={<Clients />} />
            <Route path="/services/ecommerce-solutions/shopify-development" element={<Shopify />} />
            <Route path="/services/ecommerce-solutions/wocommerce-development" element={<WoCommerce />} />
            <Route path="services/development/codeigniter-website-development" element={<CodeIgniter />} />
            <Route path="services/development/php-development" element={<Php />} />
            <Route path="services/development/html-css-website"  element={<HtmlPage />} />
            <Route path="services/rubyrails" element={<RubyRails />} />
            <Route path="/services/design/ui/ux-design" element={<UI />} />
            <Route path="/services/digital-marketing/email-marketing" element={<Email />} />
            <Route path="/services/digital-marketing/smm/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="services/mobile-application/android-applications-development" element={<Android />} />
            <Route path="/services/mobile-application/ios-applications-development" element={<IOS />} />
            <Route path="/sixthBlog" element={<SixthBlog />} />
            <Route path="/services/ecommerce-solutions/opencart-development" element={<OpenKart />} />
            <Route path="/ses" element={<Ses/>} />
            <Route path="services/remainpage" element={<RemainPage/>} />
          </Routes>
        </Suspense>
        <Footer />
      </Container>
    </>
  );
}
