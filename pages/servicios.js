import styled from 'styled-components';
import { getServicesData } from '../src/utils/firebaseAdmin'

import MainLayout from '../src/components/MainLayout';
import ContactBigFooter from '../src/components/ContactBigFooter';
import ServiceCard from '../src/components/servicios/ServiceCard'
import GeneralSvg from '../src/components/servicios/GeneralSvg'
import BracketsSvg from '../src/components/servicios/BracketsSvg'
import EndoSvg from '../src/components/servicios/EndoSvg'
import ProtSvg from '../src/components/servicios/ProtSvg' 
import CirSvg from '../src/components/servicios/CirSvg'

const FullWidthDiv = styled.div`
    width: 100%;
`
const ServicesContainer = styled.main`
    width: 1020px;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 2rem;    
    @media (max-width: 1020px) {
        width: 100%;
    }
`
const RowDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
`
const LeftColumn = styled.div`
    flex: 1 0 320px;
    display: flex;
    justify-content: center;
`
const RightColumn = styled.div`
    flex: 1 0 320px;
    margin: 4rem 0;
    display: flex;
    justify-content: center;
`

const Services = ({ services }) => {
    return (
        <MainLayout title="Servicios">
            <FullWidthDiv>
                <ServicesContainer>
                    <h1>Servicios</h1>
                    <RowDiv>
                        <LeftColumn>
                            <ServiceCard 
                                {...services[0]}
                            > 
                                <GeneralSvg />
                            </ServiceCard>                      
                        </LeftColumn>
                        <RightColumn>
                            <ServiceCard 
                                {...services[1]}
                            >
                                <BracketsSvg />
                            </ServiceCard> 
                        </RightColumn>                        
                    </RowDiv>
                    <RowDiv>
                        <LeftColumn>
                            <ServiceCard 
                                {...services[2]}
                            >
                                <EndoSvg />
                            </ServiceCard> 
                        </LeftColumn>
                        <RightColumn>
                            <ServiceCard 
                                {...services[3]}
                            >
                                <ProtSvg />
                            </ServiceCard> 
                        </RightColumn>                        
                    </RowDiv>
                    <RowDiv>
                        <LeftColumn>
                            <ServiceCard 
                               {...services[4]}
                            >
                                <CirSvg />
                            </ServiceCard> 
                        </LeftColumn>                        
                    </RowDiv>
                </ServicesContainer>
            </FullWidthDiv>
            <ContactBigFooter />
        </MainLayout>
    )
}

export const getStaticProps = async () => {
    const props = {};
    const servicesData = await getServicesData();
    props.services = []
    servicesData.forEach(doc => props.services.push({...doc.data(), id: doc.id }));
    return { props };
}

export default Services;