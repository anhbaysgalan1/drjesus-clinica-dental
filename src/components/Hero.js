import styled from 'styled-components'
import Link from 'next/link'

import HeroImg from './HeroImg'

const FullWidthDiv = styled.div`
    width: 100%;    
`
const HeroContainer = styled.header`
    width: 1020px; 
    height: 60vh;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1020px) {
        width: 100%;
    }
`
const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    height: 100%;
    h1 {
        font-size: 7.5rem;
        margin: 0;
    }
    p {        
        margin-top: 0;
        text-align: center;
    }
    a {
        margin-top: 2rem;
    }
`

const Hero = () => {
    return (
        <FullWidthDiv>
            <HeroContainer>
                <HeroImg />
                <TitleContainer>
                    <div>
                        <h1>SONRÍE</h1>
                        <p>Una sonrisa vale más que mil imágenes.</p> 
                    </div>                  
                    <Link href="/citas">                    
                            <a className="primary-btn">Haz tu cita</a>
                    </Link>                                        
                </TitleContainer>
            </HeroContainer>
        </FullWidthDiv>
    )
}

export default Hero;
