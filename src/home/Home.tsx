import React, { useEffect } from "react";

import banner from "../assets/banner.png";

interface HomeButtonProps {
    link: string;
    children: string;
};

const HomeButton = (props: HomeButtonProps) => {
    return (
        <div className="bg-dark-primary w-40 h-10 mx-auto text-center rounded leading-10">
            <a
                className="font-semibold"
                href={props.link}
            >
                {props.children}
            </a>
        </div>
    );
};

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <>
            <div className="pt-16">
                <img className="my-0 mx-auto" src={banner} alt="Banner" width="800" height="240"/>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/5"></div>
                <div className="w-1/5">
                    <HomeButton link="/about">About Us</HomeButton>
                </div>
                <div className="w-1/5">
                    <HomeButton link="/membership">Membership</HomeButton>
                </div>
                <div className="w-1/5">
                    <HomeButton link="https://linktr.ee/codecoogs">LinkTree</HomeButton>
                </div>
                <div className="w-1/5"></div>
            </div>
        </>
    );
};

export default Home;