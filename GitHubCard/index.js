/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/* Response from get request is below after definition of componentBuilder function */

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/* Response from get request is used to build a component using the componentBuilder function */

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function componentBuilder(data) {
  const individualCard = document.createElement('div');
  individualCard.classList.add('card');

  const profileImage = document.createElement('img');
  profileImage.setAttribute('src', `${data.avatar_url}`);

  const cardInformation = document.createElement('div');
  cardInformation.classList.add('card-info');

  const actualName = document.createElement('h3');
  actualName.classList.add("name");
  actualName.textContent = `${data.name}`;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = `${data.login}`;

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${data.location}`;

  const userProfile = document.createElement('p');
  userProfile.textContent = "Profile: ";
  const userProfileLink = document.createElement('a');
  userProfileLink.setAttribute('href', `${data.html_url}`);
  userProfileLink.textContent = `${data.html_url}`;
  userProfile.appendChild(userProfileLink);

  const userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${data.followers}`;
  const userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${data.following}`;
  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${data.bio}`;

  cardInformation.appendChild(actualName);
  cardInformation.appendChild(userName);
  cardInformation.appendChild(userLocation);
  cardInformation.appendChild(userProfile);
  cardInformation.appendChild(userFollowers);
  cardInformation.appendChild(userFollowing);
  cardInformation.appendChild(userBio);

  individualCard.appendChild(profileImage);
  individualCard.appendChild(cardInformation);
  
  return individualCard;
}

let cardsContainer = document.querySelector('div.cards');

axios.
  get("https://api.github.com/users/jayaramsivaramannair").
  then((response) => {
      const data = response.data;
      cardsContainer.appendChild(componentBuilder(data));
  }).
  catch((error) => console.log(error));


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['pc', 'collision', 'balajis', 'tetondan', 'dustinmyers'];

followersArray.forEach((follower) => {
  axios.
    get("https://api.github.com/users/" + follower).
    then((response) => {
      let data = response.data;
      cardsContainer.appendChild(componentBuilder(data));
    }).
    catch((error) => console.log(error));
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/*STRETCH GOAL 1: PROGRAMMATICALLY CREATING A LIST OF USERS AND THEN ADDING THEM TO THE DOM */







