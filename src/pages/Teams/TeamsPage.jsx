import TeamsComponent from '../../components/ui/Teams/TeamsComponent'
import WebLayout from '../../layout/WebLayout'
import './TeamsPage.css'

const TeamsPage = () => {
    return (
        <WebLayout title="Our Teams">
            <div className="page_contents">
                <div className="container">
                    <div className="row">
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                        <TeamsComponent />
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default TeamsPage