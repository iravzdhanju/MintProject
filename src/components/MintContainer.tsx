import React from "react";
import "./MintContainer.css";

const MintContainer = () => {
  return (
    <div>
      <div className="containerMint my-5 w-1/2 ">
        <div className="containerInner  flex flex-col m-auto  ">
          <div className="headingContainer text-center">
            <h1 className="headingMint  font-bold text-5xl py-8   lg:py-5     md:py-8   sm:py-8">
              MINT NFT
            </h1>
          </div>

          <div className="MintImageWrapper flex justify-center justify-self-center h-4/5 my-7">
            <div className="MintImageContainer w-96 text-center h-80 lg:h-96  md:h-72 sm:h-72 font-normal ">
              Add Art Piece
            </div>
          </div>

          <div className="currencyContainerWrapper my-4">
            <label className="currencyLavel font-medium text-2xl ">
              Currency
            </label>

            <div className=" SelectBoxContainer relative inline-block w-full my-2">
              <div className="relative inline-flex self-center">
                <svg
                  className="text-white  absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="40px"
                  height="40px"
                  viewBox="0 0 38 22"
                  version="1.1"
                >
                  <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                  <g
                    id="ZahnhelferDE—Design"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ZahnhelferDE–Icon&amp;Asset-Download"
                      transform="translate(-539.000000, -199.000000)"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Icon-/-ArrowRight-Copy-2"
                        transform="translate(538.000000, 183.521208)"
                      >
                        <polygon
                          id="Path-Copy"
                          transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                          points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <select className=" SelectBox text-2xl font-bold rounded border-2  h-14 w-60 pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none">
                  <option>UST</option>
                  <option>LUNA</option>
                </select>
              </div>
              {/* <select
                className="SelectBox w-full h-10 pl-3 pr-6 text-base placeholder-white  rounded-lg appearance-none focus:shadow-outline"
                placeholder="Regular input"
              >
                <option className="OptionsSelect">UST</option>
                <option className="OptionsSelect">Luna</option>
              </select> */}
              {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none my-7">
                <svg
                  className="w-4 h-4 fill-current text-2xl"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div> */}
            </div>
          </div>

          <div className="QuantityContainer my-4">
            <label className="QuantityLevel font-medium text-2xl">
              Quantity
            </label>
            <div className=" QuantityInputWrapper flex justify-center  my-3">
              <div className="QualityInputContainer">
                <div className="Positive relative  rounded-full flex justify-center items-center text-center   ">
                  +
                </div>
                <div className="Value flex justify-center ">
                  <h3>5</h3>
                </div>
                <div className="Negative relative  rounded-full flex items-center justify-center  text-center  ">
                  -
                </div>
              </div>
            </div>
          </div>
          <div className="TotalContainer my-4">
            <label className="TotalLevel font-medium text-2xl">Total</label>
            <div className="TotalValue flex items-center justify-center  flex-col">
              <h3 className="my-7 text-4xl font-bold">$5</h3>
            </div>
          </div>

          <div className="buttonContainer font-medium">
            <button className="buttonMint font-medium">Mint Now</button>
            <p className="Instructions">
              Please Confirm Transactions in your Wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintContainer;
