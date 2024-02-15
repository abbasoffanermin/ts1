interface Customer {
    id: number;
    name: string;
    email: string;
    location: {
      city: string;
      country: string;
    };
  }
  interface Order{
    orderId:number,
    customerId:number,
    product:string,
    quantity:number,
    price:number
  }
const customers : Customer[]= [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    // more customers...
  ] ;
  
  const orders :Order[] = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    // more orders...
  ];
const emails :string[]=customers.map(({email})=>{
    return email
})
console.log(emails)
//------------------------------------------------------

const arr :{}=orders.filter((item)=>{
    let a:any=[]
    if(item.quantity*item.price>1000){
      a.push(item)  
    }

       return a
})
console.log(arr)
//------------------------------------------------------
const finder=customers.map((item)=>{
    let a :any=[]
    if(item.name==='Alice'){
      a.push(item)  
    }

  return a
})
console.log(finder)
//------------------------------------------------------
const finder2:any = orders.findIndex(({orderId})=>{
    return orderId==102
})

console.log(finder2)

//------------------------------------------------------
const finder3=customers.map((item)=>{
    let a=[]
    if(item.location.country==='USA'){
    
      a.push(item)  
    }

       return a
})
console.log(finder3)

//------------------------------------------------------
const finder4=orders.forEach((item)=>{
    customers.forEach((customer)=>{
        if(item.customerId==customer.id){
            console.log(`order ${item.orderId} by ${customer.name} : ${item.quantity } x ${item.product} for $${item.price} each.`)
        }
    })
       
})

//------------------------------------------------------
const finder5=customers.sort((a:any,b:any) =>{
    return a.name-b.name
  })
  console.log(finder5)

//------------------------------------------------------