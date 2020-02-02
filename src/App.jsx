

const contentNode = document.getElementById('contents');
const component = (<h1>Dhruvil Shah !</h1>);   // A simple JSX component

ReactDOM.render(component, contentNode);   // Render the component inside the content Node

const contentNode2 = document.getElementById('contents2');
const component2 = (<img src="pic.jpg"></img>);

ReactDOM.render(component2, contentNode2);  

const contentNode3 = document.getElementById('contents3');
const component3 = (<p>My name is Dhruvil Shah. My RED-ID is 823968360. I am a Computer Science Graduate student at San Diego State University. I am from India. </p>);

ReactDOM.render(component3, contentNode3);   
const contentNode4 = document.getElementById('contents4');
const component4 = (<a href="https://github.com/dhruvilshahh"><h2> View my Github Repository</h2> </a>);
  
ReactDOM.render(component4, contentNode4);  