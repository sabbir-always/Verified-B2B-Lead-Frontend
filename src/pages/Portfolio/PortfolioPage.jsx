import PortfolioCard from '../../components/ui/Portfolio/PortfolioCard'
import WebLayout from '../../layout/WebLayout'
import './PortfolioPage.css'

const PortfolioPage = () => {
    return (
        <WebLayout title="Portfolio">
            <div className="page_contents">
                <div className="container">
                    <div className="row">
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default PortfolioPage