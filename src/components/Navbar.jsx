


function Navbar({data}) {
  
  return (
    <div className="navbar">
      <div className="navbar__info">
        <h1>UCer</h1>
       {!data.length && <p className="datalength">User not find:(</p>}
       {data.length && <p>User number is {data.length} </p>}
      </div>
    </div>
  )
}

export default Navbar