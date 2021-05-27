import React, {Component} from 'react';
import axios from 'axios';
import ResultsMain from '../MainSearch/ResultsMain';
import ImgList from '../MainSearch/ImgList';
import styles from './TopicButton.module.css'
import black from '../../assets/TopicBlack.jpg'
import white from '../../assets/TopicWhite.jpg'
import red from '../../assets/TopicRed.jpg'
import green from '../../assets/TopicGreen.jpg'
import blue from '../../assets/TopicBleu.jpg'
import yellow from '../../assets/TopicYellow.jpg'
import bannans from '../../assets/TopicBan.jpg'
import newyork from '../../assets/TopicNY.jpg'
import car from '../../assets/TopicCar.jpg'
import smile from '../../assets/TopicSmile.jpg'
import reactPhoto from '../../assets/TopicReact.jpg'
import Photo from '../../assets/TopicPhoto.jpg'
import ComingSoon from "../ComingSoon/ComingSoon";


class TopicButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            items: [],
            imgs: [],
            loader: '',
            loader2: '',
            mediaType: 'images',

        };
    }

    handle_authorisation () {
        const clientId = process.env.REACT_APP_API_SSCLIENT;
        const clientSecret = process.env.REACT_APP_API_SSSECRET;

        if (!clientId || !clientSecret) {
            console.log('not authorised');
            return;
        }
        return 'Basic ' + window.btoa(clientId + ':' + clientSecret);
    }

    handle_searchTerms(e, zoekterm = false) {
        const API_URL = 'https://api.shutterstock.com/v2';
        const mediaType = this.state.mediaType;
        const query = (zoekterm !== false ? zoekterm : this.state.searchTerm);
        const authorisation = this.handle_authorisation();
        this.setState({loader: 'Aan het laden'})

        axios({
            method: 'get',
            url: API_URL + '/' + mediaType + '/search',
            params: {
                query
            },
            headers: {
                Authorization: authorisation
            }
        })
            .then((response) => {
                const items = response.data.data;
                if (items.length === 0)
                    this.setState({items: [], loader: 'Geen plaatjes gevonden op Shutterstock'});
                else
                    this.setState({items, loader: false});
            })
            .catch(err => {
                console.log("ERROR", err);
            })

        axios
            .get(
                `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${process.env.REACT_APP_API_KEY}`
            )
            .then(data => {
                if (data.data.results.length === 0)
                    this.setState({loader2: 'Geen plaatjes gevonden op UnSplash', imgs: []});
                else
                    this.setState({imgs: data.data.results, loader2: false});
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    }

    render() {
        return (
            <>
            <div className={styles["container"]}>
                <div className={styles["item"]} id={styles["box-a"]}>
                    <div className={styles["topic"]}>
                        <img className={styles["img-button"]} src={black} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'black')}></img>
                        <img className={styles["img-button"]} src={white} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'white')}></img>
                        <img className={styles["img-button"]} src={red}  alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'red')}></img>
                        <img className={styles["img-button"]} src={blue} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'blue')}></img>
                         <img className={styles["img-button"]} src={green} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'green')}></img>
                        <img className={styles["img-button"]} src={yellow} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'yellow')}></img>
                    </div>
                    <div className={styles["topic"]}>
                        <img className={styles["img-button"]} src={bannans} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'bannas')}></img>
                        <img className={styles["img-button"]} src={newyork} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'new york')}></img>
                        <img className={styles["img-button"]} src={car} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'car')}></img>
                        <img className={styles["img-button"]} src={smile} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'smile')}></img>
                        <img className={styles["img-button"]} src={reactPhoto} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'react')}></img>
                        <img className={styles["img-button"]} src={Photo} alt="Atisuto" onClick={() => this.handle_searchTerms(true, 'photography')}></img>
                    </div>
                </div>
                <div className={styles["item"]} id={styles["box-b"]}>
                    <h1>Unsplash</h1>
                    <h2>{this.state.loader2}</h2>
                    <ImgList data={this.state.imgs}/>
                </div>
                <div className={styles["item"]} id={styles["box-c"]}>
                    <h1>Shutterstock</h1>
                    <h2>{this.state.loader}</h2>
                    {this.state.items.map(item => <ResultsMain item={item} key={item.id}/>)}
                </div>
                <div className={styles["item"]} id={styles["box-d"]}>
                    <ComingSoon/>
                </div>
            </div>
            </>
        );
    }
}

export default TopicButton;