const contentNode = document.getElementById('contents');
const component = React.createElement("h1", null, "Dhruvil Shah !"); // A simple JSX component

ReactDOM.render(component, contentNode); // Render the component inside the content Node

const contentNode2 = document.getElementById('contents2');
const component2 = React.createElement("img", {
  src: "pic.jpg"
});
ReactDOM.render(component2, contentNode2);
const contentNode3 = document.getElementById('contents3');
const component3 = React.createElement("p", null, "My name is Dhruvil Shah. My RED-ID is 823968360. I am a Computer Science Graduate student at San Diego State University. I am from India. ");
ReactDOM.render(component3, contentNode3);
const contentNode4 = document.getElementById('contents4');
const component4 = React.createElement("a", {
  href: "https://github.com/dhruvilshahh"
}, React.createElement("h2", null, " View my Github Repository"), " ");
ReactDOM.render(component4, contentNode4);