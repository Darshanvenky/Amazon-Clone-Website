/*const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);

});

xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();



fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text();
  }).then((text) => {
    console.log(text);
  }); */





/*fetch('https://supersimplebackend.dev/greeting').then((response) => {
return response.text();
}).then((text) => {
  console.log(text);

}); */



/*async function greetingRequest() {

  const response = await fetch('https://supersimplebackend.dev/greeting');

  const text = await response.text();

  console.log(text);

}
greetingRequest(); */



/*
async function postGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'DarshanVenky'
    })
  });

  const name = await response.text();
  console.log(name);

}

postGreeting(); */


/*
async function getAmazon() {

  try {
    const response = await fetch('https://amazon.com');
    const resp = await response.text();
    console.log(resp);

  } catch (error) {
    console.log('CORS error. Your request was blocked by the backend.');
  }

}
getAmazon(); */






async function postGreeting() {
  try {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
      if (response.status >= 400) {
        throw response;

    const text = await response.text();
    console.log(text);
  }
 
  } catch (error) {
    if (error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log('Network error. Please try again later.');
    }

  }
 
}

postGreeting();


















