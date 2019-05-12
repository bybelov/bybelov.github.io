export class TransformService{
  static fbObjectToArray(fbData){

    // Object.keys(fbData).forEach(key => {
    return Object.keys(fbData).map(key => {
      // console.log('key ', key);
      const item = fbData[key]
      item.id = key
      // console.log('item ', item);
      
      return item
    })
    
  }
}