/* Images */
import cpuComponent from '../../assets/images/services-components/services-cpu.png'
import gpuComponent from '../../assets/images/services-components/services-gpu.png'
import mbComponent from '../../assets/images/services-components/services-mb.png'
import ramComponent from '../../assets/images/services-components/services-ram.png'
import ssdComponent from '../../assets/images/services-components/services-ssd.png'
import powerComponent from '../../assets/images/services-components/services-power.png'
import coolerComponent from '../../assets/images/services-components/services-cooler.png'
import caseComponent from '../../assets/images/services-components/services-case.png'
import { Link } from 'react-router-dom'

const images = [
  { id: 0, img: cpuComponent, text: 'Processori', path: 'cpu' },
  { id: 1, img: gpuComponent, text: 'Processore Grafico', path: 'gpu' },
  { id: 2, img: mbComponent, text: 'Scheda Madre', path: 'mb' },
  { id: 3, img: ramComponent, text: 'RAM', path: 'ram' },
  { id: 4, img: ssdComponent, text: 'Hard Disk', path: 'ssd' },
  { id: 5, img: powerComponent, text: 'Caricabatterie', path: 'power' },
  { id: 6, img: coolerComponent, text: 'Ventole', path: 'cooler' },
  { id: 7, img: caseComponent, text: 'Case', path: 'case' }
]

const AvailableComponent = () => {

  return (
    <section>
      <div className="component-wrapper wrapper">
        <h2 className='component-title'>Componenti</h2>
        <div className="components-box">
          {
            images.map((item) => (
              <Link key={item.id} to={`/products/${item.path}`}>
                <div
                  className="component-card"
                >
                  <img src={item.img} alt={`${item.text}`} className='component-img' />
                  <p>{item.text}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AvailableComponent;