var Slider = require('react-slick');
var SliderCss = require('slick-carousel');

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; //how to get these matching the other imports??

import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../FrameworkCarousel.module.scss';
import { IFrameworkCarouselWebPartProps } from '../IFrameworkCarouselWebPartProps';
import CarouselSettings from '../models/CarouselSettings'
import NewsArticleItem from '../models/NewsArticleItem';

export interface IFrameworkCarouselProps extends IFrameworkCarouselWebPartProps {
}

export default class FrameworkCarousel extends React.Component<IFrameworkCarouselProps, {}> {
  public render(): JSX.Element {
    var settings: CarouselSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500
    };

    return (
      <div className="container">
        <div className="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white row">
          <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
            <div className='framework-carousel-container'>
              <Slider {...settings}>
                {this.props.newsArticles.map(function (newsArticle) {
                  return (
                    <div className='carousel-item-container item'>
                      <figure className='news-title'>
                        <a href='#'>
                          <img src={newsArticle.imageSrc} />
                        </a>
                        <figcaption>
                          <h2><a href='#'>{newsArticle.title}</a></h2>
                          <p><b>{newsArticle.date}</b></p>
                          <p>{newsArticle.introduction}</p>
                        </figcaption>
                      </figure>
                    </div>
                  )
                }) }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
