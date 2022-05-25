export const ridesSchema = {
  name: "rides",
  title: "Rides",
  type: "document",
  fields: [
    {
      name: "orderById",
      title: "order by Id",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "priceMultiplier",
      title: "Price Multiplier",
      type: "number",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
};
