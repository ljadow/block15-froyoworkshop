//take user input with prompt
const userInput = prompt('Input your favorite froyo flavors separated by commas', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee')

//create array of inputs
const inputString = (userInput.split(","));

function countFlavors(stringArray){
    const orders={};
    for(i=0;i<stringArray.length;i++){
        let flavor=stringArray[i];
        if(orders[flavor]){
            orders[flavor] +=1
        } else {
            orders[flavor]=1
        }
    }
    return orders
}
console.log(countFlavors(inputString))

/* output
- the flavors must become the keys
- the frequency must become the values 
*/


//Googled around and got help from here https://www.geeksforgeeks.org/count-frequency-of-an-array-item-in-javascript/