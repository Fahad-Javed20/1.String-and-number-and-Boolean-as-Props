interface GreetingComponentProps {
    name:string
    age:number
    isAdult?:boolean  //Optional Props
}

// default Pops
const GreetingComponent = ({name="Ali Aslam",age = 72,isAdult = true}:GreetingComponentProps) => {
  return (
    <div>
        <p>Hy, My Name is {name}</p>
        <p>My age is {age}</p>
        {(age>=18)?
        <p>Yes this Person can Cast Vote</p>:<p>No this Person can't Cast Vote</p>}

{isAdult && <p>Adult</p>}

    </div>
  )
}

export default GreetingComponent

