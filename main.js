function addNewList() {
  alert('hello world!');
}

function addListItem() {
  console.log('hello world');
  var list=document.getElementById("groceryList");
  var inputItem=document.getElementById("newListItem");
  var newItem=document.createElement("li");
  newItem.appendChild(document.createTextNode(inputItem.value));
  list.appendChild(newItem);
}

function deleteListitem(item) {
  item.parentNode.removeChild(item);
}
