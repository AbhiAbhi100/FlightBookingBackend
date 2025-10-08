// controllers/info-controller.js
const InfoController = (req, res) => {
  return res.json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

export default InfoController; // <- export function directly
