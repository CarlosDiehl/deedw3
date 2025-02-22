import React from 'react';

import carlos from '../images/carlos.png';
import ale from '../images/ale.jpeg';
import ronny from '../images/ronny.png';

import paydeceLogo from "../images/paydece-logo.png"
import qroomLogo from "../images/qroom-logo.jpeg"
import qroom360Logo from "../images/qroom360-logo.jpeg"
import gaiaLogo from "../images/gaiaimpact-logo.png"
import fri3ndsLogo from "../images/fri3nds-logo.jpeg"
import cbrLogo from "../images/cbr-logo.png"


function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 text-white">Nuestros Partners</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Empresas que nos respaldan con sus recursos.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-6">

            {/* Item */}
            
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <a href="https://www.paydece.io" target="_blank"><img src={paydeceLogo} alt="paydece-logo" /></a>
              </div>
            

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.qroom.biz/" target="_blank"><img src={qroomLogo} alt="paydece-logo" /></a>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.qroom.biz/qroom360" target="_blank"><img src={qroom360Logo} alt="paydece-logo" /></a>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://gaiaimpact.org" target="_blank"><img src={gaiaLogo} alt="paydece-logo" /></a>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.fri3nds.com/" target="_blank"><img src={fri3ndsLogo} alt="paydece-logo" /></a>
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.camara.cr/" target="_blank"><img src={cbrLogo} alt="paydece-logo" /></a>
            </div>

          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={carlos} width="96" height="96" alt="Testimonial Carlos" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Estamos frente a la misma oportunidad que a la que hubo en los inicios de internet, estamos en los comienzos de un nuevo cambio de paradigma y podemos aportar nuestro granito de arena en la nueva web, la web3. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Carlos Diehl Madariaga</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="https://www.paydece.io" target="_blank">@paydece</a>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={ale} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Siendo un Old Man y entendiendo la evolución de la tecnología, me siento un privilegiado de poder estar en esta etapa y experimentar  el cambio de Web2 a Web3 en primera fila, aplicando Blockchain en pagos en diferentes industrias, hoy Real Estate. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Ale Bustos</cite>
                <div className="text-gray-600">
                  <span>CEO</span> <a className="text-blue-600 hover:underline" href="https://www.qroom.biz/" target="_blank">@Qroom Llc</a>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={ronny} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Durante los últimos 20 años, la implementación de tecnologías como el Internet, la computación en la nube, y las aplicaciones móviles ha cambiado drásticamente la industria financiera, y el blockchain y las criptomonedas son el presente y el futuro del fintech en w3. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Dr Ronny castillo</cite>
                <div className="text-gray-600">
                  <span>CEO</span> <a className="text-blue-600 hover:underline" href="https://gaiaimpact.org" target="_blank">@Gaiaimpact.org</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;