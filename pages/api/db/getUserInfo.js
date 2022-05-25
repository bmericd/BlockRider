import { client } from "../../../lib/sanity";

const getUserInfo = async (req, res) => {
  console.log("REQQQQ", req);
  try {
    const query = `
      *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `;

    const sanityResponse = await client.fetch(query);
    res.status(200).send({ message: "success", data: sanityResponse[0] });
  } catch (error) {
    res.status(500).send({ message: "error", data: sanityResponse });
  }
};

export default getUserInfo;
