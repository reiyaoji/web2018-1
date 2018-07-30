function sayhello() {
  alert('Hello, ' + document.getElementById('who').innerHTML + '!');
}
 
function taro() {
  document.getElementById('who').innerHTML = '太郎';
}
 
function hanako() {
  document.getElementById('who').innerHTML = '花子';
}

setTimeout('alert("3 seconds have passed");', 3000);