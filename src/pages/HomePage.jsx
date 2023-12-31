import {
  Hero,
  Services,
  PopularProducts,
  CustomerReviews,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Footer,
  Marquee,
  Carousal,
  FAQPage,
  Testimonials,
} from "../sections";

import Nav from "../components/Nav/Nav.jsx";
import CustomerVideoReviews from "../sections/CustomerVideoReviews.jsx";
// import FAQPage from "./FAQPage";

const Homepage = () => {
  return (
    <main className="relative ">
      <Nav />
      <section className="wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding ">
        <Marquee />
      </section>
      <section className="padding ">
        <SuperQuality />
      </section>
      <section className="padding ">
        <Carousal />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className=" padding ">
        <CustomerReviews />
      </section>
      <section className=" padding ">
        <CustomerVideoReviews />
      </section>
      <section className="padding ">
        <Testimonials />
      </section>
      <section className="padding ">
        <FAQPage />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-gray-200 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
