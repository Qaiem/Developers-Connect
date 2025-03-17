const isEmpty = value => 
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  
module.exports = isEmpty;
// This function checks for multiple types of empty data, including empty strings, null, undefined, and empty objects. This function is useful because it allows us to check for all types of empty data with a single function. The function is then exported so that it can be used in other files.