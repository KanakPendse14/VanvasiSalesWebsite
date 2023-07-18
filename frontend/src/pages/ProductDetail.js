
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  return (
    <>
      <NavBar />
      <section className="body">
        <div className="subboy">
          <div className="container">
            <div className="productpicture">
              <img
                alt="ecommerce"
                className="w-full h-full object-cover object-center rounded"
                src="images/img5.jpg"
              />
            </div>
            <div className="Hello">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                {/* Rating stars and icons */}
                {/* ... (existing rating stars and icons code) ... */}
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Color buttons and Size dropdown */}
                {/* ... (existing color buttons and size dropdown code) ... */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="buynowbutton">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;

