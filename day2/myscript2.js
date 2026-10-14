// function subscribe()
// {
//     let subscribeButton=document.getElementById("subscribe-button")
//     if(subscribeButton.innerText == "Subscribe")
//     subscribeButton.innerText="Subscribed"
//     else
//     subscribeButton.innerText="Subscribe"
// }

function subscribe()
{
    let subscribeButton=document.getElementById("subscribe-button")
    if(subscribeButton.innerText == "Subscribe")
    {
    subscribeButton.innerText="Subscribed"
    subscribeButton.style.backgroundColor="green"
    }
   
    else
    {
    subscribeButton.innerText="Subscribe"
     subscribeButton.style.backgroundColor="red"
    }
   
}