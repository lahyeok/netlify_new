export default function List(){
  const fruits = [{ id: 1, name: 'apple', calories: 95 },
                  { id: 2, name: 'orange', calories: 45 },
                  { id: 3, name: 'banana', calories: 105 },
                  { id: 4, name: 'cocount', calories: 159 },
                  { id: 5, name: 'pineapple', calories: 37 }];
  
//오름차순(문자열)
fruits.sort((a,b)=>a.name.localeCompare(b.name))  //중괄호 생략함
//내림차순(문자열)
fruits.sort((a,b)=>b.name.localeCompare(a.name)) 

fruits.sort((a,b)=>a.calories - b.calories)
// fruits.sort((a,b)=>b.calories - a.calories)

const category = props.category;
const itemList = props.items;



  const listItem = fruits.map((fruit,index) => <li key={(index)}>{fruit.name} : {fruit.calories}</li>)
  

  return(
    <ul>
      {listItem}
    </ul>
  )
}