//#1 on DOM load, get first user
//#2 on button click, get next random user by userRequest(), pass JavaScript object to generateOutput(obj)
//Create the HTML and then call outputHTML(html, location) to output the HTML to the DOM

document.addEventListener("DOMContentLoaded", () =>
{
    //On page load, get first user
    console.log("Loaded");
    userRequest();
    //Event: Button click -> next random users
    
    //createNewUser() makes AJAX request, pass results to generate and finally output
    function createNewUser()
    {
        //Make AJAX request
        let obj = userRequest();
        console.log(obj);
    }
    //AJAX request for random user: https://randomuser.me/api/
    function userRequest()
    {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://randomuser.me/api", true);
        xhr.onload = function()
        {
            console.log(this.status);
            if (this.status == 200)
            {
                console.log(this.responseText);
                let res = JSON.parse(this.responseText);
                console.log(res.results[0].picture.large);
                console.log(res);
                generateOutput(res);
                //return res;
            }
        }
        xhr.send();
    }
    //Function to process JavaScript => HTML
    function generateOutput(obj)
    {
        let user = obj.results[0];
        console.log(user);
        //Generate user profile HTML
        //User image, first + last name, city + country, email
        //User backtick `` (next to tilde)
        let output = `<img src="${user.picture.large}" class="rounded-circle">
        <h1> ${user.name.first} ${user.name.last}</h1>
        <h3 class="font-weight-light></h3>`;
    }
    //Function to output HTML to DOM
    function outputHTML(html, location)
    {

    }
})