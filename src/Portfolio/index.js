import './styles.scss';
//components
import ItemPortfolio from './ItemPortfolio/index';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio_container">
                <div className="portfolio_container_title">
                    <h2>portfolio</h2>
                </div>
                <div className="portfolio_container_items_portfolio">
                    <ItemPortfolio />
                    <ItemPortfolio />
                    <ItemPortfolio />
                    <ItemPortfolio />
                    <ItemPortfolio />
                    <ItemPortfolio />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
