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
  // remove li element (item) from ol element (item.parentNode)
  item.parentNode.removeChild(item);
}

function completeListItem(item) {
  if(item.checked) {
    item.parentNode.style.textDecoration="line-through";
  }
  else {
    item.parentNode.style.textDecoration="none";
  }
}
