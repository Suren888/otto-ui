export default interface ICategoryData {
    category_id: Number
    name:string,
    parentCategoryId:Number,
    subCategories?:Array<ICategoryData>
  }