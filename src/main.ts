const getButton: HTMLElement | null = document.getElementById('button');

async function getJson() {
  const res = await fetch('/file.json');
  const data = await res.json();
  
  console.log(data);
}


getButton?.addEventListener('click', getJson);

//create postButton