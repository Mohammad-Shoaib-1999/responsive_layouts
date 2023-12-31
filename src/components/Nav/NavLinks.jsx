import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const renderDropdownIcon = (isActive) => (
    <span className="text-xl md:mt-1 md:ml-2 inline">
      {isActive ? <>&#x25B2;</> : <>&#x25BC;</>}
    </span>
  );

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                setHeading((prevHeading) =>
                  prevHeading !== link.name ? link.name : ""
                );
                setSubHeading("");
              }}
            >
              {link.name}
              {renderDropdownIcon(heading === link.name)}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block border-black border-2">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((sublinkGroup) => (
                      <div key={sublinkGroup.head}>
                        <h1 className="text-lg font-semibold">
                          {sublinkGroup.Head}
                        </h1>
                        {sublinkGroup.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600 my-2.5"
                            key={slink.name}
                          >
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {link.sublinks.map((slinks) => (
              <div key={slinks.name}>
                <div>
                  <h1
                    onClick={() =>
                      setSubHeading((prevSubHeading) =>
                        prevSubHeading !== slinks.Head ? slinks.Head : ""
                      )
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    {renderDropdownIcon(subHeading === slinks.Head)}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
