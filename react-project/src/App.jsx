import Card from "./componenets/Card";
const companies = [
  {
    companyName: "Google",
    work: "Software Development",
    role: "Software Engineer",
    salary: 2500000
  },
  {
    companyName: "Microsoft",
    work: "Cloud & Software",
    role: "SDE",
    salary: 2200000
  },
  {
    companyName: "Amazon",
    work: "E-commerce & Cloud",
    role: "Software Development Engineer",
    salary: 2000000
  },
  {
    companyName: "TCS",
    work: "IT Services",
    role: "Software Engineer",
    salary: 700000
  },
  {
    companyName: "Infosys",
    work: "IT Services",
    role: "Systems Engineer",
    salary: 600000
  }
];
function App(){
  return (
    <div className="parent">
      {companies.map(function(elem){
        return <Card name={elem.companyName} work={elem.work} role={elem.role} salary={elem.salary} />
      })}
    </div>
  )
}


export default App;
