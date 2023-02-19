export type ProductModel = {
  id: string,
  name: string,
  price: number,
  image: string
}

const SAMPLE_PRODUCTS : ProductModel[]  = [

  {
    id: "1",
    name: "MacBook",
    price: 14000,
    image: "https://picsum.photos/id/180/2400/1600",
},
{
    id: "2",
    name: "Old Car",
    price: 24000,
    image: "https://picsum.photos/id/111/4400/2656",
},
{
    id: "3",
    name: "W Shoes",
    price: 1000,
    image: "https://picsum.photos/id/21/3008/2008",
},
{
    id: "4",
    name: "Prod-4",
    price: 14000,
    image: "https://picsum.photos/id/180/2400/1600",
},
{
    id: "5",
    name: "Prod-5",
    price: 24000,
    image: "https://picsum.photos/id/111/4400/2656",
},
{
    id: "6",
    name: "Prod-6",
    price: 1000,
    image: "https://picsum.photos/id/21/3008/2008",
},
{
    id: "7",
    name: "Prod-7",
    price: 14000,
    image: "https://picsum.photos/id/180/2400/1600",
},
{
    id: "8",
    name: "Prod-8",
    price: 24000,
    image: "https://picsum.photos/id/111/4400/2656",
},
];

export default SAMPLE_PRODUCTS;

// module.exports = {ProductModel, SAMPLE_PRODUCTS}
