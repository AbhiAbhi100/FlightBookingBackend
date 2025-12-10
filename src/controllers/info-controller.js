import pkg from 'http-status-codes';
const {StatusCodes} = pkg;
const InfoController = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

export default InfoController; 
