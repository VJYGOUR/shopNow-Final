export const handleControllerError=(res,error,controllerName)=>{
    console.error(`Error in ${controllerName}`,error.message);
    return res.status(500).json({message:error.message})
}