// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#555c65] text-[#b0b4b8] py-8 px-4 font-sans">
            <div className="flex flex-col md:flex-row justify-around max-w-7xl mx-auto border-b border-[#777] pb-8">
                <div className="flex-1 min-w-[250px] mb-8 md:mb-0">
                    <img src="/src/images/logo.png" alt="NIT Logo" className="max-w-[100px] h-auto mb-4" />
                    <p className="text-sm">Dr B R Ambedkar National Institute of Technology</p>
                    <a href="/legal" className="text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
                </div>

                <div className="flex-1 min-w-[250px] mb-8 md:mb-0">
                    <h4 className="text-[#e6e6e6] text-lg font-bold mb-4">Theater Arts</h4>
                    <p className="text-sm leading-6">
                        Dr B R Ambedkar National Institute of Technology Jalandhar<br />
                        Grand Trunk Road, Barnala<br />
                        Room 10-219<br />
                        Amritsar Bypass Road, Jalandhar, Punjab 144011
                    </p>
                </div>

                <div className="flex-1 min-w-[250px] mb-8 md:mb-0">
                    <h4 className="text-[#e6e6e6] text-lg font-bold mb-4">Contact</h4>
                    <p className="text-sm">
                        <a href="mailto:kalakaar@nitj.ac.in" className="hover:text-white transition-colors duration-300">kalakaar@nitj.ac.in</a><br />
                        (617) 253-3210
                    </p>
                    <div className="mt-4">
                        <h4 className="text-[#e6e6e6] font-bold">Follow Us</h4>
                        {/* Replace with your social media icons */}
                        <div className="flex space-x-2 mt-2">
                            <a href="#" aria-label="facebook" className="w-8 h-8 bg-[#6a717b] rounded-full flex items-center justify-center text-white text-base">F</a>
                            <a href="#" aria-label="instagram" className="w-8 h-8 bg-[#6a717b] rounded-full flex items-center justify-center text-white text-base">I</a>
                            <a href="#" aria-label="youtube" className="w-8 h-8 bg-[#6a717b] rounded-full flex items-center justify-center text-white text-base">Y</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs pt-4">
                <p>Copyright © NIT Theater Arts. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;