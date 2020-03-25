import { Table, PageHeader, Modal, Button, Row } from "antd"
import { PlusCircleFilled } from "@ant-design/icons"
import Router from "next/router"
import dynamic from "next/dynamic"

import { modalEnum, AddClientModal } from "./AddClientModal"

const columns = [
  {
    title: "Name",
    render: function(text, record, index) {
      return <div>something</div>
    },
  },
  {
    title: "Phone",
    render: function(text, record, index) {
      return <div>something</div>
    },
  },
  {
    title: "Spent",
    render: function(text, record, index) {
      return <div>something</div>
    },
  },
  {
    title: "Billed",
    render: function(text, record, index) {
      return <div>something</div>
    },
  },
  {
    title: "Remaining",
    render: function(text, record, index) {
      return <div>something</div>
    },
  },
]

function getClients() {
  const clients = JSON.parse(window.localStorage.getItem("CLIENTS"))
  console.log(clients)
  return clients ? clients : {}
}

function Home() {
  const [dataSource, setDataSource] = React.useState([])
  const [modalState, setModalState] = React.useState(modalEnum.hidden)

  React.useEffect(() => {
    const clients = getClients()
    console.log({ clients })
    setDataSource(clients)
  }, [])

  React.useEffect(() => {}, [dataSource])

  function handleOk(clt) {
    setModalState(modalEnum.loading)
    const key = Date.now()
    const client = { key, ...clt }
    localStorage.setItem(key, JSON.stringify(client))
    dataSource[key] = {}
    localStorage.setItem("CLIENTS", JSON.stringify(dataSource))

    setDataSource({
      ...dataSource,
    })

    setModalState(modalEnum.hidden)
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
      {console.log()}
      <Table
        dataSource={Object.keys(dataSource).map(key => ({ key }))}
        columns={columns}
        onRow={record => ({
          onClick: e => Router.push(`/details/[key]`, `/details/${record.key}`),
        })}
      />

      <AddClientModal modalState={modalState} setModalState={setModalState} handleClose={handleClose} handleOk={handleOk} />
    </div>
  )
}

export default Home
