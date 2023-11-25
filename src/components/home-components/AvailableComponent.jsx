import cpuComponent from '../../assets/images/services-components/services-cpu.png'
import gpuComponent from '../../assets/images/services-components/services-gpu.png'
import mbComponent from '../../assets/images/services-components/services-mb.png'
import ramComponent from '../../assets/images/services-components/services-ram.png'
import ssdComponent from '../../assets/images/services-components/services-ssd.png'
import powerComponent from '../../assets/images/services-components/services-power.png'
import coolerComponent from '../../assets/images/services-components/services-cooler.png'
import caseComponent from '../../assets/images/services-components/services-case.png'

const AvailableComponent = () => {
  const images = [
    { id: 0, img: cpuComponent, text: 'Processori' },
    { id: 1, img: gpuComponent, text: 'Processore Grafico' },
    { id: 2, img: mbComponent, text: 'Scheda Madre' },
    { id: 3, img: ramComponent, text: 'RAM' },
    { id: 4, img: ssdComponent, text: 'Hard Disk' },
    { id: 5, img: powerComponent, text: 'Caricabatterie' },
    { id: 6, img: coolerComponent, text: 'Ventole' },
    { id: 7, img: caseComponent, text: 'Case' }
  ]

  return (
    <section>
      <div className="component-wrapper wrapper">
        <h2 className='component-title'>Componenti</h2>
        <div className="components-box">
          {
            images.map(item => (
              <div key={item.id} className="component-card">
                <img src={item.img} alt={`${item.text}-img`} className='component-img' />
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AvailableComponent;