// veriyi verdiğimiz url den çeken fonksiyon
function fetchUser() 
{
    showSpinner();
    fetch('https://randomuser.me/api/')
    .then((res) => {
      if(!res.ok)
      {
        throw new Error('Request Failed')
      }

      return res.json();
    })
    .then((data) => {
        setTimeout(() => {
            hideSpinner();
        },860)
        displayUser(data.results[0]);
    })
    .catch((error) => {
      hideSpinner();
      document.querySelector('#user').innerHTML =
      `<p class="text-xl text-center text-red-500 mb-5" > ${error} </p>` ;
    })
}



// burada kullanıcının nasıl görüneceğini ve verilerin nereden çekileceğini belirtiyoruz

function displayUser(user)
{   
    const userDisplay = document.querySelector('#user')


    // arka planın rengini cinsiyete göre ayarlıyoruz 
    console.log(user.gender);
    if ( user.gender === 'female')
    {
        document.body.style.backgroundColor='#7d1c2b';
    }
    else
    { 
        document.body.style.backgroundColor = 'steelblue';
    }
    // verilerin hangi özelliklerinin çekileceğini detaylı belirtiyoruz ${} 
    userDisplay.innerHTML = ` 
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age} </p>
      </div>
    </div>
  </div>
    
    `;
}

// spinner classını görünür hale getiriyoruz
function showSpinner()
{ 
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner()
{ 
    document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click',fetchUser);

fetchUser();