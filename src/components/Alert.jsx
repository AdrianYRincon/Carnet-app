

export const Alert = ({ messageError, className='' }) => {

  return (
    <>
      <div className={`error ${className}`}>{ messageError }</div>
    </>
  )
}
