import React from 'react';
import { Card } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import CarouselInternalTeam from './CarouselInternalTeam.js'
import CarouselExternalTeam from './CarouselExternalTeam.js'

const imagePath = require.context('./../assets/TeamPage/Leads', true);

const TeamPage = () => (
    <div>
        {<PageHeader/>}
        <header class="home-header team-header">
            <div class="home-header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Our Team</span>
                </h1>
            </div>
        </header>
        <div className="section-header section-blue">
            <h2 class="heading-secondary">
                Leads
            </h2>
            <p>The Leads...</p>
        </div>
        <section className="section team__carousel">
            <Card
            style={{margin: "0 auto"}}
            image={imagePath(`./ANN_3566.jpg`)}
            header="Header"
            description="Description"
             />
        </section>    

        <div className="section-header section-green">
            <h2 class="heading-secondary">
                Internal Team
            </h2>
            <p>The Internal Division focuses on running the club and managing activities and events related to the school and students. Find out more here.</p>
        </div>
        <section className="section">
            {/* #TODO: Change the size of the card to fit the entire column */}
           {<CarouselInternalTeam/>}
        </section>

        <div className="section-header section-red">
            <h2 class="heading-secondary">
                External Team
            </h2>
            <p>The External Division focuses on all activities related to the local organizations, communities and businesses outside of the school. Find out more here.</p>
        </div>
        <section className="section">
            {<CarouselExternalTeam/>}
        </section>
        {<Footer />}
    </div>
);

export default TeamPage;