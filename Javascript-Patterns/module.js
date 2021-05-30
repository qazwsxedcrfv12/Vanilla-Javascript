//Module Pattern

const uiCtrl= (function(){
   let text="Module Javascript Pattern";

   const changeText = ()=>{
       const ele = document.querySelector('h1');
       ele.textContent= text;
   }

   return {
       callChangeText: function(){
           changeText();
       }
       
   }
})();

uiCtrl.callChangeText();


//Revealing Module Pattern

const ItemCtrl= (function(){
   let data=[];

   function add(item){
       data.push(item);
       console.log("Item added")
   }

   function get(id){
       return data.find(item =>{
           return item.id === id;
       })
   }

   return{
       add: add,
       get: get
   }
})();

ItemCtrl.add({name:"Abhishek", id:2})
console.log(ItemCtrl.get(2))
