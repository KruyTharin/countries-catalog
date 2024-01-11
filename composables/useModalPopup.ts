import type { ICountriesResponse } from "~/types";

export const useStateModalPopup = () => {
  return {
    isShow: useState<boolean>("isShow", () => false),
    data: useState<ICountriesResponse | null>("data", () => null),

    show({ data }: any) {
      this.isShow.value = true;
      this.data.value = data;
    },

    hide() {
      this.isShow.value = false;
    },
  };
};
