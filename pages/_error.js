const Error = ({ statusCode }) => <section>{statusCode ? 404 : 500}</section>

Error.getInitialProps = ({ res, err }) => {
  if (!res) {
    return { statusCode: err ? err.statusCode : null }
  }
  return { statusCode: res.statusCode }
}

Error.defaultProps = {
  statusCode: null,
}

export default Error
