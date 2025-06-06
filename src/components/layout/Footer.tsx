import assets from "../../assets/assests";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-dark_blue text-white px-4 sm:px-8 lg:px-28 py-12 gap-4">
      <div className="flex flex-col">
       

        <div className="flex justify-center md:justify-start mb-8">
          <img src={assets.home.logo} alt="Honest Builders Logo" className="h-[50px] lg:h-[209px]" />
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <div className="mb-8 md:mb-0 self-center space-y-2 text-xs gap-4 sm:leading-snug sm:text-[20px] md:text-[24px]">
            <p>
              <span className="font-bold">Address:</span> 5601 Democracy Hall, Ste. 300 | Piano, TX 75024
            </p>
            <p>
              <span className="font-bold">Email:</span> honestbuilders@gmail.com
            </p>
            <p>
              <span className="font-bold">Tel:</span> (235) 816-325-6716
            </p>
          </div>
          <ul className="flex-row flex justify-between sm:grid gap-2.5 text-lg sm:text-xl p-2.5 font-semibold">
            <div>
              <li>
                <Link to="#" className="hover:underline">
                  PRIVACY
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  CAREERS
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  LEGAL
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="#" className="hover:underline">
                  REALTORS
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  SITE MAP
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-3 sm:mt-10">
          <p className="text-base sm:text-lg text-center sm:text-left">
            © 2025 Honest Builders, LLC. All rights reserved.
          </p>
          <div className="flex justify-center sm:justify-end gap-6">
            <a href="#" aria-label="Instagram">
              <img
                src={assets.home.instagram}
                className="w-8 h-8 sm:w-10 sm:h-10"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={assets.home.linkedIn}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="LinkedIn"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src={assets.home.facebook}
                className="w-8 h-8 sm:w-10 sm:h-10"
                alt="Facebook"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src={assets.home.youtube}
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
