import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CartanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

export default function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard color="red" 
                            image={AlexaImage} 
                            description="Alexa created by amazon"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard color="blue" 
                            image={CartanaImage} 
                            description="Cortana is useless"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard color="yellow" 
                            image={SiriImage} 
                            description="Siri was made by Apple" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}