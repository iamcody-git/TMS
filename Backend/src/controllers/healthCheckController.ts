import { APIResponse } from "../../utils/APIResponse";
import { asyncHnadler } from "../../utils/asyncHandler";

const healthcheck  = asyncHnadler(async(req:any, res:any)=>{
    return res
    .status(200)
    .json(new APIResponse(200, "OK", "Health check passed"))
})

export {healthcheck}