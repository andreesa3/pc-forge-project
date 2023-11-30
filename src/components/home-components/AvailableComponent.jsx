import { useNavigate } from 'react-router-dom'
/* Images */
import cpuComponent from '../../assets/images/services-components/services-cpu.png'
import gpuComponent from '../../assets/images/services-components/services-gpu.png'
import mbComponent from '../../assets/images/services-components/services-mb.png'
import ramComponent from '../../assets/images/services-components/services-ram.png'
import ssdComponent from '../../assets/images/services-components/services-ssd.png'
import powerComponent from '../../assets/images/services-components/services-power.png'
import coolerComponent from '../../assets/images/services-components/services-cooler.png'
import caseComponent from '../../assets/images/services-components/services-case.png'


const images = [
  { id: 0, img: cpuComponent, text: 'Processori', url: 'products/cpu' },
  { id: 1, img: gpuComponent, text: 'Schede Grafiche', url: 'products/gpu' },
  { id: 2, img: mbComponent, text: 'Scheda Madre', url: 'products/mb' },
  { id: 3, img: ramComponent, text: 'RAM', url: 'products/ram' },
  { id: 4, img: ssdComponent, text: 'Storage', url: 'products/ssd' },
  { id: 5, img: powerComponent, text: 'Alimentatori', url: 'products/power' },
  { id: 6, img: coolerComponent, text: 'Dissipatori', url: 'products/cooler' },
  { id: 7, img: caseComponent, text: 'Case', url: 'products/case' }
 
]


const AvailableComponent = () => {

  const navigate = useNavigate()

  const handleClick = (url) => {
    navigate(url)
  }

  return (
    <section>
      <div className="component-wrapper wrapper">
        <h2 className='component-title'>Componenti</h2>
        <div className="components-box">
          {
            images.map((item) => (
              <div
                key={item.id}
                className="component-card"
                onClick={() => handleClick(item.url)}
              >
                <img src={item.img} alt={`${item.text}`} className='component-img' />
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