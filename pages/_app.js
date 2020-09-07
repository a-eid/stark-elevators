import "antd/dist/antd.css"

const Layout = ({ children }) => <div className="root_class">{children}</div>

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
