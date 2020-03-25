import { Modal, Form, Input, Button, Checkbox } from "antd"

export const modalEnum = {
  loading: "loading",
  show: "show",
  hidden: "hidden",
  // ...
}

const initState = {
  name: "Ahmed",
  phone: "01091949849",
  spent: "10000",
  billed: "1009",
}

export function AddClientModal({ modalState, setModalState, handleOk, handleClose }) {
  const [state, setState] = React.useState(initState)
  const isVisible = modalState === modalEnum.show || modalState === modalEnum.loading
  const isLoading = modalState === modalEnum.loading

  function handleChange({ target: { value, name } }) {
    setState({
      ...state,
      [name]: value,
    })
  }

  function handleOkPress() {
    handleOk(state)
  }

  return (
    <Modal
      onCancel={handleClose}
      title="Add Client"
      visible={isVisible}
      onOk={handleOkPress}
      confirmLoading={isLoading}
      okText="Add Client"
      cancelButtonProps={{
        hidden: true,
      }}
    >
      <Form initialValues={initState}>
        <Form.Item label="Name" name="name">
          <Input value={state.name} name="name" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input value={state.phone} name="phone" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Spent" name="spent">
          <Input value={state.spent} name="spent" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Billed" name="billed">
          <Input value={state.billed} name="billed" onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
