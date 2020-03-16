export default function ClientDetails({ query }) {
  return <div>{query.key}</div>
}

ClientDetails.getInitialProps = async ctx => {
  return { query: ctx.query }
}
