import { Image } from "./imageType";

export const setImageVisibility = (
  isVisible: boolean,
  callback: (value: React.SetStateAction<Image>) => void,
  image: Image
) => {
  if (image.limit > image.numberOfTimesVisible && isVisible !== image.visible) {
    const increment = !isVisible ? 1 : 0;

    const newImage: Image = {
      numberOfTimesVisible: image.numberOfTimesVisible + increment,
      visible: isVisible,
      limit: image.limit,
    };
    callback(newImage);
  }
};
