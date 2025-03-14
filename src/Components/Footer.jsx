import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#FFFFFF]'>

            <div className='text-center space-y-3 border-b border-[#09080F1A] pb-8'>
                <h2 className='text-[#09080F] text-3xl font-bold' >Gadget Heaven</h2>
                <p className='text-[#09080F99] text-base font-medium'>Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <footer className="footer sm:footer-horizontal  text-base-content p-10 md:justify-center md:gap-42">
                <nav className='text-[#09080F99] font-normal'>
                    <h6 className="text-[#09080F] text-lg font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className='text-[#09080F99] font-normal'>
                    <h6 className="text-[#09080F] text-lg font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='text-[#09080F99] font-normal'>
                    <h6 className="text-[#09080F] text-lg font-bold">Legal</h6>
                    <a className="link link-hover">Terms of service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;