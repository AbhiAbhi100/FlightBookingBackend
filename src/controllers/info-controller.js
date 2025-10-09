import pkg from 'http-status-codes';
const {Statuscode} = pkg;
const InfoController = (req, res) => {
  return res.status(Statuscode.ok).json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

export default InfoController; 
