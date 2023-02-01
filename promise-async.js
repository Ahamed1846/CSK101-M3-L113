const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout() -- use 1000 units for time parameter
  setTimeout(() => {
    cookies.forEach((cookie) => console.log(cookie['name']));
  }, 1000);
}
//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie) {
        cookies.push(newCookie);
        resolve();
      } else {
        reject(new Error('No cookie provided'));
      }
    }, 2000);
  });
}

// Progression 6: call function using `.then`
// calling the new async function
async function asyncFunction() {
  await createCookies(newCookie);
  getCookies();
}
asyncFunction();
