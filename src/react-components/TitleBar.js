const TitleBar = ({ baseRoute }) => {
  const refresh = () => {
    window.location.reload()
  }

  return (
    <div
      id={'title-bar'}
      className={'top-bar'}>
      <img src={baseRoute + '/images/favicon/favicon-64x64.png'}
          style={{
            width: '48px',
            maxWidth: '100%',
            height: 'auto'}}
          title="Logo" />
      <button
        type='button'
        className={'title'}
        onClick={refresh}
      >
      {'Marcus_Mills'}
      </button>
    </div>

  )
}

export default TitleBar
