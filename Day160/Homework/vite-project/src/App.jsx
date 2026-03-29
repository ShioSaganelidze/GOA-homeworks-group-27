import { useId } from 'react'
import './App.css'

function HW1() {
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />

      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="text" />
    </form>
  );
}

function FormField({ id, label, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

function HW2() {
  const id = useId();

  return (
    <form>
      <FormField
        id={`${id}-email`}
        label="Email"
        type="text"
      />
      <FormField
        id={`${id}-password`}
        label="Password"
        type="password"
      />
    </form>
  );
}

function App() {
  return (
    <>
      <HW1 />
      <HW2 />
    </>
  );
}

export default App;