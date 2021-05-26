const data=[
    {
        name:"Abhishek Kumar",
        age:22,
        gender:"Male",
        job:"Blockchain Developer",
        img:'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name:"Devi Pad",
        age:21,
        gender:"Male",
        job:"Web Developer",
        img:'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name:"Shalini Singh",
        age:24,
        gender:"Female",
        job:"Hardware Developer",
        img:'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
        name:"Anjali Mishra",
        age:22,
        gender:"Female",
        job:"Android Developer",
        img:'https://randomuser.me/api/portraits/women/75.jpg'
    }
]

const profiles= profileIterator(data);

//Next Events

document.getElementById('btn').addEventListener('click',nextProfile)

function nextProfile(){
    console.log(1)
    const currentProfile = profiles.next().value;

    document.querySelector('.con-display').innerHTML=`
      <ul>
      <li>Name: ${currentProfile.name}</li>
      <li>Age: ${currentProfile.age}</li>
      <li>Gender: ${currentProfile.gender}</li>
      <li>Job: ${currentProfile.job}</li>
      </ul>
    `

    document.querySelector('.img-display').innerHTML=`
       <img src="${currentProfile.img}">
    `
}

//Profile Iterator

function profileIterator(profiles){
    let nextIndex=0;


    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}