import React, { Component } from 'react';
import TopNav from '../../components/TopNav'
import Bar from '../../components/Bar'
import TradeArea from '../../components/TradeArea'
import Introduce from '../../components/Introduce'
import Information from '../../components/Information'
import Download from '../../components/Download'
import FooterLinks from '../../components/FooterLinks'

class Index extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Bar />
                <TradeArea />
                <Introduce />
                <Information />
                <Download />
                <FooterLinks />
            </div>
        );
    }
}

export default Index;