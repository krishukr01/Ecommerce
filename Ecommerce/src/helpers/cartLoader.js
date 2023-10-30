import axios from "axios";

export const cartLoader = async () => {
  try {
    const res = await axios("/Cart");
    return res.data;
  } catch (error) {
    throw new Error("Error getting cart data");
  }
};

