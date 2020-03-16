import { Table, PageHeader, Modal, Button, Row } from "antd"
import { PlusCircleFilled } from "@ant-design/icons"
import Router from "next/router"

import { modalEnum, AddClientModal } from "./AddClientModal"

const dataSource = []

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Spent", dataIndex: "spent", key: "spent" },
  { title: "Billed", dataIndex: "billed", key: "billed" },
  { title: "Remaining", dataIndex: "remaining", key: "remaining" },
]

export default () => {
  const [dataSource, setDataSource] = React.useState(() => {
    if (typeof window === "undefined") return []
    return window.localStorage.getItem("CLIENTS") || []
  })

  const [modalState, setModalState] = React.useState(modalEnum.hidden)

  React.useEffect(() => {
    localStorage.setItem("CLIENTS", dataSource)
  }, [dataSource])

  function handleOk() {
    setModalState(modalEnum.loading)
  }

  function handleClose() {
    setModalState(modalEnum.hidden)
  }

  return (
    <div className="Home">
      <Row justify="space-between" align="middle">
        <PageHeader>
          <h2>Clients</h2>
        </PageHeader>
        <PlusCircleFilled style={{ margin: 20, fontSize: 25 }} onClick={() => setModalState(modalEnum.show)} />
      </Row>
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={record => ({
          onClick: () => Router.push(`/details/${record.key}`),
        })}
      />
      <AddClientModal modalState={modalState} setModalState={setModalState} handleClose={handleClose} handleOk={handleOk} />
    </div>
  )
}
