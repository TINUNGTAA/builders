import { useState, useEffect } from "react";
import TeamCard from "../layout/TeamCard";
import assets from "../../assets/assests";

const data = [
  {
    image2: assets.about.team1,
    name2: "David Luiz",
    role2: "Managering Director",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
    image3: assets.about.team2,
    name3: "Sam Kerr",
    role3: "Staff",
  },

  {
    image1: assets.about.team1,
    name1: "David Luiz",
    role1: "Managering Director",
    image2: assets.about.team2,
    name2: "Sam Kerr",
    role2: "Staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
    image3: assets.about.team3,
    name3: "Johhn Terry",
    role3: "Staff",
  },

  {
    image1: assets.about.team2,
    name1: "Sam Kerr",
    role1: "Staff",
    image2: assets.about.team3,
    name2: "John Terry",
    role2: "Staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
    image3: assets.about.team4,
    name3: "Asheley Cole",
    role3: "Staff",
  },

  {
    image1: assets.about.team3,
    name1: "John Terry",
    role1: "Staff",
    image2: assets.about.team4,
    name2: "Ashely Cole",
    role2: "Staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
    image3: assets.about.team5,
    name3: "Fernado T.",
    role3: "Staff",
  },

  {
    image1: assets.about.team4,
    name1: "Asheley Cole",
    role1: "Staff",
    image2: assets.about.team5,
    name2: "Fernado T.",
    role2: "Staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
    image3: assets.about.team6,
    name3: "Ngolo Kante",
    role3: "Staff",
  },

  {
    image1: assets.about.team5,
    name1: "Fernado T.",
    role1: "Staff",
    image2: assets.about.team6,
    name2: "Ngolo Kante",
    role2: "Staff",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.,",
  },
];

const TeamCardRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <TeamCard {...data[currentIndex]} />;
};

export default TeamCardRotator;
