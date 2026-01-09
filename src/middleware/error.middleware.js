const errorMiddleware = (err,req,res,next)=>{
   const statusCode= err.status || 500;
   const message = err.message || "Internal server error"

   res.status(statusCode).json({
    status:statusCode,
    message:message
   });
};

export default errorMiddleware;