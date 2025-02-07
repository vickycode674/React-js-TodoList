import React from 'react'

const apiRequest = async (url="",optionsObj=null,errMsg = null) => {
 try{
    console.log("url==================",url,optionsObj);
    const response = await fetch(url,optionsObj);
    if(!response.ok)throw Error("Please reload the app")
 }
catch(err){
    errMsg = err.Message
}
finally {
    return errMsg;
}
}

export default apiRequest