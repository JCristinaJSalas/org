import './Miorg.css'

const MiOrg= ({setCambio}) =>{

  return <section className="orgSection">
    <h3>Mi organizacion</h3>
    <img src='/img/add.png' alt='add' onClick={setCambio}/>
  </section>
}
export default MiOrg