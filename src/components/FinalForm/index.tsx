import { Form, Field } from 'react-final-form'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async () => {
  await sleep(300);
  console.log('onSubmit!')
};

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
)

export default MyForm
