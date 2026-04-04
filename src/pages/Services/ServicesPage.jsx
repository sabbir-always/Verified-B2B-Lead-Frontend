import ServicesCard from '../../components/ui/Services/ServicesCard'
import WebLayout from '../../layout/WebLayout'
import './ServicesPage.css'

const ServicesPage = () => {
    return (
        <WebLayout title="Services">
            <div className="page_contents">
                <div className="container">
                    <div className="row">
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default ServicesPage