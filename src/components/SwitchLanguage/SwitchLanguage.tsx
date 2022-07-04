import React, { useState } from "react";
import { SingleValue } from "react-select";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

import { CustomSelect } from "./SwitchLanguage.styled";

type OptType = SingleValue<{
  value: string;
  label: JSX.Element;
}>;

const SwitchLanguage = () => {
  const location = useLocation();

  const options = [
    {
      value: "en",
      label: (
        <img
          alt={"UK's flag"}
          src={"https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"}
        />
      ),
    },
    {
      value: "fr",
      label: (
        <img
          alt={"France's flag"}
          src={"https://catamphetamine.gitlab.io/country-flag-icons/3x2/FR.svg"}
        />
      ),
    },
  ];
  const currentLang = location.pathname.split("/")[1];
  const [selectedLanguage, setSelectedLanguage] = useState<OptType>(
    options.find((lang) => lang?.value === currentLang) as OptType
  );

  const handleChange = (
    options: SingleValue<{
      value: string;
      label: JSX.Element;
    }>
  ) => {
    navigate(location.pathname.replace(/\/.*\//g, "/" + options?.value + "/"));
    setSelectedLanguage(options);
  };

  return (
    <CustomSelect
      tabSelectsValue
      defaultValue={selectedLanguage}
      value={selectedLanguage}
      options={options}
      onChange={handleChange}
    />
  );
};

export default SwitchLanguage;
