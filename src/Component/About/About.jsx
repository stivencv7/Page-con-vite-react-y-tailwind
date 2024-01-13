import { Social } from "../Social/Social"

export const About = () => {
    return (
        <div>
            <div className="bg-[#eeeeee] p-[16px] rounded-[4px] w-[100%]">
                <h2>About</h2>
                <p>Etiam porta sem malesuada magna mollis
                    euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla
                    sed consectetur.
                </p>
            </div>
            <div className="mt-[24px]">
                <h6 className="text-[20px] pb-[7px]">Archives</h6>
                <ul>
                    <li><a className="text-[#90CAF9]">March 2020</a></li>
                    <li><a className="text-[#90CAF9]">February 2020</a></li>
                    <li><a className="text-[#90CAF9]">January 2020</a></li>
                    <li><a className="text-[#90CAF9]">November 1999</a></li>
                    <li><a className="text-[#90CAF9]">October 1999</a></li>
                    <li><a className="text-[#90CAF9]">September 1999</a></li>
                    <li><a className="text-[#90CAF9]">August 1999</a></li>
                    <li><a className="text-[#90CAF9]">July 1999</a></li>
                    <li><a className="text-[#90CAF9]">June 1999</a></li>
                    <li><a className="text-[#90CAF9]">May 1999</a></li>
                    <li><a className="text-[#90CAF9]">April 1999</a></li>
                </ul>
            </div>
            <Social></Social>
        </div>
    )
}
