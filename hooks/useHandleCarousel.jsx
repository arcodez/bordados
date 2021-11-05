import { useEffect, useState } from "react";

export const useHandleCarousel = () => {
  const [loader, setLoader] = useState(false);

  return loader, configureCarousel();
};
