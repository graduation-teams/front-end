import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux'
import { Layout,Menu } from 'antd';

function Layouts({ childrenComponent = []}){

   const [components, setComponents] = useState([]);

    useEffect(()=>{
        if(childrenComponent.length > 0){
            setComponents(childrenComponent);
        }
    },[childrenComponent])

    return (
        <React.Fragment>
            <Layout style={typeof window === 'undefined' ? { display: 'none' } : {backgroundColor:'#ffffff'}}>
            
                {/* <HeaderComponent /> */}
                <Layout.Content>
                {
                    components && components.length>0? components.map(({element: Element}, index) => {
                        return(<Element key={index}/>)
                    }): null
                }
                </Layout.Content>
                {/* <FooterComponent /> */}
            </Layout>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
})

export default connect(mapStateToProps)(Layouts);