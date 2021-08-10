document.getElementById("delete").onclick = function(){
  const value = document.getElementById("product-id").value;
  axios.delete(`/api/products/${value}`).then(processResult);
}
  

function processResult() {
  window.alert("Product deleting...");
}
