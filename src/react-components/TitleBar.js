const TitleBar = () => {
  const refresh = () => {
    window.location.reload()
  }

  return (
    <div
      id={'title-bar'}
      className={'top-bar'}>
      <button
        type='button'
        className={'title'}
        onClick={refresh}
      >
      {'Marcus Mills'}
      </button>
    </div>

  )
}

export default TitleBar
